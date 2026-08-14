---
{
  "name": "deep-verification",
  "description": "Verify key facts, quotes, and numbers in a deep run before they enter the final answer. Cheap targeted checks beat re-research. Trigger keywords: verify facts, fact check, verify quote, verify number, verification pass."
}
---

# Deep-agent verification

An efficiency skill for verifying the load-bearing facts of a deep run before they go into the final answer.

## Use case

Use this skill when:

- The answer rests on specific quotes, numbers, or named claims.
- A wrong fact would materially damage the deliverable.
- You want claims marked verified vs unverified in the output.
- Sources were skimmed (tier B/C) and key facts need a re-check.

## Core principle

Verification targets the load-bearing facts only. Every final claim is marked verified or unverified, and verification is done by re-checking the original source — not by a second paraphrase.

## Playbook

1. **List the load-bearing facts** — quotes, numbers, names, dates that the answer depends on.
2. **Re-check each at its source** — confirm the exact wording/figures, not a paraphrase.
3. **Check the context** — is the quote used in a way the source supports?
4. **Mark the verdict** — verified / verified-with-nuance / failed / unverifiable.
5. **Carry the verdicts into the output** — confidence travels with the claims.
6. **Drop or flag failures** — a claim that fails verification is downgraded, not silently kept.

## Rules

- Verify only what carries the answer; full re-verification is re-research.
- Quote verification checks exact words, not meaning.
- A verified number carries its source and as-of date.
- Failed verification is a finding; report it, don't delete it.

## Verdict labels

| Verdict | Meaning |
| --- | --- |
| VERIFIED | exact match at source |
| VERIFIED* | matches with a caveat (dated, conditional) |
| FAILED | source does not support the claim |
| UNVERIFIABLE | no accessible source |

## Cost expectation

Targeted verification is a fraction of re-research and prevents the costliest failure mode of deep runs — a confident wrong answer — typically saving 10-40% of total run cost in rework avoidance.
