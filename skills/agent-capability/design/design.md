---
{
  "name": "design",
  "description": "UI/UX design capability for agents. Produce cohesive design systems (tokens, typography, spacing, color, components), wireframes, and polished visual output in code. Use for design, theming, UI, or styling requests."
}
---

# Agent Design

A design-first capability that lets an agent act as a UI/UX designer: turning product requirements into a coherent visual system and code output, without a designer in the loop.

## Use case

Use this skill when a task involves:

- Designing or redesigning a user interface (page, dashboard, component).
- Creating or applying a design system / theme (tokens, palettes, typography).
- Translating a brand, logo, or reference site into a matching visual language.
- Producing wireframes or mockups that must be consistent and reviewable.
- Making tasteful, opinionated UI decisions when the user has no specific style.

## Core principle

Design is a system, not a single screen. Define reusable decisions once (tokens + layout + component rules), then apply them everywhere. Consistency beats cleverness.

## Workflow

1. **Clarify** — Ask about audience, brand/reference, and constraints only when truly ambiguous.
2. **Reference** — If the user supplies a logo, site, or palette, extract its exact colors and typography before inventing anything.
3. **Tokens first** — Define design tokens (colors, fonts, radii, spacing, borders, elevation) before any component.
4. **Layout** — Establish grid, rhythm, and responsive breakpoints.
5. **Components** — Build from primitives (button, input, card) to composed sections.
6. **Polish** — States (hover/focus/active), transitions, empty states, motion — with reduced-motion support.
7. **Review** — Show the result and list the decisions made so the user can confirm or redirect.

## Rules

- Extract reference colors verbatim (e.g. `rgb(7,174,0)` → `#07AE00`) — never approximate a brand palette.
- Keep contrast accessible; never rely on color alone to convey meaning.
- Prefer semantic CSS variables over hard-coded values scattered in components.
- Respect `prefers-reduced-motion`; animations are garnish, not content.
- If the user already has a theme, extend it — do not silently replace it.

## Quality gates

- Every color/space/type decision traces back to a token or a stated reference.
- The design is responsive from mobile to desktop.
- The result includes empty, hover, focus, and disabled states.
