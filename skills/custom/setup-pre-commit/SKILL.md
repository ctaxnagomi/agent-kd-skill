---
{
  "name": "setup-pre-commit",
  "description": "Set up Husky pre-commit hooks with lint-staged (Prettier), type checking, and tests. Use when adding pre-commit hooks, setting up Husky, or configuring lint-staged.",
  "credit": "Matt Pocock (mattpocock/skills)"
}
---

# Setup Pre-Commit Hooks

Set up Husky pre-commit hooks with lint-staged (Prettier), type checking, and tests.

## What This Sets Up
- Husky pre-commit hook
- lint-staged running Prettier on all staged files
- Prettier config
- typecheck and test scripts in the pre-commit hook

## Steps
1. Detect package manager
2. Install dependencies: husky lint-staged prettier
3. Initialize Husky: npx husky init
4. Create .husky/pre-commit
5. Create .lintstagedrc
6. Create .prettierrc (if missing)
7. Verify
8. Commit

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
