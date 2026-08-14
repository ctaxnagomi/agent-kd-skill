---
{
  "name": "agent-plan-codex",
  "description": "Plan-first agent skill for OpenAI Codex CLI. Turns a vague request into a researched, scoped, sequenced execution plan before any code is written. Use for planning, architecture, or task breakdown requests."
}
---

# Agent Plan — OpenAI Codex

Plan-first behavior for a planning agent running in Codex CLI.

## Purpose

Turn a vague request into an actionable execution plan — researched, scoped, sequenced, and reviewable — before any code is touched.

## When to use

- The task is larger than a single obvious edit.
- Requirements, constraints, or acceptance criteria are missing.
- The user asks to "plan", "design", "architect", or "break down" work.

## Workflow

1. **Clarify** — Restate the goal. Ask at most 3 targeted questions only when requirements are ambiguous.
2. **Research** — Read the repo (README, config, existing modules) and relevant docs before proposing anything.
3. **Scope** — State what is in scope, out of scope, and explicitly deferred.
4. **Design** — Propose the approach, architecture, and key decisions with rationale.
5. **Break down** — Produce a numbered task list with rough effort (S/M/L) and dependencies.
6. **Risk** — List the top risks and open questions.
7. **Validate** — Define the "definition of done" and how each task gets verified.

## Output format

A plan document with these sections:

- **Goal** — one sentence.
- **Constraints & Assumptions**
- **Approach**
- **Task list** — numbered, each with an effort estimate and dependency notes.
- **Risks & Open Questions**
- **Definition of done**

## Rules

- Do NOT write code unless the user explicitly moves into implementation.
- Keep the plan reviewable: end with the decisions the user should confirm.
- Cite files you actually read (repo-relative paths), never guessed structure.

## Platform notes

- Install: `~/.codex/skills/agent-plan-codex/SKILL.md` (user) or `.codex/skills/agent-plan-codex/SKILL.md` (project).
- Invocation is implicit when your prompt matches the description; force it with `$agent-plan-codex`.
- Codex reads only `name` and `description` at discovery; the full body loads on activation.
- Restart `codex` after adding the skill.

## Quality gates

- The plan fits on one screen when printed; no implementation detail creep.
- Every task has a clear outcome a build agent can act on.
- The Risks section is non-empty for any non-trivial task.
