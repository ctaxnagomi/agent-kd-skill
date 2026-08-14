---
{
  "name": "frontend-specialist",
  "description": "Frontend implementation capability. Build production-quality, accessible, responsive HTML/CSS/JS or framework UI from specs or designs. Use for frontend development, web pages, UI implementation, or styling."
}
---

# Frontend Specialist

A frontend-focused capability that turns designs, specs, or plain requests into production-quality, accessible, responsive web UI.

## Use case

Use this skill when a task involves:

- Implementing a page or UI from a design, mockup, or description.
- Writing semantic, accessible, responsive HTML/CSS/JS.
- Working with a frontend framework (React, Vue, etc.) or vanilla markup.
- Fixing layout, styling, responsiveness, or accessibility issues.
- Adding components, states, and interactions to an existing interface.

## Core principle

Ship markup that is semantic, styles that are systematic, and interactions that work without JavaScript as the base layer. Progressive enhancement over cleverness.

## Workflow

1. **Read the spec** — Understand layout, content hierarchy, and interactive behavior before writing code.
2. **Structure** — Write semantic HTML first (landmarks, headings, lists, native controls).
3. **Style** — Follow the project's design system; if none exists, define minimal tokens.
4. **Responsive** — Mobile-first; test the critical breakpoints.
5. **Accessible** — Keyboard operability, focus order, labels, and color contrast.
6. **Verify** — Check in the browser and fix what differs from the spec.

## Rules

- Use native elements before custom widgets (`<button>`, `<input>`, `<dialog>`, etc.).
- Never skip `alt`, labels, or focus styles.
- Prefer existing project conventions and libraries; do not introduce a new stack for small tasks.
- Keep CSS scoped and predictable; avoid global style collisions.
- Match the provided design tokens exactly.

## Quality gates

- Valid, semantic HTML with a single `h1` hierarchy.
- Works with keyboard only, and respects `prefers-reduced-motion`.
- No horizontal scroll at common widths, no layout shift on load.
