---
{
  "name": "sub-agent-budgeting",
  "description": "Set token, time, and tool budgets per sub-agent before dispatch so no child runs away. Cap depth, retries, and output size, and kill overruns early. Trigger keywords: sub-agent budget, token budget, time limit, cost cap, runaway agent, budget cap."
}
---

# Sub-agent budgeting

An efficiency skill for bounding how much each sub-agent may consume — tokens, time, steps, or tool calls — before it is dispatched.

## Use case

Use this skill when:

- A sub-agent can loop, retry, or explore without an obvious stopping point.
- You want predictable spend across many parallel children.
- One expensive sub-agent is eating a budget meant for the whole fan-out.
- You need a guaranteed stop so a coordinating agent stays in control.

## Core principle

Every dispatch carries an explicit ceiling. The ceiling is part of the prompt: the sub-agent knows its budget, its exit conditions, and what "done enough" looks like.

## Playbook

1. **Pick the budget axes** — tokens, wall-clock time, steps, tool calls, or output size; choose the ones that matter.
2. **Set the ceiling from the unit's value** — spend proportional to the deliverable's worth, not to available budget.
3. **Define the exit condition** — the acceptance criterion that lets a sub-agent finish early.
4. **Define the overrun behavior** — return partial results with a status flag instead of pushing on.
5. **Communicate the budget in the prompt** — "stop once X, do not exceed Y, return partial results if over Z."
6. **Monitor and enforce** — the parent checks for overrun flags and does not silently re-dispatch.

## Rules

- Budgets are ceilings, not targets; finishing early is a win.
- Prefer partial-result overrun to forced full completion.
- Log actual vs budgeted per sub-agent to calibrate future ceilings.
- One overrun axis is enforceable; many axes usually mean the task is mis-scoped.

## Example budget line

```md
Budget: max 15 tool calls or 5 minutes, whichever first.
Exit: all validations pass or you hit a blocker.
If overrun: return done=false plus the partial result.
```

## Cost expectation

Explicit ceilings eliminate runaway loops, typically saving 30-60% of fan-out cost and guaranteeing a stop for coordinated pipelines.
