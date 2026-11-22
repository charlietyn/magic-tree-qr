import test from "node:test";
import assert from "node:assert/strict";
import { createQRService, QR_ERRORS } from "../../src/core/qr/qrService.js";

const encoder = (payload, { errorCorrectionLevel }) => {
  assert.equal(errorCorrectionLevel, "M");
  if (payload === "throw capacity") throw new Error("The amount of data is too big");
  if (payload === "throw generic") throw new Error("Unexpected");
  const size = payload.startsWith("large:") ? 45 : 21;
  return {modules: {size, get(col, row) {return col === row ? 1 : 0;}}};
};
const qr = createQRService(encoder);
test("preserves exact Unicode, whitespace and line breaks", () => {
  const payload = " Hola 🌳\nhttps://example.com/a?x=1&y=2 ";
  const result = qr.generate(payload);
  assert.equal(result.success, true);
  assert.equal(result.payload, payload);
  assert.equal(result.size, 21);
  assert.equal(result.matrix[0][0], true);
  assert.equal(result.matrix[0][1], false);
});
test("rejects blank and non-text inputs without fallback", () => {
  for (const value of ["", "   ", null, 42]) {
    const result = qr.generate(value);
    assert.equal(result.code, QR_ERRORS.EMPTY);
    assert.equal(result.matrix, null);
    assert.equal(result.payload, value);
  }
});
test("bounds the matrix for the current artistic renderer", () => {
  assert.equal(qr.generate("large:a").code, QR_ERRORS.CAPACITY);
});
test("classifies errors and does not replace the requested content", () => {
  assert.equal(qr.generate("throw capacity").code, QR_ERRORS.CAPACITY);
  assert.equal(qr.generate("throw generic").code, QR_ERRORS.ENCODING);
  assert.equal(qr.validate("throw generic").valid, false);
});
test("rejects malformed encoders", () => {
  assert.throws(() => createQRService(null), TypeError);
  assert.equal(createQRService(() => ({modules: {size: 20, get() {return 1;}}}))
    .generate("abc").code, QR_ERRORS.ENCODING);
});
