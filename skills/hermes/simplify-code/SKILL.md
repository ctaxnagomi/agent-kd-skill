---
name: simplify-code
description: "Parallel 4-agent cleanup of recent code changes."
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [code-review, cleanup, refactor, simplification, parallel]
---

# Simplify Code

Review recent code changes with four focused reviewers running in parallel, aggregate findings, and apply fixes. Each reviewer looks for one class of problem: reuse, quality, efficiency, or altitude.

## When to Use

- After completing a feature or fix
- Before merging a PR
- When code feels complex or duplicated
- Periodic cleanup of working code

## Procedure

### Phase 1: Get the Diff

1. Identify the scope (last commit, staged, or specific files)
2. Get the diff: `git diff`, `git diff --cached`, or `git diff HEAD~1`

### Phase 2: Four Reviewers in Parallel

**Reviewer 1 — Reuse**
- Find duplicated logic that should be shared
- Identify similar patterns that could be abstracted

**Reviewer 2 — Code Quality**
- Check for parameter sprawl
- Find near-duplicate functions
- Identify unnecessary complexity

**Reviewer 3 — Efficiency**
- Find unnecessary allocations or computations
- Identify missing caching opportunities
- Spot wasteful operations

**Reviewer 4 — Altitude**
- Find band-aid fixes instead of root causes
- Identify special cases that should be generic
- Spot config flags introduced to avoid fixing the real problem

### Phase 3: Aggregate and Apply

1. Collect findings from all four reviewers
2. Prioritize by impact
3. Apply fixes one at a time
4. Run tests after each change

## Pitfalls

- Trying to fix everything at once
- Not running tests between changes
- Being too aggressive with refactoring
- Breaking working code for marginal improvements

## Verification

- Tests still pass
- Code is simpler than before
- No duplicated logic remains
- Each change has a clear rationale

---

## How to use?

### 1. Download
Go to the [AGENT KD SKILL gallery](https://ctaxnagomi.github.io/agent-kd-skill/) and find this skill card. Click **Download** to save the SKILL.md file.

### 2. Install
Copy the downloaded SKILL.md into your agent's skills directory:

| Agent | Path |
|-------|------|
| **Hermes** | ~/.hermes/skills/hermes/simplify-code/SKILL.md |
| **opencode** | ~/.config/opencode/skills/simplify-code/SKILL.md |
| **Claude Code** | ~/.claude/skills/simplify-code/SKILL.md |

### 3. Use
Restart your agent session. The skill will auto-load when simplification is needed.

### 4. Verify
Ask your agent to simplify code. If it runs the four reviewers and applies targeted fixes, you're all set.
