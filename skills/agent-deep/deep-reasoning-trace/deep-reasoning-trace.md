---
{
  "name": "deep-reasoning-trace",
  "description": "Keep a compact, replayable trace of a deep agent's reasoning: decisions, branches, and why. Audit-proof research without verbose logs. Trigger keywords: reasoning trace, decision log, audit trail, why log, transparency, replay."
}
---

# Deep-agent reasoning trace

An efficiency skill for logging the reasoning of a deep run in a compact, replayable form so the parent can audit decisions without a transcript.

## Use case

Use this skill when:

- The final answer's quality depends on reasoning a reviewer will check.
- You need to answer "why did the run go this way?" later.
- The deep agent explores branches and you want to see the pruning.
- You want reproducibility across runs.

## Core principle

The trace records decisions and their reasons — what was considered, what was chosen, and why — in one compact line per decision. It is a decision log, not a transcript.

## Playbook

1. **Log every significant decision** — branch taken, source ranked up, question dropped.
2. **Write the reason with it** — "chose X over Y because Z" in one line.
3. **Keep the trace bounded** — decisions only; no step-by-step narration.
4. **Reference, don't duplicate** — point to notes/sources instead of restating them.
5. **Make it replayable** — enough information to reproduce the decision path.
6. **Fold the trace at the end** — the final answer's key decisions are summarized.

## Rules

- A decision without a reason is noise; log both or neither.
- Pruned branches get one line — the run's negative space is part of the audit.
- The trace is append-only during the run; folds summarize it after.
- Don't log tool calls as reasoning; log why the call mattered.

## Trace line format

```md
D12 | source-priority | s3 ranked A over s9 (B) because s9 is a forum echo | ref notes/2
D13 | gap-scoring | dropped sub-Q4, lowest impact | ref notes/3
```

## Cost expectation

A decision-level trace costs a fraction of a transcript and makes deep runs auditable and reproducible, typically saving 20-40% in review effort and preventing repeat investigations.
