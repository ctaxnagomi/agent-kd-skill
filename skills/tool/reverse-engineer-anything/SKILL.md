---
name: reverse-engineer-anything
description: "Reverse engineer native, managed, Electron/JavaScript, packaged, firmware, and browser targets with REA. Use shipped-artifact or requested runtime evidence to explain features, compare versions, decompile code, or guide a reconstruction. Skip REA for ordinary source-repository architecture analysis."
version: 1.0.0
author: morluto (REA)
license: MIT
platforms: [linux, macos, windows]
metadata:
  rea:
    version: "42"
    repo: https://github.com/morluto/rea
    tags: [reverse-engineering, binary, decompile, ghidra, hopper, ida, electron, android, firmware, mcp]
---

# REA — Reverse Engineer Anything

Connect an agent to local reverse-engineering tooling and get back **evidence plus unknowns**, not guesses. REA is an MCP server, CLI, and agent workflow that drives the engines you already have (Ghidra, Hopper, IDA) plus standard open tools for JavaScript, .NET, Android, firmware, network captures, and runtime observation.

> See a feature you like. Understand how it works, down to the binary level.

## Overview

REA is a scheduler, not a decompiler. It routes a target to the right provider, returns code references, pseudocode, assembly, runtime observations, and explicit limitations, and preserves the path from every conclusion back to the artifact. The agent plans the investigation and asks narrower follow-up questions; a provider performs the analysis.

## When to Use This Skill

Use REA when a claim depends on a **shipped binary or package**, decompilation, passive application runtime evidence, or comparison with behavior not established by available source.

Skip REA for ordinary analysis of a complete source repository — use normal repository tools and do not run REA readiness or provider commands.

## Connect Only When Needed

Installing this skill supplies instructions; it does not register the REA MCP server, install analysis engines, or add tools to a running agent.

If REA tools are already available and their registration is not known to be stale, proceed directly to the target. If tools are absent, a call is blocked by the client, or a required provider is unavailable, diagnose the observed blocker first:

```bash
# Diagnose (read-only; may download the package to npm's cache)
npx -y rea-agents@latest doctor --client codex --json

# Supported clients: claude_code, claude_desktop, codex, cursor, gemini_cli,
# windsurf, devin, opencode, antigravity, copilot_cli, commandcode, vscode,
# grok_build, omp, grok_bot
```

For a configuration repair, prepare and review a read-only plan before applying it:

```bash
npx -y rea-agents@latest setup --client codex --dry-run --json   # show paths + backups
npx -y rea-agents@latest setup --client codex --yes              # apply after approval
```

Restart/reconnect the affected agent, verify the REA tools actually appear in the session, then resume the original investigation. REA setup never installs or upgrades Node.js, npm, Homebrew, Java, Ghidra, IDA, JADX, Binwalk, or Unblob.

## Route the Target First

Choose the first tool from the target the user supplied:

| Target | First tool |
|--------|-----------|
| ASAR or extracted JavaScript/Electron tree | `analyze_javascript_application` |
| Archive/package (ZIP/APK/IPA/MSIX/DMG) | `open_binary`, then `inspect_artifact` |
| Android APK code / classes / methods | `inspect_android_package` |
| Managed PE/CLI assembly (.NET) | `inspect_managed_artifact` |
| Firmware image | `inspect_firmware_regions` / `extract_firmware` |
| Browser page already open | `list_browser_targets` |
| Browser action (click/type/navigate) | `capture_browser_scenario` |
| HAR / SAZ / mitmproxy / qlog capture | `inspect_web_network_capture` |
| Packet capture | `inspect_packet_capture` / `inspect_pcap_capture` |
| WASM / EVM / Go / Rust / SQLite artifact | `inspect_wasm_artifact`, `inspect_evm_interface`, `inspect_go_binary`, `inspect_rust_binary`, `inspect_sqlite_database` |
| Native executable / library | `open_binary`, then focused tools |

A concrete CLI fallback for an operator-supplied JavaScript tree or ASAR (no MCP registration or native engine required):

```bash
npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json
```

## Work Summary-First

Start with the default result and use its inline Evidence and graph context. For a JavaScript application or ELF layout whose size is unknown or large, request `"detail": "summary"` and then inspect the retained `parent_evidence_id` with `inspect_analysis_view`. Make a focused follow-up only when the returned result leaves a specific question unanswered.

## Plan Broader Investigations

1. Turn the request into a checklist of questions and the evidence each answer needs.
2. Inspect the current REA session, artifact identity, saved database, and prior evidence; reuse matching state.
3. Start with the smallest useful overview; follow each question from its entry point through data and state changes to its result.
4. Corroborate a conclusion with the evidence type it requires. Use runtime observation only when static evidence cannot answer the question.
5. Keep a concise finding ledger linking each conclusion to Evidence IDs, confidence, search boundary, and remaining unknowns.
6. Revisit the checklist before finishing; mark each question answered, partially answered, or unresolved.

## Rules

Every conclusion must distinguish **observations, inferences, and unknowns**. Cite Evidence IDs, preserve limitations and incomplete coverage, and never imply that static analysis observed execution. A decompiler's pseudocode is an interpretation, not source code.

## Prerequisites

- Supported Node.js release and npm (24.11+ within 24.x, or 26+) for the CLI/installer.
- For native targets: an existing Hopper, Ghidra, or IDA installation.
- For Android: bring-your-own JADX/Java. For firmware: Binwalk or Unblob on Linux.

## Legal & Security

Reverse-engineering rules vary by jurisdiction, license, and purpose. REA does not grant permission to inspect a third party's application — obtain authorization and comply with applicable law. Prefer a disposable, well-understood target you own; hash and preserve the original artifact; treat decompiled code, strings, and captures as potentially confidential.

## Source

GitHub: [morluto/rea](https://github.com/morluto/rea) · npm: [`rea-agents`](https://www.npmjs.com/package/rea-agents) · License: MIT

---

## How to use?

### 1. Download
Go to the [AGENT KD SKILL gallery](https://ctaxnagomi.github.io/agent-kd-skill/) and find this skill card. Click **Download** to save the SKILL.md file.

### 2. Install
Copy the downloaded SKILL.md into your agent's skills directory:

| Agent | Path |
|-------|------|
| **opencode** | ~/.config/opencode/skills/reverse-engineer-anything/SKILL.md |
| **Claude Code** | ~/.claude/skills/reverse-engineer-anything/SKILL.md |
| **Codex CLI** | ~/.codex/skills/reverse-engineer-anything/SKILL.md |
| **Cursor** | ~/.cursor/skills/reverse-engineer-anything/SKILL.md |
| **Gemini CLI** | ~/.gemini/skills/reverse-engineer-anything/SKILL.md |
| **Hermes** | ~/.hermes/skills/tool/reverse-engineer-anything/SKILL.md |

### 3. Connect REA
Register the REA MCP server (review the plan, then apply):

```bash
npx rea-agents setup
```

### 4. Use
Restart your agent session. Ask a narrow question about a target you own, e.g.:

`Inspect this extracted Electron app. Find the renderer-to-main IPC path used for clipboard writes, show the evidence, and list what remains uncertain.`
