---
{
  "name": "improve-codebase-architecture",
  "description": "Refactor and improve codebase architecture by identifying and resolving structural issues. Use when the codebase has structural problems or modules are too coupled.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Improve Codebase Architecture

Refactor and improve codebase architecture by identifying and resolving structural issues.

## Process

1. **Assess current state** — What's working, what's not?
2. **Identify pain points** — Where does the architecture hurt?
3. **Propose changes** — What would improve the structure?
4. **Prefactor** — Make the change easy, then make the easy change.
5. **Execute** — Apply changes incrementally.
6. **Verify** — Tests still pass, behavior unchanged.

## Rules

- Change structure without changing behavior.
- One refactor at a time.
- Keep tests green throughout.
- Document why the change was made.

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
