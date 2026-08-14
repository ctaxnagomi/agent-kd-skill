---
{
  "name": "micro-reuse",
  "description": "Reuse proven micro-agents across tasks by keeping them versioned, documented, and registered. A library of vetted micro-agents compounds in value. Trigger keywords: reuse, library, registry, proven agents, versioned, share micro-agents, DRY agents."
}
---

# Micro-agent reuse

An efficiency skill for building a library of proven, versioned micro-agents so good functions are reused instead of rebuilt.

## Use case

Use this skill when:

- The same function keeps being re-created ad hoc.
- You want a canonical, tested version of common micro-tasks.
- New agents should reuse existing schemas and patterns.
- You're paying to re-justify designs already proven elsewhere.

## Core principle

A micro-agent is a reusable component once it's versioned, documented, and registered. Reuse beats re-creation: the second, third, and hundredth use cost almost nothing in design.

## Playbook

1. **Build one well** — single purpose, strict schema, minimal prompt (the other micro-* skills).
2. **Version it** — prompt/schema changes bump the version; consumers pin it.
3. **Document the contract** — input, output, limits, and one example.
4. **Register it** — add to the library/routing table with its capability signature.
5. **Prove it** — a small test set that must pass before promotion to "proven."
6. **Reuse, don't fork** — extend via composition (micro-composition), not by copying.

## Rules

- A library entry without a contract and a test is a liability, not an asset.
- Versioning is mandatory; unversioned reuse drifts silently.
- Proven agents get reused; experimental ones stay out of hot paths.
- When a new task resembles a proven agent, reuse it; only split when the schema diverges.

## Registry entry shape

```json
{ "name": "classify", "v": "3.1", "in": { "text": "string" },
  "out": { "label": "string" }, "tests": "passing", "owner": "core" }
```

## Cost expectation

Reuse compounds: every duplicated design you eliminate saves its full design, test, and calibration cost on each new task, typically cutting micro-agent development cost 30-60% as the library grows.
