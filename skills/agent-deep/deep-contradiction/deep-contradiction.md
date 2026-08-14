---
{
  "name": "deep-contradiction",
  "description": "Surface and resolve contradictory evidence explicitly instead of smoothing it over. Contradictions get flagged, weighted, and only then resolved. Trigger keywords: contradiction, conflicting evidence, disagreement, resolve conflict, conflicting sources."
}
---

# Deep-agent contradiction handling

An efficiency skill for dealing with contradictory evidence in deep investigations without hand-waving.

## Use case

Use this skill when:

- Two or more sources disagree.
- The disagreement could change the answer.
- You're tempted to average or smooth the conflict.
- The parent needs to know how much weight to put on each side.

## Core principle

Contradictions are findings. They are surfaced explicitly, weighted by source quality and relevance, and resolved by evidence — never by averaging or ignoring.

## Playbook

1. **Record the contradiction** — the claim, both sides, and each side's sources.
2. **Weight each side** — by source authority, recency, independence, and methodological strength.
3. **Check for false conflict** — different scopes, dates, or definitions can explain a "disagreement."
4. **Look for a reconciling fact** — a third source or condition that explains both sides.
5. **Resolve or hold** — if one side wins on weight, say so and why; if not, report both with the open question.
6. **Never average** — a midpoint that matches no source is a fabricated answer.

## Rules

- Every contradiction is visible in the output, even resolved ones.
- Weighting is explicit and auditable (why source A outweighed B).
- Distinguish "disagrees" from "appears to disagree under different conditions."
- Unresolvable contradictions stay open with the decision recorded as uncertain.

## Contradiction shape

```md
CLAIM: X
FOR:  source A (tier A, 2026)
AGAINST: source B (tier B, 2024)
RECONCILE: X holds only when <condition>
VERDICT: X with condition / open
```

## Cost expectation

Explicit contradiction handling prevents smooth-but-wrong answers and re-reads, typically improving accuracy significantly at modest extra cost — and it never wastes tokens re-litigating settled conflicts.
