---
{
  "name": "research",
  "description": "Research a topic thoroughly using documentation, codebase exploration, and external sources. Use when deep knowledge outside the current working directory is required or a decision depends on external facts.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Research

Research a topic thoroughly using documentation, codebase exploration, and external sources.

## Process

1. **Define the question** — What exactly needs to be researched?
2. **Identify sources** — Docs, code, APIs, web resources.
3. **Gather information** — Read and extract relevant facts.
4. **Synthesize** — Organize findings into actionable knowledge.
5. **Cite sources** — Reference where each fact came from.

## Rules

- Always cite sources.
- Distinguish facts from opinions.
- Be thorough but focused.
- Report what you found, not what you expected.

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
