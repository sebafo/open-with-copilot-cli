import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { buildTerminalCommand } from '../terminal';

describe('buildTerminalCommand', () => {
  it('quotes paths containing spaces', () => {
    assert.equal(
      buildTerminalCommand('/tmp/my folder'),
      "cd '/tmp/my folder' && copilot",
    );
  });

  it('escapes single quotes', () => {
    assert.equal(
      buildTerminalCommand("/tmp/user's folder"),
      "cd '/tmp/user'\"'\"'s folder' && copilot",
    );
  });
});