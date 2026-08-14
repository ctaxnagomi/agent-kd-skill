---
{
  "name": "micro-output-schema",
  "description": "Define the exact output shape a micro-agent must return and validate it before accepting. Output contracts make micro-agents composable and reliable. Trigger keywords: output schema, output contract, validate output, return shape, expected output."
}
---

# Micro-agent output schema

An efficiency skill for pinning down exactly what a micro-agent returns, and validating the result against that contract.

## Use case

Use this skill when:

- A micro-agent's result is consumed by code or another agent.
- You want output failures to be detected immediately, not downstream.
- Freeform returns are causing parsing bugs.
- You need outputs that are stable across prompt versions.

## Core principle

The output schema is a contract written before the prompt. The agent returns that shape exactly; the caller validates it on receipt. A result that doesn't conform is a failed call, not an output.

## Playbook

1. **Write the output schema first** — fields, types, required vs optional, constraints.
2. **Embed it in the prompt** — compact and copyable, not described in prose.
3. **Validate on receipt** — parse and check required fields and types.
4. **Classify failures** — missing field, wrong type, constraint violation; each gets a code.
5. **Reject, don't repair** — a schema-violating output is rejected; repair happens at the prompt level.
6. **Version the schema** — consumer code checks the version, so drift is loud.

## Rules

- The schema exists before the prompt; the prompt exists to fill the schema.
- Validation runs on every call, in the caller, mechanically.
- No silent repair or coercion of off-schema output.
- Schema bugs (constraints the model can't meet) are fixed in the schema.

## Example output contract

```json
{
  "summary": "string (required)",
  "count": "integer >= 0",
  "tags": "string[] (max 10)",
  "meta": { "version": "1" }
}
```

## Cost expectation

A validated output contract catches failures where they're cheapest — at the edge — and keeps micro-agent fleets composable, typically cutting downstream integration bugs 40-70%.
