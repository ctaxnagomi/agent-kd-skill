---
{
  "name": "cut-cost-token",
  "description": "Token and cost optimization for agent sessions. Reduce context usage during browser/web tasks with grep-before-read, batched run calls, targeted evaluate, and signal-based waits. Trigger keywords: cut cost, save tokens, token usage, cheaper, reduce context."
}
---

# Cut-cost token method

A capability for minimizing token consumption when an agent drives a browser or does research-heavy work, keeping costs low without losing accuracy.

## Use case

Use this skill when a task involves:

- Browser/web tasks (pricing lookups, research, scraping, form flows) where pages are token-heavy.
- Long sessions where context is filling up and important details are at risk.
- Any repetitive loop (N items, N pages) where batching can collapse the cost.
- Explicit cost or context limits, or a user asking to save tokens.

## Core principle

Every page dump costs tokens. Read only what you need, once, in the smallest form that answers the question. Prefer text queries over tree dumps and batched calls over round-trips.

## Playbook (cheapest to costliest)

1. **grep beats read beats snapshot** — pull the few lines you need with a tight regex instead of dumping the page.
2. **read (markdown/text) before snapshot** — snapshots carry full accessibility trees with refs you often don't need; use `snapshot mode="interactive"` only when you need refs to act, and cap it with `depth`.
3. **Batch independent pages into one run** — open tabs in the background, then `Promise.all` the waits and reads in a single call.
4. **Trust action diffs** — act tools return a diff of what changed; don't re-snapshot or wait after every click. Re-snapshot only when refs go stale (navigate/submit/re-render).
5. **Targeted evaluate over DOM dumps** — ask JavaScript for the exact data, cap results with a slice; huge returns truncate but still cost.
6. **Wait on signals, not time** — `wait for="text"/"selector"` instead of fixed-pause waits.
7. **Plan target URLs** — scope each tab to the page that has the answer, not a landing page that needs clicks.

## Rules

- Open tabs in the background; foreground tabs grab focus and add snapshots.
- Loop over items inside a single `run`; never one run per item.
- Don't reflexively call `diff` after every action — read the diff returned by the act.
- Close tabs you own when done; keep ones the user may want.
- Detect geo-redirects and language selectors early instead of retrying broken URLs.

## Example batching pattern

```js
const ids = await Promise.all(urls.map(u => browser.pages.newPage(u)));
await Promise.all(ids.map(id => browser.wait(id, { value: 2500 })));
const texts = await Promise.all(ids.map(id => browser.grep(id, { pattern: "RM|price" })));
return texts; // only matching lines per page
```

## Cost expectations

Greedy multi-page sessions run ~80-120k tokens. With this method, target a 40-60% reduction by grepping, batching, and trusting diffs.
