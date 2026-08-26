---
name: code-wiki
description: "Generate wiki docs + Mermaid diagrams for any codebase."
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [documentation, mermaid, architecture, diagrams, wiki]
---

# Code Wiki

Generate a full wiki for any codebase: overview, architecture, per-module deep-dives, and Mermaid diagrams. Works on local repos, private repos, and any language.

## When to Use

- User says "document this codebase" or "generate a wiki"
- Onboarding to an unfamiliar repo
- Need architecture diagrams
- Creating reference documentation

## Procedure

### Phase 1: Scan Structure

1. Run `ls` and `find -maxdepth 3` to understand layout
2. Read README and manifest files
3. Identify 8-10 key modules to document

### Phase 2: Write Overview

1. Write `README.md` with overview and module map
2. Write `architecture.md` with system diagram
3. Create `diagrams/` folder for Mermaid files

### Phase 3: Document Modules

For each module:
1. Identify 3-5 most important files
2. Read and understand the code
3. Write module doc with responsibilities, key files, public API

### Phase 4: Generate Diagrams

1. Class diagram for key types
2. Sequence diagrams for main workflows
3. Keep diagrams under 20 nodes each

### Phase 5: Finalize

1. Write `getting-started.md`
2. Write `api.md` if applicable
3. Save state to `.codewiki-state.json`

## Output Structure

```
wiki/
├── README.md
├── architecture.md
├── getting-started.md
├── api.md
├── modules/
│   ├── module-a.md
│   └── module-b.md
└── diagrams/
    ├── class-diagram.md
    └── sequences.md
```

## Pitfalls

- Fabricating components that do not exist in the code
- Generic AI prose without specific details
- Diagrams with more than 50 nodes
- Documenting tests or generated code as product code

## Verification

- All referenced files exist
- Diagrams render correctly
- Module docs match actual code
- No fabricated functions or classes

---

## How to use?

### 1. Download
Go to the [AGENT KD SKILL gallery](https://ctaxnagomi.github.io/agent-kd-skill/) and find this skill card. Click **Download** to save the SKILL.md file.

### 2. Install
Copy the downloaded SKILL.md into your agent's skills directory:

| Agent | Path |
|-------|------|
| **Hermes** | ~/.hermes/skills/hermes/code-wiki/SKILL.md |
| **opencode** | ~/.config/opencode/skills/code-wiki/SKILL.md |
| **Claude Code** | ~/.claude/skills/code-wiki/SKILL.md |

### 3. Use
Restart your agent session. The skill will auto-load when documentation is needed.

### 4. Verify
Ask your agent to document a codebase. If it generates structured wiki with diagrams, you're all set.
