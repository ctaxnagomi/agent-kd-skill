---
{
  "name": "domain-modeling",
  "description": "Create and maintain a shared domain vocabulary and model that all code and tests reference. Use when establishing domain vocabulary, creating CONTEXT.md, or aligning code with business concepts.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Domain Modeling

Create and maintain a shared domain vocabulary and model that all code and tests reference.

## Process

1. **Extract terms** — What domain concepts appear in the conversation?
2. **Define precisely** — Each term gets a clear, unambiguous definition.
3. **Map relationships** — How do concepts relate to each other?
4. **Update CONTEXT.md** — Write the glossary where the agent can reference it.
5. **Align code** — Ensure code structure reflects the domain model.

## Rules

- Every domain concept gets exactly one name.
- Definitions are precise and unambiguous.
- The glossary is the source of truth for vocabulary.
- Code should use domain terms, not technical jargon.

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
