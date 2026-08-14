---
{
  "name": "micro-schema-strict",
  "description": "Enforce a strict input and output schema for micro-agents so results are always parseable and failures are always catchable. No freeform, no surprises. Trigger keywords: strict schema, output schema, JSON schema, validation, structured output, parseable."
}
---

# Micro-agent strict schema

An efficiency skill for making micro-agents always accept a fixed input shape and always emit a fixed output shape.

## Use case

Use this skill when:

- Micro-agent output feeds a pipeline or another agent and must parse reliably.
- Freeform answers break consumers silently.
- You want failures to be detectable by shape before they propagate.
- The output is used programmatically (automation, tooling).

## Core principle

The schema is the agent's contract. Inputs are validated to the contract; outputs are forced to the contract. Anything off-schema is a failure and is flagged, not silently shaped.

## Playbook

1. **Define the output schema first** — what the consumer needs, exactly.
2. **Define the input schema** — what the agent is allowed to receive.
3. **State the schema in the prompt** — a compact, copyable form (JSON, not prose).
4. **Validate output on return** — parse and check; off-schema returns get a rejection.
5. **Return a shaped error** — on failure, a fixed error object, never a paragraph.
6. **Lock the version** — schema changes are versioned so consumers break loudly, not silently.

## Rules

- Output must parse before it is accepted; no best-effort prose.
- Input validation happens before the agent runs, to reject bad calls cheaply.
- Schema errors are failures with a code, not "try again" prose.
- A schema that the agent frequently can't satisfy is a schema bug — fix it.

## Example contract

```json
// in: { "text": string, "lang": "en"|"zh" }
// out: { "labels": string[], "confidence": number 0..1 }
// on failure: { "error": { "code": "BAD_SCHEMA", "detail": string } }
```

## Cost expectation

Strict schemas eliminate parse-and-pray plumbing, typically cutting downstream rework 40-70% and making micro-agent fleets dependable end-to-end.
