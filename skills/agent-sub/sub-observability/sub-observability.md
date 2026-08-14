---
{
  "name": "sub-observability",
  "description": "Log a one-line structured record per sub-agent run: task, budget, status, spend, result key. Cheap telemetry that makes fan-outs auditable and calibratable. Trigger keywords: observability, sub-agent logs, telemetry, audit trail, run record, metrics."
}
---

# Sub-agent observability

An efficiency skill for cheap, structured telemetry on every sub-agent run so wide fan-outs are auditable and future budgets are data-driven.

## Use case

Use this skill when:

- You dispatch many sub-agents and can't tell what each one did.
- Budgets are guesses because you never track actual spend.
- A run produced a wrong result and you need to know why.
- You want to compare strategies (fan-out shapes, template variants) on real data.

## Core principle

Each sub-agent run emits one structured line with the fields that matter: what it was asked, what it spent, and what it returned. Aggregation turns anecdotes into decisions.

## Playbook

1. **Define the log schema** — task id, prompt version, budget, status, spend (tokens/time), result key, failure class.
2. **Emit one line per run** — structured, not narrative.
3. **Attach the result key** — where the output lives, so it's retrievable without re-reading.
4. **Aggregate per wave** — totals, outliers, and status distribution.
5. **Calibrate budgets from data** — next dispatches use measured spend, not guesses.
6. **Retain the trace** — the summary line plus a pointer to the detail.

## Log line shape

```json
{ "task": "extract-gaps", "pv": "v3", "status": "done",
  "spent": 4100, "result": "out/extract-gaps.json", "fail": null }
```

## Rules

- One line per run; don't log exploration, log outcomes.
- Always log the prompt version so comparisons are fair.
- Log failure class — it drives the retry ladder, not just status.
- Keep the log append-only; aggregation happens later.

## Cost expectation

Structured telemetry costs almost nothing per run but makes budgeting data-driven — typically cutting total delegation spend 15-40% over time through better calibration.
