---
{
  "name": "pdf-ready",
  "description": "Turn any deliverable into a PDF-ready artifact. Pick the right renderer (LaTeX, browser print-to-PDF, headless Chromium), set page geometry and fonts, embed images and links, verify text extraction and file size, and validate against the target venue (arXiv, publisher, web upload). Trigger keywords: pdf, pdf-ready, export to pdf, printable, print layout, pdf validation."
}
---

# PDF-ready output method

A capability that makes any deliverable a clean, embeddable, validating PDF — choosing the right renderer and checking the result before it ships.

## Use case

Use this skill when:

- A document, report, or paper must be delivered as a PDF.
- The output must print well, embed fonts and images, and keep selectable text.
- The PDF must satisfy a venue's rules (arXiv, publisher portals, print-on-demand).
- You are converting HTML, Markdown, LaTeX, or screenshots into a final PDF.

## Choosing a renderer

- **LaTeX** — for structured papers and preprints; full control of typography and page geometry.
- **Print-to-PDF (browser)** — for HTML/Markdown outputs; fastest when a page is already rendered.
- **Headless Chromium / Puppeteer** — when the page needs scripts, custom fonts, or exact pagination.
- **Office/export tools** — only as a fallback; they rarely embed fonts correctly.

## PDF-ready checklist

- **Page** — correct size (letter/A4) and margins; no stray blank pages.
- **Fonts** — embedded and subset; text is selectable and copyable.
- **Images** — not downsampled to illegibility; alt text present where required.
- **Links** — hyperlinks resolve and are not printed as colored boxes unless intended.
- **Metadata** — title and author set; the document opens with the right title, not "Untitled".
- **Size** — within the venue's limit (e.g., arXiv 10 MB source / 20 MB PDF).

## Workflow

1. **Pick the renderer** based on the source (LaTeX, HTML, Markdown).
2. **Set page geometry** — size, margins, and orientation before rendering.
3. **Render once**, then open the artifact and check fonts, links, and pagination.
4. **Validate** — run text extraction and, when available, the target platform's uploader checks.
5. **Fix and re-render** — iterate until the checklist passes.

## Validation gates

- `pdftotext` / text extraction returns the expected content; no empty or mojibake pages.
- Fonts report as embedded; no system-font fallback on a machine without the originals.
- Links and bookmarks resolve; no broken anchors.
- The file opens in the target reader and prints at the intended size.

## Rules

- Never send an unvalidated PDF; a PDF that opens nowhere is worth nothing.
- Prefer vector text over raster; screenshots are a last resort for body content.
- Keep a reproducible build (the exact command that produced the PDF) next to the artifact.

## Quality gates

- The PDF passes the venue's uploader or an equivalent checker.
- Text is selectable, fonts embedded, links live, and page size correct.
- The build is reproducible from the committed source.
