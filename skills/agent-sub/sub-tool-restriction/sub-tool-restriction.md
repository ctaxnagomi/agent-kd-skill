---
{
  "name": "sub-tool-restriction",
  "description": "Give each sub-agent only the tools its task needs. Tool whitelists reduce attack surface, prevent off-task exploration, and keep action logs small. Trigger keywords: tool restriction, limit tools, tool whitelist, disable tools, minimal tools."
}
---

# Sub-agent tool restriction

An efficiency skill for granting each sub-agent the smallest useful tool set, so it stays on task and spends less on exploration.

## Use case

Use this skill when:

- A sub-agent has access to tools far beyond what its task requires.
- Off-task tool use (web searches, shell exploration) inflates cost and risk.
- You run untrusted or tightly-scoped delegation.
- Tool output volume (page dumps, big commands) dominates the context.

## Core principle

Tools are granted per task. A read-only, file-local sub-agent should not have shell or browser access. Restriction makes behavior predictable and cheap.

## Playbook

1. **Derive tools from the deliverable** — the minimal set that can produce the output.
2. **Classify need** — read vs write, local vs network, safe vs dangerous.
3. **Whitelist explicitly** — list allowed tools; everything else is denied.
4. **Prefer the safe tier** — read-only views, dry runs, sandboxed commands.
5. **Pair with file scoping** — tools without path limits still allow scope creep.
6. **Review after the run** — any allowed-but-unused tool is a candidate to cut.

## Tool tiering example

| Tier | Allowed | Use for |
| --- | --- | --- |
| Analyze | read, grep, list | pure analysis |
| Edit | + write/rename scoped to paths | code changes |
| Verify | + test/lint runners | checked edits |
| Full | everything | only when justified |

## Rules

- Whitelist, never "just don't use these."
- Deny by default for network and execution tools.
- A restriction that blocks the deliverable is a scoping bug — fix the tool list, not the rules.
- Log tool calls; restriction should be auditable.

## Cost expectation

Tool restriction removes off-task exploration and giant tool dumps, typically cutting per-sub-agent context 30-60% and reducing risk substantially.
