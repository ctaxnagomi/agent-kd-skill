---
{
  "name": "micro-caching",
  "description": "Cache micro-agent results keyed by input so identical calls return instantly at zero token cost. Cache pure functions; skip caching anything with side effects. Trigger keywords: cache, caching, memoize, result cache, dedupe calls, cache key."
}
---

# Micro-agent caching

An efficiency skill for returning prior micro-agent results on identical inputs instead of recomputing them.

## Use case

Use this skill when:

- The same (or similar) inputs hit the same micro-agent repeatedly.
- The function is pure — output depends only on input.
- Recompute cost is non-trivial (volume or model cost).
- You want faster responses on hot paths.

## Core principle

A pure micro-agent call is a function: same input → same output. Caching memoizes that mapping. The cache key is the input (canonicalized), and only pure functions are cached.

## Playbook

1. **Confirm purity** — no side effects, no time dependence, no external state.
2. **Define a canonical key** — hash the exact input the function uses (trimmed to the schema).
3. **Look up before dispatch** — hit = return cached output, zero tokens.
4. **Store on success** — cache valid, schema-conforming outputs only.
5. **Bound the cache** — size and TTL so stale results don't linger.
6. **Invalidate deliberately** — version the schema/prompt so old-format caches don't leak.

## Rules

- Only pure functions are cached; anything stateful bypasses the cache.
- Cache validated outputs only — garbage in is never cached.
- Schema/prompt version is part of the cache key.
- A cache miss must be indistinguishable from a fresh call.

## Key shape

```text
key = hash(prompt_version || canonical_input)
value = { output, cached_at, ttl }
```

## Cost expectation

Caching eliminates repeated identical calls entirely — the biggest single win for high-volume micro-agents, often cutting hot-path cost 70-95% on repeated inputs.
