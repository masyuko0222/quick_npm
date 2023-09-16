import repl from "repl";
import { NpmController } from "./NpmController.js";

export class Repl {
  #replServer;

  constructor(prompt = "") {
    this.#replServer = repl.start({ prompt });
  }

  setupEvent(directory) {
    this.#replServer.on("exit", () => {
      console.log("repl exited");
      directory.delete();
    });

    this.#replServer.defineCommand("try", {
      help: "You can use specified npm",
      async action(name) {
        const npmController = new NpmController(name, directory);
        await npmController.createPackageJson();
        await npmController.installNpm();

        this.displayPrompt();
      },
    });
  }
}
