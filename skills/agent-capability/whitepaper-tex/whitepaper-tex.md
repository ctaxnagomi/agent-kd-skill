---
{
  "name": "whitepaper-tex",
  "description": "Author a LaTeX whitepaper ready for arXiv submission. Scaffolds the document from the bundled arXiv-style template (template.tex / template.pdf), applies the preprint rules (no page numbers or headers, standalone abstract, two-column layout, figures as separate files), and produces a PDF that passes the arXiv checker. Trigger keywords: whitepaper, arxiv, latex, .tex, preprint, technical report, paper template."
}
---

# LaTeX arXiv whitepaper method

A capability that scaffolds and compiles a LaTeX whitepaper formatted for arXiv submission, from the bundled template in this skill folder.

## Use case

Use this skill when:

- The deliverable is a whitepaper, technical report, or preprint written in LaTeX.
- The paper must upload cleanly to arXiv (LaTeX source + compiled PDF).
- You need a consistent, arXiv-compliant layout (two-column, 11pt, letter paper).
- The document must compile on a fresh TeX Live install, exactly as arXiv requires.

## Bundled assets

This skill ships two template files next to the skill file:

- `template.tex` — the editable LaTeX source (geometry, packages, abstract, two-column switch, hyperref, empty page style).
- `template.pdf` — the reference rendering of that template, so the layout is visible without compiling.

Copy both into the project, rename, and build from `template.tex`.

## arXiv submission rules to know

- No page numbers, headers, or footers — use `\pagestyle{empty}` (arXiv rejects numbered pages).
- The abstract must compile standalone: no `\ref`, footnotes, or hyperref links inside it.
- Submit the `.tex` source with figures and `.bbl`/`.bib` as separate files; arXiv compiles on its own TeX Live.
- Stick to standard classes (`article`, `revtex4-2`, `amsart`); exotic classes often fail the arXiv build.
- Avoid font packages that need external files (TTF/OTF); Computer Modern and the AMS font set are safe.
- Keep hyperref links as `hidelinks` so they do not print as colored boxes in the PDF.

Reference: [https://arxiv.org/](https://arxiv.org/) — the official arXiv site for submission help, templates, and policy.

## Workflow

1. **Scaffold** — Copy `template.tex` (and `template.pdf` as the visual reference) into the project.
2. **Fill metadata** — Title, authors, affiliations, and abstract in the preamble.
3. **Write sections** — Standard structure: Introduction, Problem/Background, Method, Evaluation, Discussion, Conclusion, References.
4. **Add figures/tables** — `\includegraphics` with `\label`/`\ref`, caption every float, keep filenames ASCII.
5. **Compile** — `pdflatex` twice (for references), then `bibtex` if a bibliography is used.
6. **Validate** — Check the PDF against the rules above and run the arXiv source uploader checks.
7. **Ship** — Upload the `.tex` source plus figures (not a single merged PDF) unless the venue wants PDF-only.

## Template skeleton

```tex
\documentclass[11pt]{article}
\usepackage[letterpaper,top=1in,bottom=1in,left=1in,right=1in]{geometry}
\usepackage{amsmath,amssymb,amsfonts}
\usepackage{graphicx}
\usepackage[hidelinks]{hyperref}
\pagestyle{empty}
\title{...}
\author{...}
\date{\today}
\begin{document}
\maketitle
\begin{abstract}...\end{abstract}
...
\end{document}
```

## Rules

- Never ship a document with page numbers if it targets arXiv.
- Keep the abstract dependency-free; arXiv typesets it separately.
- Compile with a clean TeX Live before submitting — it must not only work on the author's machine.
- One figure per file, ASCII names, PDF/PNG/JPEG formats only.

## Quality gates

- `pdflatex` completes with zero errors and stable output across two runs.
- The PDF has no page numbers or headers; text is selectable and links resolve.
- `template.tex` compiles unmodified on a stock TeX Live (an arXiv requirement).
- The rendered document matches `template.pdf` in layout and typography.
