---
{
  "name": "deep-iterative-refinement",
  "description": "Refine a deep-agent investigation in rounds: run a bounded pass, identify gaps, run the next pass on the gaps only. Depth grows where it pays off. Trigger keywords: iterative refinement, successive passes, deepen research, gap-driven, refinement rounds."
}
---

# Deep-agent iterative refinement

An efficiency skill for deepening a deep run in bounded rounds rather than attempting everything in one unbounded pass.

## Use case

Use this skill when:

- One pass can't reach the depth the question deserves.
- Early findings reveal which areas need more digging.
- You want to control spend per round instead of committing blind.
- The answer improves fastest by fixing the biggest gap next.

## Core principle

Depth is grown iteratively. Each round is bounded and targeted: summarize what is known, identify the largest gap, run the next pass on that gap, repeat until saturation or budget.

## Playbook

1. **Run a bounded first pass** — breadth-first, shallow, cheap.
2. **Summarize what's known** — a tight state-of-knowledge block.
3. **Score the gaps** — which missing pieces most lower answer confidence.
4. **Pick the largest gap** — one target for the next round.
5. **Run a targeted pass** — depth on that gap only, bounded.
6. **Re-summarize and re-score** — loop until no gap is worth the spend.
7. **Stop at the margin** — when the next round's expected gain is below its cost.

## Rules

- One gap per round; shotgun rounds waste budget.
- Keep the state-of-knowledge block tight — it's the working memory.
- Every round has a budget; rounds are not open-ended.
- Stop when gaps are low-value or evidence is saturated.

## Round shape

```md
KNOWN: <tight summary>
GAPS: <scored list>
NEXT: <largest gap only>
```

## Cost expectation

Gap-driven refinement concentrates spend where it moves confidence most, typically matching naive full-depth research at 50-75% of the tokens.
