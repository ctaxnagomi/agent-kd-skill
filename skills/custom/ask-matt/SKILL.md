---
{
  "name": "ask-matt",
  "description": "Ask Matt Peacock-style probing questions to explore and challenge ideas. Use when user wants to explore concepts, challenge assumptions, or think through a problem with expert-level questions.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Ask Matt

A skill for asking Matt Peacock-style questions to explore and challenge ideas.

## Use case

Use this skill when the user wants to:
- Ask probing questions about a concept or design
- Explore an idea from multiple angles
- Challenge assumptions with expert-level questions

## Workflow

1. **Listen** — Understand what the user is trying to accomplish.
2. **Ask one question at a time** — Each question should probe a different aspect.
3. **Build on answers** — Use previous answers to shape the next question.
4. **Summarize** — After the session, summarize what was learned.

## Rules

- Ask questions **one at a time**.
- Be curious and constructive.
- Don't lecture — let the user discover through answering.

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
