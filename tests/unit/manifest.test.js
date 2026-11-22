import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

test("PWA manifest does not reference missing icons", () => {
  const root = resolve(import.meta.dirname, "../..");
  const manifest = JSON.parse(readFileSync(resolve(root, "public/favicon/site.webmanifest"), "utf8"));
  assert.ok(manifest.icons?.length > 0);
  for (const icon of manifest.icons) {
    assert.ok(icon.src.startsWith("/favicon/"), "local icon path required");
    assert.ok(existsSync(resolve(root, "public", icon.src.slice(1))), "missing icon: " + icon.src);
  }
});
