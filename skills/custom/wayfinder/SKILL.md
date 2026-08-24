---
{
  "name": "wayfinder",
  "description": "Plan a huge chunk of work as a shared map of decision tickets on your issue tracker, and resolve them one at a time until the way to the destination is clear. Use when a task is too big for one agent session.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Wayfinder

Plan a huge chunk of work as a shared map of decision tickets on your issue tracker, and resolve them one at a time until the way to the destination is clear.

## Process

### Chart the map
1. **Name the destination** — What does reaching the end look like?
2. **Map the frontier** — Fan out breadth-first, surface decisions.
3. **Create the map** — Single issue with label wayfinder:map.
4. **Create tickets** — Child issues with blocking edges.
5. **Fire research subagents** — Resolve research tickets in parallel.

### Work through the map
1. **Load the map** — Low-res view.
2. **Choose the ticket** — First frontier ticket.
3. **Resolve it** — Zoom as needed, call skills.
4. **Record resolution** — Post answer, close issue, update map.
5. **Graduate fog** — Make newly-specified tickets.

## Ticket types
- Research (AFK): Reading docs and resources.
- Prototype (HITL): Making a cheap artifact.
- Grilling (HITL): Conversation.
- Task (HITL or AFK): Manual work that unblocks a decision.

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
