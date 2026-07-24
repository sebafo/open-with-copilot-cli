import { spawn } from 'node:child_process';

export function shellQuote(value: string): string {
  return `'${value.replaceAll("'", `'"'"'`)}'`;
}

export function buildTerminalCommand(folderPath: string): string {
  return `cd ${shellQuote(folderPath)} && copilot`;
}

export function openCopilotCli(folderPath: string): Promise<void> {
  const script = [
    'on run argv',
    '  tell application "Terminal"',
    '    activate',
    '    do script item 1 of argv',
    '  end tell',
    'end run',
  ].join('\n');

  return new Promise((resolve, reject) => {
    const process = spawn(
      '/usr/bin/osascript',
      ['-e', script, buildTerminalCommand(folderPath)],
      { stdio: ['ignore', 'ignore', 'pipe'] },
    );
    let stderr = '';

    process.stderr.setEncoding('utf8');
    process.stderr.on('data', (chunk: string) => {
      stderr += chunk;
    });

    process.once('error', reject);
    process.once('exit', (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(
        new Error(
          stderr.trim() || `osascript exited with code ${code ?? 'unknown'}`,
        ),
      );
    });
  });
}