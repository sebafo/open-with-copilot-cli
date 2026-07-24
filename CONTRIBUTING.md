# Contributing

Issues and pull requests are welcome.

## Development setup

Requirements:

- macOS with Apple Terminal
- Node.js 20 or later
- Visual Studio Code
- GitHub Copilot CLI for manual end-to-end testing

Install dependencies and run the checks:

```sh
npm ci
npm test
```

Press `F5` in VS Code to launch an Extension Development Host for manual
testing. Keep changes focused and add or update tests for changed behavior.

## Pull requests

- Explain the problem and the behavior of the proposed change.
- Confirm that `npm test` passes.
- Update the README or changelog when user-facing behavior changes.
- Do not include generated `out/`, `node_modules/`, or `.vsix` files.