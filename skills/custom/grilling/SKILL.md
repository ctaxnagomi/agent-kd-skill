---
{
  "name": "grilling",
  "description": "A relentless interview to sharpen a plan or design by asking pointed questions one at a time. Use when user wants to stress-test a plan, get grilled on their design, or challenge a design before implementation.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Grilling

A relentless interview to sharpen a plan or design by asking pointed questions one at a time.

## Use case

Use this skill when the user wants to:
- Stress-test a plan or design before implementation
- Challenge assumptions and expose blind spots
- Reach shared understanding on a complex decision

## Core principle

Grilling is a stateless interview primitive. It writes no files and leaves no workspace behind. The only output is a sharper version of the idea.

## Workflow

1. **Start fresh** — Invoke in a fresh conversation.
2. **Ask one question at a time** — Walk down each branch of the design tree.
3. **Provide recommended answers** — For each question, offer your recommended answer.
4. **Explore the codebase** — If a question can be answered by exploring, explore instead of asking.
5. **Resolve the frontier** — Each round covers the entire frontier.
6. **No backtracking** — Never ask something that hinges on an answer you haven't heard yet.

## Rules

- Ask questions **one at a time**, not in batches.
- Always provide a **recommended answer** for each question.
- Be relentless but constructive.
- Stop when all branches are resolved.

## Credit

This skill is based on the work of **Matt Peacock** ([@mattpocock](https://github.com/mattpocock)). Original source: [mattpocock/skills](https://github.com/mattpocock/skills). Licensed under MIT.

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
