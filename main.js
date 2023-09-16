import { Repl } from "./class/Repl.js";
import { TmpDir } from "./class/TmpDir.js";

async function main() {
  const tmpDir = await TmpDir.create();
  console.log(tmpDir);

  // start REPL
  const replServer = new Repl("Quick npm >");
  replServer.setupEvent(tmpDir);
}

main();
