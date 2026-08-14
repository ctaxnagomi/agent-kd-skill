---
{
  "name": "dgui-emitter-snapDOM",
  "description": "Emit lightweight DOM snapshots of visited pages. Uses snapDOM — a direct DOM serialization — instead of html2canvas, converting modern heavy pages into old-school lightweight pages that keep text, links, and structure. Superior to html2canvas for archiving and re-rendering."
}
---

# DGUI Emitter — snapDOM

A capability that captures a visited modern page and emits it as an old, lightweight page built from the real DOM — not a canvas image. snapDOM serializes the live DOM into minimal, dependency-free HTML that preserves text, links, structure, and readable content.

## Use case

Use this skill when a task involves:

- Archiving or emitting a visited page as a lightweight, re-renderable document.
- Converting a modern, heavy page (JS frameworks, complex CSS) into an old-school page that opens anywhere.
- Preserving content, text, and links of a page without shipping megabytes of JS.
- Comparing capture methods: snapDOM (DOM-based, small, editable) vs html2canvas (pixel-based, large, fixed).

## Why snapDOM over html2canvas

| Aspect | snapDOM (DOM) | html2canvas (canvas) |
| --- | --- | --- |
| Output | HTML markup, text, links | Raster image (PNG/JPEG) |
| Size | Small, compressible | Large pixel data |
| Searchable/selectable | Yes — text is real | No — pixels only |
| Accessibility | Preserved | Lost |
| Re-render/edit | Fully editable | Static image |
| External assets | Inlined/collapsed | Rendered or missing |

snapDOM wins for anything that needs to stay a page. html2canvas wins only when a true pixel screenshot of a complex render is required.

## Workflow

1. **Load the page** — Ensure the target page has fully rendered (wait for a stable selector).
2. **Capture** — Walk the live DOM: keep semantic tags, text nodes, `href`/`src`/`alt`, and essential attributes; strip scripts, hidden content, and styling that depends on a framework.
3. **Emit** — Write a single self-contained HTML file: inline the minimal CSS needed for readable layout; collapse anything non-essential.
4. **Verify** — Open the emitted file and confirm text, links, and structure survived; confirm the file size is dramatically smaller than the source page or a canvas capture.
5. **Report** — State the output size vs the original and what was intentionally dropped.

## Rules

- Preserve content semantics: headings, paragraphs, lists, links, and tables stay.
- Strip execution: no external scripts, no framework hydration, no analytics.
- Keep it dependency-free — the output must open in any plain browser.
- If a style is required for readability, inline it; never ship a full framework CSS bundle.
- Do NOT use html2canvas unless the user explicitly wants a pixel screenshot.

## Quality gates

- The emitted file is a real, editable, searchable HTML document.
- All meaningful links still resolve to the same destinations.
- Output size is a small fraction of a canvas screenshot of the same page.
