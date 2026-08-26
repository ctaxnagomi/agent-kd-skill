---
{
  "name": "grill-me",
  "description": "Interview the user relentlessly about a plan or design until reaching shared understanding, resolving each branch of the decision tree. Use when user wants to stress-test a plan, get grilled on their design, or mentions 'grill me'.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Grill Me

A relentless interview to sharpen a plan or design — by **Matt Pocock** ([mattpocock/skills](https://github.com/mattpocock/skills)).

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

This skill is based on the work of **Matt Pocock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills - grill-me](https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me). Licensed under MIT.
