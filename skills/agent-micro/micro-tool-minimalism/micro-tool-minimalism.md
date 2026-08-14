---
{
  "name": "micro-tool-minimalism",
  "description": "Give micro-agents the fewest tools possible — ideally zero. Tools add cost, risk, and failure modes; remove every tool that isn't required by the function. Trigger keywords: minimal tools, no tools, tool restriction, zero-tool agent, reduce tools."
}
---

# Micro-agent tool minimalism

An efficiency skill for keeping micro-agents on the smallest possible tool set, with zero tools as the default.

## Use case

Use this skill when:

- A micro-agent's function is pure (transform, classify, extract, decide) and needs no tools.
- Tool access adds failure modes (timeouts, permissions, output volume).
- You want deterministic, low-risk micro-agents.
- Tool output would flood a tiny context.

## Core principle

Tools exist to do things the model can't. For a micro-agent whose function is reasoning over given input, the answer is in the input — no tools needed. Add a tool only when the function genuinely requires it.

## Playbook

1. **Ask if the function needs a tool** — most single-purpose functions don't.
2. **Default to zero tools** — operate only on the input schema.
3. **Add the minimal tool** — only when the function requires external data or effects.
4. **Bound the tool** — scoped read, single host, capped output.
5. **Justify each tool** — a tool without a function-specific reason is removed.
6. **Prefer precomputed input** — fetch data upstream; hand the agent the data, not the tool.

## Rules

- Zero tools is the baseline; adding one is a decision.
- A tool that returns more than the function needs is oversized.
- Tool failure modes (auth, network, parsing) are cost even when the tool works.
- If a tool is needed, it serves one function — see micro-single-purpose.

## Decision guide

| Function type | Tools |
| --- | --- |
| Transform / classify / extract / decide | none |
| Look up static fact | none (precompute upstream) |
| Read one file | read, scoped |
| Call an API / write output | the single API / write tool, scoped |

## Cost expectation

Removing unnecessary tools cuts risk, failure modes, and tool-output context, typically saving 20-50% of micro-agent cost while raising determinism.
