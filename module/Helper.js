import child_process from "child_process";
import * as fsPromise from "node:fs/promises";
import fs from "fs";
import path from "path";

export function init(dir) {
  child_process.execSync("npm init -y", { cwd: dir.path });

  const packageJsonPath = joinPath(dir.path, "package.json");

  // For ESmodule
  addTypeModule(packageJsonPath);
}

export async function applyNpm(npmName, replServer, dir) {
  // tmpDirでnpm install開始
  child_process.execSync(`npm install ${npmName}`, { cwd: dir.path });

  // mainの値を読み取る
  const npmPackageJsonPath = joinPath(
    dir.path,
    "node_modules",
    npmName,
    "package.json"
  );
  const json = await loadFileAsJson(npmPackageJsonPath);

  //const npmMainPath = joinPath(nodeModulePath, json.main);
  //console.log(npmMainPath);
  // replServerのcontextにmoduleを適用
}

// private
function joinPath(...args) {
  return path.join(...args);
}

async function addTypeModule(packageJsonPath) {
  const json = await loadFileAsJson(packageJsonPath);
  json.type = "module";

  fs.writeFileSync(packageJsonPath, JSON.stringify(json, null, 2), {
    encoding: "utf-8",
  });
}

async function loadFileAsJson(path = "") {
  const data = await fsPromise.readFile(path, {
    encoding: "utf-8",
  });

  return JSON.parse(data);
}
