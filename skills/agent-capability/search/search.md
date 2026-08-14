---
{
  "name": "search",
  "description": "Efficient search and research capability. Locate files, symbols, documentation, and web resources quickly using the right tools in the right order. Use for searching, researching, or finding anything."
}
---

# Search

A capability for finding things fast: in the codebase, in documentation, and on the web — with the minimum number of steps and the least wasted context.

## Use case

Use this skill when a task involves:

- Finding a file, symbol, function, or definition in a codebase.
- Locating documentation, examples, or answers on the web.
- Checking whether a library, API, or feature already exists before writing new code.
- Verifying a behavior, version, or breaking change in a dependency.
- Reducing context cost while searching.

## Core principle

Search tools are cheapest first. Start with the fastest, most targeted tool that can answer the question; escalate only when needed.

## Workflow

1. **Guess the shape** — Filename patterns (`glob`), then content patterns (`grep`) with tight regexes.
2. **Codebase first** — Search locally before the web; the repo is the source of truth.
3. **Web for APIs/docs** — For library questions, fetch official docs or real-world examples over generic pages.
4. **Verify** — Read the matched lines or file section; never act on an unverified match.
5. **Report** — Cite `file_path:line` for code hits and the source URL for web hits.

## Rules

- Prefer `grep` with an exact or anchored regex over broad scans; search whole words when possible.
- Use `glob` to find files by name before grepping contents.
- Cap result counts; a handful of precise matches beats a wall of noise.
- Don't re-search what you already found — keep answers in context and move on.
- Never guess file paths or API signatures; confirm by reading the actual source or docs.

## Quality gates

- Every reported finding includes a concrete path (file:line or URL).
- The search returned in as few tool calls as possible for the question.
- Results were verified against the source, not assumed from names.
