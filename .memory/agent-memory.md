# Agent Memory — AGENT KD SKILL

> Persistent project context for AI agents resuming work on this repository.
> Updated: 2026-08-25

---

## Project Identity

- **Name**: AGENT KD SKILL
- **Repo**: `ctaxnagomi/agent-kd-skill`
- **Owner**: Melvin (ctaxnagomi) — Rikayu Wilzam
- **Domain**: A gallery of SKILL.md variants for AI coding agents (Claude Code, opencode, Codex CLI, Cursor, Gemini CLI)
- **Theme**: Toxic green on black (`#0AF700` bright, `#010502` bg)
- **Site**: [krackeddevs.com](https://www.krackeddevs.com)

---

## Architecture

### 3-File Bundle System

Every skill ships as a self-contained folder with three files:

| File | Purpose |
|------|---------|
| `<name>.md` | Markdown body with JSON frontmatter — human-readable |
| `<name>-skill.json` | Machine-readable skill metadata (schema, role, platform, install, invoke) |
| `assembly.json` | Assembly manifest — single source of truth binding the other two. The key a compiler reads. |

### Build Pipeline

```
scripts/build-content.mjs   → data/skills.js (generated, 300 entries)
scripts/compile-skills.mjs  → data/compiled/*.json (token-optimized artifacts)
create-skills.js            → Generated 28 Matt Peacock skill bundles
```

### Key Files

| File | Role |
|------|------|
| `app.js` | Core SPA: ROLES array, SKILLS array (107+), i18n (EN/ZH), card rendering, carousel, sidebar, star rating, pull-to-refresh, overscroll guard |
| `styles.css` | Full design system (1500+ lines): tokens, sidebar, hero, carousel, skewed glass cards, neon buttons, mobile overrides, reduced-motion |
| `index.html` | Gallery page: hero, carousel, sidebar nav, pull indicator, modal, i18n toggle |
| `data/skills.js` | Generated catalog of all skill entries |
| `data/compiled/` | 99 compiled skill artifacts + catalog.json |
| `skills/custom/` | 31 Matt Peacock skill folders (3 files each) + design skill |
| `skills/agent-sub/grill-me/` | Grill-me skill (3 files) |

---

## Design System

### Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#010502` | Page background |
| `--primary` | `#ABFFA7` | Primary text/accent |
| `--accent-bright` | `#0AF700` | Bright neon accent, buttons, sidebar links |
| `--accent-soft` | `#56FF9F` | Muted accent |
| `--accent-dim` | `#07AE00` | Dim accent |
| `--dark` | `#023A00` | Dark accent |
| `--secondary` | `#010502` | Dark text on light bg |
| `--surface` | `rgba(2,58,0,0.45)` | Surface bg |
| `--surface-2` | `rgba(2,58,0,0.25)` | Secondary surface |
| `--border` | `rgba(10,247,0,0.15)` | Border |
| `--border-strong` | `rgba(10,247,0,0.35)` | Strong border |

### Component: Skewed Glass Cards

- `::before` — solid skewed gradient (12deg → 0deg on hover)
- `::after` — blurred glow copy (30px blur, 0.5 opacity)
- `.card-orb-top` / `.card-orb-bottom` — floating glass spheres with `backdrop-filter: blur(10px)`
- `.card-content` — frosted glass panel (`blur(16px) saturate(1.3)`)
- Per-category gradients via `data-role` attribute (plan, build, compact, capability, sub, deep, micro, custom)

### Component: Neon Border-Trace Buttons

- 4 `<span>` children per button tracing edges clockwise
- 1.5px gradient lines, `1.5s linear infinite`
- Hover: bg fill `#0AF700`, text invert, triple glow, `-webkit-box-reflect`
- Every `.btn` requires exactly 4 empty `<span>` children

### Component: Translucent iOS Sidebar

- Desktop: fixed left, `backdrop-filter: blur(20px) saturate(1.4)`, 48px → 160px on hover
- Mobile: relative centered "Home" pill, pull-to-refresh → redirects to krackeddevs.com
- `--sb-bg: rgba(10, 18, 11, 0.65)`, `--sb-blur: 20px`

### Reduced Motion

All animations disabled under `prefers-reduced-motion: reduce`:
- `.reveal` transitions, card orb float, button border trace, sidebar expand, carousel scroll

---

## Conventions

### Code Style

- Vanilla JS (no frameworks), ES modules for build scripts only
- `var` for function-scoped variables, consistent with existing codebase
- No comments in CSS unless explicitly requested
- Semantic CSS variables over hardcoded values
- `will-change` for GPU-accelerated animations

### Card Template

```js
'<article class="skill-card reveal" data-role="' + r.accent + '" style="--i:' + idx + '">' +
  '<span class="card-orb card-orb-top"></span>' +
  '<span class="card-orb card-orb-bottom"></span>' +
  '<div class="card-content">' +
    // badge, title, desc, stars, file, actions
  '</div>' +
'</article>'
```

### Button Template

```js
'<button class="btn" type="button" data-action="preview" data-id="' + skill.id + '">' +
  '<span></span><span></span><span></span><span></span>' +
  escapeHtml(t("preview")) +
'</button>'
```

### Scroll / Viewport Rules

- `overflow-x: clip` on body (not `overflow-x: hidden` — breaks mousewheel)
- `overscroll-behavior-x: none` only (not `overscroll-behavior: none` — blocks vertical)
- JS overscroll guard restricted to mobile only (`window.innerWidth <= 768`)
- No `touch-action: pan-y` on html (blocks scroll entirely)

### Git Identity

```
ctaxnagomi
ctaxnagomi@users.noreply.github.com
```

---

## Role Categories

| Role | Code | Accent | Gradient |
|------|------|--------|----------|
| plan | AGENT PLAN | `#56FF50` | `#0AF700 → #023A00` |
| build | AGENT BUILD | `#ABFFA7` | `#ABFFA7 → #07AE00` |
| compact | AGENT COMPACT | text-2 | `#8FBA92 → #14301A` |
| capability | AGENT CAPABILITY | `#00D237` | `#00D237 → #023A00` |
| sub | AGENT SUB | `#56FFC0` | `#56FFC0 → #07AE00` |
| deep | AGENT DEEP | `#9BFF5A` | `#9BFF5A → #023A00` |
| micro | AGENT MICRO | `#4DD8FF` | `#4DD8FF → #07AE00` |
| custom | CUSTOM SKILL | `#FFB347` | `#FFB347 → #FF6B00` |

---

## Session History (2026-08-25)

### Commits (newest first)

| Hash | Message |
|------|---------|
| `c51ac4b` | README: credits for design snippets (Kyon Jordan neon buttons, Melvin glass cards) |
| `6097508` | Neon border-trace buttons with glow hover, design.md updated with button component |
| `29b89ba` | Skewed glass card design with per-category gradients, floating orbs, translucent iOS content panel |
| `c0ef4e4` | Redesign sidebar: minimalistic translucent iOS glass, reduced motion support |
| `4fcc780` | Fix: restore normal scrolling on standard viewport |
| `ce6776a` | Update README: What's new section, 100 skills inventory, custom skill docs |
| `da91aa7` | Smooth sidebar hover with 45% opacity, add lazy loading and page fade-in |
| `4fdbe54` | Fix mobile overscroll: prevent rubber-band, pull-to-refresh redirects to krackeddevs.com |
| `7d521f3` | Redesign desktop sidebar: pixelated toxic green, black home icon with neon glow |
| `3276cf8` | Add agent-memory skill to CUSTOM SKILL gallery |
| `c16b903` | Redesign mobile nav: centered Home pill with pull-to-refresh gesture |
| `a7a4028` | Fix viewport lock, mobile header overlap, responsive layout |
| `9170d8a` | Add hero section, carousel, cassette-tape sidebar, star rating system |
| `385a8e9` | Remove ASCII art, add Credit: Matt Peacock to CUSTOM SKILL role |
| `8b3d9a7` | Add ASCII CLI Art title MATT PEACOCK SKILL MD to index.html |
| `b416dd1` | Add 30 Matt Peacock skills to gallery (custom role category) |
| `5069874` | feat: add grill-me skill by Matt Peacock |
| `7b06ca5` | feat: expand gallery to 69 skills with sub/deep/micro roles |
| `65a752e` | docs: polish README with assembly-as-compiler-key |
| `782aa0d` | feat: AGENT KD SKILL gallery with 22 skills in 3-file format |

### Key Decisions Made

1. **Scroll fix**: Changed `overflow-x: hidden` → `overflow-x: clip` on body, removed from html. This fixed mousewheel scrolling.
2. **Sidebar evolution**: Cassette tape → pixelated neon → translucent iOS glass (3 iterations in one session).
3. **Card design**: Flat cards → skewed glass panels with per-category gradients and floating orbs.
4. **Button design**: Plain border buttons → neon border-trace animation with 4-span clockwise chase.
5. **Mobile overscroll**: JS guard restricted to mobile only to avoid blocking desktop scroll.
6. **Design template**: Created `skills/custom/design/` as a 3-file bundle documenting the full design system.

### External Credits

- **Neon border-trace buttons**: Adapted from [Kyon Jordan](https://codepen.io/Kyon-Jordan) ([CodePen](https://codepen.io/Kyon-Jordan/full/xxNOmNJ))
- **Skewed glass cards**: Melvin's own design
- **Matt Peacock skills**: [mattpocock/skills](https://github.com/mattpocock/skills) (MIT license)

---

## Gotchas / Things That Broke

| Issue | Fix |
|-------|-----|
| `overflow-x: hidden` on `html` blocks mousewheel scroll | Remove from html, use `overflow-x: clip` on body only |
| `overscroll-behavior: none` blocks vertical scroll | Use `overscroll-behavior-x: none` only |
| `touch-action: pan-y` on html blocks all scroll | Remove entirely |
| JS overscroll guard blocks desktop scroll | Gate on `window.innerWidth <= 768` |
| `compile-skills.mjs` fails with `ERR_INVALID_ARG_TYPE` | Pre-existing issue, unrelated to design changes |
| CRLF warnings in git | Cosmetic only, Windows line endings |
