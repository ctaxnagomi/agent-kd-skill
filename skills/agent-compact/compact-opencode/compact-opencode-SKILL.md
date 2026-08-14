---
{
  "name": "agent-compact-opencode",
  "description": "Compact, token-efficient agent skill for opencode. Minimal output, fast targeted edits, low context burn for subagents and long sessions."
}
---

# Agent Compact — opencode

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

- Install: `.opencode/skills/agent-compact-opencode/SKILL.md` (project) or `~/.config/opencode/skills/agent-compact-opencode/SKILL.md` (global).
- Load it explicitly with the `skill` tool when you want a terse subagent pass.
- Pair it with a small context window or a fast/cheap model for best results.
- Bind to a subagent via `"agent": "compact"` in frontmatter if needed.

## Quality gates

- Output under 50 words unless more is demanded.
- Every file touched is one the task needed.
- Verification actually ran (a command, not an assumption).
