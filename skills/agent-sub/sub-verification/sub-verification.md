---
{
  "name": "sub-verification",
  "description": "Add a cheap verification pass to sub-agent output: checks, edge cases, and sanity rules that run before the parent accepts the result. Verify by running checks, not by re-reading. Trigger keywords: verification sub-agent, check work, validate output, sanity check, QA pass."
}
---

# Sub-agent verification

An efficiency skill for verifying sub-agent output with a lightweight, rule-based pass instead of an expensive full re-review.

## Use case

Use this skill when:

- A sub-agent's output will be consumed downstream and errors compound.
- You want a guarantee of shape, coverage, or correctness before merging.
- Re-reviewing the whole work duplicates the original cost.
- You need deterministic acceptance criteria for parallel children.

## Core principle

Verification runs cheap checks against the output contract: does it match the schema, cover the required items, and pass the stated rules? Only failures trigger deeper investigation.

## Playbook

1. **Define the acceptance contract** — schema, required fields, required coverage, explicit rules.
2. **Run shape checks first** — parse the output; malformed output fails immediately.
3. **Run coverage checks** — every required item present? every unit addressed?
4. **Run rule checks** — the specific invariants the task stated.
5. **Verify by running, not reading** — execute tests, lint, parse, count; avoid eyeball passes.
6. **Return a verdict** — pass, or a minimal list of specific failures.

## Rules

- Checks are cheap and mechanical; deep re-review is reserved for failures.
- The parent decides on failures — verification reports, it doesn't fix silently.
- Include negative checks: things that must NOT appear.
- Reuse the check set across similar sub-agent tasks.

## Example check block

```md
Verify: (1) output is valid JSON; (2) every input file has an entry;
(3) no TODO/FIXME markers; (4) no file outside the allowed paths.
Return: { pass: bool, failures: [ { check, detail } ] }
```

## Cost expectation

Mechanical verification costs a fraction of a full re-review and catches most merge-time failures early, typically saving 20-50% of downstream debugging while raising output reliability.
