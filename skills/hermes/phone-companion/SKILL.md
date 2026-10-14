---
name: phone-companion
description: "Pair your phone and computer into one Hermes brain over your own network — dispatch a task from the phone and run it on the computer, or hand whole conversations between desktop and phone. NaCl-encrypted, pair-once, no cloud."
version: 1.0.0
author: HenWorks (community companion)
license: AGPL-3.0
platforms: [macos, windows, linux]
metadata:
  companion:
    repo: https://github.com/HenWorks/Hermes-agent-android-PC-companion-app
    tags: [phone, remote, mesh, handoff, pairing, desktop, android, encrypted]
---

# Phone Companion — Run on Computer + Desktop Handoff

The PC-side companion for the Hermes-agent Android app. It lets your phone and your computer share one Hermes brain over your own network — securely, with no cloud in between.

Two capabilities, one trust domain (pair once, both work):

- **Run on Computer (mesh)** — dispatch a task from your phone; your computer's Hermes runs it and sends the result back. This is the "control your desktop from your phone" path.
- **Desktop Handoff** — move whole Hermes conversations between computer and phone: hand a desktop conversation off to your phone to continue on the go, and sync the phone's conversations back. Merges are idempotent (by-id upsert + natural-key message dedup), so syncing in either direction never duplicates.

## How It Works

```
handoff/
  mesh_broker.py     # the always-on server: pair / push / poll / ack / pull / push_session
  companion_web.py   # 127.0.0.1 browser console: pairing QR + status + task history
  pairing.py         # identities, QR schema, NaCl Box helpers
  handoff_server.py  # framing + LAN/mDNS helpers
  desktop_export.py  # export a conversation (read-only, secrets-safe)
  handoff_core.py    # the shared merge core (session upsert + message dedup + memory union)
  mesh-start.sh      # one-command start + daemon on/off/status
companion.py         # standalone entry (used by the packaged binary)
```

Security model: **NaCl-encrypted, pair-once, no cloud**. The phone and PC establish a trusted pair over the local network; the broker runs as a local daemon.

## Install

Prebuilt standalone binaries (no Python needed) are attached to each release — download the archive for your OS, unzip, and run `hermes-companion`. It starts the broker and opens the local browser console (the GUI) automatically.

From source:

```bash
git clone https://github.com/HenWorks/Hermes-agent-android-PC-companion-app
cd Hermes-agent-android-PC-companion-app
./handoff/mesh-start.sh          # creates a venv, installs deps, prints the pairing QR
```

Run it as a background daemon:

```bash
./handoff/mesh-start.sh daemon on       # turn on
./handoff/mesh-start.sh daemon status   # check
./handoff/mesh-start.sh daemon off      # turn off
```

## Pair

In the phone app: **Run on Computer** (or **Settings → Desktop Handoff**) → scan the pairing QR printed by `mesh-start.sh` or shown in the local console.

## Use

- On the phone, choose **Run on Computer** and send a task — your computer's Hermes executes it and returns the result.
- Use **Desktop Handoff** to move a conversation between devices and continue seamlessly.

## Source

GitHub: [HenWorks/Hermes-agent-android-PC-companion-app](https://github.com/HenWorks/Hermes-agent-android-PC-companion-app) · License: AGPL-3.0

---

## How to use?

### 1. Download
Go to the [AGENT KD SKILL gallery](https://ctaxnagomi.github.io/agent-kd-skill/) and find this skill card. Click **Download** to save the SKILL.md file.

### 2. Install
Copy the downloaded SKILL.md into your agent's skills directory:

| Agent | Path |
|-------|------|
| **Hermes** | ~/.hermes/skills/hermes/phone-companion/SKILL.md |

### 3. Run the companion
Install the free PC companion from its GitHub releases, or run `./handoff/mesh-start.sh` from source. It starts the broker and prints a pairing QR.

### 4. Pair and control
In the Hermes-agent Android app, tap **Run on Computer** and scan the QR. Send tasks from your phone; results come back from your desktop.
