import repl from "repl";
import { init } from "../module/Helper.js";

export class MyRepl {
  static start(prompt = "", dir = {}) {
    // define start
    const replServer = repl.start({
      prompt: prompt,
    });

    // define exit
    replServer.on("exit", () => {
      console.log("See you later...");
      dir.cleanupCallback();
    });

    // define `.try` command
    replServer.defineCommand("try", {
      help: `You can use specified npm`,
      async action(npm) {
        init(dir);

        this.displayPrompt();
      },
    });
  }
}
