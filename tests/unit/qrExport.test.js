import test from "node:test";
import assert from "node:assert/strict";
import { createQRStandardSVG, createQRStandardPNGDataURL } from "../../src/core/qr/qrExport.js";
const matrix = Array.from({length: 21}, (_, y) => Array.from({length: 21}, (_, x) => x === y));
test("deterministic SVG has a four-module quiet zone", () => {
  const svg = createQRStandardSVG(matrix);
  assert.match(svg, /width="232" height="232"/);
  assert.match(svg, /<rect x="32" y="32" width="8" height="8"/);
  assert.equal((svg.match(/<rect x=/g) || []).length, 21);
  assert.equal(createQRStandardSVG(matrix), svg);
});
test("rejects malformed dimensions", () => {
  assert.throws(() => createQRStandardSVG([[true]]), TypeError);
  assert.throws(() => createQRStandardSVG(matrix, {quietZone: 1}), RangeError);
  assert.throws(() => createQRStandardSVG(matrix, {moduleSize: 0}), RangeError);
});
test("PNG export requires a browser canvas", () => {
  assert.throws(() => createQRStandardPNGDataURL(matrix), /browser canvas/);
});
