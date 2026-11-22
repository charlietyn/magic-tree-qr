import test from "node:test";
import assert from "node:assert/strict";
import {createZip, crc32} from "../../src/features/export/zipWriter.js";

const encoder = new TextEncoder();
test("ZIP32 store writes a central directory and can reconstruct exact original bytes", () => {
  const entries = [
    {name:"qr-vector.svg", data:encoder.encode("<svg/>")},
    {name:"metadata.json", data:encoder.encode('{"payload":"🌳"}')},
    {name:"qr-standard.png", data:Uint8Array.from([0, 1, 0, 255])}
  ];
  const bytes = createZip(entries);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const eocd = bytes.length - 22;
  assert.equal(view.getUint32(eocd, true), 0x06054b50);
  assert.equal(view.getUint16(eocd + 10, true), entries.length);
  const centralStart = view.getUint32(eocd + 16, true);
  assert.equal(view.getUint32(centralStart, true), 0x02014b50);
  let cursor = 0;
  for (const item of entries) {
    assert.equal(view.getUint32(cursor, true), 0x04034b50);
    const filenameSize = view.getUint16(cursor + 26, true);
    const filename = new TextDecoder().decode(bytes.subarray(cursor + 30, cursor + 30 + filenameSize));
    assert.equal(filename, item.name);
    const payloadStart = cursor + 30 + filenameSize;
    const payload = bytes.subarray(payloadStart, payloadStart + item.data.length);
    assert.deepEqual(payload, item.data);
    assert.equal(view.getUint32(cursor + 14, true), crc32(item.data));
    cursor = payloadStart + item.data.length;
  }
  assert.equal(cursor, centralStart);
  assert.deepEqual(createZip(entries), bytes, "Deterministic archive bytes");
});
test("ZIP never permits unsafe paths or duplicate names", () => {
  const empty = new Uint8Array();
  assert.throws(() => createZip([]), RangeError);
  for (const bad of ["../x", "/a", "foo/bar", ".", "..", ""]) {
    assert.throws(() => createZip([{name:bad,data:empty}]), TypeError);
  }
  assert.throws(() => createZip([{name:"a",data:empty},{name:"a",data:empty}]), TypeError);
  assert.throws(() => createZip([{name:"test.txt",data:"not bytes"}]), TypeError);
});
