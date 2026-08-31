const fs = require('fs');
const path = require('path');

const skills = [
  { id: "ui-ux-pro-max", name: "UI/UX Pro Max", desc: "Professional UI/UX design workflows, component systems, and design tokens.", rating: 9.0, source: "nextlevelbuilder/ui-ux-pro-max" },
  { id: "frontend-developer", name: "Frontend Developer", desc: "Modern frontend development with React, Vue, and component libraries.", rating: 8.0, source: "sickn33/frontend-developer-skill" },
  { id: "backend-architect", name: "Backend Architect", desc: "Scalable backend systems, APIs, and database design patterns.", rating: 8.0, source: "sickn33/backend-architect-skill" },
  { id: "game-claudecode-game-studios", name: "Game Studios", desc: "Game development workflows for Claude Code and AI agents.", rating: 7.0, source: "Donchitos/claude-code-game-studios" },
  { id: "game-multiplayer-game-development", name: "Multiplayer Game Dev", desc: "Multiplayer game networking, sync, and real-time systems.", rating: 6.0, source: "sickn33/multiplayer" },
  { id: "game-art", name: "Game Art", desc: "Game art creation, asset pipelines, and visual design.", rating: 6.0, source: "sickn33/game-art" },
  { id: "game-development", name: "Game Development", desc: "General game development with Unity, Godot, and custom engines.", rating: 7.0, source: "sickn33/game-development" },
  { id: "game-web-games", name: "Web Games", desc: "Browser-based game development with HTML5 Canvas and WebGL.", rating: 6.0, source: "sickn33/web-games" },
  { id: "game-skill-os", name: "Skill OS", desc: "Game skill operating system for managing game abilities and mechanics.", rating: 9.0, source: "youngstar-eth/skillos-skill-pack" },
  { id: "game-audio", name: "Game Audio", desc: "Game audio systems, sound design, and audio pipelines.", rating: 6.0, source: "sickn33/game-audio" },
  { id: "game-2d-game", name: "2D Games", desc: "2D game development with sprites, physics, and tilemaps.", rating: 6.0, source: "sickn33/2d-games" },
  { id: "game-unity-developer", name: "Unity Developer", desc: "Unity game development with C#, MonoBehaviours, and editor tools.", rating: 7.0, source: "sickn33/unity-developer" },
  { id: "agentic-metorial", name: "Metorial", desc: "Agentic AI for real-time data streaming and monitoring.", rating: 7.0, source: "metorial/metorial" },
  { id: "agentic-memory-longterm", name: "Long-term Memory", desc: "Persistent memory systems for AI agents across sessions.", rating: 7.0, source: "ankitmalik84/agentic-longterm-memory" },
  { id: "impeccable", name: "Impeccable", desc: "High-quality code formatting and style enforcement.", rating: 8.7, source: "pbakaus/impeccable" },
  { id: "docx-documents", name: "DOCX Documents", desc: "Create and edit Word documents programmatically.", rating: 9.0, source: "anthropics/docx-documents" },
  { id: "superpowers", name: "Superpowers", desc: "Enhanced AI agent capabilities and advanced workflows.", rating: 9.0, source: "obra/superpowers" },
  { id: "presentations-pptx", name: "Presentations PPTX", desc: "Create PowerPoint presentations programmatically.", rating: 9.0, source: "anthropics/presentations-pptx" },
  { id: "spreadsheets-xlsx", name: "Spreadsheets XLSX", desc: "Create and edit Excel spreadsheets programmatically.", rating: 9.0, source: "anthropics/spreadsheets-xlsx" },
  { id: "pdf-processing", name: "PDF Processing", desc: "Read, create, and manipulate PDF documents.", rating: 8.0, source: "anthropics/pdf-processing" },
  { id: "concept-workflow", name: "Concept Workflow", desc: "Structured workflow for conceptual design and planning.", rating: 8.0, source: "leonardomso/concept-workflow" },
  { id: "interface-design", name: "Interface Design", desc: "UI/UX interface design patterns and best practices.", rating: 9.0, source: "Dammyjay93/interface-design" },
  { id: "generate-validation-notebook", name: "Validation Notebook", desc: "Generate data validation notebooks for testing and QA.", rating: 8.2, source: "monte-carlo-data/generate-validation-notebook" },
  { id: "magic-mcp", name: "Magic MCP", desc: "Magic MCP server for AI-powered development.", rating: 7.0, source: "21st-dev/magic-mcp" },
  { id: "mcp-playwright", name: "MCP Playwright", desc: "Browser automation with Playwright for AI agents.", rating: 8.0, source: "executeautomation/mcp-playwright" },
  { id: "shadcn-ui-mcp-server", name: "ShadCN UI MCP", desc: "ShadCN UI component generation via MCP.", rating: 8.0, source: "Jpisnice/shadcn-ui-mcp-server" },
  { id: "davinci-resolve-mcp", name: "DaVinci Resolve MCP", desc: "Video editing automation with DaVinci Resolve.", rating: 9.3, source: "samuelgursky/davinci-resolve-mcp" },
  { id: "socraticode", name: "Socraticode", desc: "Socratic method coding assistant for learning and exploration.", rating: 9.2, source: "giancarloerra/socraticode" },
  { id: "token-optimizer-mcp", name: "Token Optimizer", desc: "Optimize token usage and reduce API costs.", rating: 8.0, source: "ooples/token-optimizer-mcp" },
  { id: "trainingpeaks-mcp", name: "TrainingPeaks MCP", desc: "Fitness training data integration via MCP.", rating: 9.0, source: "JamsusMaximus/trainingpeaks-mcp" },
  { id: "godot-mcp", name: "Godot MCP", desc: "Godot game engine integration via MCP.", rating: 7.0, source: "tugcantopaloglu/godot-mcp" },
  { id: "codemcp", name: "CodeMCP", desc: "Code-focused MCP server for development workflows.", rating: 9.0, source: "ezyang/codemcp" },
  { id: "firecrawl-mcp-server", name: "Firecrawl MCP", desc: "Web scraping and crawling via MCP.", rating: 8.0, source: "firecrawl/firecrawl-mcp-server" },
  { id: "cursor-clean-code", name: "Cursor Clean Code", desc: "Clean code principles for Cursor AI.", rating: 5.0, source: "PatrickJS/cursor-clean-code" },
  { id: "cursor-nextjs", name: "Cursor NextJS", desc: "Next.js development rules for Cursor AI.", rating: 7.0, source: "PatrickJS/cursor-nextjs" },
  { id: "cursor-java-springboot-jpa", name: "Java SpringBoot JPA", desc: "Java Spring Boot with JPA for Cursor AI.", rating: 7.0, source: "PatrickJS/cursor-java-springboot-jpa" },
  { id: "cursor-cpp", name: "Cursor C++", desc: "C++ development rules for Cursor AI.", rating: 7.0, source: "PatrickJS/cursor-cpp" },
  { id: "cursor-node-express", name: "Node Express", desc: "Node.js Express development for Cursor AI.", rating: 4.0, source: "PatrickJS/cursor-node-express" },
  { id: "cursor-python", name: "Cursor Python", desc: "Python development rules for Cursor AI.", rating: 7.0, source: "PatrickJS/cursor-python" },
  { id: "cursor-typescript-nodejs-react-vite", name: "TS Node React Vite", desc: "TypeScript Node.js React Vite stack for Cursor AI.", rating: 7.0, source: "PatrickJS/cursor-typescript-nodejs-react-vite" },
  { id: "cursor-python-fastapi-scalable-api", name: "Python FastAPI", desc: "Python FastAPI scalable API development for Cursor AI.", rating: 7.0, source: "PatrickJS/cursor-python-fastapi-scalable-api" },
  { id: "cursor-vitest-unit-testing", name: "Vitest Unit Testing", desc: "Vitest unit testing rules for Cursor AI.", rating: 8.0, source: "PatrickJS/cursor-vitest-unit-testing" },
  { id: "cursor-drupal-11", name: "Drupal 11", desc: "Drupal 11 development rules for Cursor AI.", rating: 8.0, source: "PatrickJS/cursor-drupal-11" },
  { id: "cursor-qa-bug-report", name: "QA Bug Report", desc: "QA bug reporting workflow for Cursor AI.", rating: 7.0, source: "PatrickJS/cursor-qa-bug-report" },
  { id: "cursor-laravel-tall-stack-best-practices", name: "Laravel TALL Stack", desc: "Laravel TALL stack best practices for Cursor AI.", rating: 7.0, source: "PatrickJS/cursor-laravel-tall-stack-best-practices" },
  { id: "cursor-javascript-astro-tailwind-css", name: "Astro Tailwind", desc: "Astro and Tailwind CSS for Cursor AI.", rating: 6.0, source: "PatrickJS/cursor-javascript-astro-tailwind-css" },
  { id: "cursor-playwright-e2e-testing", name: "Playwright E2E", desc: "Playwright E2E testing for Cursor AI.", rating: 8.0, source: "PatrickJS/cursor-playwright-e2e-testing" },
  { id: "cursor-cursorrules-file-cursor-ai-python-fastapi-api", name: "FastAPI API", desc: "FastAPI API development for Cursor AI.", rating: 7.0, source: "PatrickJS/cursor-cursorrules-file-cursor-ai-python-fastapi-api" },
  { id: "cursor-nextjs15-react19-vercelai-tailwind", name: "NextJS15 React19", desc: "NextJS15 React19 Vercel AI Tailwind for Cursor AI.", rating: 7.0, source: "PatrickJS/cursor-nextjs15-react19-vercelai-tailwind" },
  { id: "cursor-aspnet-abp", name: "ASP.NET ABP", desc: "ASP.NET ABP framework for Cursor AI.", rating: 7.0, source: "PatrickJS/cursor-aspnet-abp" },
  { id: "aider", name: "Aider", desc: "AI pair programming with Aider CLI.", rating: 6.0, source: "Aider-AI/aider" },
  { id: "oh-my-openagent", name: "Oh My OpenAgent", desc: "OpenAgent framework for AI development.", rating: 6.0, source: "code-yeongyu/oh-my-openagent" },
  { id: "cursor-agent", name: "Cursor Agent", desc: "Cursor AI agent for code generation.", rating: 6.0, source: "getcursor/cursor-agent" },
  { id: "lobehub", name: "LobeHub", desc: "LobeHub AI agent framework.", rating: 6.8, source: "lobehub/lobehub" },
  { id: "openclaw", name: "OpenClaw", desc: "OpenClaw AI agent marketplace.", rating: 6.0, source: "openclaw/openclaw" },
  { id: "opencode", name: "OpenCode", desc: "Open-source AI coding agent.", rating: 6.0, source: "sst/opencode" },
  { id: "openharness", name: "OpenHarness", desc: "OpenHarness for AI agent orchestration.", rating: 6.0, source: "HKUDS/openharness" },
  { id: "agent-manager", name: "Agent Manager", desc: "AI agent management and orchestration.", rating: 6.0, source: "YoanWai/agent-manager" },
  { id: "gemini-cli", name: "Gemini CLI", desc: "Google Gemini CLI agent.", rating: 6.0, source: "google-gemini/gemini-cli" },
  { id: "hermes-agent", name: "Hermes Agent", desc: "Hermes Agent by Nous Research.", rating: 6.0, source: "NousResearch/hermes-agent" },
  { id: "monet", name: "Monet", desc: "Monet AI agent framework.", rating: 6.0, source: "zenolab124/monet" },
  { id: "claude-code", name: "Claude Code", desc: "Anthropic Claude Code CLI agent.", rating: 6.0, source: "anthropics/claude-code" },
  { id: "cline", name: "Cline", desc: "Cline AI coding agent.", rating: 6.0, source: "cline/cline" },
  { id: "nimbalyst", name: "Nimbalyst", desc: "Nimbalyst AI agent framework.", rating: 6.0, source: "nimbalyst/nimbalyst" },
  { id: "openai-agents-python", name: "OpenAI Agents Python", desc: "OpenAI Agents SDK for Python.", rating: 6.0, source: "openai/openai-agents-python" },
  { id: "fast-agent", name: "Fast Agent", desc: "Fast Agent framework for AI development.", rating: 7.0, source: "evalstate/fast-agent" },
  { id: "langgraph", name: "LangGraph", desc: "LangGraph for stateful AI agent workflows.", rating: 7.0, source: "langchain-ai/langgraph" },
  { id: "pydantic-ai", name: "Pydantic AI", desc: "Pydantic AI for type-safe agent development.", rating: 7.0, source: "pydantic/pydantic-ai" },
  { id: "trigger-dev", name: "Trigger Dev", desc: "Trigger.dev for background AI jobs.", rating: 7.0, source: "triggerdotdev/trigger-dev" },
  { id: "autogen", name: "AutoGen", desc: "Microsoft AutoGen for multi-agent systems.", rating: 7.0, source: "microsoft/autogen" },
  { id: "agno", name: "Agno", desc: "Agno AI agent framework.", rating: 7.0, source: "agno-agi/agno" },
  { id: "golem", name: "Golem", desc: "Golem Cloud for AI agent deployment.", rating: 7.0, source: "golemcloud/golem" },
  { id: "mastra", name: "Mastra", desc: "Mastra AI agent framework.", rating: 7.0, source: "mastra-ai/mastra" },
  { id: "crewai", name: "CrewAI", desc: "CrewAI for multi-agent collaboration.", rating: 7.0, source: "crewAIInc/crewai" },
  { id: "onyx", name: "Onyx", desc: "Onyx AI agent platform.", rating: 7.0, source: "onyx-dot-app/onyx" },
  { id: "dagu", name: "Dagu", desc: "Dagu workflow engine for AI agents.", rating: 7.0, source: "dagu-org/dagu" },
  { id: "getspecstory", name: "GetSpecStory", desc: "SpecStory for AI-powered documentation.", rating: 7.0, source: "specstoryai/getspecstory" },
  { id: "gortex", name: "Gortex", desc: "Gortex AI agent framework.", rating: 7.0, source: "zzet/gortex" },
  { id: "gitnexus", name: "GitNexus", desc: "GitNexus for AI-powered Git workflows.", rating: 7.0, source: "abhigyanpatwari/gitnexus" },
  { id: "comfyui-mcp", name: "ComfyUI MCP", desc: "ComfyUI integration via MCP for AI art.", rating: 7.0, source: "artokun/comfyui-mcp" },
  { id: "deja-vu", name: "Deja Vu", desc: "Deja Vu AI agent memory system.", rating: 7.0, source: "vshulcz/deja-vu" },
  { id: "unstract", name: "Unstract", desc: "Unstract for AI document processing.", rating: 7.0, source: "Zipstack/unstract" },
  { id: "kubernetes-architect", name: "Kubernetes Architect", desc: "Kubernetes architecture and deployment.", rating: 7.0, source: "wshobson/kubernetes-architect" },
  { id: "cloud-architect", name: "Cloud Architect", desc: "Cloud architecture and infrastructure design.", rating: 7.0, source: "wshobson/cloud-architect" },
  { id: "security-auditor", name: "Security Auditor", desc: "Security auditing and vulnerability assessment.", rating: 7.0, source: "wshobson/security-auditor" },
  { id: "frontend-developer-sub", name: "Frontend Developer Sub", desc: "Frontend development subagent.", rating: 7.0, source: "wshobson/frontend-developer" },
  { id: "tdd-orchestrator", name: "TDD Orchestrator", desc: "TDD workflow orchestration.", rating: 7.0, source: "wshobson/tdd-orchestrator" },
  { id: "test-automator", name: "Test Automator", desc: "Automated testing workflows.", rating: 7.0, source: "wshobson/test-automator" },
  { id: "performance-engineer", name: "Performance Engineer", desc: "Performance optimization and profiling.", rating: 7.0, source: "wshobson/performance-engineer" },
  { id: "backend-architect-sub", name: "Backend Architect Sub", desc: "Backend architecture subagent.", rating: 7.0, source: "wshobson/backend-architect" },
  { id: "multi-agent-optimize", name: "Multi-Agent Optimize", desc: "Multi-agent optimization workflows.", rating: 7.0, source: "wshobson/multi-agent-optimize" },
  { id: "improve-agent", name: "Improve Agent", desc: "AI agent improvement and optimization.", rating: 7.0, source: "wshobson/improve-agent" },
  { id: "block-force-push-hook", name: "Block Force Push", desc: "Git hook to prevent force pushes.", rating: 7.0, source: "disler/block-force-push-hook" },
  { id: "post-tool-audit-log-hook", name: "Audit Log Hook", desc: "Audit logging for AI tool usage.", rating: 7.0, source: "disler/post-tool-audit-log-hook" },
  { id: "session-start-context-hook", name: "Session Context Hook", desc: "Session context management hook.", rating: 7.0, source: "disler/session-start-context-hook" },
  { id: "claude-code-statusline-bash", name: "Claude Code Statusline", desc: "Status line for Claude Code CLI.", rating: 7.0, source: "anthropics/claude-code-statusline-bash" },
  { id: "cc-statusline", name: "CC Statusline CN", desc: "Chinese status line for Claude Code.", rating: 7.0, source: "chongdashu/cc-statusline" },
  { id: "terse", name: "Terse", desc: "Terse output style for AI agents.", rating: 7.0, source: "anthropics/terse" },
  { id: "professional-writeup", name: "Professional Writeup", desc: "Professional writing style for AI output.", rating: 7.0, source: "anthropics/professional-writeup" },
  { id: "sentiment-analysis-few-shot", name: "Sentiment Analysis", desc: "Few-shot sentiment analysis prompt.", rating: 8.0, source: "mdskills/sentiment-analysis-few-shot" },
  { id: "classify-user-intent-task", name: "Classify User Intent", desc: "User intent classification prompt.", rating: 8.0, source: "mdskills/classify-user-intent-task" },
  { id: "senior-code-reviewer-persona", name: "Senior Code Reviewer", desc: "Senior code reviewer persona prompt.", rating: 8.0, source: "mdskills/senior-code-reviewer-persona" },
  { id: "improve-this-prompt-meta", name: "Improve This Prompt", desc: "Meta-prompt for improving prompts.", rating: 8.0, source: "mdskills/improve-this-prompt-meta" },
  { id: "summarize-meeting-notes-task", name: "Summarize Meeting Notes", desc: "Meeting notes summarization prompt.", rating: 8.0, source: "mdskills/summarize-meeting-notes-task" },
  { id: "generate-prompt-from-example-meta", name: "Generate Prompt", desc: "Generate prompts from examples.", rating: 8.0, source: "mdskills/generate-prompt-from-example-meta" },
  { id: "sql-generation-few-shot", name: "SQL Generation", desc: "Few-shot SQL generation prompt.", rating: 8.0, source: "mdskills/sql-generation-few-shot" },
  { id: "skeptical-analyst-persona", name: "Skeptical Analyst", desc: "Skeptical analyst persona prompt.", rating: 8.0, source: "mdskills/skeptical-analyst-persona" }
];

const baseDir = path.join(__dirname, '..', 'skills', 'marketplace');

skills.forEach(skill => {
  const skillDir = path.join(baseDir, skill.id);
  fs.mkdirSync(skillDir, { recursive: true });
  
  const skillMd = `---
name: ${skill.id}
description: "${skill.desc}"
version: 1.0.0
author: Community
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [marketplace, community]
---

# ${skill.name}

${skill.desc}

## Installation

\`\`\`bash
npx mdskills install ${skill.source}
\`\`\`

## Rating

${skill.rating}/10

## Source

GitHub: [${skill.source}](https://github.com/${skill.source})

---

## How to use?

### 1. Download
Go to the [AGENT KD SKILL gallery](https://ctaxnagomi.github.io/agent-kd-skill/) and find this skill card. Click **Download** to save the SKILL.md file.

### 2. Install
Copy the downloaded SKILL.md into your agent's skills directory:

| Agent | Path |
|-------|------|
| **opencode** | ~/.config/opencode/skills/${skill.id}/SKILL.md |
| **Claude Code** | ~/.claude/skills/${skill.id}/SKILL.md |
| **Hermes** | ~/.hermes/skills/marketplace/${skill.id}/SKILL.md |

### 3. Use
Restart your agent session. The skill will auto-load based on its description.

### 4. Verify
Ask your agent something related to the skill's purpose. If it responds using the skill's instructions, you're all set.
`;
  
  fs.writeFileSync(path.join(skillDir, 'SKILL.md'), skillMd);
  
  const skillJson = {
    name: skill.id,
    id: `marketplace-${skill.id}`,
    role: "marketplace",
    category: "marketplace",
    platform: "universal",
    description: skill.desc,
    version: "1.0.0",
    author: "Community",
    license: "MIT",
    tags: ["marketplace", "community"],
    rating: skill.rating,
    install: {
      opencode: `~/.config/opencode/skills/${skill.id}/SKILL.md`,
      claudecode: `~/.claude/skills/${skill.id}/SKILL.md`,
      hermes: `~/.hermes/skills/marketplace/${skill.id}/SKILL.md`
    },
    invoke: `@${skill.id}`
  };
  
  fs.writeFileSync(path.join(skillDir, 'skill.json'), JSON.stringify(skillJson, null, 2));
  
  const assemblyJson = {
    name: skill.id,
    version: "1.0.0",
    role: "marketplace",
    category: "marketplace",
    platform: "universal",
    skillMd: "SKILL.md",
    skillJson: "skill.json",
    description: skill.desc,
    rating: skill.rating
  };
  
  fs.writeFileSync(path.join(skillDir, 'assembly.json'), JSON.stringify(assemblyJson, null, 2));
});

console.log(`Created ${skills.length} marketplace skills`);
