---
{
  "name": "to-spec",
  "description": "Turn the current conversation into a spec and publish it to the project issue tracker: no interview, just synthesis of what you've already discussed. Use when you want to create a spec from a conversation.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# To Spec

Turn the current conversation into a spec and publish it to the project issue tracker: no interview, just synthesis of what you've already discussed.

## Process

1. **Explore the repo** — Understand the current state of the codebase.
2. **Sketch seams** — Identify where you'll test the feature.
3. **Write the spec** — Using the template.
4. **Publish** — To the project issue tracker with ready-for-agent label.

## Template

## Problem Statement
The problem that the user is facing.

## Solution
The solution to the problem.

## User Stories
A LONG, numbered list: As an <actor>, I want a <feature>, so that <benefit>

## Implementation Decisions
- Modules that will be built/modified
- Interfaces of those modules
- Architectural decisions

## Testing Decisions
- What makes a good test
- Which modules will be tested

## Out of Scope
Things that are out of scope for this spec.

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
