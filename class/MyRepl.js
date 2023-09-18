import repl from "repl";
import { init, applyNpm } from "../module/Helper.js";

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
        try {
          init(dir);
          applyNpm(npm, replServer, dir);
          console.log("You can use now!");
        } catch (err) {
          if (err instanceof Error) {
            console.error(err.message);
          } else {
            throw err;
          }
        } finally {
          this.displayPrompt();
        }
      },
    });
  }
}
