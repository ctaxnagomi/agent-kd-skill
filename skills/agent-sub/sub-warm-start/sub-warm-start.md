---
{
  "name": "sub-warm-start",
  "description": "Reuse a prepared sub-agent template, seed data, or cached result so repeated dispatches skip setup and start cold-to-hot fast. Warm starts cut overhead on recurring delegation. Trigger keywords: warm start, reuse template, cached sub-agent, reusable dispatch, prebuilt prompt."
}
---

# Sub-agent warm start

An efficiency skill for turning repeated sub-agent work into warm, preloaded dispatches instead of cold-from-scratch runs.

## Use case

Use this skill when:

- The same kind of sub-agent job runs repeatedly (reports, extraction, checks).
- Setup instructions are re-sent every time, unchanged.
- Each run re-discovers conventions the run before already knew.
- You want deterministic output shape across many runs.

## Core principle

Separate what is constant (template, conventions, seed data) from what varies (the actual input). Preload the constant part so each run pays for the variable part only.

## Playbook

1. **Identify the recurring shape** — the job type that repeats.
2. **Extract the constant layer** — instructions, conventions, tool setup, output schema.
3. **Template it once** — a parameterized dispatch prompt with placeholders.
4. **Preload seed context** — conventions and examples sent once, reused across runs.
5. **Cache pure functions** — if the output depends only on inputs, reuse prior results by input key.
6. **Refresh the template on drift** — when conventions change, update once, not per run.

## Rules

- Constant and variable layers stay separate in the template.
- Warm start must not cache stale results for jobs with side effects.
- Reuse the same output schema so consumers are stable.
- Measure before/after; warm starts should visibly shrink per-run cost.

## Example warm template

```md
<CONSTANT>: conventions + schema + tool rules (preloaded)
<INPUT>: { the varying task data }
Dispatch = CONSTANT + INPUT
```

## Cost expectation

Warm starts remove re-setup tokens from every recurring dispatch, typically saving 20-50% per run and making many small jobs economically viable.
