---
{
  "name": "handoff",
  "description": "Hand off context from one agent session to another without losing state. Use when a session is running out of context, work needs to continue in a fresh session, or transitioning between agent roles.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Handoff

Hand off context from one agent session to another without losing state.

## Use case

Use this skill when:
- A session is running out of context
- Work needs to continue in a fresh session
- Transitioning between different agent roles

## Process

1. **Summarize current state** — What's been done, what's pending.
2. **Document decisions** — Key architectural and design choices made.
3. **Identify blockers** — What's preventing progress.
4. **Write handoff notes** — Clear, concise notes for the next session.
5. **Point to artifacts** — Links to files, branches, or PRs.

## Rules

- Be concise but complete.
- Include enough context that the next session can start immediately.
- Don't assume the next session has any prior context.
- Write for an AI agent, not a human reader.

## Credit

This skill is based on the work of **Matt Peacock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills](https://github.com/mattpocock/skills). Licensed under MIT.
