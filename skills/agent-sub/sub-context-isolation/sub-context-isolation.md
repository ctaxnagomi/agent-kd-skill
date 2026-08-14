---
{
  "name": "sub-context-isolation",
  "description": "Give each sub-agent only the context it needs and nothing more. Isolate prompts to a minimal, task-relevant slice so delegation stays cheap and focused. Trigger keywords: context isolation, sub-agent context, minimal context, prompt scoping, context budget."
}
---

# Sub-agent context isolation

An efficiency skill for delegating work to sub-agents without leaking the parent's full context into every child. Each sub-agent gets a tight, self-contained prompt that answers the task alone.

## Use case

Use this skill when:

- Spawning sub-agents to handle parallel or independent slices of a larger task.
- A sub-agent re-reads the whole parent context instead of the slice it owns.
- Repeated delegation is inflating token spend because every child inherits everything.
- You want reproducible sub-agent runs that don't depend on ambient conversation state.

## Core principle

A sub-agent should receive the smallest self-contained prompt that lets it complete the task: the goal, the relevant inputs, the constraints, and the expected output shape. It should never need to reach back into the parent's history.

## Playbook

1. **Name the single deliverable** — one sentence: what the sub-agent must return.
2. **Inject only the needed inputs** — the specific files, snippets, or data the task touches, not the surrounding context.
3. **State the constraints that matter** — format, budget, tools allowed, hard rules.
4. **Define the output schema** — structured result (JSON, diff, list) so the parent can merge without re-reading.
5. **Forbid context reaching** — instruct the sub-agent to work only from its prompt and the files it is given.
6. **Log what was given** — record the isolation slice so you can audit and shrink it next time.

## Rules

- No "refer to the conversation" — that defeats isolation.
- Slice by task ownership: one file, one area, one question per sub-agent.
- Reuse a prepared slice template for repeated jobs.
- When a sub-agent asks for context, treat it as a slice bug — widen the slice, don't paste everything.

## Example isolation slice

```md
You are a sub-agent. Task: extract all error handling gaps in src/validate.js.
Input file: src/validate.js (only this file).
Constraints: produce a JSON list of { line, gap, fix }.
Do not reference any other conversation or file.
```

## Cost expectation

Focused sub-agent prompts typically run 60-90% fewer tokens than inherited-context prompts, with fewer re-read loops and fewer off-target results.
