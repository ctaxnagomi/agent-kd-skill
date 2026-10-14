---
name: computer-use
description: "Drive the user's desktop in the background — click, type, scroll, drag — without moving the real cursor, stealing keyboard focus, or switching virtual desktops. Cross-platform native app automation via Hermes's computer_use toolset."
version: 2.1.0
author: Hermes Agent (Nous Research)
license: MIT
platforms: [macos, windows, linux]
metadata:
  hermes:
    toolset: computer_use
    driver: cua-driver
    tags: [desktop, automation, gui, computer-use, background, cross-platform]
---

# Computer Use

You have a `computer_use` tool that drives the user's desktop **in the background**. Your actions do NOT move the user's cursor, steal keyboard focus, or switch virtual desktops / Spaces. The user can keep typing in their editor while you click around in a browser in another window. This is the opposite of pyautogui-style automation.

Hermes drives `cua-driver` under the hood. Call the Hermes action vocabulary below — never the driver's raw tools by name.

## The Canonical Workflow

Always **capture first**, then click by element index:

```
computer_use(action="capture", mode="som", app="<the app you're driving>")
computer_use(action="click", element=14)
computer_use(action="type", text="from:stripe")
computer_use(action="key", keys="return", capture_after=True)
```

`mode="som"` returns a screenshot with every clickable element numbered — sidebar items, toolbar buttons, message rows.

## Actions

| Action | Notes |
|--------|-------|
| `capture mode=som\|vision\|ax app=…` | default: current app |
| `click element=N` OR `coordinate=[x, y] button=left\|right\|middle` | |
| `double_click` / `right_click` / `middle_click` | same target syntax |
| `drag from_element=N to_element=M` | or coordinate form |
| `scroll direction=up\|down\|left\|right amount=3` | ticks |
| `type text="…"` | |
| `key keys=" " \| "return" \| "escape" \| "cmd+t"` | |
| `set_value element=N value="…"` | selects/sliders without opening the menu |
| `wait seconds=0.5` | |
| `list_apps` | running apps with bundle IDs / PIDs / window counts |
| `list_windows` | |
| `focus_app app="…" raise_window=false` | default: don't raise |

Input actions also accept `delivery_mode`. `bring_to_front=True` is a separately approved standalone focus tool, never an input-action property.

## The Verify → Escalate Ladder (background-first)

1. Deliver input in the background (default) — no focus steal.
2. Read the structured verdict returned by every input action.
3. Climb to **foreground** only when the driver tells you to.

Classic cases for escalation: Electron/Chromium consent dialogs and other surfaces that ignore background input.

## Background Rules (the whole point)

1. Never `raise_window=True` unless the user explicitly asked to bring a window to front.
2. Scope captures to an app (`app="Chrome"`) — less noisy and doesn't leak other windows.
3. Don't switch virtual desktops / Spaces — the driver reaches elements on any of them.
4. The user may be on the same machine, typing in another window. Don't grab focus. Don't pop modals forward.

## When to Use It

Reach for `computer_use` for native apps: Finder/Explorer/Files, Mail/Outlook/Thunderbird, native chat clients, Figma, Logic, games — anything non-web. For web-only tasks prefer the separate headless `browser_*` tools (real headless Chromium, more reliable). `computer_use` does not expose browser page content; use it for browser chrome (address bar, permission prompts, native dialogs) only.

## Prerequisites

| Platform | Setup |
|----------|-------|
| macOS | Grant Accessibility + Screen Recording to the identity named by `hermes computer-use doctor` |
| Windows | None at install time; driving over SSH needs the autostart Scheduled Task (Session 0 has no desktop) |
| Linux | A reachable display server (`DISPLAY` or Wayland + XWayland); AT-SPI on |

Install the driver with `hermes tools`, or let Hermes start it on demand.

## Source

Docs: [Hermes Computer Use](https://hermes-agent.nousresearch.com/docs/user-guide/features/computer-use)

---

## How to use?

### 1. Download
Go to the [AGENT KD SKILL gallery](https://ctaxnagomi.github.io/agent-kd-skill/) and find this skill card. Click **Download** to save the SKILL.md file.

### 2. Install
Copy the downloaded SKILL.md into your agent's skills directory:

| Agent | Path |
|-------|------|
| **Hermes** | ~/.hermes/skills/hermes/computer-use/SKILL.md |

### 3. Enable
Run `hermes tools`, install `cua-driver`, and start the `computer_use` toolset. On macOS grant Accessibility + Screen Recording.

### 4. Use
Ask the agent to work a native app, e.g. *"Capture Mail, find the search field, search for invoices from Stripe, and summarize the latest one"* — your cursor never moves.
