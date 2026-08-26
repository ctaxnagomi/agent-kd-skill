---
{
  "name": "to-questionnaire",
  "description": "Transform a conversation into a structured questionnaire that captures all decisions and requirements. Use when a conversation has produced many decisions that need formalizing into actionable specs.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# To Questionnaire

Transform a conversation into a structured questionnaire that captures all decisions and requirements.

## Use case

Use this skill when:
- A conversation has produced many decisions that need formalization
- You need to capture requirements in a structured format
- Converting informal discussion into actionable specs

## Process

1. **Review the conversation** — Extract all decisions, requirements, and constraints.
2. **Group by topic** — Organize into logical sections.
3. **Formulate questions** — Each question should be specific and answerable.
4. **Add types** — Boolean, text, choice, etc.
5. **Output questionnaire** — Structured format ready for use.

## Rules

- Every decision from the conversation should become a question.
- Questions should be specific, not vague.
- Include context for each question.
- Respect the order of decisions (dependencies).

## Credit

This skill is based on the work of **Matt Pocock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills](https://github.com/mattpocock/skills). Licensed under MIT.
