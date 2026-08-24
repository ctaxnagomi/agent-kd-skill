---
{
  "name": "grill-with-docs",
  "description": "A grilling session that uses documentation and codebase exploration to answer questions instead of asking the user. Use when the codebase can answer the question better than the user.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Grill With Docs

A grilling session that uses documentation and codebase exploration to answer questions instead of asking the user.

## Workflow

1. **Ask the question** — Same as grilling.
2. **Explore first** — Search codebase and docs before asking the user.
3. **Answer from evidence** — Use what you found to answer.
4. **Escalate only if needed** — If docs/code can't answer, then ask the user.

## Rules

- Always explore before asking.
- Cite sources when answering from docs.
- Don't ask what you can find.

## Credit

This skill is based on the work of **Matt Peacock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills](https://github.com/mattpocock/skills). Licensed under MIT.

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
