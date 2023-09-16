import repl from "repl";

export class MyRepl {
  static start(prompt = "", dir = {}) {
    const replServer = repl.start({
      prompt: prompt,
    });

    replServer.on("exit", () => {
      console.log("See you later...");
      dir.cleanupCallback();
    });
  }
}
