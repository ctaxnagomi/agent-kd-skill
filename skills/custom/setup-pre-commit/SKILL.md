---
{
  "name": "setup-pre-commit",
  "description": "Set up Husky pre-commit hooks with lint-staged (Prettier), type checking, and tests. Use when adding pre-commit hooks, setting up Husky, or configuring lint-staged.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Setup Pre-Commit Hooks

Set up Husky pre-commit hooks with lint-staged (Prettier), type checking, and tests.

## What This Sets Up
- Husky pre-commit hook
- lint-staged running Prettier on all staged files
- Prettier config
- typecheck and test scripts in the pre-commit hook

## Steps
1. Detect package manager
2. Install dependencies: husky lint-staged prettier
3. Initialize Husky: npx husky init
4. Create .husky/pre-commit
5. Create .lintstagedrc
6. Create .prettierrc (if missing)
7. Verify
8. Commit

## Credit

This skill is based on the work of **Matt Peacock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills](https://github.com/mattpocock/skills). Licensed under MIT.
