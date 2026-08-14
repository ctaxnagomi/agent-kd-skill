---
{
  "name": "deep-synthesis",
  "description": "Compress a deep run's findings into a single decision-ready answer: key findings, confidence, contradictions, and open questions. Output-shaped for the consumer. Trigger keywords: synthesis, final answer, report, summary output, decision-ready, compress findings."
}
---

# Deep-agent synthesis

An efficiency skill for turning a deep run's accumulated findings into one decision-ready answer that the consumer can act on.

## Use case

Use this skill when:

- A deep run ends with scattered notes that need one coherent answer.
- The consumer needs the conclusion, the confidence, and the caveats.
- You want to avoid a second agent having to digest the whole run.
- The answer must be shaped for a specific decision or artifact.

## Core principle

Synthesis is compression with an output shape. The final answer leads with the conclusion, states confidence and contradictions, and links to evidence — so the consumer gets the answer, not the process.

## Playbook

1. **Restate the core question** — the answer must close the question it was asked.
2. **Lead with the conclusion** — one block, before nuance.
3. **State confidence explicitly** — what is verified, corroborated, or inferred.
4. **List contradictions openly** — unresolved conflicts are part of the answer.
5. **Cite by key** — every claim traces to the citation trail.
6. **Surface open questions** — what would raise confidence further.
7. **Shape for the consumer** — a decision gets options; a report gets structure.

## Rules

- The conclusion comes first; evidence follows it.
- Confidence is stated, never implied by tone.
- Contradictions are surfaced, not smoothed (see deep-contradiction).
- The synthesis reads notes and the trace — never re-reads sources.

## Synthesis shape

```md
## ANSWER
<conclusion, first>
## CONFIDENCE
<verified / corroborated / inferred>
## CONTRADICTIONS
<open conflicts with both sides>
## EVIDENCE
<keyed references>
## OPEN
<what would improve confidence>
```

## Cost expectation

A shaped synthesis delivers the answer in a fraction of the run's footprint, cutting consumer-side re-reading 50-80% and making the deep run's value immediate.
