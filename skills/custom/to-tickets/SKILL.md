---
{
  "name": "to-tickets",
  "description": "Break a plan, spec, or the current conversation into a set of tracer-bullet tickets, each declaring its blocking edges. Use when you need to break work into tickets or plan implementation order.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# To Tickets

Break a plan, spec, or the current conversation into a set of tracer-bullet tickets, each declaring its blocking edges.

## Process

1. **Gather context** — Work from conversation context or reference.
2. **Explore the codebase** — Understand current state.
3. **Draft vertical slices** — One test → one implementation per ticket.
4. **Quiz the user** — Present the breakdown for approval.
5. **Publish tickets** — To the configured tracker.

## Vertical slice rules
- Each slice cuts a narrow but COMPLETE path through every layer.
- A completed slice is demoable or verifiable on its own.
- Each slice is sized to fit in a single fresh context window.

## Ticket format
Each ticket has: Title, Blocked by, What it delivers, Acceptance criteria.

## Credit

This skill is based on the work of **Matt Peacock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills](https://github.com/mattpocock/skills). Licensed under MIT.
