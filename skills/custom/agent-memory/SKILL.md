---
{
  "name": "agent-memory",
  "description": "Manage agent memory across sessions: store, retrieve, and persist context, decisions, and learned patterns. Use when the agent needs to remember things between sessions or build a knowledge base.",
  "credit": "Matt Peacock (mattpocock/skills)"
}
---

# Agent Memory

Manage agent memory across sessions — store, retrieve, and persist context, decisions, and learned patterns.

## Use case

Use this skill when:
- The agent needs to remember things between sessions
- Building a persistent knowledge base
- Storing decisions, patterns, and learned behaviors
- Resuming work without losing context

## Memory types

- **Session memory**: What happened in this conversation
- **Project memory**: Architecture decisions, domain vocabulary, conventions
- **User memory**: Preferences, patterns, repeated instructions
- **Error memory**: Past bugs and their solutions

## Process

1. **Capture** — Identify what's worth remembering.
2. **Store** — Write to the appropriate memory file (CONTEXT.md, .memory/, etc.).
3. **Index** — Tag with categories for easy retrieval.
4. **Retrieve** — Search memory before starting work.
5. **Update** — Prune stale entries, merge duplicates.

## Rules

- Store facts, not fluff.
- Tag every entry with a category and timestamp.
- Prune entries older than the relevance window.
- Never store secrets or credentials in memory files.
- Prefer structured formats (YAML, JSON) over prose for machine-readable memory.

## File structure

```
.memory/
  context.md        # Project context and decisions
  patterns.md       # Learned patterns and conventions
  errors.md         # Past bugs and solutions
  user.md           # User preferences and habits
```

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
