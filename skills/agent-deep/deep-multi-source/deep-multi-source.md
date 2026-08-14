---
{
  "name": "deep-multi-source",
  "description": "Cross-check findings across independent sources, prioritizing the best evidence and flagging weak confirmations. Multi-source depth without reading duplicates. Trigger keywords: multi-source, cross-check, triangulation, corroborate, independent sources."
}
---

# Deep-agent multi-source

An efficiency skill for deepening confidence through independent sources while avoiding redundant reads.

## Use case

Use this skill when:

- A claim's importance justifies checking more than one source.
- Sources echo each other and you need real independence.
- You want to detect and prune weak or fabricated confirmations.
- The answer's confidence must be stated, not implied.

## Core principle

Confidence comes from independent corroboration, not from repetition count. Two sources that copy each other confirm once; two independent sources confirm twice.

## Playbook

1. **Identify the claims that matter** — high-stakes claims justify cross-checks.
2. **Require independence** — different origins, not different copies of the same origin.
3. **Rank evidence quality** — primary > direct observation > reliable secondary > echo.
4. **Note agreements and disagreements** — where sources converge and diverge.
5. **Flag weak confirmations** — corroboration that is really one source echoed.
6. **State confidence** — how many independent sources, and their quality.

## Rules

- Independence beats count: two echoed sources ≠ two sources.
- Every confirmation records which source, so the parent can audit it.
- Disagreement between strong sources is a finding, not a failure.
- Don't keep adding sources once the claim is firmly established (see stop conditions).

## Corroboration levels

| Level | Meaning |
| --- | --- |
| Single source | claim stands alone, low confidence |
| Independent x2 | cross-confirmed, decent confidence |
| Independent x3+ | strongly confirmed |
| Echoed only | same origin counted once |

## Cost expectation

Independence-based cross-checking reads fewer sources for the same confidence, typically saving 20-50% of research tokens while making confidence honest.
