---
{
  "name": "migrate-to-shoehorn",
  "description": "Migrate test files from as type assertions to @total-typescript/shoehorn. Use when user mentions shoehorn, wants to replace as in tests, or needs partial test data.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Migrate to Shoehorn

Migrate test files from `as` type assertions to @total-typescript/shoehorn.

## Why shoehorn?
- Pass partial data in tests while keeping TypeScript happy
- Replace `as` assertions with type-safe alternatives
- Test code only — never use in production

## Functions
- fromPartial() — Pass partial data that still type-checks
- fromAny() — Pass intentionally wrong data
- fromExact() — Force full object

## Workflow
1. **Gather requirements** — What test files have `as` assertions?
2. **Install** — npm i @total-typescript/shoehorn
3. **Find** — grep for `as Type` patterns in test files
4. **Replace** — as Type → fromPartial(), as unknown as Type → fromAny()
5. **Verify** — Run type check

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
