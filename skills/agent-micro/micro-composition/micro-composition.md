---
{
  "name": "micro-composition",
  "description": "Compose micro-agents into pipelines where each agent's strict output feeds the next agent's strict input. Composable units build complex behavior from cheap parts. Trigger keywords: composition, pipeline, chain micro-agents, composable, agent pipeline, sequence."
}
---

# Micro-agent composition

An efficiency skill for chaining single-purpose micro-agents so their outputs feed directly into the next agent's inputs.

## Use case

Use this skill when:

- A complex behavior decomposes into a sequence of simple functions.
- Each stage's output is the next stage's input.
- You want to reuse and reorder small agents instead of building big ones.
- Intermediate results are useful to log or inspect.

## Core principle

Composition works because micro-agents have strict schemas. A pipeline is a typed chain: stage N's output schema equals stage N+1's input schema. When types line up, the chain just runs.

## Playbook

1. **Decompose into stages** — each stage is one function with one schema.
2. **Verify schema alignment** — stage N output must satisfy stage N+1 input; insert a tiny adapter if not.
3. **Keep stages pure** — pure stages compose predictably and can be cached individually.
4. **Plumb results explicitly** — pass outputs as inputs; no shared mutable state.
5. **Log at the seams** — checkpoint each intermediate for debugging and caching.
6. **Fail at the first broken stage** — shaped errors propagate, not partial chains.

## Rules

- Strict schemas make composition safe; loosen them and the chain breaks.
- Adapters are minimal and typed — an adapter that transforms is fine, one that interprets is not.
- Pure stages are cacheable; cache seams, not just end results.
- Never pass the whole conversation down the chain — pass the typed output.

## Example pipeline

```text
extract_terms(text) -> { terms[] }
-> classify_terms({ terms[] }) -> { categories[] }
-> summarize({ categories[] }) -> { summary }
```

## Cost expectation

Composition reuses small cheap agents instead of one large prompt, typically saving 30-60% on complex behaviors while keeping every stage testable and cacheable.
