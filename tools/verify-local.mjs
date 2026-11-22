#!/usr/bin/env node
/* MTQ V2 local verification. No CI/CD, upload, deployment or destructive cleanup. */
import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { createHash } from "node:crypto";
import { createZip } from "../src/features/export/zipWriter.js";

const root = process.cwd();
const isWindows = process.platform === "win32";
const npm = isWindows ? "npm.cmd" : "npm";
const git = isWindows ? "git.exe" : "git";
function execute(command, args) {
  try {
    const r = spawnSync(command, args, {
      cwd: root, encoding: "utf8", maxBuffer: 32 * 1024 * 1024,
      timeout: 240000, windowsHide: true
    });
    return {command: [command,...args].join(" "), exitCode: r.status,
      error:r.error ? String(r.error) : null,
      output:String(r.stdout ?? "") + String(r.stderr ?? "")};
  } catch (e) {
    return {command: [command,...args].join(" "), exitCode: null, error:String(e), output:""};
  }
}
const rootInfo = execute(git, ["rev-parse", "--show-toplevel"]);
if (rootInfo.exitCode !== 0 || resolve(rootInfo.output.trim()) !== resolve(root)) {
  console.error("Ejecuta el verificador desde la raíz del repositorio Git.");
  process.exit(2);
}
const sha = execute(git, ["rev-parse", "HEAD"]).output.trim();
const branch = execute(git, ["branch", "--show-current"]).output.trim();
const runId = "MTQ_V2_" + new Date().toISOString().replace(/\D/g, "").slice(0, 14) +
  "_" + sha.slice(0, 8);
const dir = resolve(root, "tools", "reports", "mtq-v2", runId);
mkdirSync(dir, {recursive:true});
const results = {runId, branch, sha, startedAt:new Date().toISOString(),
  node:process.version,platform:process.platform,arch:process.arch,steps:[]};
const encoder = new TextEncoder();
const artifacts = [];
function addFile(name, value) {
  const data = typeof value === "string" ? encoder.encode(value) : value;
  writeFileSync(join(dir,name),data);
  artifacts.push({name,data});
}
function run(name, command, args) {
  console.log("Ejecutando:", name);
  const r=execute(command,args);
  results.steps.push({name,command:r.command,exitCode:r.exitCode,
    error:r.error,passed:r.exitCode===0});
  addFile(name+".log",r.command+"\n"+(r.error??"")+"\n"+r.output);
  console.log(r.exitCode===0?"OK: "+name:"FALLO: "+name);
  return r.exitCode===0;
}
if (process.argv.includes("--install")) {
  if (!run("01_npm_ci",npm,["ci"])) {
    results.blocked = "npm ci failed; tests and build skipped.";
  }
}
if (!results.blocked) {
  run("02_npm_test",npm,["test"]);
  run("03_npm_build",npm,["run","build"]);
}
addFile("git-status.txt",execute(git,["status","--short"]).output);
results.finishedAt=new Date().toISOString();
results.passed=!results.blocked && results.steps.length>=2 &&
  results.steps.every(x=>x.passed);
results.notTested=["WebGPU visual regression","Real browser screenshots",
  "Hardware device loss","Manual mobile accessibility","Real-world camera scanning"];
addFile("summary.json",JSON.stringify(results,null,2)+"\n");
addFile("SHA256SUMS.txt",artifacts.map(({name,data})=>
  createHash("sha256").update(data).digest("hex")+"  "+name).join("\n")+"\n");
const zip=createZip(artifacts);
const zipName=runId+".zip";
const zipPath=join(dir,zipName);
writeFileSync(zipPath,zip);
writeFileSync(zipPath+".sha256",createHash("sha256").update(zip).digest("hex")+"  "+zipName+"\n");
console.log("Rama:",branch,"SHA:",sha);
console.log("Estado:",results.passed?"PASSED":"FAILED / BLOCKED");
console.log("EVIDENCE_ZIP:",zipPath);
if(!results.passed)process.exitCode=1;
