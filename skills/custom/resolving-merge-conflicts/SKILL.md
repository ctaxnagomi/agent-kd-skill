---
{
  "name": "resolving-merge-conflicts",
  "description": "Systematically resolve merge conflicts by understanding both sides and finding the correct resolution. Use when a merge conflict needs resolution or you need to understand what both branches intended.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Resolving Merge Conflicts

Systematically resolve merge conflicts by understanding both sides and finding the correct resolution.

## Process

1. **Read both sides** — What does each branch change?
2. **Understand intent** — Why was each change made?
3. **Find the correct resolution** — Which changes should win?
4. **Apply the resolution** — Make the code correct.
5. **Verify** — Tests pass, behavior is correct.

## Rules

- Understand both sides before resolving.
- The correct resolution preserves both intents when possible.
- Don't just pick one side blindly.
- Test after resolving.

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
