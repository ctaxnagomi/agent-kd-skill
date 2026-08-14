---
{
  "name": "agent-compact-claudecode",
  "description": "Compact, token-efficient agent skill for Claude Code. Minimal output, fast targeted edits, low context burn for subagents and long sessions.",
  "allowed-tools": [
    "Read",
    "Grep",
    "Bash",
    "Edit"
  ]
}
---

# Agent Compact — Claude Code

Compact, low-token behavior for fast, targeted execution.

## Purpose

Do small, well-defined work with the smallest possible token footprint — for subagents and long-running sessions where context is precious.

## When to use

- Small, clearly scoped fixes, edits, or lookups.
- As a subagent: spawn it for isolated tasks and read only its terse report.
- Long sessions: reset context often; this skill keeps each turn minimal.

## Workflow

1. **Read the target** — Only the files the task touches; nothing else.
2. **Minimal change** — The smallest edit that satisfies the task.
3. **Smallest verification** — One command (a single test, targeted lint, or typecheck of the changed file).
4. **Terse report** — 1–3 bullets; no prose.

## Output format

- **Changed:** <paths>
- **Why:** one line
- **Verified:** <command + result>

## Rules

- No commentary, no ceremony, no restating the input.
- Never paste file contents back unless explicitly asked.
- Do not explore beyond the task; no speculative refactors.
- Keep the final summary under ~50 words.

## Platform notes

- Install: `~/.claude/skills/agent-compact-claudecode/SKILL.md` (personal) or `.claude/skills/agent-compact-claudecode/SKILL.md` (project).
- Invoke: press `#` in Claude Code and pick `agent-compact-claudecode`, or bind it to a subagent via `context: fork`.
- Consider `model: haiku` + `effort: low` in frontmatter for cheap, fast runs.
- Restart the Claude Code session after adding the skill.

## Quality gates

- Output under 50 words unless more is demanded.
- Every file touched is one the task needed.
- Verification actually ran (a command, not an assumption).
