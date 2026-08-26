---
name: github-code-review
description: "Review PRs: diffs, inline comments via gh or REST."
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [github, code-review, pull-requests, git, quality]
---

# GitHub Code Review

Perform code reviews on local changes before pushing, or review open PRs on GitHub. Covers both local git diff review and formal PR reviews with inline comments.

## When to Use

- Before pushing changes (local review)
- Reviewing someone else's PR
- Need to approve or request changes on a PR
- Pre-commit quality check

## Procedure

### Local Review (Pre-Push)

1. Run `git diff` to see unstaged changes
2. Run `git diff --cached` for staged changes
3. Review each change for correctness, style, and safety
4. Check for secrets, credentials, or sensitive data

### PR Review on GitHub

1. List open PRs: `gh pr list`
2. Check out PR locally: `gh pr checkout <number>`
3. Review the diff
4. Leave inline comments on specific lines
5. Submit review: `gh pr review <number> --approve` or `--request-changes`

### Review Checklist

- Correctness: Does the code do what it claims?
- Security: No hardcoded secrets, no injection risks
- Tests: Are new behaviors tested?
- Readability: Clear naming, minimal complexity
- Performance: No obvious bottlenecks

## Pitfalls

- Reviewing too many PRs at once
- Being pedantic about style when linters exist
- Not testing the changes locally
- Approving without actually reading the code

## Verification

- All review comments addressed
- CI passes after changes
- You can explain what each changed file does

---

## How to use?

### 1. Download
Go to the [AGENT KD SKILL gallery](https://ctaxnagomi.github.io/agent-kd-skill/) and find this skill card. Click **Download** to save the SKILL.md file.

### 2. Install
Copy the downloaded SKILL.md into your agent's skills directory:

| Agent | Path |
|-------|------|
| **Hermes** | ~/.hermes/skills/hermes/github-code-review/SKILL.md |
| **opencode** | ~/.config/opencode/skills/github-code-review/SKILL.md |
| **Claude Code** | ~/.claude/skills/github-code-review/SKILL.md |

### 3. Use
Restart your agent session. The skill will auto-load when code review is needed.

### 4. Verify
Ask your agent to review code. If it follows the checklist and provides constructive feedback, you're all set.
