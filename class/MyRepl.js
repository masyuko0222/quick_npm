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

    replServer.defineCommand("try", {
      help: `You can use specified npm`,
      action(name) {
        // 今のところdirはtmpライブラリで作られたやつのみ想定
        // dirにpackage.jsonを作る
        // packag.jsonにtype: moduleを追記する
        // `npm install name`をdirで実行する
          // replServerのcontextにimportさせる
        this.displayPrompt();
      },
    });
  }
}
