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

---

## How to use?

### 1. Download
Go to the [AGENT KD SKILL gallery](https://ctaxnagomi.github.io/agent-kd-skill/) and find this skill card. Click **Download** to save the SKILL.md file to your computer.

### 2. Install
Copy the downloaded SKILL.md into your agent's skills directory:

| Agent | Path |
|-------|------|
| **opencode** | ~/.config/opencode/skills/<skill-name>/SKILL.md |
| **Claude Code** | ~/.claude/skills/<skill-name>/SKILL.md |
| **Codex CLI** | ~/.codex/skills/<skill-name>/SKILL.md |
| **Cursor** | ~/.cursor/skills/<skill-name>/SKILL.md |
| **Gemini CLI** | ~/.gemini/skills/<skill-name>/SKILL.md |

Example for opencode:
`ash
mkdir -p ~/.config/opencode/skills/<skill-name>
cp SKILL.md ~/.config/opencode/skills/<skill-name>/SKILL.md
`

### 3. Use
Restart your agent session. The skill will auto-load based on its description. You can also invoke it explicitly by typing @<skill-name> in your agent.

### 4. Verify
Ask your agent something related to the skill's purpose. If it responds using the skill's instructions, you're all set.
