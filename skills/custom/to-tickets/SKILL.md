---
{
  "name": "to-tickets",
  "description": "Break a plan, spec, or the current conversation into a set of tracer-bullet tickets, each declaring its blocking edges. Use when you need to break work into tickets or plan implementation order.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# To Tickets

Break a plan, spec, or the current conversation into a set of tracer-bullet tickets, each declaring its blocking edges.

## Process

1. **Gather context** — Work from conversation context or reference.
2. **Explore the codebase** — Understand current state.
3. **Draft vertical slices** — One test → one implementation per ticket.
4. **Quiz the user** — Present the breakdown for approval.
5. **Publish tickets** — To the configured tracker.

## Vertical slice rules
- Each slice cuts a narrow but COMPLETE path through every layer.
- A completed slice is demoable or verifiable on its own.
- Each slice is sized to fit in a single fresh context window.

## Ticket format
Each ticket has: Title, Blocked by, What it delivers, Acceptance criteria.

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
