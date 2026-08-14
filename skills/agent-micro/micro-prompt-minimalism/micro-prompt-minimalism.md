---
{
  "name": "micro-prompt-minimalism",
  "description": "Strip a micro-agent prompt to the fewest tokens that still produce correct output. Minimal prompts load faster, cost less, and drift less. Trigger keywords: minimal prompt, prompt reduction, shorten prompt, token minimalism, compact prompt."
}
---

# Micro-agent prompt minimalism

An efficiency skill for reducing micro-agent prompts to their minimum viable size without losing output correctness.

## Use case

Use this skill when:

- Micro-agent prompts carry boilerplate, examples, or instructions that are rarely used.
- You run the same micro-agent at high volume and every token multiplies.
- A prompt changed behavior for the worse — often a sign of drift from bloat.
- You want prompts that are easy to review and version.

## Core principle

Every token in a prompt costs on every call. A minimal prompt keeps only what changes behavior: the function, the contract, and the few constraints that matter.

## Playbook

1. **Write the full prompt first** — then reduce; never start minimal and add.
2. **Remove boilerplate** — greetings, fluff, role framing that doesn't change output.
3. **Keep the contract** — input schema, output schema, and the hard rules.
4. **Keep one example max** — one canonical in/out pair if the schema is non-obvious.
5. **Move lore to tooling** — conventions that rarely change belong in code, not the prompt.
6. **A/B test reductions** — shrink until output quality drops, then keep one step back.

## Rules

- Correctness is the floor: never cut so far that output quality falls.
- Schema and hard rules are non-negotiable; prose and examples are negotiable.
- Version prompts and compare before/after on a fixed test set.
- A prompt you can't justify token-by-token can be reduced.

## Reduction order

1. Cut boilerplate and framing.
2. Compress examples to one.
3. Merge constraints into the schema.
4. Move static context to cached/tooled form.

## Cost expectation

Minimal prompts typically cut per-call tokens 30-60% and, because they're smaller, also reduce drift and make behavior easier to audit.
