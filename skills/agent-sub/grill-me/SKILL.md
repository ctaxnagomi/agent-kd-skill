---
{
  "name": "grill-me",
  "description": "Interview the user relentlessly about a plan or design until reaching shared understanding, resolving each branch of the decision tree. Use when user wants to stress-test a plan, get grilled on their design, or mentions 'grill me'.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Grill Me

A relentless interview to sharpen a plan or design — by **Matt Peacock** ([mattpocock/skills](https://github.com/mattpocock/skills)).

## Use case

Use this skill when the user wants to:

- Stress-test a plan or design before implementation.
- Challenge assumptions, unclear goals, and weak tradeoffs.
- Expose gaps and blind spots in a proposal.
- Reach shared understanding on a complex decision.
- Mentions "grill me" or asks to be grilled.

## Core principle

Grilling is a **stateless interview primitive**. It writes no files and leaves no workspace behind. The only output is a sharper version of the idea, in the user's own head.

## Workflow

1. **Start fresh** — Invoke this skill in a fresh conversation, not on top of an existing plan.
2. **Ask one question at a time** — Walk down each branch of the design tree, resolving dependencies between decisions one-by-one.
3. **Provide recommended answers** — For each question, offer your recommended answer alongside the question.
4. **Explore the codebase** — If a question can be answered by exploring the codebase, explore it instead of asking.
5. **Resolve the frontier** — Each round covers the entire frontier: every question whose prerequisites have already been settled.
6. **No backtracking** — Never ask something that hinges on an answer you haven't heard yet.

## Rules

- Ask questions **one at a time**, not in batches.
- Always provide a **recommended answer** for each question.
- Explore the codebase when possible rather than asking the user.
- Be relentless but constructive — challenge weak spots, don't just criticize.
- Cover every branch of the decision tree before moving on.
- Stop when all branches are resolved and shared understanding is reached.

## Quality gates

- Every question has been answered or resolved.
- No open decision branches remain.
- The user can articulate the plan clearly without hedging.
- Weak assumptions have been identified and either strengthened or replaced.

## Credit

This skill is based on the work of **Matt Peacock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills - grill-me](https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me). Licensed under MIT.

---

## How to use?

### 1. Download
Go to the [AGENT KD SKILL gallery](https://ctaxnagomi.github.io/agent-kd-skill/) and find this skill card. Click **Download** to save the SKILL.md file to your computer.

### 2. Install
Copy the downloaded SKILL.md into your agent's skills directory:

| Agent | Path |
|-------|------|
| **opencode** | ~/.config/opencode/skills/<skill-name>/SKILL.md |
| **Claude Code** | ~/.claude/skills/<skill-name>/SKILL.md |
| **Codex CLI** | ~/.codex/skills/<skill-name>/SKILL.md |
| **Cursor** | ~/.cursor/skills/<skill-name>/SKILL.md |
| **Gemini CLI** | ~/.gemini/skills/<skill-name>/SKILL.md |

Example for opencode:
`ash
mkdir -p ~/.config/opencode/skills/<skill-name>
cp SKILL.md ~/.config/opencode/skills/<skill-name>/SKILL.md
`

### 3. Use
Restart your agent session. The skill will auto-load based on its description. You can also invoke it explicitly by typing @<skill-name> in your agent.

### 4. Verify
Ask your agent something related to the skill's purpose. If it responds using the skill's instructions, you're all set.
