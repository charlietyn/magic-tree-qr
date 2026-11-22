/**
 * Small deterministic ZIP32 (STORE) writer for exporting user-owned QR files.
 * No compression libraries, filesystem access or servers required.
 * Windows, macOS and Linux archive readers support this format.
 */
const MAX_ITEMS = 64;
const MAX_BYTES = 50 * 1024 * 1024;

export function crc32(input) {
  let crc = 0xffffffff;
  for (const byte of input) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit++) {
      crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function u16(view, at, value) { view.setUint16(at, value, true); }
function u32(view, at, value) { view.setUint32(at, value >>> 0, true); }

/**
 * @param {Array<{name: string, data: Uint8Array}>} entries
 * @returns {Uint8Array} a well-formed, deterministic ZIP archive.
 */
export function createZip(entries) {
  if (!Array.isArray(entries) || entries.length === 0 || entries.length > MAX_ITEMS) {
    throw new RangeError("Invalid ZIP entry count");
  }
  const text = new TextEncoder();
  const seen = new Set();
  let localSize = 0, centralSize = 0, dataSize = 0;
  const records = entries.map(({name, data}) => {
    if (typeof name !== "string" || !/^[a-zA-Z0-9][a-zA-Z0-9._-]{0,100}$/.test(name) ||
        name === "." || name === ".." || seen.has(name) ||
        !(data instanceof Uint8Array)) {
      throw new TypeError("Unsafe or duplicate ZIP entry");
    }
    seen.add(name);
    const filename = text.encode(name);
    const bytes = new Uint8Array(data);
    dataSize += bytes.length;
    localSize += 30 + filename.length + bytes.length;
    centralSize += 46 + filename.length;
    if (dataSize > MAX_BYTES || localSize + centralSize + 22 > MAX_BYTES + 16384) {
      throw new RangeError("ZIP export size limit exceeded");
    }
    return { filename, bytes, crc: crc32(bytes), offset: 0 };
  });
  const archive = new Uint8Array(localSize + centralSize + 22);
  const view = new DataView(archive.buffer);
  let offset = 0;

  for (const entry of records) {
    entry.offset = offset;
    u32(view, offset, 0x04034b50);
    u16(view, offset + 4, 20);
    u16(view, offset + 6, 0x0800); // UTF-8 filename
    u16(view, offset + 8, 0);      // STORE; no compression
    u16(view, offset + 10, 0);
    u16(view, offset + 12, 0x21);  // DOS date: 1 Jan 1980
    u32(view, offset + 14, entry.crc);
    u32(view, offset + 18, entry.bytes.length);
    u32(view, offset + 22, entry.bytes.length);
    u16(view, offset + 26, entry.filename.length);
    u16(view, offset + 28, 0);
    offset += 30;
    archive.set(entry.filename, offset);
    offset += entry.filename.length;
    archive.set(entry.bytes, offset);
    offset += entry.bytes.length;
  }
  const centralOffset = offset;
  for (const entry of records) {
    u32(view, offset, 0x02014b50);
    u16(view, offset + 4, 20);
    u16(view, offset + 6, 20);
    u16(view, offset + 8, 0x0800);
    u16(view, offset + 10, 0);
    u16(view, offset + 12, 0);
    u16(view, offset + 14, 0x21);
    u32(view, offset + 16, entry.crc);
    u32(view, offset + 20, entry.bytes.length);
    u32(view, offset + 24, entry.bytes.length);
    u16(view, offset + 28, entry.filename.length);
    u16(view, offset + 30, 0);
    u16(view, offset + 32, 0);
    u16(view, offset + 34, 0);
    u16(view, offset + 36, 0);
    u32(view, offset + 38, 0);
    u32(view, offset + 42, entry.offset);
    offset += 46;
    archive.set(entry.filename, offset);
    offset += entry.filename.length;
  }
  const centralSizeActual = offset - centralOffset;
  u32(view, offset, 0x06054b50);
  u16(view, offset + 4, 0);
  u16(view, offset + 6, 0);
  u16(view, offset + 8, records.length);
  u16(view, offset + 10, records.length);
  u32(view, offset + 12, centralSizeActual);
  u32(view, offset + 16, centralOffset);
  u16(view, offset + 20, 0);
  return archive;
}

/** Browser-side conversion of a canvas PNG data URL without external packages. */
export function pngDataURLToBytes(url) {
  if (typeof url !== "string" || !url.startsWith("data:image/png;base64,")) {
    throw new TypeError("Expected a PNG data URL");
  }
  const decoded = atob(url.slice("data:image/png;base64,".length));
  if (decoded.length > MAX_BYTES) throw new RangeError("PNG size exceeds ZIP limit");
  return Uint8Array.from(decoded, character => character.charCodeAt(0));
}
