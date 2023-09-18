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
  child_process.execSync(`npm install ${npmName}`, { cwd: dir.path });

  const npmPath = joinPath(dir.path, "node_modules", npmName);

  // mainのpathを取得
  const npmPackageJsonPath = joinPath(npmPath, "package.json");
  const packageJson = await loadFileAsJson(npmPackageJsonPath);
  const npmMainPath = joinPath(npmPath, packageJson.main);

  // replServerのcontextにmoduleを適用
  const importedModule = await import(npmMainPath);
  replServer.context[npmName] = importedModule.default ?? importedModule;
  return;
}

// private
function joinPath(...args) {
  return path.join(...args);
}

async function addTypeModule(packageJsonPath) {
  const packageJson = await loadFileAsJson(packageJsonPath);
  packageJson.type = "module";

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), {
    encoding: "utf-8",
  });
}

async function loadFileAsJson(path = "") {
  const data = await fsPromise.readFile(path, {
    encoding: "utf-8",
  });

  return JSON.parse(data);
}
