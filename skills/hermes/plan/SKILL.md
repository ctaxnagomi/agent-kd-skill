---
name: plan
description: "Write a markdown plan to .hermes/plans/; no execution."
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [planning, architecture, design, strategy]
---

# Plan Mode

Write a structured markdown plan without executing anything. Forces thinking through the approach before writing code. Plans are saved to `.hermes/plans/` for reference.

## When to Use

- Before starting a complex feature
- When the user says "plan" or "design"
- Architecture decisions
- Breaking down large tasks into steps

## Procedure

1. Understand the goal and constraints
2. Research existing code and patterns
3. List the files that need to change
4. Outline the approach step by step
5. Identify risks and alternatives
6. Save the plan to `.hermes/plans/<topic>.md`

## Plan Template

```markdown
# Plan: <Topic>

## Goal
What we are trying to achieve.

## Constraints
- Technical limitations
- Time/budget limits
- Compatibility requirements

## Approach
1. Step one
2. Step two
3. Step three

## Files to Change
- `path/to/file.js` — what changes

## Risks
- What could go wrong
- Mitigation strategies

## Alternatives
- Other approaches considered
- Why this approach was chosen
```

## Pitfalls

- Making the plan too detailed (keep it actionable)
- Not checking existing code before planning
- Ignoring edge cases
- Planning everything but the simplest tasks

## Verification

- Plan covers the goal
- Steps are actionable and ordered
- Files to change are identified
- Risks are acknowledged

---

## How to use?

### 1. Download
Go to the [AGENT KD SKILL gallery](https://ctaxnagomi.github.io/agent-kd-skill/) and find this skill card. Click **Download** to save the SKILL.md file.

### 2. Install
Copy the downloaded SKILL.md into your agent's skills directory:

| Agent | Path |
|-------|------|
| **Hermes** | ~/.hermes/skills/hermes/plan/SKILL.md |
| **opencode** | ~/.config/opencode/skills/plan/SKILL.md |
| **Claude Code** | ~/.claude/skills/plan/SKILL.md |

### 3. Use
Restart your agent session. The skill will auto-load when planning is needed.

### 4. Verify
Ask your agent to plan something. If it creates a structured plan without executing, you're all set.
