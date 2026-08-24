---
{
  "name": "triage",
  "description": "Move issues and external PRs through a state machine of triage roles, categorise, verify, grill if needed, and write agent-ready briefs. Use when triaging issues or managing a project issue tracker.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Triage

Move issues and external PRs through a state machine of triage roles, categorise, verify, grill if needed, and write agent-ready briefs.

## Roles

Two **category** roles: bug, enhancement

Five **state** roles: needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix

## Process

1. **Show what needs attention** — Unlabeled, needs-triage, needs-info with activity.
2. **Triage a specific issue** — Gather context, recommend, verify, grill if needed.
3. **Apply the outcome** — Post brief, mark ready, or close.

## Rules

- Every comment must start with a disclaimer about AI generation.
- Every triaged issue gets exactly one category and one state.
- Verify claims before grilling.
- Use .out-of-scope/ for rejected enhancements.

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
