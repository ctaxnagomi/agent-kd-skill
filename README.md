
# AGENT KD SKILL

A gallery of **SKILL.md** variants for AI coding agents — organized by agent role, filterable by platform, with live preview and download. Every skill ships as a **3-file bundle** in its own folder, anchored by an `assembly.json` manifest.

Built for builders who run agents like Claude Code, opencode, Codex CLI, Cursor, and Gemini CLI.

## What's new?

- **Skewed glass card system** — Translucent panels with per-category color gradients, floating glass orbs, and frosted content panels. Cards unskew on hover for a reveal effect.
- **Neon border-trace buttons** — Four animated border lines that chase clockwise around the button perimeter with triple-layer glow on hover.
- **Minimalistic translucent iOS sidebar** — `backdrop-filter: blur(20px) saturate(1.4)` glass panel with smooth expand/collapse on hover.
- **Matt Pocock Skill MD collection** — 31 curated skills from [mattpocock/skills](https://github.com/mattpocock/skills) added under the `CUSTOM SKILL` category. Productivity, engineering, and workflow skills with full 3-file bundles and star ratings.
- **Deepseek Harness** — New `tool` category skill for fetching, configuring, and deploying Deepseek models with full repo instructions and agent integration.
- **Hero section** — "Deepseek Harness is Here!" banner with toxic green accent glow.
- **Horizontal carousel** — Non-stop left-to-right scrolling marquee of all custom `.md` files.
- **Pull-to-refresh (mobile)** — Drag the centered "Home" pill downward to navigate to [krackeddevs.com](https://www.krackeddevs.com). iOS-style gesture with visual feedback.
- **Star rating system** — 0–5 stars on every custom skill card (Least Used → Most Popular). Ratings persist in localStorage.
- **How to use? guide** — Every SKILL.md includes beginner-friendly installation instructions. Every product card shows a "How to use?" monospace link.
- **FAQs page** — 17 frequently asked questions covering installation, usage, roles, and contribution.
- **Footer navigation** — FAQs, GitHub, and KrackedDevs links in the site footer.
- **Mobile input zoom fix** — `maximum-scale=1` viewport + `font-size: 16px` on all form elements prevents auto-zoom on iOS/Android.
- **Viewport lock** — No horizontal drag/scroll, no rubber-band overscroll on mobile.
- **Lazy loading** — Deferred scripts, lazy-loaded images, page fade-in transition.
- **Bilingual UI** — English and Chinese interface.

## Why assembly.json matters

Every skill folder is a self-contained unit of three files:

- `<name>-SKILL.md` — hybrid markdown (markdown body with **JSON frontmatter**).
- `<name>-skill.json` — machine-readable skill data (schema, role, platform, frontmatter, install, invoke).
- `assembly.json` — the **assembly manifest**: the single source of truth that binds the other two.

`assembly.json` is the key a **compiler reads**. It declares *what* the skill is (name, title, role, platform), *which* files compose it (`files.md`, `files.json`, `files.assembly`), and *how* it is installed and invoked (`install`, `invoke`). Any tooling — a build pipeline, an agent loader, or a compiler — can resolve a complete, installable skill from `assembly.json` alone, without parsing prose. The markdown stays author-friendly; `assembly.json` stays machine-first.

## Features.

- **10 agent roles** — Automated Planning, Guided Implementation, Compact Execution, cross-platform Agent Capabilities, Sub-agent Orchestration, Deep Research, Micro-agent Fleet, **Custom Skill** (community-contributed), **Tool** (model deployment), and **Hermes** (Hermes Agent skills).
- **5 platforms** — Claude Code, opencode, Codex CLI, Cursor, Gemini CLI.
- **31 Matt Pocock skills** — Productivity, engineering, and workflow skills with star ratings.
- **Live preview** — click any card to read the full markdown (including JSON frontmatter).
- **Search + filters** — filter cards by role and platform, or search by name/description.
- **Download all (.zip)** — bundles every skill as a complete 3-file package plus an install guide.
- **Horizontal carousel** — auto-scrolling marquee of custom skills.
- **Star rating** — rate each custom skill 0–5 stars, persisted in localStorage.
- **Bilingual** — English and Chinese UI.
- **Compiler-ready structure** — every skill resolves from its `assembly.json` manifest.

## Skill compiler (token optimization)

The 3-file structure exists so a **compiler** can turn author-friendly markdown into a **token-optimized artifact** the agent actually reads. The compiler consumes `assembly.json` as its input contract and emits, per skill:

1. **A minified, deduplicated JSON artifact** — instruction text condensed, redundant fields removed, headers/formatting stripped. The agent loads this instead of the full prose, so **loading a skill costs a fraction of the tokens**.
2. **A baked-in snapshot profile for snapDOM** — the compiler embeds snapDOM emit rules (drop scripts/styles, inline assets, prune empty nodes, cap depth) straight into the artifact. That means **every DOM snapshot the agent captures is lighter at runtime**, not just on load: `html2canvas`-style raster output never happens, and each serialized snapshot carries only what is needed.
3. **A catalog index** — one small JSON listing all skills (id, role, platform, description) so an agent can pick the right skill for ~1% of the tokens it would cost to scan the gallery.

In short: the compiler moves cost out of both the **load path** (smaller skill payloads) and the **capture path** (leaner snapDOM snapshots), which is exactly where token spend accumulates.

> **Status:** the compiler is implemented — `scripts/compile-skills.mjs` reads every `assembly.json` and emits `data/compiled/<name>.json` artifacts plus `data/compiled/catalog.json`. Run it after adding or editing skills:

> ```sh
> node scripts/build-content.mjs   # refresh the in-browser bundle
> node scripts/compile-skills.mjs  # refresh the token-optimized artifacts + catalog
> ```

## Quick start

Serve the folder from any static server and open `index.html`:

```sh
# any of these
npx serve .
python -m http.server 8765
```

Then open http://127.0.0.1:8765/index.html

## Structure

```
AGENT KD SKILL/
├── index.html              # gallery page (hero, carousel, grid, sidebar)
├── styles.css              # green-on-black theme, cassette sidebar, star rating
├── app.js                  # gallery logic (roles, platforms, i18n, carousel, stars, pull-to-refresh)
├── zip.js                  # in-browser zip bundler
├── logo.svg                # brand logo
├── data/
│   ├── skills.js           # generated bundle (auto-generated, do not edit)
│   └── compiled/           # compiler output (token-optimized artifacts + catalog)
├── scripts/
│   ├── build-content.mjs   # rebuilds data/skills.js from /skills
│   ├── compile-skills.mjs  # compiler: emits data/compiled/*.json + catalog
│   └── generate-skill-files.mjs  # converts flat .md files into 3-file skill folders
└── skills/
    ├── agent-plan/         # AGENT PLAN · one folder per skill × 5 platforms
    ├── agent-build/        # AGENT BUILD · one folder per skill × 5 platforms
    ├── agent-compact/      # AGENT COMPACT · one folder per skill × 5 platforms
    ├── agent-capability/   # AGENT CAPABILITY · 9 universal skills
    ├── agent-sub/          # AGENT SUB · 15 universal skills + grill-me
    ├── agent-deep/         # AGENT DEEP · 15 universal skills
    ├── agent-micro/        # AGENT MICRO · 15 universal skills
    ├── custom/             # CUSTOM SKILL · 31 Matt Pocock skills (3-file bundles)
    └── custom/             # tool · 1 Deepseek Harness skill (3-file bundle)
    └── hermes/             # HERMES · 7 Hermes Agent skills (3-file bundles)
```

### Skills inventory (100)

| Role | Count | Skills | Platform |
| --- | --- | --- | --- |
| AGENT PLAN | 5 | plan | Claude Code · opencode · Codex CLI · Cursor · Gemini CLI |
| AGENT BUILD | 5 | build | Claude Code · opencode · Codex CLI · Cursor · Gemini CLI |
| AGENT COMPACT | 5 | compact | Claude Code · opencode · Codex CLI · Cursor · Gemini CLI |
| AGENT CAPABILITY | 9 | Design · Frontend Specialist · Search · Skill Authoring · Cut-Cost Token · DGUI Emitter · snapDOM · html2canvas · Whitepaper · LaTeX arXiv · PDF-Ready Output | Universal |
| AGENT SUB | 16 | Context Isolation · Task Decomposition · Budgeting · Parallel Fan-out · Result Synthesis · Handoff · Escalation · Verification · Reporting · File Scoping · Tool Restriction · Token Caps · Warm Start · Failure Recovery · Observability · Grill Me | Universal |
| AGENT DEEP | 15 | Research Plan · Source Priority · Chunked Digestion · Multi-source · Iterative Refinement · Contradiction · Verification · Summarization · Long Context · Knowledge Graph · Citation · Checkpointing · Reasoning Trace · Context Budget · Synthesis | Universal |
| AGENT MICRO | 15 | Single Purpose · Prompt Minimalism · Strict Schema · Tool Minimalism · No-Prose · Batching · Context Precision · Retry · Caching · Composition · Orchestration · Observability · Output Schema · Timeboxing · Reuse | Universal |
| CUSTOM SKILL | 31 | Agent Memory · Ask Matt · Code Review · Codebase Design · Diagnosing Bugs · Domain Modeling · Git Guardrails · Grill Me · Grill With Docs · Handoff · Implement · Improve Architecture · Migrate to Shoehorn · Prototype · Research · Resolving Merge Conflicts · Scaffold Exercises · Setup Matt Pocock Skills · Setup Pre-Commit · Teach · TDD · To Questionnaire · To Spec · To Tickets · Triage · Wait What · Wayfinder · Wizard · Writing for Agents | Universal |
| tool | 1 | Deepseek Harness | Universal |
| hermes | 7 | Systematic Debugging · Test-Driven Development · GitHub Code Review · Plan · Simplify Code · Code Wiki · Create Hermes Skill | Universal |

## Adding a skill

1. Create the folder `skills/<role>/<skill-id>/`.
2. Write the hybrid markdown file with **JSON frontmatter**:

   ````
   ---
   {
     "name": "agent-plan-opencode",
     "description": "Plan-first agent skill for opencode."
   }
   ---

   # Title
   ```
   ````

3. Add `<skill-id>-skill.json` (skill data) and `assembly.json` (manifest).
4. Add an entry to the `SKILLS` array in `app.js`.
5. Rebuild the bundle and recompile the artifacts:

   ```sh
   node scripts/build-content.mjs
   node scripts/compile-skills.mjs
   ```

## Install a skill in your agent

1. Pick a variant folder, e.g. `skills/agent-plan/plan-opencode/`.
2. Create the matching folder under your platform's skills directory.
3. Copy the `SKILL.md` file into that folder (folder name = skill name).
4. Keep `<name>-skill.json` and `assembly.json` alongside it for tooling/portability — the agent's compiler/loader can consume them directly.
5. Restart the agent session, then trigger it by description or the platform's invocation shortcut.

Platform paths:

| Platform | Path |
| --- | --- |
| Claude Code | `~/.claude/skills/<name>/SKILL.md` · `.claude/skills/<name>/SKILL.md` |
| opencode | `.opencode/skills/<name>/SKILL.md` · `~/.config/opencode/skills/<name>/SKILL.md` |
| Codex CLI | `~/.codex/skills/<name>/SKILL.md` · `.codex/skills/<name>/SKILL.md` |
| Cursor | `~/.cursor/skills/<name>/SKILL.md` · `.cursor/skills/<name>/SKILL.md` |
| Gemini CLI | `~/.gemini/skills/<name>/SKILL.md` · `.gemini/skills/<name>/SKILL.md` |

## Credits

Design inspiration and code snippets adapted from:

| Component | Source | Author |
| --- | --- | --- |
| Skewed glass cards | User-provided HTML/CSS template | ctaxnagomi (KrackedDevs) |
| Neon border-trace buttons | [CodePen — Neon Button](https://codepen.io/Kyon-Jordan/full/xxNOmNJ) | [Kyon Jordan](https://codepen.io/Kyon-Jordan) |
| Translucent iOS sidebar | Adapted from Apple HIG glass morphism patterns | ctaxnagomi (KrackedDevs) |

Original snippets were restyled to use the KrackedDevs toxic green theme (`#0AF700`) and integrated into the gallery's design system.

## Developers

**ctaxnagomi** - Rikayu Wilzam
**turborack92** - Jayden chang
