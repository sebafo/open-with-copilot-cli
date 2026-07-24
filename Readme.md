# Open Folder with Copilot CLI

A small, macOS-only VS Code extension that adds **Open Folder with Copilot
CLI** to the Explorer context menu. It opens Apple Terminal in the selected
folder and starts the GitHub Copilot CLI with `copilot`.

> [!IMPORTANT]
> This extension supports macOS and Apple Terminal only. The context-menu item
> is hidden on Windows and Linux. Remote Explorer resources are not supported.

## Features

- Appears when you right-click a local folder in the VS Code Explorer.
- Opens the macOS system Terminal instead of VS Code's integrated terminal.
- Safely handles folder paths containing spaces and single quotes.
- Starts `copilot` with the selected folder as its working directory.

## Requirements

- macOS with Apple Terminal (`Terminal.app`)
- [GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)
  installed and available as `copilot` in your shell

Apple Terminal may request Automation permission the first time the extension
opens it. You can review this under **System Settings > Privacy & Security >
Automation**.

## Install

Download the latest `.vsix` from
[GitHub Releases](https://github.com/sebafo/open-with-copilot-cli/releases),
then run:

```sh
code --install-extension open-with-copilot-cli-<version>.vsix
```

Reload VS Code after installing or upgrading the extension.

## Usage

In the Explorer, right-click a local folder and select **Open Folder with
Copilot CLI**. Apple Terminal opens in that folder and runs `copilot`.

## Development

```sh
npm ci
npm test
```

Press `F5` in VS Code to launch an Extension Development Host. In its Explorer,
right-click a local folder and select **Open Folder with Copilot CLI**.

To create an installable package:

```sh
npm run package
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines and
[SECURITY.md](SECURITY.md) for reporting security issues.

## Privacy and security

The extension does not collect telemetry, send data, or access the network. It
passes the selected local folder path to Apple Terminal and runs `copilot`.
GitHub Copilot CLI has its own terms, privacy behavior, and authentication.
Review GitHub's documentation before using it.

## Disclaimer

This is an independent, community-maintained project. It is not affiliated
with, endorsed by, or supported by GitHub or Microsoft. GitHub Copilot and
Visual Studio Code are trademarks of their respective owners.

## License

Released under the [MIT License](LICENSE).
