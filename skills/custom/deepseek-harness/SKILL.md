---
title: Deepseek Harness
id: custom-deepseek-harness
role: tool
category: tool
platform: universal
description: "Fetch, harness, and deploy Deepseek models with full repo instructions, file management, and agent integration."
---

# Deepseek Harness

## Overview

A powerful skill for AI coding agents to fetch, configure, and deploy Deepseek models. Includes full instructions for repo cloning, file setup, environment configuration, and agent integration.

## What This Skill Does

1. **Fetch** — Clone or pull the Deepseek model repo from GitHub
2. **Configure** — Set up environment variables, API keys, and config files
3. **Deploy** — Run the model locally or connect to cloud endpoints
4. **Integrate** — Connect the model to your AI agent workflow

## Prerequisites

- Python 3.10+ or Node.js 18+
- Git installed
- 8GB+ RAM (for 7B models) or 16GB+ (for larger models)
- CUDA-capable GPU (optional, for GPU acceleration)

## Fetching the Repo

```bash
# Clone the Deepseek Harness repo
git clone https://github.com/deepseek-ai/DeepSeek-V3.git
cd DeepSeek-V3

# Or for the Coder variant
git clone https://github.com/deepseek-ai/DeepSeek-Coder-V2.git
cd DeepSeek-Coder-V2
```

## File Structure

```
DeepSeek-V3/
├── README.md              # Main documentation
├── requirements.txt       # Python dependencies
├── setup.py              # Package setup
├── configs/              # Model configurations
│   ├── 7b.yaml           # 7B parameter config
│   ├── 16b.yaml          # 16B parameter config
│   └── 67b.yaml          # 67B parameter config
├── scripts/              # Utility scripts
│   ├── download.py       # Model download script
│   ├── convert.py        # Weight conversion
│   └── serve.py          # API server
├── examples/             # Usage examples
└── tests/                # Test suite
```

## Agent Integration

### For opencode

1. Copy this SKILL.md to `~/.config/opencode/skills/deepseek-harness/SKILL.md`
2. Restart opencode
3. Use `@deepseek-harness` to invoke

### For Claude Code

1. Copy to `~/.claude/skills/deepseek-harness/SKILL.md`
2. Restart Claude Code
3. The skill auto-loads when relevant

### For Codex CLI

1. Copy to `~/.codex/skills/deepseek-harness/SKILL.md`
2. Restart Codex CLI
3. Invoke with the skill name

## Agent Instructions

When this skill is active, the agent should:

1. **Check prerequisites** — Verify Python/Node, Git, and hardware requirements
2. **Clone repo** — Use `git clone` to fetch the Deepseek repo
3. **Install deps** — Run `pip install -r requirements.txt` or `npm install`
4. **Configure** — Set up `.env` file with API keys if needed
5. **Test** — Run the test suite to verify setup
6. **Serve** — Start the model server for API access

## Environment Variables

```bash
# Required
DEEPSEEK_API_KEY=your_api_key_here
DEEPSEEK_MODEL_PATH=/path/to/model/weights

# Optional
DEEPSEEK_PORT=8080
DEEPSEEK_HOST=0.0.0.0
DEEPSEEK_GPU_DEVICE=cuda:0
```

## API Usage

```python
from deepseek_harness import DeepSeekClient

client = DeepSeekClient(
    model="deepseek-v3-7b",
    api_key="your_key"
)

response = client.chat(
    messages=[{"role": "user", "content": "Hello!"}]
)
print(response.content)
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `git clone` fails | Check network, try SSH: `git@github.com:deepseek-ai/DeepSeek-V3.git` |
| Out of memory | Use smaller model (7B) or enable quantization |
| CUDA not found | Install CUDA toolkit, set `DEEPSEEK_GPU_DEVICE=cpu` |
| Port already in use | Change `DEEPSEEK_PORT` in `.env` |

## Source

GitHub: [deepseek-ai/DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3)
License: MIT

---

## How to use?

### 1. Download
Go to the [AGENT KD SKILL gallery](https://ctaxnagomi.github.io/agent-kd-skill/) and find this skill card. Click **Download** to save the SKILL.md file to your computer.

### 2. Install
Copy the downloaded SKILL.md into your agent's skills directory:

| Agent | Path |
|-------|------|
| **opencode** | ~/.config/opencode/skills/deepseek-harness/SKILL.md |
| **Claude Code** | ~/.claude/skills/deepseek-harness/SKILL.md |
| **Codex CLI** | ~/.codex/skills/deepseek-harness/SKILL.md |
| **Cursor** | ~/.cursor/skills/deepseek-harness/SKILL.md |
| **Gemini CLI** | ~/.gemini/skills/deepseek-harness/SKILL.md |

### 3. Use
Restart your agent session. The skill will auto-load based on its description. You can also invoke it explicitly by typing @deepseek-harness in your agent.

### 4. Verify
Ask your agent something related to the skill's purpose. If it responds using the skill's instructions, you're all set.
