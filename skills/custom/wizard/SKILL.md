---
{
  "name": "wizard",
  "description": "Generate an interactive bash wizard that walks a human through steps only they can perform. Use when provisioning infrastructure, setting up credentials, or running a one-off migration.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Wizard

Generate an interactive bash wizard that walks a human through steps only they can perform.

## Use case

Use when provisioning infrastructure, setting up credentials or CI secrets, walking an unfamiliar third-party dashboard, or running a one-off migration.

## Process

1. **Scope the procedure** — Every manual step and captured value.
2. **Map each stage's journey** — Precise path a human follows.
3. **Author the wizard** — Using the template helpers.
4. **Verify and hand off** — Syntax check, permissions, hand off.

## Rules

- Open the URL before asking for its value.
- Use ask_secret for anything secret.
- Confirm before any irreversible action.
- Don't run end-to-end yourself.

## Credit

This skill is based on the work of **Matt Peacock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills](https://github.com/mattpocock/skills). Licensed under MIT.
