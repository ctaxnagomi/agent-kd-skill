---
{
  "name": "code-review",
  "description": "Review code with focus on behavior, architecture, and test quality — not style. Use when reviewing a PR, checking code quality, or getting a second opinion on implementation.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Code Review

Review code with focus on behavior, architecture, and test quality — not style.

## Review checklist

1. **Behavior** — Does the code do what it claims?
2. **Tests** — Do tests verify behavior, not implementation?
3. **Seams** — Are tests at the right boundaries?
4. **Architecture** — Does the change fit the existing design?
5. **Edge cases** — Are error paths and edge cases handled?
6. **Security** — Any injection, auth, or data exposure risks?

## Rules

- Review behavior first, style second.
- Ask "what could break?" not "what looks wrong?"
- Check that tests survive refactors.
- Flag implementation-coupled tests.

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
