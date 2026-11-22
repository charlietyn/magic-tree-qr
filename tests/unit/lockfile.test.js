import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";

test("package-lock resolves through the canonical npm registry and keeps lock integrity", () => {
  const pkg = JSON.parse(readFileSync(new URL("../../package.json", import.meta.url), "utf8"));
  const lock = JSON.parse(readFileSync(new URL("../../package-lock.json", import.meta.url), "utf8"));
  assert.equal(lock.lockfileVersion, 3);
  assert.deepEqual(lock.packages[""].dependencies, pkg.dependencies);
  assert.deepEqual(lock.packages[""].devDependencies, pkg.devDependencies);
  for (const [name, entry] of Object.entries(lock.packages)) {
    if (!entry.resolved) continue;
    assert.ok(entry.resolved.startsWith("https://registry.npmjs.org/"),
      "Non-canonical registry for " + name);
    assert.match(entry.integrity ?? "", /^sha(1|512)-/);
  }
});
