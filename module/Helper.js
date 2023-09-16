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
  const data = await fsPromise.readFile(package_json.path, (err, data) => {
    if (err) throw err;
    return data;
  });
  const json = JSON.parse(data);
  json.type = "module";

  console.log(json);

  //const newJson =
  //fs.writeFileSync(package_json.path, newJson)
  // ???
}
