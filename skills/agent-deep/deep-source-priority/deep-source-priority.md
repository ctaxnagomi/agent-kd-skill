---
{
  "name": "deep-source-priority",
  "description": "Rank sources by authority and relevance before reading, so the deep agent reads the best sources deeply and skims or skips the rest. Trigger keywords: source priority, source ranking, authority, source selection, information hierarchy."
}
---

# Deep-agent source priority

An efficiency skill for ordering sources before reading so a deep agent spends its context on the sources that matter.

## Use case

Use this skill when:

- A topic has many sources of wildly different quality.
- The deep agent is reading everything and running out of budget.
- Conflicting sources need an authority-based resolution order.
- You want an auditable reason for why certain sources were emphasized.

## Core principle

Sources are ranked, not listed. The ranking (authority + relevance) determines read depth: authoritative and relevant sources get full reads, marginal ones get skims or quotes only.

## Playbook

1. **Collect candidate sources** — the superset.
2. **Score authority** — primary over secondary, official over aggregated, current over stale, cited over self-published.
3. **Score relevance** — how directly each source addresses the core question.
4. **Rank and tier** — tier A (read fully), tier B (skim), tier C (quote on demand).
5. **Read in rank order** — if budget runs out, it ran out on the least important sources.
6. **Resolve conflicts by tier** — a tier-A source outweighs a tier-C claim.

## Rules

- Read order follows rank, not arrival order.
- Authority and relevance are separate axes; a highly relevant blog is still tier B.
- Record the tier per source for the citation trail.
- Re-rank when new evidence changes the picture mid-run.

## Tiering example

| Tier | Depth | Example |
| --- | --- | --- |
| A | full read, notes | official docs, primary data |
| B | skim headings/quotes | reputable secondary |
| C | on-demand quotes | forums, aggregators, SEO pages |

## Cost expectation

Ranked reading focuses context on high-value sources, typically saving 30-60% of deep-run tokens and improving answer authority.
