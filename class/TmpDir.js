import tmp from "tmp";

export class TmpDir {
  static async create() {
    return new Promise((resolve, reject) => {
      tmp.dir({ unsafeCleanup: true }, (err, path, cleanupCallback) => {
        err ? reject(err) : resolve(new TmpDir(path, cleanupCallback));
      });
    });
  }
  constructor(path = "", cleanupCallback = () => {}) {
    this.path = path;
    this.delete = cleanupCallback;
  }
}
