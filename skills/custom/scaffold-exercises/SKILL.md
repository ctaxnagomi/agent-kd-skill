---
{
  "name": "scaffold-exercises",
  "description": "Create exercise directory structures with sections, problems, solutions, and explainers that pass linting. Use when scaffolding exercises, creating exercise stubs, or setting up a new course section.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Scaffold Exercises

Create exercise directory structures with sections, problems, solutions, and explainers that pass linting.

## Directory naming
- Sections: XX-section-name/ inside exercises/
- Exercises: XX.YY-exercise-name/ inside a section

## Exercise variants
- problem/ — student workspace with TODOs
- solution/ — reference implementation
- explainer/ — conceptual material

## Required files
Each subfolder needs a readme.md that is non-empty with no broken links.

## Workflow
1. Parse the plan
2. Create directories
3. Create stub readmes
4. Run lint
5. Fix any errors

## Credit

This skill is based on the work of **Matt Pocock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills](https://github.com/mattpocock/skills). Licensed under MIT.

---

## How to use?

### 1. Download
Go to the [AGENT KD SKILL gallery](https://ctaxnagomi.github.io/agent-kd-skill/) and find this skill card. Click **Download** to save the SKILL.md file to your computer.

### 2. Install
Copy the downloaded SKILL.md into your agent's skills directory:

| Agent | Path |
|-------|------|
| **opencode** | ~/.config/opencode/skills/<skill-name>/SKILL.md |
| **Claude Code** | ~/.claude/skills/<skill-name>/SKILL.md |
| **Codex CLI** | ~/.codex/skills/<skill-name>/SKILL.md |
| **Cursor** | ~/.cursor/skills/<skill-name>/SKILL.md |
| **Gemini CLI** | ~/.gemini/skills/<skill-name>/SKILL.md |

Example for opencode:
`ash
mkdir -p ~/.config/opencode/skills/<skill-name>
cp SKILL.md ~/.config/opencode/skills/<skill-name>/SKILL.md
`

### 3. Use
Restart your agent session. The skill will auto-load based on its description. You can also invoke it explicitly by typing @<skill-name> in your agent.

### 4. Verify
Ask your agent something related to the skill's purpose. If it responds using the skill's instructions, you're all set.
