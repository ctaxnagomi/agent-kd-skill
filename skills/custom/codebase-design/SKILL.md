---
{
  "name": "codebase-design",
  "description": "Design modules, interfaces, and architecture decisions with vocabulary for seams, adapters, and depth. Use when designing a new module, deciding where seams should be, or making architectural decisions.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Codebase Design

Design modules, interfaces, and architecture decisions with vocabulary for seams, adapters, and depth.

## Key vocabulary

- **Seam**: A public boundary where behavior can be observed.
- **Adapter**: A connector between two module boundaries.
- **Depth**: How much internal detail a module exposes.
- **Leverage**: How much behavior one change unlocks.
- **Locality**: How close related code lives together.

## Process

1. **Identify the capability** — What user-facing behavior are we adding?
2. **Find the seam** — Where should the public boundary be?
3. **Decide depth** — How much internal detail to expose?
4. **Choose adapters** — What connectors are needed?
5. **Evaluate leverage** — How much does this change unlock?
6. **Check locality** — Are related things close together?

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
