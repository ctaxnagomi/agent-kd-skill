---
{
  "name": "deep-citation",
  "description": "Attach a source reference to every claim in a deep run and keep a citation trail as the run progresses. Traceable claims that don't need re-verification. Trigger keywords: citation, source reference, cite, provenance, traceability, citation trail."
}
---

# Deep-agent citation

An efficiency skill for making every claim in a deep run traceable to its source, continuously and cheaply.

## Use case

Use this skill when:

- The parent or reader needs to trust or re-check specific claims.
- Claims outlive the run and must be auditable later.
- You want to distinguish supported from unsupported statements.
- The final answer will be used for decisions or reporting.

## Core principle

Claims carry their source at the point of creation. Citation is a running habit, not a cleanup step at the end — re-attaching sources after the fact is where errors hide.

## Playbook

1. **Cite at extraction** — every note records its source immediately.
2. **Use a compact reference key** — s1, s2… mapped to full source details once.
3. **Tie each claim to a key** — prose, quotes, numbers all carry references.
4. **Carry references through synthesis** — merged claims keep all their keys.
5. **Mark unsourced statements** — anything without a key is labeled as inference/assumption.
6. **Emit the reference list** — one keyed source list at the end.

## Rules

- A claim without a source key is an inference and labeled as such.
- One source per fact is enough; the trail, not the count, matters.
- Keep reference keys stable across folds and synthesis.
- Quotes carry exact source location (url/page), not just the document.

## Citation format

```md
Claim text [s3]
s3: "OpenAI — Model Card", https://... , accessed 2026-08-15
```

## Cost expectation

Continuous citation adds negligible cost per run and eliminates the expensive, error-prone re-attribution pass at the end — and it makes verification targeted instead of exhaustive.
