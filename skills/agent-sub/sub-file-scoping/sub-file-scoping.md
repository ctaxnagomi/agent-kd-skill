---
{
  "name": "sub-file-scoping",
  "description": "Bind each sub-agent to the smallest set of files it needs via explicit path and glob whitelists. No general read access means no accidental context drag. Trigger keywords: file scoping, restrict files, path whitelist, glob limit, read access, scope to files."
}
---

# Sub-agent file scoping

An efficiency skill for restricting which files a sub-agent may read or touch, keeping its context small and its blast radius contained.

## Use case

Use this skill when:

- A sub-agent only needs a few files but could browse the whole repo.
- Read access to unrelated files inflates context and invites scope creep.
- You want to run risky operations (edits, searches) in a narrow sandbox.
- Parallel agents must not collide on files.

## Core principle

File access is a whitelist. The prompt or environment grants exactly the paths the task owns; anything else is off-limits. Scoping shrinks context and prevents cross-agent interference.

## Playbook

1. **Enumerate the needed paths** — the inputs, the outputs, the area of responsibility.
2. **Express them as a whitelist** — exact paths plus minimal globs.
3. **Grant the smallest permissions** — read-only when write is not required.
4. **State the boundary in the prompt** — "you may touch only these paths."
5. **Prefer environment-level enforcement** — tool config, sandbox, or permission rules over prompt promises.
6. **Audit the whitelist** — a path in the list that's never touched is a clue the scope is too wide.

## Example scoping line

```md
Allowed paths:
- read  : src/auth/**, package.json
- write : src/auth/**
Everything else: out of scope. Read only these; no repo-wide search.
```

## Rules

- Whitelist over blacklist — always.
- Pair file scoping with sub-task decomposition so each agent owns a non-overlapping set.
- Keep globs minimal; a broad glob negates the point.
- Log accessed paths to detect scope drift.

## Cost expectation

Path-level scoping eliminates whole-repo context drag, typically cutting per-sub-agent context 40-80% and preventing cross-agent edit collisions.
