# AGENT KD SKILL

A gallery of **SKILL.md** variants for AI coding agents — categorized by agent role, filterable by platform, with live preview and download. Every skill ships as a **3-file bundle** in its own folder.

Built for builders who run agents like Claude Code, opencode, Codex CLI, Cursor, and Gemini CLI.

## Features

- **4 agent roles** — Automated Planning, Guided Implementation, Compact Execution, and cross-platform Agent Capabilities.
- **5 platforms** — Claude Code, opencode, Codex CLI, Cursor, Gemini CLI.
- **Live preview** — click any card to read the full markdown (including JSON frontmatter).
- **Search + filters** — filter cards by role and platform, or search by name/description.
- **Download all (.zip)** — bundles every skill as a complete 3-file package plus an install guide.
- **Bilingual** — English and Chinese UI.
- **3-file skill format** — every skill folder contains:
  - `<name>-SKILL.md` — hybrid markdown (markdown body with JSON frontmatter).
  - `<name>-skill.json` — machine-readable skill data (schema, role, platform, frontmatter, install, invoke).
  - `assembly.json` — assembly manifest combining the md + json (name, role, platform, files).

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
├── index.html              # gallery page
├── styles.css              # green-on-black theme
├── app.js                  # gallery logic (roles, platforms, i18n, download)
├── zip.js                  # in-browser zip bundler
├── logo.svg                # brand logo
├── data/
│   └── skills.js           # generated bundle (auto-generated, do not edit)
├── scripts/
│   ├── build-content.mjs   # rebuilds data/skills.js from /skills
│   └── generate-skill-files.mjs  # converts flat .md files into 3-file skill folders
└── skills/
    ├── agent-plan/         # AGENT PLAN · one folder per skill × 5 platforms
    ├── agent-build/        # AGENT BUILD · one folder per skill × 5 platforms
    ├── agent-compact/      # AGENT COMPACT · one folder per skill × 5 platforms
    └── agent-capability/   # AGENT CAPABILITY · 7 universal skills
```

### Skills inventory (22)

| Role | Skills | Platform |
| --- | --- | --- |
| AGENT PLAN | plan | Claude Code · opencode · Codex CLI · Cursor · Gemini CLI |
| AGENT BUILD | build | Claude Code · opencode · Codex CLI · Cursor · Gemini CLI |
| AGENT COMPACT | compact | Claude Code · opencode · Codex CLI · Cursor · Gemini CLI |
| AGENT CAPABILITY | Design · Frontend Specialist · Search · Skill Authoring · Cut-Cost Token · DGUI Emitter · snapDOM · html2canvas | Universal |

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
4. Rebuild the bundle:

   ```sh
   node scripts/build-content.mjs
   ```

## Install a skill in your agent

1. Pick a variant folder, e.g. `skills/agent-plan/plan-opencode/`.
2. Create the matching folder under your platform's skills directory.
3. Copy the `SKILL.md` file into that folder (folder name = skill name).
4. Keep `<name>-skill.json` and `assembly.json` alongside it for tooling/portability.
5. Restart the agent session, then trigger it by description or the platform's invocation shortcut.

Platform paths:

| Platform | Path |
| --- | --- |
| Claude Code | `~/.claude/skills/<name>/SKILL.md` · `.claude/skills/<name>/SKILL.md` |
| opencode | `.opencode/skills/<name>/SKILL.md` · `~/.config/opencode/skills/<name>/SKILL.md` |
| Codex CLI | `~/.codex/skills/<name>/SKILL.md` · `.codex/skills/<name>/SKILL.md` |
| Cursor | `~/.cursor/skills/<name>/SKILL.md` · `.cursor/skills/<name>/SKILL.md` |
| Gemini CLI | `~/.gemini/skills/<name>/SKILL.md` · `.gemini/skills/<name>/SKILL.md` |

## Developer

**ctaxnagomi** — Rikayu Wilzam
