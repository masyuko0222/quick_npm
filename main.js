import { MyRepl } from "./class/myRepl.js";
import { TmpDir } from "./class/tmpDir.js";

async function run() {
  const dir = await TmpDir.create();
  const prompt = "Quick npm > ";
  MyRepl.start(prompt, dir);
}

run();
