---
{
  "name": "deep-chunked-digestion",
  "description": "Read large documents in chunks with per-chunk notes instead of one giant context load. Keep only extracted facts in working context. Trigger keywords: chunked reading, document digestion, large document, chunking, summarization by chunk."
}
---

# Deep-agent chunked digestion

An efficiency skill for processing documents too large to hold in context, by digesting them in bounded chunks.

## Use case

Use this skill when:

- A document (or corpus) exceeds comfortable context size.
- The deep agent needs facts from throughout a long document.
- Full reads are truncating and losing tail content.
- You want a stable summary regardless of document length.

## Core principle

Digest in chunks: read a bounded slice, extract the facts that matter into notes, release the raw slice, and move on. Working context holds notes, not the whole document.

## Playbook

1. **Split by natural boundaries** — sections, chapters, or fixed-size slices with overlap.
2. **Process one chunk at a time** — read chunk, extract structured notes (claims, facts, quotes, page refs).
3. **Emit notes immediately** — persist them so context can be released.
4. **Track progress** — chunk index vs total, so long runs are resumable.
5. **Keep a running index** — a short map of where things were found.
6. **Assemble from notes** — the final synthesis reads notes, never the raw document.

## Rules

- Notes are the working memory; the raw text is released after each chunk.
- Every note carries its source location (chunk + page/ref).
- Overlap chunks by a few paragraphs so boundaries don't cut facts.
- Never re-read a chunk unless a note is genuinely ambiguous.

## Note shape

```md
CHUNK 3 (p.42-49)
- fact: X (p.44)
- claim: Y, conflicts with Z (p.47)
- quote: "..." (p.45)
```

## Cost expectation

Chunked digestion keeps context bounded regardless of document size, typically cutting large-document runs 50-80% and making arbitrarily long inputs feasible.
