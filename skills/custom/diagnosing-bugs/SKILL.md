---
{
  "name": "diagnosing-bugs",
  "description": "Systematically diagnose bugs using the scientific method: hypothesis, experiment, conclusion. Use when a bug needs investigation and the root cause isn't obvious.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Diagnosing Bugs

Systematically diagnose bugs using the scientific method: hypothesis, experiment, conclusion.

## Process

1. **Reproduce** — Can you make the bug happen reliably?
2. **Observe** — What exactly happens vs. what's expected?
3. **Hypothesize** — What could cause this behavior?
4. **Experiment** — Test one hypothesis at a time.
5. **Conclude** — What did the experiment prove or disprove?
6. **Fix** — Now that you know the cause, fix it.
7. **Verify** — Confirm the fix works and doesn't break other things.

## Rules

- One hypothesis at a time.
- Don't skip reproduction.
- Don't guess — test.
- Document what you learned.

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
