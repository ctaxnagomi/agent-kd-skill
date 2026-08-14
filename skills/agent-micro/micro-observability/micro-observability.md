---
{
  "name": "micro-observability",
  "description": "Emit one structured log line per micro-agent call: function, input key, status, latency, tokens. Cheap telemetry that turns a micro-agent fleet into a measurable system. Trigger keywords: micro-agent observability, telemetry, metrics, log line, monitor, analytics."
}
---

# Micro-agent observability

An efficiency skill for tracking every micro-agent call with a single structured log line, so a fleet becomes measurable and improvable.

## Use case

Use this skill when:

- You run many micro-agents and can't answer "what costs the most?"
- Output quality regressions need to be traceable to a change.
- You want per-function cost, latency, and failure rates.
- A fleet should be tuned from data, not guesses.

## Core principle

Every micro-agent call emits one line: which function, what input (by key), the result status, latency, and token cost. Aggregating those lines yields per-function cost, reliability, and speed — the data needed to optimize.

## Playbook

1. **Define the log schema** — function, input hash, status, latency ms, tokens, output hash, error code.
2. **Emit one line per call** — structured, at a fixed point (completion or failure).
3. **Include the input key** — lets you spot caching opportunities (micro-caching).
4. **Aggregate per function** — cost, error rate, p50/p95 latency.
5. **Watch for regressions** — a function whose error rate jumps maps back to its prompt/schema version.
6. **Tune from data** — batch sizes, retry policies, and budgets follow the numbers.

## Rules

- One line per call, always — success and failure.
- Log by input hash, never the raw input, to keep logs small and private.
- Version tokens and prompts in the log so regressions are attributable.
- The log is append-only; analytics happen downstream.

## Log line shape

```json
{ "fn": "classify", "in": "sha-8", "status": "ok", "ms": 420, "tokens": 210, "err": null }
```

## Cost expectation

Observability costs a few tokens per call but typically cuts fleet cost 15-40% over time by exposing the highest-cost, least-reliable functions for targeted fixes.
