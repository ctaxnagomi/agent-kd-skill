---
{
  "name": "deep-context-budget",
  "description": "Allocate the deep run's context budget across phases — scoping, gathering, verification, synthesis — before starting. Prevent one phase from starving the rest. Trigger keywords: context budget, budget allocation, phase budgeting, context planning, spend allocation."
}
---

# Deep-agent context budget

An efficiency skill for allocating a deep run's context spend across its phases up front, so the run ends strongly instead of running dry.

## Use case

Use this skill when:

- Deep runs consume huge context and die before synthesis.
- Gathering absorbs everything, leaving no room for verification.
- You want predictable run cost and a guaranteed-quality ending.
- Iterative runs need per-round budgets.

## Core principle

The run has a total budget divided into phases: scoping, gathering, verification, synthesis. Each phase gets a ceiling; running over a phase forces compression, not context theft from a later phase.

## Playbook

1. **Set the total budget** — a context/token ceiling for the whole run.
2. **Allocate phases** — typical splits: scoping 10%, gathering 50%, verification 20%, synthesis 20%.
3. **Tune to the task** — a light-verification task shifts budget to gathering; a report-heavy task shifts to synthesis.
4. **Enforce per-phase ceilings** — overspend compresses (fold, skim) rather than overruns.
5. **Leave a reserve** — an unallocated margin for surprises.
6. **Reconcile at the end** — actual vs plan per phase to improve next run's split.

## Rules

- Phases borrow from their own ceiling, never silently from the next phase.
- Synthesis is protected — a run that dies before synthesis wasted its budget.
- A per-round budget governs iterative runs the same way.
- Reserve exists for genuine surprises, not for weak planning.

## Example allocation

| Phase | Budget | Guardrail |
| --- | --- | --- |
| Scope | 10% | plan locked before gathering |
| Gather | 50% | notes only, raw released |
| Verify | 20% | load-bearing facts only |
| Synthesize | 20% | reserved, non-negotiable |

## Cost expectation

Phase budgeting keeps deep runs from dying early and guarantees a synthesis, typically improving output completeness 30-60% on equal total spend.
