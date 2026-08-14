---
{
  "name": "deep-long-context",
  "description": "Structure long-context deep runs so important details stay retrievable: an index, a working summary, and bounded reads. Prevent context decay over many steps. Trigger keywords: long context, context management, context retention, index, working memory."
}
---

# Deep-agent long-context management

An efficiency skill for keeping a deep run accurate as context grows long, by structuring what stays hot vs cold.

## Use case

Use this skill when:

- A deep run accumulates many steps, files, or findings.
- Early critical details are getting diluted or forgotten.
- You want to trust that the final answer uses all evidence, not just the recent part.
- Context is long and model focus is drifting.

## Core principle

Separate hot from cold. Hot context (the index, the working summary, the current task) stays small and always present. Cold detail (raw sources, full evidence) is stored and retrieved on demand through the index.

## Playbook

1. **Maintain a hot index** — every significant artifact/finding gets a short keyed line.
2. **Maintain a hot summary** — the running state of knowledge (see deep-summarization).
3. **Keep hot small** — if hot context grows large, fold it: index more, summarize more.
4. **Store cold with pointers** — evidence lives in files/notes, referenced by key.
5. **Retrieve on demand** — re-read a cold item only when a decision needs it.
6. **Refresh the index at intervals** — new findings are indexed as they land.

## Rules

- The index is the map; the summary is the state; both stay hot and small.
- Nothing important exists only in cold storage without an index entry.
- Re-read cold items by key, never by browsing.
- When focus drifts, tighten hot context rather than lengthening it.

## Hot/cold layout

```md
HOT: index (≤ ~50 lines) + summary (≤ ~30 lines) + current task
COLD: notes/, sources/, evidence files (pointed to by index)
```

## Cost expectation

Hot/cold structuring prevents context decay and wasteful re-discovery, typically keeping long runs coherent at 40-70% less context than a flat long history.
