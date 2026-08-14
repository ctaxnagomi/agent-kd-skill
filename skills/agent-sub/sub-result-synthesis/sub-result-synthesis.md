---
{
  "name": "sub-result-synthesis",
  "description": "Merge and compress sub-agent outputs into a single coherent deliverable without re-reading every source. Synthesize by schema, dedupe, and cite each sub-agent. Trigger keywords: result synthesis, merge sub-agent results, aggregate outputs, combine results, synthesis."
}
---

# Sub-agent result synthesis

An efficiency skill for turning many sub-agent outputs into one final deliverable with minimal re-reading of source material.

## Use case

Use this skill when:

- Multiple sub-agents return partial results that must be combined.
- The same fact or finding appears in several outputs.
- You need a single artifact (report, plan, codebase state) from many children.
- Re-reading every sub-agent's inputs would duplicate all the work.

## Core principle

Synthesis works on the sub-agent outputs, not their sources. If each output is schema-shaped, merging is mechanical; only genuine conflicts need deeper investigation.

## Playbook

1. **Require schema-shaped outputs** — each sub-agent returns structured fields, not prose dumps.
2. **Merge by key** — line up results by the shared schema (file, question, section).
3. **Dedupe by value, not by source** — the same claim from three agents appears once.
4. **Keep provenance** — every merged item carries which sub-agent produced it.
5. **Flag, don't resolve, conflicts blindly** — contradictory findings get a conflict marker and a resolution pass.
6. **Compress to the deliverable** — strip per-agent framing; keep findings, decisions, and action items.

## Rules

- Never re-read sub-agent inputs to synthesize; the outputs are the contract.
- Preserve provenance per item so conflicts and doubts are traceable.
- Summarize each sub-agent in one line for the audit trail.
- Keep the merged shape identical to the consumers' expectation.

## Conflict resolution ladder

1. Mechanical merge by schema key.
2. Dedupe identical values across agents.
3. Flag contradictions with both provenance lines.
4. Escalate only true conflicts to a re-check (bounded, budgeted).

## Cost expectation

Schema-driven synthesis avoids re-reading sources, typically saving 50-70% of the merge pass and producing a cleaner, provenance-tagged deliverable.
