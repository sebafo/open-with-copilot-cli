import * as vscode from 'vscode';
import { openCopilotCli } from './terminal';

export function activate(context: vscode.ExtensionContext): void {
  const command = vscode.commands.registerCommand(
    'openWithCopilotCli.openFolder',
    async (folderUri: vscode.Uri | undefined) => {
      if (!folderUri || folderUri.scheme !== 'file') {
        void vscode.window.showErrorMessage('Select a local folder in the Explorer.');
        return;
      }

      try {
        const stat = await vscode.workspace.fs.stat(folderUri);
        if ((stat.type & vscode.FileType.Directory) === 0) {
          void vscode.window.showErrorMessage('Select a folder in the Explorer.');
          return;
        }

        await openCopilotCli(folderUri.fsPath);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        void vscode.window.showErrorMessage(
          `Could not open Copilot CLI in Terminal: ${message}`,
        );
      }
    },
  );

  context.subscriptions.push(command);
}

export function deactivate(): void {}