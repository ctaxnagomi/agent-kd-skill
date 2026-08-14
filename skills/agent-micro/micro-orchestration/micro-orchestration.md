---
{
  "name": "micro-orchestration",
  "description": "Route work to the right micro-agent with a thin orchestrator that matches tasks to agents by schema and capability. Cheap dispatch beats big prompt engineering. Trigger keywords: orchestration, router, dispatch, task routing, orchestrator, agent selection."
}
---

# Micro-agent orchestration

An efficiency skill for routing tasks to the correct micro-agent via a thin, deterministic dispatcher.

## Use case

Use this skill when:

- You have a fleet of micro-agents and work must reach the right one.
- Selection logic is getting encoded into giant prompts instead of routing.
- You want new agents added without touching existing pipelines.
- Dispatch decisions should be auditable and deterministic.

## Core principle

An orchestrator matches a task to an agent by capability and schema, not by description. The routing table is explicit: task type → agent, input shape → agent. The orchestrator stays thin; the agents stay single-purpose.

## Playbook

1. **Register agents with a capability signature** — what task type, what input schema, what output schema.
2. **Define a routing table** — task kind → agent; conflicts resolved by specificity.
3. **Validate before routing** — the task's input shape must match the target schema.
4. **Dispatch with the exact input** — no envelope prose; the schema carries the data.
5. **Fall back on no match** — a shaped "no matching agent" result, never a random agent.
6. **Log the route** — every dispatch records task → agent → result for audit.

## Rules

- Routing is deterministic: same task shape → same agent.
- The orchestrator holds no domain logic — it routes, it doesn't think.
- Schema match beats fuzzy description matching.
- A no-match is a shaped error, not an ad-hoc attempt.

## Routing table shape

```json
{ "task": "classify-email", "agent": "classify", "in": { "text": "string" }, "out": { "label": "string" } }
```

## Cost expectation

A thin orchestrator replaces prompt-embedded dispatch logic, typically saving 20-50% of coordination tokens and making the agent fleet trivially extensible.
