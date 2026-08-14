---
{
  "name": "sub-task-decomposition",
  "description": "Split a large goal into independently delegable units that sub-agents can own end-to-end. Decompose by boundary, not by step, so each sub-agent returns a mergeable deliverable. Trigger keywords: task decomposition, task splitting, delegation planning, divide work, sub-agent tasks."
}
---

# Sub-agent task decomposition

An efficiency skill for turning one large goal into a set of sub-agent-sized units. Good decomposition is what makes parallel delegation cheap instead of chaotic.

## Use case

Use this skill when:

- A task is too big for one agent pass and should be split across sub-agents.
- Parts of the work are independent and could run in parallel.
- You keep passing the same "do the next part" instruction instead of defining owned units.
- You need deterministic handoffs between agents.

## Core principle

Decompose by ownership boundary (one file, one module, one question, one data slice) so each unit is independently executable and its result merges without conflicts. Decompose by step only when there is a hard sequential dependency.

## Playbook

1. **Write the goal as one sentence** — the final deliverable.
2. **Find natural boundaries** — files, modules, data slices, questions, or features that don't cross-talk.
3. **Check independence** — two units that both need the same mutable state are not independent.
4. **Size each unit** — small enough for one focused pass, large enough that overhead isn't the majority of cost.
5. **Name the interface** — what each unit consumes and produces (schema, file path, artifact).
6. **Assign and dispatch** — one sub-agent per unit, each with its own isolation slice.
7. **Plan the merge** — define how results combine before you dispatch, not after.

## Rules

- Prefer fan-out over layering: independent units in parallel, sequential only when forced.
- Keep unit interfaces explicit; implicit coupling is where merge pain lives.
- Split big file work by file, big question work by sub-question.
- Leave one coordinator owner that merges; sub-agents don't coordinate each other.

## Decomposition decision table

| Shape | Strategy |
| --- | --- |
| Many files, no deps | One unit per file, parallel |
| One file, many concerns | One unit per concern, single owner merges |
| One big question | Sub-questions, answers synthesized |
| Pipeline (A feeds B) | Sequential units with explicit handoff artifacts |

## Cost expectation

Proper decomposition removes re-read loops and conflict-driven retries, typically cutting total delegation tokens by 40-70% versus ad-hoc "next step" delegation.
