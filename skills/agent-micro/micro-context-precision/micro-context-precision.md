---
{
  "name": "micro-context-precision",
  "description": "Inject exactly the context a micro-agent's single function needs — nothing more. Precise context keeps tiny prompts tiny and output accurate. Trigger keywords: context precision, precise context, minimal context, inject context, context injection."
}
---

# Micro-agent context precision

An efficiency skill for feeding a micro-agent only the exact context its one function operates on.

## Use case

Use this skill when:

- A micro-agent receives a big blob when it needs one field.
- Extra context is confusing the output or inflating cost.
- The same micro-agent serves many calls and context varies per call.
- You want the input to be the smallest thing that produces the correct result.

## Core principle

Context is the input, and the input is the schema. The micro-agent needs the exact data its function uses; surrounding material is noise that costs tokens and degrades accuracy.

## Playbook

1. **Derive the required context from the function** — what fields does the function actually read?
2. **Trim to those fields** — slice the input to the schema before dispatch.
3. **Reject or ignore the rest** — extra material is not passed, or is explicitly out of scope.
4. **Slice upstream** — truncate, select, or extract the fields in the caller, not in the prompt.
5. **Measure context per call** — if context exceeds the schema's needs, the caller is over-injecting.

## Rules

- The schema is the only context contract; everything else is noise.
- Trim upstream; never ask the micro-agent to ignore noise it was given.
- When in doubt, remove — a micro-agent that needs the whole document is mis-scoped.
- Version the context trimming with the schema so behavior stays reproducible.

## Example

```md
Function: classify sentiment of a message.
Needs: { "text": string } only.
Do NOT pass: full thread, metadata, attachments, previous turns.
```

## Cost expectation

Precise context cuts per-call input tokens 40-80% on common cases and measurably improves output accuracy, since the agent isn't filtering noise.
