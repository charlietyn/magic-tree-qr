/**
 * MTQ-1005: independent QR encoding/decoding checks.
 * Uses the original QR encoder and the separate jsQR decoder.
 * A deterministic RGBA raster matches the PNG export pixel geometry
 * (4-module quiet zone, square nearest-neighbour modules).
 */
import test from "node:test";
import assert from "node:assert/strict";
import jsQR from "jsqr";
import originalEncoder from "../../src/core/qr/vendor/qrEncoder.js";
import { createQRService, QR_ERRORS } from "../../src/core/qr/qrService.js";

const treeService = createQRService(originalEncoder);
const standardService = createQRService(originalEncoder, {maxMatrixSize: 177});

function rasterize(matrix, scale = 8, quietZone = 4) {
  const modules = matrix.length + quietZone * 2;
  const width = modules * scale;
  const data = new Uint8ClampedArray(width * width * 4);
  for (let y = 0; y < width; y++) {
    const row = Math.floor(y / scale) - quietZone;
    for (let x = 0; x < width; x++) {
      const column = Math.floor(x / scale) - quietZone;
      const dark = row >= 0 && row < matrix.length &&
        column >= 0 && column < matrix.length && matrix[row][column];
      const value = dark ? 0 : 255;
      const pixel = (y * width + x) * 4;
      data[pixel] = value;
      data[pixel + 1] = value;
      data[pixel + 2] = value;
      data[pixel + 3] = 255;
    }
  }
  return {data, width};
}

const cases = [
  ["URL with query and fragment", "https://example.com/path?q=hola%20mundo#frag", treeService],
  ["Unicode accent and emojis", "¡Hola, España! 🌳🌸😊", treeService],
  ["Whitespace and newlines", " A\nB\t C ", treeService],
  ["Non-Latin scripts", "日本語 العربية кириллица", treeService],
  ["Near artistic renderer capacity", "a".repeat(85), treeService],
  ["Full standard renderer", "A".repeat(500), standardService],
];

for (const [name, payload, service] of cases) {
  test("independent jsQR round-trip: " + name, () => {
    const encoded = service.generate(payload);
    assert.equal(encoded.success, true, encoded.error);
    const image = rasterize(encoded.matrix);
    const decoded = jsQR(image.data, image.width, image.width, {
      inversionAttempts: "attemptBoth"
    });
    assert.ok(decoded, "A separate decoder must read the QR");
    assert.equal(decoded.data, payload, "No trimming, replacement or normalization");
  });
}
test("content rejected by the artistic scene is never silently encoded elsewhere", () => {
  const payload = "🌳".repeat(300);
  const result = treeService.generate(payload);
  assert.equal(result.success, false);
  assert.equal(result.code, QR_ERRORS.CAPACITY);
  assert.equal(result.payload, payload);
  assert.equal(result.matrix, null);
});
