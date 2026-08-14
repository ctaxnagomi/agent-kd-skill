---
{
  "name": "micro-timeboxing",
  "description": "Give micro-agents a hard time or step limit with a defined partial-result behavior. Timeboxing guarantees every call terminates quickly. Trigger keywords: timebox, time limit, timeout, deadline, quick response, latency cap."
}
---

# Micro-agent timeboxing

An efficiency skill for guaranteeing a micro-agent call terminates within a fixed budget, returning a partial result if needed.

## Use case

Use this skill when:

- Micro-agent calls must answer within a latency budget.
- You want a guaranteed stop even when the model spins.
- Calls are part of a live, synchronous flow.
- A slow micro-agent would stall a pipeline.

## Core principle

A timebox is a hard ceiling on the call. The agent is told it has a budget and a rule: produce the best result within it, or return a marked partial. The caller treats the ceiling as the contract.

## Playbook

1. **Set a realistic budget** — from measured latency, not an ideal.
2. **State it in the prompt** — "complete within N steps/seconds."
3. **Define partial-result behavior** — what the agent returns if it can't finish: schema fields filled + status=partial.
4. **Enforce at the caller** — a watchdog that stops the call at the ceiling.
5. **Return a shaped timeout** — a fixed timeout result, distinct from success and failure.
6. **Tune the budget** — raise it for complex inputs, lower it for simple ones.

## Rules

- The timebox is enforced at the caller, not trusted to the model.
- Partial results are marked and still schema-conforming.
- A timeout is a first-class outcome with its own shape, not a failure.
- Budget follows input complexity; one size fits all is usually wrong.

## Example budget line

```md
Budget: finish within 3 steps or ~10 seconds.
If you cannot: return { "status": "partial", "value": null,
"reason": "timebox", "note": "best-effort so far" }.
```

## Cost expectation

Timeboxing prevents slow calls from stalling pipelines and caps worst-case cost, typically cutting p95 latency and removing unbounded-spin waste from micro-agent flows.
