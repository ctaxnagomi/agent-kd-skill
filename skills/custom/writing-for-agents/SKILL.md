---
{
  "name": "writing-for-agents",
  "description": "Write clear, structured prompts and instructions optimized for AI agent consumption. Use when writing SKILL.md files, creating agent instructions, or structuring documentation for AI readability.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Writing for Agents

Write clear, structured prompts and instructions optimized for AI agent consumption.

## Use case

Use this skill when:
- Writing SKILL.md files
- Creating agent instructions or prompts
- Structuring documentation for AI readability

## Principles

1. **Be explicit** — Don't assume the agent knows context.
2. **Use structure** — Headers, lists, and sections over prose.
3. **Define terms** — Introduce domain vocabulary explicitly.
4. **Specify format** — Show expected output format with examples.
5. **Set boundaries** — What the agent should and shouldn't do.

## Process

1. **Understand the audience** — What agent model and capabilities?
2. **Define scope** — What exactly should this instruction do?
3. **Write the prompt** — Clear, structured, unambiguous.
4. **Add examples** — Show, don't just tell.
5. **Test** — Does the agent follow the instructions correctly?

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
