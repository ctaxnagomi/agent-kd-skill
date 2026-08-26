---
{
  "name": "wait-what",
  "description": "Stop and ask \"wait, what?\" when something doesn't add up — challenge unclear assumptions before proceeding. Use when something in the plan doesn't make sense or an assumption needs questioning.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Wait What

Stop and ask "wait, what?" when something doesn't add up — challenge unclear assumptions before proceeding.

## Use case

Use this skill when:
- Something in the plan doesn't make sense
- An assumption needs to be questioned
- The user wants to pause and reconsider

## Workflow

1. **Pause** — Stop the current flow.
2. **Identify the issue** — What exactly doesn't add up?
3. **Ask "wait, what?"** — Challenge the assumption directly.
4. **Explore alternatives** — What other interpretations exist?
5. **Resolve** — Either fix the assumption or confirm it's valid.

## Rules

- Be direct but constructive.
- Don't let unclear assumptions pass.
- Challenge with curiosity, not aggression.

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
