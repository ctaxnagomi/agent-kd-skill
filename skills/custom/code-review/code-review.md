---
{
  "name": "code-review",
  "description": "Review code with focus on behavior, architecture, and test quality — not style. Use when reviewing a PR, checking code quality, or getting a second opinion on implementation.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Code Review

Review code with focus on behavior, architecture, and test quality — not style.

## Review checklist

1. **Behavior** — Does the code do what it claims?
2. **Tests** — Do tests verify behavior, not implementation?
3. **Seams** — Are tests at the right boundaries?
4. **Architecture** — Does the change fit the existing design?
5. **Edge cases** — Are error paths and edge cases handled?
6. **Security** — Any injection, auth, or data exposure risks?

## Rules

- Review behavior first, style second.
- Ask "what could break?" not "what looks wrong?"
- Check that tests survive refactors.
- Flag implementation-coupled tests.

## Credit

This skill is based on the work of **Matt Pocock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills](https://github.com/mattpocock/skills). Licensed under MIT.
