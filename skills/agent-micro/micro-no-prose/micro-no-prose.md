---
{
  "name": "micro-no-prose",
  "description": "Ban explanatory prose from micro-agent output. Results are data, per the schema, full stop. Saves tokens and keeps pipelines clean. Trigger keywords: no prose, structured output only, data only, no explanation, terse output, no narration."
}
---

# Micro-agent no-prose

An efficiency skill for keeping micro-agent output purely data-shaped, with no conversational explanation.

## Use case

Use this skill when:

- Micro-agent output feeds a pipeline, tool, or another agent.
- Explanatory prose adds tokens without adding value.
- You want output that is diffable, testable, and machine-checked.
- Chatty responses would break downstream parsing.

## Core principle

Micro-agent output is data, not conversation. The agent returns exactly the schema fields; explanations, caveats, and narration are not part of the result — unless the schema has a field for them.

## Playbook

1. **Ban prose in the prompt** — "return only the schema; no explanation."
2. **Put everything in fields** — even status and errors get fixed fields.
3. **Fold caveats into a dedicated field** — a "notes" field, not a paragraph.
4. **Validate output shape** — off-schema or prose-laden output is rejected (micro-schema-strict).
5. **Strip on receipt** — if a consumer sees prose, treat it as a prompt violation.

## Rules

- Output = schema fields, nothing more.
- Status, confidence, and errors live in schema fields.
- A "notes" field is bounded (one line max, say).
- Any prose outside a field is a prompt bug to fix, not tolerate.

## Example

```md
Prompt: "Return only the JSON schema."
Result (correct): { "sentiment": "positive", "score": 0.9 }
Result (wrong): "I think this is positive with high confidence." 
```

## Cost expectation

No-prose output cuts the result payload substantially (often 30-60% of output tokens), makes everything diffable/testable, and removes a whole class of downstream parse bugs.
