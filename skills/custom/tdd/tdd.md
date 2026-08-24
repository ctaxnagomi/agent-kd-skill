---
{
  "name": "tdd",
  "description": "Test-driven development: the red-green loop, what a good test is, where tests go, anti-patterns, and the rules of the loop. Use when building features or fixing bugs test-first, or wanting integration tests.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Test-Driven Development

TDD is the red → green loop. This skill is the reference that makes that loop produce tests worth keeping: what a good test is, where tests go, the anti-patterns, and the rules of the loop.

## What a good test is

Tests verify behavior through public interfaces, not implementation details. Code can change entirely; tests shouldn't. A good test reads like a specification.

## Seams: where tests go

A **seam** is the public boundary you test at: the interface where you observe behavior without reaching inside. Tests live at seams, never against internals.

**Test only at pre-agreed seams.** Before writing any test, write down the seams under test and confirm them with the user.

## Anti-patterns

- **Implementation-coupled**: mocks internal collaborators, tests private methods, or verifies through a side channel.
- **Tautological**: the assertion recomputes the expected value the way the code does.
- **Horizontal slicing**: writing all tests first, then all implementation. Work in **vertical slices** instead.

## Rules of the loop

- **Red before green.** Write the failing test first, then only enough code to pass it.
- **One slice at a time.** One seam, one test, one minimal implementation per cycle.
- **Refactoring is not part of the loop.** It belongs to the review stage.

## Credit

This skill is based on the work of **Matt Peacock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills](https://github.com/mattpocock/skills). Licensed under MIT.
