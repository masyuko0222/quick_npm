import child_process from "child_process";
import * as fsPromise from "node:fs/promises";
import fs from "fs";

export function init(dir) {
  child_process.execSync("npm init -y", { cwd: dir.path });

  const package_json = {
    path: dir.path + "/package.json",
  };

  // For ESmodule
  addTypeModule(package_json);
}

// private
async function addTypeModule(package_json) {
  const data = await fsPromise.readFile(package_json.path, {
    encoding: "utf-8",
  });

  const json = JSON.parse(data);
  json.type = "module";

  fs.writeFileSync(package_json.path, JSON.stringify(json, null, 2), {
    encoding: "utf-8",
  });
}
