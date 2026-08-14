---
{
  "name": "micro-batching",
  "description": "Process many items through one micro-agent call instead of one call per item, when the function is pure and items are independent. Batch size balances tokens against latency. Trigger keywords: batching, batch processing, many items, bulk, batch micro-agent."
}
---

# Micro-agent batching

An efficiency skill for processing lists of independent items through a micro-agent in fewer, larger calls.

## Use case

Use this skill when:

- The function is pure (each item processed independently).
- You have many items and per-item calls have fixed overhead.
- Items share the same instructions and schema.
- You can tolerate one failed batch being re-run.

## Core principle

A micro-agent can often process N items in one call for less than N calls, because fixed prompt overhead is paid once. The schema becomes an array; the batch is validated as a whole.

## Playbook

1. **Confirm purity** — items must not interact; one bad item must not poison others.
2. **Choose a batch size** — large enough to amortize overhead, small enough to keep output bounded and errors isolated.
3. **Array-ify the schema** — input is an array of items; output is an array of results, index-aligned.
4. **Emit per-item results** — one result per input item, in order.
5. **Isolate failures** — a per-item error field, so one bad item doesn't fail the batch.
6. **Right-size with measurement** — tune batch size by actual token cost vs success rate.

## Rules

- Output must be index-aligned with input (or keyed by item id).
- Per-item error isolation beats whole-batch retries.
- Batch only pure functions; stateful items break alignment.
- A batch that needs a retry of one item is fine; a batch that fails wholesale is too big.

## Example schema

```json
// in: { "items": [ { "id": 1, "text": "..." }, ... ] }
// out: { "results": [ { "id": 1, "label": "...", "ok": true } ], "failed": [...] }
```

## Cost expectation

Batching typically cuts per-item token cost 30-60% for pure functions by amortizing prompt overhead, while keeping results validated and failures isolated.
