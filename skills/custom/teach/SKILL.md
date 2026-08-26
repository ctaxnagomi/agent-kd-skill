---
{
  "name": "teach",
  "description": "Teach a concept or skill by breaking it into progressive steps, checking understanding at each stage. Use when user wants to learn a new concept, understand how something works, or get a guided walkthrough.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Teach

Teach a concept or skill by breaking it into progressive steps, checking understanding at each stage.

## Use case

Use this skill when the user wants to:
- Learn a new concept or technology
- Understand how something works
- Get a guided walkthrough of a topic

## Workflow

1. **Assess starting point** — What does the user already know?
2. **Break into steps** — Progressive complexity, building on each step.
3. **Explain one step at a time** — Don't overwhelm.
4. **Check understanding** — Ask a quick question to verify.
5. **Adjust pace** — Speed up or slow down based on understanding.
6. **Summarize** — Recap what was learned.

## Rules

- Teach **one concept at a time**.
- Use concrete examples, not abstract descriptions.
- Check understanding before moving on.
- Adapt to the user's level.

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
