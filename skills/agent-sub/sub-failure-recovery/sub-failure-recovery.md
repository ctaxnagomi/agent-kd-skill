---
{
  "name": "sub-failure-recovery",
  "description": "Handle failed or partial sub-agent runs with a retry ladder: classify the failure, retry cheaply if fixable, and fall back to a slower path when not. No blind re-runs. Trigger keywords: failure recovery, retry, fallback, failed sub-agent, partial result, error handling."
}
---

# Sub-agent failure recovery

An efficiency skill for recovering from failed or partial sub-agent runs without blind re-dispatch loops.

## Use case

Use this skill when:

- A sub-agent returns an error, partial result, or bad output.
- You need a principled retry policy instead of "run it again."
- Failures in one child could cascade in a fan-out.
- You want recoverable pipelines with graceful degradation.

## Core principle

Failure handling is a ladder, not a loop. Classify the failure, pick the cheapest remedy that fixes it, and escalate only when the cheap steps are exhausted.

## Playbook

1. **Classify the failure** — transient (timeout, hiccup), input (bad data), rule (scope/format), or model (low confidence).
2. **Retry cheaply for transient** — same input, same budget, small retry count.
3. **Repair for input failures** — fix the input slice and re-dispatch.
4. **Rescope for rule failures** — tighten the prompt or whitelist and re-dispatch.
5. **Fall back for model failures** — escalate to a bigger model or the parent.
6. **Bounded, then stop** — a fixed ladder depth; past it, return blocked with evidence.

## Rules

- Never retry with identical input on the same failure class more than a set cap.
- Each rung costs more; don't jump to the expensive rung first.
- Record the failure class and remedy for calibration.
- In a fan-out, isolate recovery per child; one failure doesn't restart the wave.

## Retry ladder example

1. Retry same input (max 2).
2. Repair input slice, re-dispatch.
3. Rescope prompt/tools, re-dispatch.
4. Escalate model or parent, with partial results attached.

## Cost expectation

A bounded retry ladder replaces runaway re-dispatch loops, typically saving 40-70% of failure cost while making recovery deterministic.
