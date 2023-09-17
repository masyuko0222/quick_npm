import { MyRepl } from "./class/MyRepl.js";
import { TmpDir } from "./class/TmpDir.js";

async function run() {
  const dir = await TmpDir.create();
  console.log(dir.path)
  const prompt = "Quick npm >";
  MyRepl.start(prompt, dir);
}

run();
