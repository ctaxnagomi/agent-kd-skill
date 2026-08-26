---
name: systematic-debugging
description: "4-phase root cause debugging: understand bugs before fixing them."
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [debugging, root-cause, troubleshooting, quality]
---

# Systematic Debugging

A structured 4-phase approach to debugging that forces understanding before fixing. Prevents the common trap of jumping to solutions without grasping the actual problem.

## When to Use

- A bug is reported and you need to find the root cause
- Something works locally but fails in production
- Intermittent issues that are hard to reproduce
- Any situation where "just try stuff" has failed

## Procedure

### Phase 1: Reproduce

1. Get the exact steps to reproduce the bug
2. Confirm you can reproduce it yourself
3. Note the environment, inputs, and outputs

### Phase 2: Hypothesize

1. List 3-5 possible root causes
2. For each, identify what evidence would confirm or rule it out
3. Rank by likelihood based on the symptoms

### Phase 3: Investigate

1. Test each hypothesis systematically
2. Add logging or debugging output as needed
3. Narrow down to the single root cause
4. Stop when you have evidence, not just a guess

### Phase 4: Fix and Verify

1. Write a test that reproduces the bug
2. Implement the minimal fix
3. Confirm the test passes
4. Check for regressions

## Pitfalls

- Fixing symptoms instead of root causes
- Skipping the reproduction step
- Changing multiple things at once
- Not writing a regression test

## Verification

- The original bug no longer reproduces
- The new test passes
- Existing tests still pass
- You can explain the root cause in one sentence

---

## How to use?

### 1. Download
Go to the [AGENT KD SKILL gallery](https://ctaxnagomi.github.io/agent-kd-skill/) and find this skill card. Click **Download** to save the SKILL.md file.

### 2. Install
Copy the downloaded SKILL.md into your agent's skills directory:

| Agent | Path |
|-------|------|
| **Hermes** | ~/.hermes/skills/hermes/systematic-debugging/SKILL.md |
| **opencode** | ~/.config/opencode/skills/systematic-debugging/SKILL.md |
| **Claude Code** | ~/.claude/skills/systematic-debugging/SKILL.md |

### 3. Use
Restart your agent session. The skill will auto-load when debugging is needed.

### 4. Verify
Ask your agent to debug something. If it follows the 4-phase approach, you're all set.
