---
{
  "name": "migrate-to-shoehorn",
  "description": "Migrate test files from as type assertions to @total-typescript/shoehorn. Use when user mentions shoehorn, wants to replace as in tests, or needs partial test data.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Migrate to Shoehorn

Migrate test files from `as` type assertions to @total-typescript/shoehorn.

## Why shoehorn?
- Pass partial data in tests while keeping TypeScript happy
- Replace `as` assertions with type-safe alternatives
- Test code only — never use in production

## Functions
- fromPartial() — Pass partial data that still type-checks
- fromAny() — Pass intentionally wrong data
- fromExact() — Force full object

## Workflow
1. **Gather requirements** — What test files have `as` assertions?
2. **Install** — npm i @total-typescript/shoehorn
3. **Find** — grep for `as Type` patterns in test files
4. **Replace** — as Type → fromPartial(), as unknown as Type → fromAny()
5. **Verify** — Run type check

## Credit

This skill is based on the work of **Matt Peacock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills](https://github.com/mattpocock/skills). Licensed under MIT.
