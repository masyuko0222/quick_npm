import repl from "repl";

export class MyRepl {
  static start(prompt = ""){
    repl.start({
      prompt: prompt
    })
  }
}
