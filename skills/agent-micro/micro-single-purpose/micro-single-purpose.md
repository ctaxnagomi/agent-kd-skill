---
{
  "name": "micro-single-purpose",
  "description": "Scope each micro-agent to exactly one function so its prompt, tools, and schema stay tiny. One job per agent keeps micro-agents cheap and composable. Trigger keywords: micro-agent, single purpose, one function, minimal agent, tiny agent."
}
---

# Micro-agent single purpose

An efficiency skill for scoping micro-agents to a single, sharply-defined function so they stay tiny and reliable.

## Use case

Use this skill when:

- You want a fleet of small agents that are cheap to run and reason about.
- A small agent is accumulating tools or instructions for unrelated jobs.
- You want composable units that can be re-ordered and reused.
- Predictability matters more than a one-size agent.

## Core principle

A micro-agent does exactly one thing, defined by one input, one output, and a bounded method. Everything outside that is out of scope — by design.

## Playbook

1. **Name the single function** — one verb and one object: "classify this email", "extract dates from this text".
2. **Define one input shape** — the exact minimal input the function accepts.
3. **Define one output shape** — a strict schema; no freeform.
4. **Bound the method** — the steps allowed, the tools allowed, the limits.
5. **Remove everything else** — no fallback functions, no general knowledge prompts, no extra tools.
6. **Verify it stays single** — if a second function sneaks in, split the agent.

## Rules

- One function per agent; split rather than extend.
- The input and output schemas are the agent's contract.
- General-purpose prompts defeat the point of a micro-agent.
- A micro-agent that needs to ask questions is two agents.

## Test of purity

A micro-agent is single-purpose if its prompt fits, its tools are ≤ the task needs, and every instruction serves the one function. If any line serves a different function, it moves to another agent.

## Cost expectation

Single-purpose micro-agents run on the smallest viable prompt and schema, typically costing 30-70% less per call than general agents on the same task, with far more predictable output.
