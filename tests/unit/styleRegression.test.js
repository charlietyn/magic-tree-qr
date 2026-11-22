import test from "node:test";
import assert from "node:assert/strict";
import { treeStyles } from "../../src/styles/treeStyles.js";

test("style extraction keeps original 52 named style groups", () => {
  assert.equal(Object.keys(treeStyles).length, 52);
  assert.equal(treeStyles.container.backgroundColor, "#f6f1e7");
  assert.equal(treeStyles.container.height, "100dvh");
  assert.equal(treeStyles.canvasWrapper.position, "absolute");
  assert.equal(treeStyles.creditsHintLink.textDecoration, "underline");
});
test("styles are plain serializable values with no graphics dependencies", () => {
  for (const [key, value] of Object.entries(treeStyles)) {
    assert.ok(value && typeof value === "object", key);
    for (const v of Object.values(value)) {
      assert.ok(["string","number","boolean"].includes(typeof v), key);
    }
  }
});
