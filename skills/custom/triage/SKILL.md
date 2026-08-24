---
{
  "name": "triage",
  "description": "Move issues and external PRs through a state machine of triage roles, categorise, verify, grill if needed, and write agent-ready briefs. Use when triaging issues or managing a project issue tracker.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Triage

Move issues and external PRs through a state machine of triage roles, categorise, verify, grill if needed, and write agent-ready briefs.

## Roles

Two **category** roles: bug, enhancement

Five **state** roles: needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix

## Process

1. **Show what needs attention** — Unlabeled, needs-triage, needs-info with activity.
2. **Triage a specific issue** — Gather context, recommend, verify, grill if needed.
3. **Apply the outcome** — Post brief, mark ready, or close.

## Rules

- Every comment must start with a disclaimer about AI generation.
- Every triaged issue gets exactly one category and one state.
- Verify claims before grilling.
- Use .out-of-scope/ for rejected enhancements.

## Credit

This skill is based on the work of **Matt Peacock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills](https://github.com/mattpocock/skills). Licensed under MIT.
