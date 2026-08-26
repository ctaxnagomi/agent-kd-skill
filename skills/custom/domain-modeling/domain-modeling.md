---
{
  "name": "domain-modeling",
  "description": "Create and maintain a shared domain vocabulary and model that all code and tests reference. Use when establishing domain vocabulary, creating CONTEXT.md, or aligning code with business concepts.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Domain Modeling

Create and maintain a shared domain vocabulary and model that all code and tests reference.

## Process

1. **Extract terms** — What domain concepts appear in the conversation?
2. **Define precisely** — Each term gets a clear, unambiguous definition.
3. **Map relationships** — How do concepts relate to each other?
4. **Update CONTEXT.md** — Write the glossary where the agent can reference it.
5. **Align code** — Ensure code structure reflects the domain model.

## Rules

- Every domain concept gets exactly one name.
- Definitions are precise and unambiguous.
- The glossary is the source of truth for vocabulary.
- Code should use domain terms, not technical jargon.

## Credit

This skill is based on the work of **Matt Pocock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills](https://github.com/mattpocock/skills). Licensed under MIT.
