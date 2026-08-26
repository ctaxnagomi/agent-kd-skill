---
{
  "name": "git-guardrails-claude-code",
  "description": "Set up Claude Code hooks to block dangerous git commands (push, reset --hard, clean, branch -D) before they execute. Use when user wants to prevent destructive git operations or add git safety hooks.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Git Guardrails (Claude Code)

Set up Claude Code hooks to block dangerous git commands before they execute.

## What Gets Blocked
- git push (all variants including --force)
- git reset --hard
- git clean -f / git clean -fd
- git branch -D
- git checkout . / git restore .

## Steps

1. **Ask scope** — This project only or all projects?
2. **Copy the hook script** — To .claude/hooks/ or ~/.claude/hooks/.
3. **Add hook to settings** — PreToolUse hook in settings.json.
4. **Ask about customization** — Add or remove patterns.
5. **Verify** — Test with a blocked command.

## Credit

This skill is based on the work of **Matt Pocock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills](https://github.com/mattpocock/skills). Licensed under MIT.
