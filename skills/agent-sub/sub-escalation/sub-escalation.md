---
{
  "name": "sub-escalation",
  "description": "Define when a sub-agent should stop and escalate to the parent instead of burning budget on uncertainty. Escalation criteria are in the prompt; low-confidence results come back flagged, never silently completed. Trigger keywords: escalation, uncertainty, ask parent, stop and escalate, low confidence."
}
---

# Sub-agent escalation

An efficiency skill for defining when a sub-agent should stop and return control to the parent instead of pushing on with low confidence.

## Use case

Use this skill when:

- A sub-agent might face ambiguity, missing info, or permission problems.
- You'd rather get a quick "blocked, here's why" than a confident wrong answer.
- Sub-agents run unattended in parallel and can't ask interactively.
- Wasted effort on uncertain branches is inflating cost.

## Core principle

Escalation is pre-agreed. The prompt states the situations where stopping is correct, and the sub-agent returns a flagged result with its reasoning — so the parent decides with full information, cheaply.

## Playbook

1. **List escalation triggers up front** — missing inputs, ambiguous instructions, out-of-scope requests, permission failures, budget approaching limits.
2. **Define the escalation payload** — what the parent needs to decide: the blocker, what was tried, and the recommended next option.
3. **Set the confidence bar** — "return done=false if you're below 70% sure."
4. **Make escalation cheap** — flagged partial result, not a long explanation.
5. **Teach the parent's response policy** — for each flag type, a default next action.

## Rules

- Escalate with evidence: blocker + tried + recommendation.
- Prefer escalation over invention when scope or facts are unclear.
- Escalation is not failure — it's the designed stopping point for uncertainty.
- Never silently downgrade an escalation into a guess.

## Example escalation line

```md
If the input contradicts the spec, or you cannot verify a claim you need,
stop and return: { done: false, blocker, tried, recommendation }.
```

## Cost expectation

Pre-agreed escalation avoids confident-wrong work and long unproductive loops, typically saving 30-50% of task cost while improving correctness on ambiguous work.
