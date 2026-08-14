---
{
  "name": "sub-token-caps",
  "description": "Cap the context and output tokens a sub-agent may use per run, with explicit behavior at the cap. Predictable ceilings keep parallel delegation within budget. Trigger keywords: token cap, context limit, max tokens, output limit, token ceiling."
}
---

# Sub-agent token caps

An efficiency skill for setting explicit token ceilings — on context, on output, and on total spend — for each sub-agent dispatch.

## Use case

Use this skill when:

- You need predictable spend across many parallel sub-agents.
- One chatty sub-agent threatens the whole wave's budget.
- Long-context sub-agents are expensive to re-run and review.
- You want a hard stop instead of a soft "please be brief."

## Core principle

Caps are part of the dispatch contract. Three numbers matter: how much context the agent may build, how much output it may return, and the total budget for the run. The agent plans around them.

## Playbook

1. **Set the context cap** — max working context the sub-agent may accumulate (e.g., keep under 40k tokens).
2. **Set the output cap** — max result size; forces compression into a schema.
3. **Set the total cap** — combined budget; overruns return partial results.
4. **Make the caps task-relative** — derived from deliverable value, not global defaults.
5. **State them in the prompt** — the sub-agent should budget proactively, not discover the limit at the end.
6. **Reconcile after the run** — actual vs cap per sub-agent to calibrate future dispatches.

## Example cap line

```md
Caps: context ≤ 40k tokens, output ≤ 500 lines,
total ≤ 60k tokens. If any cap is hit, return partial
results with status=partial.
```

## Rules

- Caps should make the task plan tighter, not just truncate the result.
- Prefer a compression strategy inside the cap (summarize as you go) over truncation at the cap.
- One numeric cap is enforceable; several ambiguous rules are not.
- Log cap hits — repeated hits mean the task is mis-scoped, not mis-budgeted.

## Cost expectation

Hard caps turn open-ended delegation into bounded work, typically saving 25-50% of fan-out spend and eliminating surprise blowups.
