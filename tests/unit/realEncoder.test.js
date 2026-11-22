import test from "node:test";
import assert from "node:assert/strict";
import originalQrEncoder from "../../src/core/qr/vendor/qrEncoder.js";
import { createQRService, QR_ERRORS } from "../../src/core/qr/qrService.js";
const service = createQRService(originalQrEncoder);
function fingerprint(matrix) {
  let hash = 2166136261 >>> 0;
  let black = 0;
  for (const row of matrix) for (const cell of row) {
    if (cell) black++;
    hash = Math.imul(hash ^ (cell ? 49 : 48), 16777619) >>> 0;
  }
  return { black, hash: hash.toString(16).padStart(8, "0") };
}
const cases = [
  ["hello world", 21, 232, "4b9aef19"],
  ["https://example.com", 25, 324, "feb53389"],
  ["Hola🌳", 21, 226, "afdcff83"],
  [" A \nB ", 21, 230, "e690cead"]
];
for (const [payload, size, black, hash] of cases) {
  test("QR encoder parity: " + JSON.stringify(payload), () => {
    const output = service.generate(payload);
    assert.equal(output.success, true);
    assert.equal(output.payload, payload);
    assert.equal(output.size, size);
    assert.deepEqual(fingerprint(output.matrix), {black, hash});
  });
}
test("oversize payload cannot silently become the default URL", () => {
  const payload = "X".repeat(1000);
  const output = service.generate(payload);
  assert.equal(output.success, false);
  assert.equal(output.code, QR_ERRORS.CAPACITY);
  assert.equal(output.payload, payload);
  assert.equal(output.matrix, null);
});

test("standard QR mode can encode data too large for the 3D renderer", () => {
  const payload = "A".repeat(500);
  const artistic = service.generate(payload);
  const standard = createQRService(originalQrEncoder, {maxMatrixSize: 177}).generate(payload);
  assert.equal(artistic.code, QR_ERRORS.CAPACITY);
  assert.equal(standard.success, true);
  assert.equal(standard.payload, payload);
  assert.equal(standard.size, 73);
});
