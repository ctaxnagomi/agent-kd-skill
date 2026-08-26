---
{
  "name": "to-questionnaire",
  "description": "Transform a conversation into a structured questionnaire that captures all decisions and requirements. Use when a conversation has produced many decisions that need formalizing into actionable specs.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# To Questionnaire

Transform a conversation into a structured questionnaire that captures all decisions and requirements.

## Use case

Use this skill when:
- A conversation has produced many decisions that need formalization
- You need to capture requirements in a structured format
- Converting informal discussion into actionable specs

## Process

1. **Review the conversation** — Extract all decisions, requirements, and constraints.
2. **Group by topic** — Organize into logical sections.
3. **Formulate questions** — Each question should be specific and answerable.
4. **Add types** — Boolean, text, choice, etc.
5. **Output questionnaire** — Structured format ready for use.

## Rules

- Every decision from the conversation should become a question.
- Questions should be specific, not vague.
- Include context for each question.
- Respect the order of decisions (dependencies).

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
