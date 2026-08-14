---
{
  "name": "skill",
  "description": "Meta-skill authoring capability. Write, structure, and validate SKILL.md files for AI agents, including YAML frontmatter, discoverability, and platform compatibility. Use for creating, editing, or reviewing agent skills."
}
---

# Skill Authoring

A meta-capability for writing high-quality SKILL.md files that agents can discover, load, and follow reliably across platforms.

## Use case

Use this skill when a task involves:

- Creating a new agent skill from scratch.
- Editing or restructuring an existing SKILL.md.
- Making a skill discoverable (description match) and portable across agents.
- Reviewing skills for missing frontmatter, ambiguous instructions, or platform issues.

## Core principle

A skill is a self-contained, discoverable instruction file: a minimal YAML frontmatter that advertises it, and a body that tells the agent exactly what to do.

## Structure

```markdown
---
name: my-skill
description: One sentence on what it does and when to use it.
---

# My Skill

Purpose + use case, then a concrete workflow.
```

## Workflow

1. **Name it** — One word or hyphenated slug, matching the install folder name.
2. **Describe it** — A sentence covering what it does AND when the agent should trigger it (keywords help).
3. **Write the body** — Purpose → Use case → Workflow → Rules → Verification/quality gates.
4. **Keep it scannable** — Short sections, numbered steps, concrete rules over abstractions.
5. **Validate** — Check frontmatter keys, description quality, and that instructions are unambiguous.

## Rules

- Frontmatter must include `name` and `description`; platform extras (allowed-tools, paths, etc.) are optional.
- Keep the description under ~200 characters; it drives auto-discovery.
- Write imperative, testable instructions — "run X", "if Y, do Z" — not essays.
- Avoid vague words ("usually", "maybe", "nice to have") in critical steps.
- Include a use case section so the skill self-advertises when it applies.

## Quality gates

- The description alone tells an agent when to load the file.
- A new agent reading only this file could execute the skill without asking questions.
- The skill works across platforms that read the open SKILL.md standard.
