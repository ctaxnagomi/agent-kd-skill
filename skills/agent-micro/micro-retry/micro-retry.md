---
{
  "name": "micro-retry",
  "description": "Give micro-agents a bounded, fixed retry policy with different tactics per attempt — never blind identical re-runs. Small agents fail cheaply and recover cheaply. Trigger keywords: retry, retry policy, backoff, bounded retries, recover, retry tactics."
}
---

# Micro-agent retry

An efficiency skill for handling micro-agent failures with a bounded retry policy where each attempt has a different tactic.

## Use case

Use this skill when:

- Micro-agent calls occasionally fail (schema, timeout, bad output).
- You want cheap, automatic recovery without blind loops.
- Failure is cheap because the function is small.
- You need a guaranteed termination with a shaped error.

## Core principle

A retry policy is three things: bounded attempts, distinct tactics per attempt, and a shaped failure at the end. Identical re-runs are the anti-pattern — if the first attempt failed, the next one changes something.

## Playbook

1. **Set the attempt cap** — 2-3 attempts is enough for a micro-agent; past that, escalate.
2. **Vary the tactic** — rephrase, fix schema, relax a constraint, restart context; change one thing per attempt.
3. **Keep attempts cheap** — a small agent re-runs for a fraction of a big-agent retry.
4. **Backoff if the failure is transient** — a short wait for timeout-class failures.
5. **Return a shaped error** — after the cap, the fixed error object (micro-schema-strict).
6. **Log the failure pattern** — repeated same-class failures mean the prompt or input is the bug.

## Rules

- No identical re-runs: each attempt differs by at least one tactic.
- The cap is fixed and low; escalation beats infinite retry.
- Transient failures backoff; deterministic failures skip retry and escalate.
- A retry that keeps failing the same way is a diagnosis, not a recovery.

## Example policy

1. Retry with same input (transient guard only).
2. Retry with tightened schema / clarified prompt.
3. Escalate with shaped error + evidence.

## Cost expectation

Bounded, tactic-varying retries recover cheaply from the failures that matter and stop quickly on the ones that don't, typically saving 30-60% versus blind retry loops.
