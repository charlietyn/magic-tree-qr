/**
 * URL-safe, backwards-compatible sharing codec for Magic Tree QR.
 * Layout: one season digit (0-3), one palette digit (0-6), then the exact QR payload.
 * Encoding is NOT encryption: shared URLs expose QR data to recipients and their systems.
 */
export function encodeBase64URL(input) {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

export function decodeBase64URL(token) {
  if (typeof token !== "string" || token.length === 0 || token.length > 32768 ||
      !/^[A-Za-z0-9_-]+$/.test(token) || token.length % 4 === 1) return null;
  try {
    const raw = atob(token.replace(/-/g, "+").replace(/_/g, "/") +
      "=".repeat((4 - token.length % 4) % 4));
    const bytes = Uint8Array.from(raw, char => char.charCodeAt(0));
    return new TextDecoder("utf-8", {fatal: true}).decode(bytes);
  } catch {
    return null;
  }
}

export function encodeShareToken(payload, season, palette) {
  if (typeof payload !== "string" || payload.trim().length === 0 ||
      !Number.isInteger(season) || season < 0 || season > 3 ||
      !Number.isInteger(palette) || palette < -1 || palette > 5) {
    throw new TypeError("Invalid QR share document.");
  }
  return encodeBase64URL(String(season) + String(palette + 1) + payload);
}

export function decodeShareToken(token) {
  const raw = decodeBase64URL(token);
  if (!raw || raw.length < 3 || !/^[0-3][0-6]/.test(raw) || !raw.slice(2).trim()) return null;
  return { url: raw.slice(2), season: Number(raw[0]), palette: Number(raw[1]) - 1 };
}
