import test from "node:test";
import assert from "node:assert/strict";
import { decodeBase64URL, encodeShareToken, decodeShareToken } from "../../src/core/qr/shareCodec.js";
test("share codec preserves exact Unicode, spaces and line breaks", () => {
  const payload = " https://example.com/a?x=á&z=🌳 \n";
  const token = encodeShareToken(payload, 3, -1);
  assert.deepEqual(decodeShareToken(token), {url: payload, season: 3, palette: -1});
  assert.deepEqual(decodeShareToken(encodeShareToken("HELLO", 0, 5)),
    {url: "HELLO", season: 0, palette: 5});
});
test("invalid, corrupted or overly long tokens never map to a default URL", () => {
  for (const raw of ["%", "", "abc/def", "a".repeat(32769), "A", "!!!"]) {
    assert.equal(decodeBase64URL(raw), null);
    assert.equal(decodeShareToken(raw), null);
  }
});
test("share codec rejects malformed or out-of-range document metadata", () => {
  assert.throws(() => encodeShareToken("", 1, 0), TypeError);
  assert.throws(() => encodeShareToken("ok", 4, 0), TypeError);
  assert.throws(() => encodeShareToken("ok", 1, 6), TypeError);
  assert.equal(decodeShareToken("Nzl0ZXN0"), null); // '79test'
});
