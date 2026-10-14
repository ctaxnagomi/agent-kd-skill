---
name: bot-screen
description: "Stream a bot's own desktop into Hermes Desktop and take over from anywhere — including your phone — for logins, 2FA, CAPTCHAs, and payment steps, then hand control back. The bot keeps working after you close the app."
version: 1.0.0
author: Hermes Agent (Nous Research)
license: MIT
platforms: [macos, windows, linux]
metadata:
  hermes:
    feature: bot-screen
    tags: [bot-screen, desktop, takeover, remote, phone, vnc, headless, handoff]
---

# Bot Screen

Every bot gets its own desktop, streamed live into Hermes Desktop. Watch what the bot does, **take over when it hits something only you can do** (a login, 2FA prompt, CAPTCHA, or payment step), then hand control back and let it continue in the session you just signed in to.

On a headless Linux gateway (a server, cloud VM, Hermes Cloud) the screen lives on the gateway host — not your machine — so the bot keeps working after you close the app or turn off your laptop. This is how you drive a remote desktop **from your phone**: open Hermes Desktop (or the web dashboard), take over the bot's screen, complete the step, hand back.

## Open the Screen

- **Bots → a bot → Scheduled Jobs** — the bot's screen is the hero at the top of the pane (live preview, refreshed every few seconds).
- **Bots → right-click a bot → Open Screen** — bring the Screen tab forward on the bot's first `computer_use` or browser call of a run.
- **This skill's trigger** — take over when the bot reports it needs you.

The screen is **off by default**. Start it from the pane (**Start screen**), or run:

```bash
hermes computer-use screen start
```

Set `bot_desktop.auto_start: true` if you want a headless host to start the screen itself on the bot's first `computer_use` call or first headed browser use.

## Take Over / Hand Back

1. Open the Screen — the chip in the header says who holds control (**Bot is in control** by default).
2. Click **Take over** — the border turns red; your keyboard and mouse now drive the bot's screen. Sign in, solve the CAPTCHA, approve the payment.
3. Click **Hand back** — the bot regains control and re-captures the screen before continuing. Closing the pane also hands control back.

While you hold control, the bot's `computer_use` and browser tools are refused with `human_has_control`, captures included. A dropped connection keeps control with you (the bot stays locked out of a screen you may be mid-login on) until you reconnect and hand back; after a reload a **Hand back (force)** button clears it.

```bash
hermes computer-use screen stop --force    # release the lease and stop the screen
hermes computer-use screen start           # bring it back with the bot in control
```

## Where the Screen Runs

`bot_desktop.placement` decides, and placement is policy, not a snapshot:

| `terminal.backend` | `placement: auto` (default) | Meaning |
|--------------------|-----------------------------|---------|
| `local` | gateway host | terminal, screen, browser, `computer_use` share the machine |
| `docker`, `ssh`, `singularity` | inside the sandbox | everything runs in the sandbox; host desktop unreachable |
| `modal`, `daytona`, `vercel_sandbox` | refused | cannot host a display yet |

`placement: gateway` forces the screen onto the host even with a sandboxed terminal (explicit opt-in). `placement: terminal` forces the sandbox.

## Config

```yaml
bot_desktop:
  geometry: "1440x900"        # screen size; the viewer scales to fit
  auto_start: false           # start on first computer_use / headed browser use
  min_free_memory_mb: 1536    # refuse to start below this much free memory
  idle_stop_minutes: 30       # stop a screen nobody used for this long (0 = keep)
  placement: auto             # auto | terminal | gateway
```

## Security Notes

- The control lease is enforced at the RFB byte level and also gates `computer_use` and the browser tools; a file under `<HERMES_HOME>/bot-desktop/` records who holds control. A missing file means the bot holds control; an unreadable one fails closed.
- Xvnc never pushes the screen's clipboard to viewers (`-SendCutText=0`), so watchers do not receive what the person in control copies.
- This is a tool-level fence, not an OS sandbox: the bot runs as the same user as its screen. Don't type secrets into a bot you wouldn't trust with them.

## Source

Docs: [Hermes Bot Screen](https://hermes-agent.nousresearch.com/docs/user-guide/features/bot-screen)

---

## How to use?

### 1. Download
Go to the [AGENT KD SKILL gallery](https://ctaxnagomi.github.io/agent-kd-skill/) and find this skill card. Click **Download** to save the SKILL.md file.

### 2. Install
Copy the downloaded SKILL.md into your agent's skills directory:

| Agent | Path |
|-------|------|
| **Hermes** | ~/.hermes/skills/hermes/bot-screen/SKILL.md |

### 3. Start the screen
Open **Bots → a bot → Scheduled Jobs**, click **Start screen** (or `hermes computer-use screen start`). A headless host can set `bot_desktop.auto_start: true`.

### 4. Take over from your phone
Open Hermes Desktop on your phone, open the bot's Screen, click **Take over**, complete the login/2FA/CAPTCHA, then **Hand back** and tell the bot to continue.
