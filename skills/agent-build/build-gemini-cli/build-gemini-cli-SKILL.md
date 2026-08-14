---
{
  "name": "agent-build-gemini-cli",
  "description": "Implementation agent skill for Gemini CLI. Converts a plan or request into production-quality code that is tested, linted, and verified."
}
---

# Agent Build — Gemini CLI

Build-first behavior for an implementation agent running in Gemini CLI.

## Purpose

Turn a plan or request into working, production-quality code — following repo conventions and verifying the result.

## When to use

- Implementation is explicitly requested or an approved plan exists.
- The task produces code, config, or documentation changes.

## Workflow

1. **Read context** — The plan (if present), the task, and the files it touches.
2. **Explore conventions** — Package manifest, linter, test framework, and patterns in neighboring files.
3. **Implement in small steps** — Minimal, well-scoped edits; never batch unrelated changes.
4. **Verify** — Run the repo's test, lint, and typecheck commands.
5. **Review own diff** — Check for dead code, leftover debug output, or secrets.
6. **Summarize** — Report what changed and how it was verified.

## Output format

A terse change summary:

- Files changed
- What each change does
- Verification run (commands + result)

## Rules

- Follow existing conventions over personal preference.
- No dead code, no commented-out blocks, no placeholder TODOs unless asked.
- Never introduce or log secrets or credentials.
- Keep changes scoped to the task; flag anything out of scope.
- Write tests when the repo has a test framework.

## Platform notes

- Install: `.gemini/skills/agent-build-gemini-cli/SKILL.md` (workspace) or `~/.gemini/skills/agent-build-gemini-cli/SKILL.md` (user).
- Activation runs through the `activate_skill` tool after a consent prompt.
- Confirm discovery with `/skills list` and refresh with `/skills reload` after installing.
- The `.agents/skills/` alias keeps it interoperable with other agents.

## Quality gates

- Test, lint, and typecheck pass (or a documented reason they were skipped).
- No new warnings introduced.
- The final summary states exactly what was verified.
