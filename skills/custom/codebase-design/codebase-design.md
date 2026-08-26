---
{
  "name": "codebase-design",
  "description": "Design modules, interfaces, and architecture decisions with vocabulary for seams, adapters, and depth. Use when designing a new module, deciding where seams should be, or making architectural decisions.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Codebase Design

Design modules, interfaces, and architecture decisions with vocabulary for seams, adapters, and depth.

## Key vocabulary

- **Seam**: A public boundary where behavior can be observed.
- **Adapter**: A connector between two module boundaries.
- **Depth**: How much internal detail a module exposes.
- **Leverage**: How much behavior one change unlocks.
- **Locality**: How close related code lives together.

## Process

1. **Identify the capability** — What user-facing behavior are we adding?
2. **Find the seam** — Where should the public boundary be?
3. **Decide depth** — How much internal detail to expose?
4. **Choose adapters** — What connectors are needed?
5. **Evaluate leverage** — How much does this change unlock?
6. **Check locality** — Are related things close together?

## Credit

This skill is based on the work of **Matt Pocock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills](https://github.com/mattpocock/skills). Licensed under MIT.
