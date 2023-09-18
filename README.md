# quick_npm

You can try npm without affecting your existing directories.

# Install

```bash
npm i @masyuko0222/quick_npm
```

# Set script

```javascript
{
  ...
  "dependencies": {
    "@masyuko0222/quick_npm": "^1.0.1"
  },
  // Set script
  "scripts": {
    "quicknpm": "node ./node_modules/@masyuko0222/quick_npm/main.js"
  }
  ...
}
```

# Usage

After setting script.
`npm run quicknpm`

You can try any npms on REPL.
`.try npm_name`

example

```zsh
❯ npm run quicknpm

> quicknpm
> node ./node_modules/@masyuko0222/quick_npm/main.js

Quick npm >.try dayjs
You can use now!
Quick npm >console.log(dayjs())
M {
  '$L': 'en',
  '$d': 2023-09-18T12:59:01.434Z,
  '$x': {},
  '$y': 2023,
  '$M': 8,
  '$D': 18,
  '$W': 1,
  '$H': 21,
  '$m': 59,
  '$s': 1,
  '$ms': 434
}
undefined
Quick npm >.try chalk
You can use now!
Quick npm >console.log(chalk.blue('Hello world!'));
Hello world!
undefined
```

# License

This software is released under the MIT License.
