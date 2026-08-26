---
{
  "name": "setup-matt-pocock-skills",
  "description": "Set up the Matt Pocock skills ecosystem: issue tracker integration, triage labels, and configuration. Use when setting up Matt Pocock skills for the first time or configuring issue tracker integration.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Setup Matt Pocock Skills

Set up the Matt Pocock skills ecosystem: issue tracker integration, triage labels, and configuration.

## Process

1. **Detect tracker** — What issue tracker is being used?
2. **Configure integration** — Set up the connection.
3. **Set up labels** — Create triage labels.
4. **Verify** — Test that everything works.

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
