---
{
  "name": "sub-parallel-fanout",
  "description": "Dispatch many independent sub-agents at once and collect results in one wait cycle instead of one-by-one. Fan out in background, aggregate as they complete, and merge deterministic outputs. Trigger keywords: parallel sub-agents, fan-out, dispatch many, parallel delegation, concurrent agents."
}
---

# Sub-agent parallel fan-out

An efficiency skill for running many independent sub-agent units concurrently and collecting their results with a single coordination pass.

## Use case

Use this skill when:

- You have N independent units that could run at the same time.
- Sequential delegation is N round-trips of overhead.
- You need the aggregate result, not each intermediate.
- Units share no mutable state (see sub-task-decomposition).

## Core principle

Parallel dispatch collapses N sequential overheads into one wave. Each child is launched in the background; the parent waits once and merges.

## Playbook

1. **Confirm independence** — no shared mutable state, no ordering requirement.
2. **Prepare all isolation slices up front** — every prompt ready before dispatch.
3. **Launch in background** — do not wait for each child in turn.
4. **Wait once for the wave** — a single completion signal covering all children.
5. **Aggregate by schema** — results merge into a list keyed by unit id.
6. **Handle stragglers** — a timeout or partial-result policy for slow children.

## Rules

- Batch the launch, batch the wait: never one child per round-trip.
- Collect results as a keyed map, not an append log.
- Plan the merge policy before dispatch (fail-fast vs best-effort).
- Keep the wave small enough to review — huge fan-outs need grouping.

## Example fan-out pattern

```js
const ids = await Promise.all(units.map(u => spawnSubAgent(u.prompt)));
const results = await Promise.all(ids.map(id => awaitSubAgent(id)));
return results.reduce(mergeBySchema, {});
```

## Cost expectation

Fan-out removes per-child launch overhead, typically cutting coordination tokens 50-80% versus sequential delegation, at the cost of one carefully planned wave instead of many small ones.
