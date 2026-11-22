import test from "node:test";
import assert from "node:assert/strict";
import { readInitialQRState } from "../../src/core/qr/initialState.js";
import { encodeShareToken, encodeBase64URL } from "../../src/core/qr/shareCodec.js";

const defaultPayload = "https://default.example";
const restore = state => readInitialQRState({
  pathname: "/", search: "", defaultPayload, readSession: () => JSON.stringify(state)
});
test("default and session documents preserve payload bytes", () => {
  assert.equal(restore({}).url, defaultPayload);
  assert.equal(restore({url:" abc \n",season:2,palette:3}).url, " abc \n");
});
test("shared paths and query payloads preserve content and metadata", () => {
  const token = encodeShareToken(" Hola 🌳 ", 2, 4);
  const fromPath = readInitialQRState({pathname:"/s/"+token,defaultPayload});
  const fromQuery = readInitialQRState({search:"?q="+token,defaultPayload});
  assert.deepEqual([fromPath.url,fromPath.season,fromPath.palette,fromPath.sharedMode],
    [" Hola 🌳 ",2,4,true]);
  assert.equal(fromQuery.url," Hola 🌳 ");
  assert.equal(fromQuery.sharedMode,false);
});
test("an invalid explicit shared token never falls through to the default", () => {
  for (const options of [{pathname:"/s/BAD!"},{search:"?q=bad"},{search:"?u=bad"}]) {
    const state=readInitialQRState({...options,defaultPayload,readSession:()=>null});
    assert.equal(state.url,"");
    assert.match(state.error,/inválido/);
  }
});
test("legacy u token remains compatible and storage errors are caught", () => {
  const token=encodeBase64URL("  ok 🌳  ");
  const result=readInitialQRState({search:"?u="+token+"&s=3&c=5"});
  assert.equal(result.url,"  ok 🌳  ");
  assert.equal(result.season,3);
  assert.equal(result.palette,5);
  assert.equal(readInitialQRState({defaultPayload,readSession:()=>{throw new Error("blocked")}}).url,defaultPayload);
});
