---
{
  "name": "deep-summarization",
  "description": "Summarize deep-run findings at fixed intervals so working context stays small and the long run remains coherent. Rolling summaries keep deep agents sharp. Trigger keywords: summarize, rolling summary, context management, progressive summary, digest."
}
---

# Deep-agent summarization

An efficiency skill for keeping a long deep run's working context small through rolling, incremental summaries.

## Use case

Use this skill when:

- A deep run lasts many steps and context is filling up.
- Early findings are being forgotten by later stages.
- You need a single coherent narrative at the end.
- Long context is degrading answer quality.

## Core principle

The deep run maintains a rolling summary that is refreshed at intervals. Working context always fits: the summary + the current chunk — never the entire history.

## Playbook

1. **Set a summary interval** — every N steps, N chunks, or at a context watermark.
2. **Summarize incrementally** — fold new findings into the existing summary, don't restart it.
3. **Keep it lossy but intentional** — keep facts, decisions, open questions; drop process detail.
4. **Carry open questions forward** — unanswered items survive the fold.
5. **Store raw evidence elsewhere** — the summary points to it; it doesn't contain it.
6. **Re-read only on conflict** — a fuzzy summary point triggers a targeted re-check.

## Rules

- Summaries fold forward; they never start from scratch at each interval.
- Each fold preserves: settled facts, decisions, open questions, source pointers.
- The summary is the shared working memory for the run and its final synthesis.
- If the summary stops fitting, the run is losing detail — shrink the interval.

## Fold template

```md
## FOLD n
SETTLED: <facts + decisions with sources>
OPEN: <unresolved questions>
NEXT: <what the next interval targets>
```

## Cost expectation

Rolling summarization keeps deep runs near a fixed context cost regardless of duration, typically cutting long-run tokens 50-80% while improving coherence.
