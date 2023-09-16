import { MyRepl } from "./class/MyRepl.js";
import { TmpDir } from "./class/TmpDir.js";

async function main() {
  // dir has own path and clean up function.
  //const dir = await TmpDir.create();

  const prompt = "Quick npm >";
  MyRepl.start(prompt)
}

main();
