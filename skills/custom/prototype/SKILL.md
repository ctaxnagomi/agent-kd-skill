---
{
  "name": "prototype",
  "description": "Create cheap, rough artifacts to raise the fidelity of a discussion and get concrete feedback. Use when \"how should it look?\" is the key question or a rough take would advance the discussion.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Prototype

Create cheap, rough artifacts to raise the fidelity of a discussion and get concrete feedback.

## Process

1. **Identify the question** — What specific thing needs a prototype?
2. **Keep it cheap** — Rough, disposable, fast.
3. **Build the artifact** — Code, outline, stub, or diagram.
4. **Present it** — Show what was built and what it demonstrates.
5. **Gather feedback** — What does this teach us?

## Rules

- Prototypes are disposable — don't over-invest.
- Speed over quality.
- The goal is learning, not production code.
- Link the prototype, don't paste it.

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
