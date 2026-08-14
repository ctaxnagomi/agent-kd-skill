---
{
  "name": "sub-handoff",
  "description": "Pass work between sub-agents with an explicit handoff artifact: state, next task, constraints, and open questions. No conversational memory is shared, so the handoff is the only contract. Trigger keywords: handoff, handoff protocol, pass work, context transfer, sub-agent handoff."
}
---

# Sub-agent handoff protocol

An efficiency skill for passing work from one sub-agent to another without shared conversational memory. The handoff artifact replaces the missing shared context.

## Use case

Use this skill when:

- Sub-agents run in isolated contexts and must chain work (A's output feeds B).
- You want to resume work later from a clean context.
- The parent delegates a pipeline of dependent stages.
- Repeated "here's what happened so far" re-explanation is wasting tokens.

## Core principle

Handoff is a data transfer, not a re-explanation. One artifact carries: where we are, what is done, what is next, and what is still open — so the next sub-agent starts exactly at that point.

## Playbook

1. **Write the handoff artifact** — a compact structured block, not a narrative.
2. **Include state** — files touched, decisions made, values produced.
3. **Name the next task precisely** — the single next deliverable.
4. **List constraints that persist** — budgets, formats, tools, non-goals.
5. **Record open questions** — unresolved items the next stage must answer.
6. **Append it to the next prompt** — the child's context is: handoff + its own slice.
7. **Verify the chain** — each handoff must be sufficient to start the next stage unaided.

## Handoff artifact shape

```md
## HANDOFF
State: <done items with files/values>
Next: <the single next deliverable>
Constraints: <persistent budgets/formats/tools>
Open: <unresolved questions for this stage>
```

## Rules

- No "remember from before" — the artifact is the memory.
- Handoffs are append-only; a new artifact supersedes, never edits history.
- If the next stage needs context not in the artifact, the artifact was incomplete.
- Keep the artifact small; a bloated handoff is a failed compression.

## Cost expectation

Explicit handoff artifacts eliminate re-explanation loops, typically saving 40-70% of inter-stage tokens and making pipelines resumable from clean contexts.
