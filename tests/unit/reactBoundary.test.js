/**
 * The legacy app embeds React 19.2.4; its 2D fallback must NOT use a second
 * React hooks dispatcher, or browsers will throw "Invalid hook call".
 * Remove this structural guard only after the bundled React is replaced.
 */
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const app = readFileSync(new URL("../../src/main.jsx", import.meta.url), "utf8");
const fallback = readFileSync(new URL("../../src/components/StandardQRMode.jsx", import.meta.url), "utf8");

test("fallback hooks use same React dispatcher as legacy parent", () => {
  assert.match(app, /reactHooks=\{m\}/);
  assert.match(fallback, /const \{useMemo, useState\} = reactHooks/);
  assert.doesNotMatch(fallback, /from ["']react["']/);
});

test("current bundle has an embedded runtime and should not mount a second root", () => {
  assert.match(app, /var m = u\(\)/);
  assert.match(app, /var v = g\(\)/);
  assert.match(app, /\(0, v\.createRoot\)\(Ve\)\.render/);
});
