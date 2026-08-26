---
{
  "name": "implement",
  "description": "Turn a spec or plan into working code, one vertical slice at a time. Use when a spec or plan exists and needs implementation, or converting design decisions into code.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Implement

Turn a spec or plan into working code, one vertical slice at a time.

## Process

1. **Read the spec** — Understand what needs to be built.
2. **Identify the first vertical slice** — One test → one implementation.
3. **Write the failing test** — Red.
4. **Write minimal code to pass** — Green.
5. **Refactor if needed** — But only after green.
6. **Repeat** — Next slice.

## Rules

- One vertical slice at a time.
- Test-first: always red before green.
- Don't anticipate future slices.
- Keep each slice demoable on its own.

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
