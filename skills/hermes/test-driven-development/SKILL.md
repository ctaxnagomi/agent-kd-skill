---
name: test-driven-development
description: "TDD workflow: enforce RED-GREEN-REFACTOR, tests before code."
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [tdd, testing, quality, refactoring]
---

# Test-Driven Development

Classic TDD workflow: write a failing test first, make it pass with minimal code, then refactor. Enforces discipline and produces well-tested, clean code.

## When to Use

- Starting a new feature or module
- Fixing a bug (write a test that fails first)
- Refactoring existing code
- Any time you want confidence in your code

## Procedure

### RED Phase

1. Write a test for the next small behavior
2. Run the test, confirm it fails
3. Check the error message makes sense

### GREEN Phase

1. Write the simplest code that makes the test pass
2. Run the test, confirm it passes
3. Do not add anything the test does not require

### REFACTOR Phase

1. Improve the code while keeping tests green
2. Remove duplication
3. Clarify naming
4. Run tests again to confirm nothing broke

## Cycle

Repeat RED-GREEN-REFACTOR in small increments. Each cycle should take 2-10 minutes. If it takes longer, the step is too big.

## Pitfalls

- Writing multiple tests before making any pass
- Skipping the refactor phase
- Writing tests after the code
- Making the Green phase too elaborate

## Verification

- All tests pass
- Each test covers one specific behavior
- Code is free of duplication
- You can delete any test and see it fail

---

## How to use?

### 1. Download
Go to the [AGENT KD SKILL gallery](https://ctaxnagomi.github.io/agent-kd-skill/) and find this skill card. Click **Download** to save the SKILL.md file.

### 2. Install
Copy the downloaded SKILL.md into your agent's skills directory:

| Agent | Path |
|-------|------|
| **Hermes** | ~/.hermes/skills/hermes/test-driven-development/SKILL.md |
| **opencode** | ~/.config/opencode/skills/test-driven-development/SKILL.md |
| **Claude Code** | ~/.claude/skills/test-driven-development/SKILL.md |

### 3. Use
Restart your agent session. The skill will auto-load when implementing features.

### 4. Verify
Ask your agent to implement something using TDD. If it writes tests first, you're all set.
