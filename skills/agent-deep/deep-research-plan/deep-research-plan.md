---
{
  "name": "deep-research-plan",
  "description": "Scope a deep research run before starting: questions, sources, depth, and stop conditions. Planning prevents open-ended exploration from burning context. Trigger keywords: research plan, deep research, scoping, research outline, investigation plan."
}
---

# Deep-agent research plan

An efficiency skill for scoping a deep-agent investigation before it starts, so effort goes to the questions that matter.

## Use case

Use this skill when:

- A deep agent may explore open-endedly without a clear stop.
- Research has many possible directions and you want the important ones.
- You want comparable output across multiple deep runs.
- Context is expensive and every wasted branch costs tokens.

## Core principle

A deep run is a bounded investigation. It starts from explicit questions, targets specific sources, and has defined stop conditions — exploration is a means, not the goal.

## Playbook

1. **Write the core question** — the one thing the run must answer.
2. **Derive sub-questions** — the decomposed parts that compose the answer.
3. **Prioritize** — rank questions by importance to the consumer; drop low-value ones.
4. **List target sources** — where the answer is likely to live; scope, don't crawl everything.
5. **Set depth per question** — skim vs read vs exhaustive per sub-question.
6. **Define stop conditions** — saturation, source exhaustion, budget, or deadline.
7. **Lock the plan** — the run follows it; new branches get logged, not chased.

## Rules

- The plan is a contract with the parent, not a suggestion.
- Unprioritized questions lead to shallow answers everywhere.
- Stop conditions are part of the plan, set before the run.
- Reuse a plan skeleton for recurring research domains.

## Plan shape

```md
Q: <core question>
Sub: <Q1, Q2, Q3, prioritized>
Sources: <target list or domains>
Depth: <per sub-question>
Stop: <saturation | source-exhausted | budget | deadline>
```

## Cost expectation

Scoped research avoids open-ended wandering, typically cutting deep-run tokens 40-70% while improving answer quality and comparability.
