---
{
  "name": "sub-reporting",
  "description": "Define a compact, structured reporting format for sub-agents: one-line status, key results, and blockers — no narrative dumps. Reports are parseable and cheap to aggregate. Trigger keywords: sub-agent report, status report, progress reporting, structured report, terse output."
}
---

# Sub-agent reporting

An efficiency skill for standardizing what a sub-agent reports back, so status is cheap to read and mechanical to aggregate.

## Use case

Use this skill when:

- Sub-agent results arrive as long prose that is expensive to scan.
- You coordinate many children and need a uniform status view.
- The parent only needs a fraction of what the sub-agent explored.
- You want machine-parseable progress for dashboards or tooling.

## Core principle

A report is a fixed shape, not a narrative. Status, findings, blockers, and asks are separate fields — scannable by humans and parseable by code.

## Playbook

1. **Define the report schema once** — status, summary line, key results, blockers, asks, spent.
2. **Force one-line status** — done / partial / blocked / escalated / failed.
3. **Bound the findings** — the top N results that matter, not everything found.
4. **Separate asks** — explicit requests for parent action live in their own field.
5. **Include spend** — tokens or time used, for budget reconciliation.
6. **Strip process detail** — what was tried belongs in a trace, not the report.

## Report shape

```json
{
  "status": "done",
  "summary": "one line",
  "results": ["top findings, bounded"],
  "blockers": [],
  "asks": [],
  "spent": "~4k tokens"
}
```

## Rules

- One-line status first; detail only on request.
- Reports are append-only facts, not justifications.
- The parent summarizes the wave, not each report.
- No narrative unless a field explicitly asks for it.

## Cost expectation

Structured terse reports cut status-reading cost by 50-80% and make aggregation mechanical, which matters most with wide fan-outs.
