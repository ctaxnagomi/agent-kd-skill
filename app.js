/* AGENT KD SKILL — catalog app.
   Loaded after data/skills.js (window.SKILLS_CONTENT) and zip.js (window.makeZip). */
(function () {
  "use strict";

  /* ---------------- data ---------------- */

  var ROLES = [
    { id: "plan", code: "AGENT PLAN", accent: "plan" },
    { id: "build", code: "AGENT BUILD", accent: "build" },
    { id: "compact", code: "AGENT COMPACT", accent: "compact" },
    { id: "capability", code: "AGENT CAPABILITY", accent: "capability" },
    { id: "sub", code: "AGENT SUB", accent: "sub" },
    { id: "deep", code: "AGENT DEEP", accent: "deep" },
    { id: "micro", code: "AGENT MICRO", accent: "micro" },
    { id: "custom", code: "CUSTOM SKILL", accent: "custom" }
  ];

  var PLATFORMS = [
    {
      id: "claudecode",
      name: "Claude Code",
      vendor: "Anthropic",
      short: "CC",
      install: [
        { level: "personal", path: "~/.claude/skills/<name>/SKILL.md" },
        { level: "project", path: ".claude/skills/<name>/SKILL.md" }
      ],
      fm: ["name", "description", "allowed-tools", "disable-model-invocation", "paths", "model", "effort"]
    },
    {
      id: "opencode",
      name: "opencode",
      vendor: "SST",
      short: "OC",
      install: [
        { level: "project", path: ".opencode/skills/<name>/SKILL.md" },
        { level: "global", path: "~/.config/opencode/skills/<name>/SKILL.md" }
      ],
      fm: ["name", "description", "license", "compatibility", "metadata", "agent"]
    },
    {
      id: "codex",
      name: "Codex CLI",
      vendor: "OpenAI",
      short: "CX",
      install: [
        { level: "user", path: "~/.codex/skills/<name>/SKILL.md" },
        { level: "project", path: ".codex/skills/<name>/SKILL.md" }
      ],
      fm: ["name", "description", "license", "compatibility", "metadata", "allowed-tools (experimental)"]
    },
    {
      id: "cursor",
      name: "Cursor",
      vendor: "Anysphere",
      short: "CR",
      install: [
        { level: "user", path: "~/.cursor/skills/<name>/SKILL.md" },
        { level: "project", path: ".cursor/skills/<name>/SKILL.md" }
      ],
      fm: ["name", "description", "paths", "globs", "disable-model-invocation"]
    },
    {
      id: "gemini-cli",
      name: "Gemini CLI",
      vendor: "Google",
      short: "GC",
      install: [
        { level: "user", path: "~/.gemini/skills/<name>/SKILL.md" },
        { level: "project", path: ".gemini/skills/<name>/SKILL.md" }
      ],
      fm: ["name", "description"]
    }
  ];

  var SKILLS = [
    { id: "plan-claudecode", role: "plan", platform: "claudecode", file: "agent-plan/plan-claudecode/plan-claudecode-SKILL.md" },
    { id: "plan-opencode", role: "plan", platform: "opencode", file: "agent-plan/plan-opencode/plan-opencode-SKILL.md" },
    { id: "plan-codex", role: "plan", platform: "codex", file: "agent-plan/plan-codex/plan-codex-SKILL.md" },
    { id: "plan-cursor", role: "plan", platform: "cursor", file: "agent-plan/plan-cursor/plan-cursor-SKILL.md" },
    { id: "plan-gemini-cli", role: "plan", platform: "gemini-cli", file: "agent-plan/plan-gemini-cli/plan-gemini-cli-SKILL.md" },
    { id: "build-claudecode", role: "build", platform: "claudecode", file: "agent-build/build-claudecode/build-claudecode-SKILL.md" },
    { id: "build-opencode", role: "build", platform: "opencode", file: "agent-build/build-opencode/build-opencode-SKILL.md" },
    { id: "build-codex", role: "build", platform: "codex", file: "agent-build/build-codex/build-codex-SKILL.md" },
    { id: "build-cursor", role: "build", platform: "cursor", file: "agent-build/build-cursor/build-cursor-SKILL.md" },
    { id: "build-gemini-cli", role: "build", platform: "gemini-cli", file: "agent-build/build-gemini-cli/build-gemini-cli-SKILL.md" },
    { id: "compact-claudecode", role: "compact", platform: "claudecode", file: "agent-compact/compact-claudecode/compact-claudecode-SKILL.md" },
    { id: "compact-opencode", role: "compact", platform: "opencode", file: "agent-compact/compact-opencode/compact-opencode-SKILL.md" },
    { id: "compact-codex", role: "compact", platform: "codex", file: "agent-compact/compact-codex/compact-codex-SKILL.md" },
    { id: "compact-cursor", role: "compact", platform: "cursor", file: "agent-compact/compact-cursor/compact-cursor-SKILL.md" },
    { id: "compact-gemini-cli", role: "compact", platform: "gemini-cli", file: "agent-compact/compact-gemini-cli/compact-gemini-cli-SKILL.md" },
    { id: "cap-design", role: "capability", platform: null, file: "agent-capability/design/design.md", title: "Design" },
    { id: "cap-frontend-specialist", role: "capability", platform: null, file: "agent-capability/frontend-specialist/frontend-specialist.md", title: "Frontend Specialist" },
    { id: "cap-search", role: "capability", platform: null, file: "agent-capability/search/search.md", title: "Search" },
    { id: "cap-skill", role: "capability", platform: null, file: "agent-capability/skill/skill.md", title: "Skill Authoring" },
    { id: "cap-cut-cost-token", role: "capability", platform: null, file: "agent-capability/cut-cost-token/cut-cost-token.md", title: "Cut-Cost Token" },
    { id: "cap-dgui-snapdom", role: "capability", platform: null, file: "agent-capability/dgui-emitter-snapDOM/dgui-emitter-snapDOM.md", title: "DGUI Emitter · snapDOM" },
    { id: "cap-html2canvas", role: "capability", platform: null, file: "agent-capability/html2canvas/html2canvas.md", title: "html2canvas" },
    { id: "cap-whitepaper-tex", role: "capability", platform: null, file: "agent-capability/whitepaper-tex/whitepaper-tex.md", title: "Whitepaper · LaTeX arXiv" },
    { id: "cap-pdf-ready", role: "capability", platform: null, file: "agent-capability/pdf-ready/pdf-ready.md", title: "PDF-Ready Output" },
    { id: "sub-context-isolation", role: "sub", platform: null, file: "agent-sub/sub-context-isolation/sub-context-isolation.md" },
    { id: "sub-task-decomposition", role: "sub", platform: null, file: "agent-sub/sub-task-decomposition/sub-task-decomposition.md" },
    { id: "sub-budgeting", role: "sub", platform: null, file: "agent-sub/sub-budgeting/sub-budgeting.md" },
    { id: "sub-parallel-fanout", role: "sub", platform: null, file: "agent-sub/sub-parallel-fanout/sub-parallel-fanout.md" },
    { id: "sub-result-synthesis", role: "sub", platform: null, file: "agent-sub/sub-result-synthesis/sub-result-synthesis.md" },
    { id: "sub-handoff", role: "sub", platform: null, file: "agent-sub/sub-handoff/sub-handoff.md" },
    { id: "sub-escalation", role: "sub", platform: null, file: "agent-sub/sub-escalation/sub-escalation.md" },
    { id: "sub-verification", role: "sub", platform: null, file: "agent-sub/sub-verification/sub-verification.md" },
    { id: "sub-reporting", role: "sub", platform: null, file: "agent-sub/sub-reporting/sub-reporting.md" },
    { id: "sub-file-scoping", role: "sub", platform: null, file: "agent-sub/sub-file-scoping/sub-file-scoping.md" },
    { id: "sub-tool-restriction", role: "sub", platform: null, file: "agent-sub/sub-tool-restriction/sub-tool-restriction.md" },
    { id: "sub-token-caps", role: "sub", platform: null, file: "agent-sub/sub-token-caps/sub-token-caps.md" },
    { id: "sub-warm-start", role: "sub", platform: null, file: "agent-sub/sub-warm-start/sub-warm-start.md" },
    { id: "sub-failure-recovery", role: "sub", platform: null, file: "agent-sub/sub-failure-recovery/sub-failure-recovery.md" },
    { id: "sub-observability", role: "sub", platform: null, file: "agent-sub/sub-observability/sub-observability.md" },
    { id: "deep-research-plan", role: "deep", platform: null, file: "agent-deep/deep-research-plan/deep-research-plan.md" },
    { id: "deep-source-priority", role: "deep", platform: null, file: "agent-deep/deep-source-priority/deep-source-priority.md" },
    { id: "deep-chunked-digestion", role: "deep", platform: null, file: "agent-deep/deep-chunked-digestion/deep-chunked-digestion.md" },
    { id: "deep-multi-source", role: "deep", platform: null, file: "agent-deep/deep-multi-source/deep-multi-source.md" },
    { id: "deep-iterative-refinement", role: "deep", platform: null, file: "agent-deep/deep-iterative-refinement/deep-iterative-refinement.md" },
    { id: "deep-contradiction", role: "deep", platform: null, file: "agent-deep/deep-contradiction/deep-contradiction.md" },
    { id: "deep-verification", role: "deep", platform: null, file: "agent-deep/deep-verification/deep-verification.md" },
    { id: "deep-summarization", role: "deep", platform: null, file: "agent-deep/deep-summarization/deep-summarization.md" },
    { id: "deep-long-context", role: "deep", platform: null, file: "agent-deep/deep-long-context/deep-long-context.md" },
    { id: "deep-knowledge-graph", role: "deep", platform: null, file: "agent-deep/deep-knowledge-graph/deep-knowledge-graph.md" },
    { id: "deep-citation", role: "deep", platform: null, file: "agent-deep/deep-citation/deep-citation.md" },
    { id: "deep-checkpoint", role: "deep", platform: null, file: "agent-deep/deep-checkpoint/deep-checkpoint.md" },
    { id: "deep-reasoning-trace", role: "deep", platform: null, file: "agent-deep/deep-reasoning-trace/deep-reasoning-trace.md" },
    { id: "deep-context-budget", role: "deep", platform: null, file: "agent-deep/deep-context-budget/deep-context-budget.md" },
    { id: "deep-synthesis", role: "deep", platform: null, file: "agent-deep/deep-synthesis/deep-synthesis.md" },
    { id: "micro-single-purpose", role: "micro", platform: null, file: "agent-micro/micro-single-purpose/micro-single-purpose.md" },
    { id: "micro-prompt-minimalism", role: "micro", platform: null, file: "agent-micro/micro-prompt-minimalism/micro-prompt-minimalism.md" },
    { id: "micro-schema-strict", role: "micro", platform: null, file: "agent-micro/micro-schema-strict/micro-schema-strict.md" },
    { id: "micro-tool-minimalism", role: "micro", platform: null, file: "agent-micro/micro-tool-minimalism/micro-tool-minimalism.md" },
    { id: "micro-no-prose", role: "micro", platform: null, file: "agent-micro/micro-no-prose/micro-no-prose.md" },
    { id: "micro-batching", role: "micro", platform: null, file: "agent-micro/micro-batching/micro-batching.md" },
    { id: "micro-context-precision", role: "micro", platform: null, file: "agent-micro/micro-context-precision/micro-context-precision.md" },
    { id: "micro-retry", role: "micro", platform: null, file: "agent-micro/micro-retry/micro-retry.md" },
    { id: "micro-caching", role: "micro", platform: null, file: "agent-micro/micro-caching/micro-caching.md" },
    { id: "micro-composition", role: "micro", platform: null, file: "agent-micro/micro-composition/micro-composition.md" },
    { id: "micro-orchestration", role: "micro", platform: null, file: "agent-micro/micro-orchestration/micro-orchestration.md" },
    { id: "micro-observability", role: "micro", platform: null, file: "agent-micro/micro-observability/micro-observability.md" },
    { id: "micro-output-schema", role: "micro", platform: null, file: "agent-micro/micro-output-schema/micro-output-schema.md" },
    { id: "micro-timeboxing", role: "micro", platform: null, file: "agent-micro/micro-timeboxing/micro-timeboxing.md" },
    { id: "micro-reuse", role: "micro", platform: null, file: "agent-micro/micro-reuse/micro-reuse.md" },
    { id: "custom-grill-me", role: "custom", platform: null, file: "agent-sub/grill-me/grill-me.md", title: "Grill Me" },
    { id: "custom-ask-matt", role: "custom", platform: null, file: "custom/ask-matt/ask-matt.md", title: "Ask Matt" },
    { id: "custom-grilling", role: "custom", platform: null, file: "custom/grilling/grilling.md", title: "Grilling" },
    { id: "custom-handoff", role: "custom", platform: null, file: "custom/handoff/handoff.md", title: "Handoff" },
    { id: "custom-teach", role: "custom", platform: null, file: "custom/teach/teach.md", title: "Teach" },
    { id: "custom-to-questionnaire", role: "custom", platform: null, file: "custom/to-questionnaire/to-questionnaire.md", title: "To Questionnaire" },
    { id: "custom-wait-what", role: "custom", platform: null, file: "custom/wait-what/wait-what.md", title: "Wait What" },
    { id: "custom-writing-for-agents", role: "custom", platform: null, file: "custom/writing-for-agents/writing-for-agents.md", title: "Writing for Agents" },
    { id: "custom-code-review", role: "custom", platform: null, file: "custom/code-review/code-review.md", title: "Code Review" },
    { id: "custom-codebase-design", role: "custom", platform: null, file: "custom/codebase-design/codebase-design.md", title: "Codebase Design" },
    { id: "custom-diagnosing-bugs", role: "custom", platform: null, file: "custom/diagnosing-bugs/diagnosing-bugs.md", title: "Diagnosing Bugs" },
    { id: "custom-domain-modeling", role: "custom", platform: null, file: "custom/domain-modeling/domain-modeling.md", title: "Domain Modeling" },
    { id: "custom-grill-with-docs", role: "custom", platform: null, file: "custom/grill-with-docs/grill-with-docs.md", title: "Grill With Docs" },
    { id: "custom-implement", role: "custom", platform: null, file: "custom/implement/implement.md", title: "Implement" },
    { id: "custom-improve-codebase-architecture", role: "custom", platform: null, file: "custom/improve-codebase-architecture/improve-codebase-architecture.md", title: "Improve Codebase Architecture" },
    { id: "custom-prototype", role: "custom", platform: null, file: "custom/prototype/prototype.md", title: "Prototype" },
    { id: "custom-research", role: "custom", platform: null, file: "custom/research/research.md", title: "Research" },
    { id: "custom-resolving-merge-conflicts", role: "custom", platform: null, file: "custom/resolving-merge-conflicts/resolving-merge-conflicts.md", title: "Resolving Merge Conflicts" },
    { id: "custom-setup-matt-pocock-skills", role: "custom", platform: null, file: "custom/setup-matt-pocock-skills/setup-matt-pocock-skills.md", title: "Setup Matt Pocock Skills" },
    { id: "custom-tdd", role: "custom", platform: null, file: "custom/tdd/tdd.md", title: "TDD" },
    { id: "custom-to-spec", role: "custom", platform: null, file: "custom/to-spec/to-spec.md", title: "To Spec" },
    { id: "custom-to-tickets", role: "custom", platform: null, file: "custom/to-tickets/to-tickets.md", title: "To Tickets" },
    { id: "custom-triage", role: "custom", platform: null, file: "custom/triage/triage.md", title: "Triage" },
    { id: "custom-wayfinder", role: "custom", platform: null, file: "custom/wayfinder/wayfinder.md", title: "Wayfinder" },
    { id: "custom-wizard", role: "custom", platform: null, file: "custom/wizard/wizard.md", title: "Wizard" },
    { id: "custom-git-guardrails-claude-code", role: "custom", platform: null, file: "custom/git-guardrails-claude-code/git-guardrails-claude-code.md", title: "Git Guardrails (Claude Code)" },
    { id: "custom-migrate-to-shoehorn", role: "custom", platform: null, file: "custom/migrate-to-shoehorn/migrate-to-shoehorn.md", title: "Migrate to Shoehorn" },
    { id: "custom-scaffold-exercises", role: "custom", platform: null, file: "custom/scaffold-exercises/scaffold-exercises.md", title: "Scaffold Exercises" },
    { id: "custom-setup-pre-commit", role: "custom", platform: null, file: "custom/setup-pre-commit/setup-pre-commit.md", title: "Setup Pre-Commit Hooks" }
  ];

  /* ---------------- i18n ---------------- */

  var I18N = {
    en: {
      tagline: "A gallery of SKILL.md variants for AI coding agents. Browse by agent role, filter by platform, preview, and download.",
      eyebrow: "SKILL.MD · GALLERY",
      digestEyebrow: "MODULES",
      digestTitle: "Operational digest",
      digestPlanTitle: "Automated Planning",
      digestPlanDesc: "Research, scope, and sequence work before any code is written.",
      digestBuildTitle: "Guided Implementation",
      digestBuildDesc: "Turn plans into verified, production-grade code.",
      digestCompactTitle: "Compact Execution",
      digestCompactDesc: "Minimal token footprint for fast, targeted subagent work.",
      digestCapabilityTitle: "Agent Capabilities",
      digestCapabilityDesc: "Cross-platform skill files: design, search, cost-cutting, and page capture methods.",
      digestSubTitle: "Sub-agent Orchestration",
      digestSubDesc: "Delegate work in isolated slices: context isolation, fan-out, budgets, handoffs, and synthesis.",
      digestDeepTitle: "Deep Research",
      digestDeepDesc: "Long-run efficiency: planning, source priority, chunked digestion, verification, and synthesis.",
      digestMicroTitle: "Micro-agent Fleet",
      digestMicroDesc: "Tiny single-purpose agents: strict schemas, minimal prompts, caching, and composition.",
      digestVariantLabel: "variants",
      statSkills: "skills",
      statRoles: "roles",
      statPlatforms: "platforms",
      filterByRole: "Agent role",
      filterByPlatform: "Platform",
      allRoles: "All roles",
      allPlatforms: "All",
      universal: "Universal",
      searchPlaceholder: "Search skills…",
      downloadAll: "Download all (.zip)",
      download: "Download",
      preview: "Preview",
      copy: "Copy",
      copied: "Copied ✓",
      close: "Close",
      noResults: "No skills match your filters.",
      platformsTitle: "Platform Compatibility",
      standardsNote: "All variants follow the open Agent Skills standard (SKILL.md + name/description frontmatter), so every file also runs in any compatible agent that reads the same format.",
      install: "Install",
      frontmatter: "Frontmatter",
      invocation: "Invocation",
      levelPersonal: "Personal",
      levelProject: "Project",
      levelGlobal: "Global",
      levelUser: "User",
      footer: "AGENT KD SKILL — a static gallery of SKILL.md variants. Drop new files under /skills and run node scripts/build-content.mjs to regenerate.",
      roleDescPlan: "Plan-first skills: research, scope, and sequence work before any code is written.",
      roleDescBuild: "Implementation skills: convert plans into production-quality, verified code.",
      roleDescCompact: "Compact skills: a minimal token footprint for fast, targeted subagent work.",
      roleDescCapability: "Platform-agnostic capabilities: design, search, cost-cutting, and page capture skills.",
      roleDescSub: "Sub-agent efficiency: delegate in isolated slices with budgets, handoffs, and cheap synthesis.",
      roleDescDeep: "Deep-agent efficiency: plan, prioritize sources, digest in chunks, and synthesize with citations.",
      roleDescMicro: "Micro-agent efficiency: tiny single-purpose agents with strict schemas and minimal prompts.",
      roleDescCustom: "Community-contributed skills: third-party integrations, workflows, and specialized tools. Credit: Matt Peacock.",
      platformDescClaudecode: "Anthropic's terminal coding agent. Skills auto-load by description; invoke with #.",
      platformDescOpencode: "Open-source terminal agent with a native skill tool; loads by description.",
      platformDescCodex: "OpenAI's terminal agent. Skills follow the open standard; $skill-name forces invocation.",
      platformDescCursor: "Code-first IDE agent. Use @skill / /skill or let it auto-route by description.",
      platformDescGeminiCli: "Google's terminal agent. Skills activate through activate_skill with a consent prompt.",
      platformInvokeClaudecode: 'Press "#" and pick the skill, or let it auto-load when your prompt matches the description.',
      platformInvokeOpencode: "The native `skill` tool loads it on demand by description; also exposed as a slash command.",
      platformInvokeCodex: "Auto-loads by description; force it with $<skill-name>.",
      platformInvokeCursor: "Type @skill-name or /skill-name, or let Cursor auto-route by description.",
      platformInvokeGeminiCli: "Activated through the activate_skill tool after a consent prompt.",
      platformNoteClaudecode: "The same file is read by other open-format agents; keep a personal copy under ~/.claude/skills/.",
      platformNoteOpencode: "Also discovers .claude/skills/ and .agents/skills/, so one file works in opencode and Claude Code.",
      platformNoteCodex: ".agents/skills/ is the project-level alias if you prefer a shared standard layout.",
      platformNoteCursor: "The folder name must match name: for discovery.",
      platformNoteGeminiCli: ".agents/skills/ works as an alias for the same files.",
      langToggle: "中文"
    },
    zh: {
      tagline: "面向 AI 编码代理的 SKILL.md 变体图鉴。按代理角色浏览、按平台筛选，支持预览与下载。",
      eyebrow: "SKILL.MD · 图鉴",
      digestEyebrow: "模块",
      digestTitle: "运行概览",
      digestPlanTitle: "自动化规划",
      digestPlanDesc: "在编写任何代码之前完成调研、范围界定与任务排序。",
      digestBuildTitle: "引导式实现",
      digestBuildDesc: "将计划转化为经过测试、校验的生产级代码。",
      digestCompactTitle: "紧凑执行",
      digestCompactDesc: "以极低 token 占用完成快速、精准的子代理任务。",
      digestCapabilityTitle: "代理能力",
      digestCapabilityDesc: "跨平台技能文件：设计、搜索、成本控制与页面捕获方法。",
      digestSubTitle: "子代理编排",
      digestSubDesc: "隔离切片委派：上下文隔离、并行扇出、预算、交接与结果合成。",
      digestDeepTitle: "深度研究",
      digestDeepDesc: "长时运行效率：规划、源优先级、分块消化、验证与合成。",
      digestMicroTitle: "微代理集群",
      digestMicroDesc: "小型单一用途代理：严格 schema、极简提示、缓存与组合。",
      digestVariantLabel: "个变体",
      statSkills: "个技能",
      statRoles: "个角色",
      statPlatforms: "个平台",
      filterByRole: "代理角色",
      filterByPlatform: "平台",
      allRoles: "全部角色",
      allPlatforms: "全部",
      universal: "通用",
      searchPlaceholder: "搜索技能…",
      downloadAll: "下载全部 (.zip)",
      download: "下载",
      preview: "预览",
      copy: "复制",
      copied: "已复制 ✓",
      close: "关闭",
      noResults: "没有匹配的技能。",
      platformsTitle: "平台兼容性",
      standardsNote: "所有变体均遵循开放 Agent Skills 标准（SKILL.md + name/description 前置元数据），任何兼容该格式的代理都可直接使用。",
      install: "安装路径",
      frontmatter: "Frontmatter",
      invocation: "调用方式",
      levelPersonal: "个人级",
      levelProject: "项目级",
      levelGlobal: "全局级",
      levelUser: "用户级",
      footer: "AGENT KD SKILL —— SKILL.md 变体静态图鉴。在 /skills 下添加文件后运行 node scripts/build-content.mjs 重新生成。",
      roleDescPlan: "计划优先技能：在写任何代码之前完成调研、范围界定与任务排序。",
      roleDescBuild: "实现技能：把计划转化为经过测试、校验的生产级代码。",
      roleDescCompact: "紧凑技能：极低 token 占用，适合快速、精准的子代理任务。",
      roleDescCapability: "跨平台能力：设计、搜索、成本控制与页面捕获技能。",
      roleDescSub: "子代理效率：隔离切片委派，带预算、交接与低成本合成。",
      roleDescDeep: "深度代理效率：规划、源优先级、分块消化，带引用的合成。",
      roleDescMicro: "微代理效率：严格 schema 与极简提示的小型单一用途代理。",
      roleDescCustom: "社区贡献技能：第三方集成、工作流与专用工具。鸣谢：Matt Peacock。",
      platformDescClaudecode: "Anthropic 终端编码代理。按描述自动加载，通过 # 调用。",
      platformDescOpencode: "开源终端代理，内置 skill 工具，按描述加载。",
      platformDescCodex: "OpenAI 终端代理。遵循开放标准，$skill-name 强制调用。",
      platformDescCursor: "IDE 编码代理。可用 @skill / /skill，或按描述自动路由。",
      platformDescGeminiCli: "Google 终端代理。通过 activate_skill 激活（需确认）。",
      platformInvokeClaudecode: '按 "#" 选择技能，或由 Claude 在描述匹配时自动加载。',
      platformInvokeOpencode: "原生 `skill` 工具按描述按需加载，也可作为斜杠命令使用。",
      platformInvokeCodex: "按描述自动加载；使用 $<skill-name> 强制调用。",
      platformInvokeCursor: "输入 @skill-name 或 /skill-name，或由 Cursor 按描述自动路由。",
      platformInvokeGeminiCli: "通过 activate_skill 工具激活，激活前需确认。",
      platformNoteClaudecode: "其他开放格式代理同样会读取该文件；个人副本位于 ~/.claude/skills/。",
      platformNoteOpencode: "同时发现 .claude/skills/ 与 .agents/skills/，一个文件即可用于 opencode 与 Claude Code。",
      platformNoteCodex: "若希望采用通用标准目录，项目级别名可使用 .agents/skills/。",
      platformNoteCursor: "目录名必须与 name: 一致才能被发现。",
      platformNoteGeminiCli: ".agents/skills/ 可作同一文件的别名目录。",
      langToggle: "EN"
    }
  };

  /* ---------------- state ---------------- */

  var lang = localStorage.getItem("agks-lang") === "zh" ? "zh" : "en";
  var state = { role: "all", platform: "all", search: "" };
  var modalSkillId = null;

  function t(key) {
    return I18N[lang][key] !== undefined ? I18N[lang][key] : key;
  }

  function roleById(id) {
    for (var i = 0; i < ROLES.length; i++) if (ROLES[i].id === id) return ROLES[i];
    return null;
  }

  function platformById(id) {
    for (var i = 0; i < PLATFORMS.length; i++) if (PLATFORMS[i].id === id) return PLATFORMS[i];
    return null;
  }

  function skillById(id) {
    for (var i = 0; i < SKILLS.length; i++) if (SKILLS[i].id === id) return SKILLS[i];
    return null;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function cardDesc(skill) {
    if (skill.platform === null) {
      var universalText = {
        capability: { en: "Cross-platform agent capability, works in any agent.", zh: "跨平台代理能力，适用于所有 Agent。" },
        sub: { en: "Efficiency pattern for orchestrating sub-agents.", zh: "面向子代理编排的效率模式。" },
        deep: { en: "Efficiency pattern for long-running deep research agents.", zh: "面向长时间深度研究代理的效率模式。" },
        micro: { en: "Efficiency pattern for tiny single-purpose micro-agents.", zh: "面向小型单一用途微代理的效率模式。" },
        custom: { en: "Community-contributed skill: third-party integration or specialized workflow.", zh: "社区贡献技能：第三方集成或专用工作流。" }
      };
      var txt = universalText[skill.role] || universalText.capability;
      return lang === "zh" ? txt.zh : txt.en;
    }
    var p = platformById(skill.platform);
    var r = roleById(skill.role);
    return lang === "zh"
      ? r.code + " 变体，适用于 " + p.name + "。"
      : r.code + " variant for " + p.name + ".";
  }

  function titleFromId(id) {
    return id
      .replace(/^[a-z]+-/, "")
      .split(/[-_]/)
      .map(function (w) {
        return w.charAt(0).toUpperCase() + w.slice(1);
      })
      .join(" ");
  }

  // Universal skills carry their display title in <id>-skill.json; fall back to
  // the name derived from the id so cards never render an undefined heading.
  function universalTitle(skill) {
    if (skill.title) return skill.title;
    var jsonText = window.SKILLS_CONTENT && window.SKILLS_CONTENT[skillFiles(skill).json];
    if (jsonText) {
      try {
        var data = JSON.parse(jsonText);
        if (data.title) return data.title;
      } catch (e) {
        /* ignore malformed embedded json */
      }
    }
    return titleFromId(skill.id);
  }

  function skillMatches(skill) {
    if (state.role !== "all" && skill.role !== state.role) return false;
    if (state.platform !== "all" && skill.platform !== null && skill.platform !== state.platform) return false;
    if (state.search) {
      var q = state.search.toLowerCase();
      var platName = skill.platform === null ? t("universal") : platformById(skill.platform).name;
      var hay = (skill.id + " " + cardDesc(skill) + " " + platName + " " + (skill.title || "") + " " + roleById(skill.role).code).toLowerCase();
      if (hay.indexOf(q) === -1) return false;
    }
    return true;
  }

  function getContent(skill) {
    return new Promise(function (resolve, reject) {
      if (window.SKILLS_CONTENT && window.SKILLS_CONTENT[skill.file]) {
        resolve(window.SKILLS_CONTENT[skill.file]);
        return;
      }
      fetch("skills/" + skill.file)
        .then(function (r) {
          return r.ok ? r.text() : Promise.reject(new Error("HTTP " + r.status));
        })
        .then(resolve)
        .catch(reject);
    });
  }

  function basename(file) {
    return file.split("/").pop();
  }

  // Every skill is a per-skill folder with 3 files: hybrid md + <skill>-skill.json + assembly.json
  function skillFiles(skill) {
    var dir = skill.file.split("/").slice(0, -1).join("/");
    var base = basename(skill.file).replace(/\.md$/, "").replace(/-SKILL$/, "");
    return {
      md: skill.file,
      json: dir + "/" + base + "-skill.json",
      assembly: dir + "/assembly.json"
    };
  }

  /* ---------------- rendering ---------------- */

  var revealObserver = null;
  var revealWired = false;

  function revealInView() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var nodes = document.querySelectorAll(".reveal:not(.in)");
    for (var i = 0; i < nodes.length; i++) {
      var r = nodes[i].getBoundingClientRect();
      if (r.top < vh * 0.94 && r.bottom > 0) nodes[i].classList.add("in");
    }
  }

  function initReveal() {
    if ("IntersectionObserver" in window) {
      if (revealObserver) revealObserver.disconnect();
      revealObserver = new IntersectionObserver(function (entries) {
        for (var e = 0; e < entries.length; e++) {
          if (entries[e].isIntersecting) {
            entries[e].target.classList.add("in");
            revealObserver.unobserve(entries[e].target);
          }
        }
      }, { threshold: 0.08 });
      var nodes = document.querySelectorAll(".reveal:not(.in)");
      for (var i = 0; i < nodes.length; i++) revealObserver.observe(nodes[i]);
    }
    revealInView();
  }

  function wireReveal() {
    if (revealWired) return;
    revealWired = true;
    window.addEventListener("scroll", revealInView, { passive: true });
    document.addEventListener("scroll", revealInView, true);
    var ticks = 0;
    var timer = setInterval(function () {
      ticks++;
      if (ticks > 10) {
        clearInterval(timer);
        return;
      }
      revealInView();
    }, 300);
  }

  function setI18nNodes() {
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = t(nodes[i].getAttribute("data-i18n"));
    }
    document.querySelector("html").setAttribute("lang", lang);
    document.getElementById("search").placeholder = t("searchPlaceholder");
    document.getElementById("langToggle").textContent = t("langToggle");
    document.title = lang === "zh" ? "AGENT KD SKILL —— SKILL.md 图鉴" : "AGENT KD SKILL — SKILL.md Gallery";
    renderStats();
  }

  function renderStats() {
    var el = document.getElementById("stats");
    el.innerHTML =
      '<div class="stat"><b>' + SKILLS.length + "</b><span>" + t("statSkills") + "</span></div>" +
      '<div class="stat"><b>' + ROLES.length + "</b><span>" + t("statRoles") + "</span></div>" +
      '<div class="stat"><b>' + PLATFORMS.length + "</b><span>" + t("statPlatforms") + "</span></div>";
  }

  function renderDigest() {
    var nodes = document.querySelectorAll("[data-count]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var role = el.getAttribute("data-count");
      var n = 0;
      for (var j = 0; j < SKILLS.length; j++) if (SKILLS[j].role === role) n++;
      el.textContent = n;
    }
  }

  function renderPills() {
    var roleEl = document.getElementById("rolePills");
    var platEl = document.getElementById("platformPills");
    var html = '<button class="pill" data-role="all" data-active="' + (state.role === "all") + '">' + escapeHtml(t("allRoles")) + "</button>";
    for (var i = 0; i < ROLES.length; i++) {
      var r = ROLES[i];
      html += '<button class="pill pill-' + r.accent + '" data-role="' + r.id + '" data-active="' + (state.role === r.id) + '">' + r.code + "</button>";
    }
    roleEl.innerHTML = html;

    html = '<button class="pill" data-platform="all" data-active="' + (state.platform === "all") + '">' + escapeHtml(t("allPlatforms")) + "</button>";
    for (var j = 0; j < PLATFORMS.length; j++) {
      var p = PLATFORMS[j];
      html += '<button class="pill" data-platform="' + p.id + '" data-active="' + (state.platform === p.id) + '">' + escapeHtml(p.name) + "</button>";
    }
    platEl.innerHTML = html;
  }

  function renderGrid() {
    var el = document.getElementById("grid");
    var out = "";
    var any = false;

    for (var i = 0; i < ROLES.length; i++) {
      var role = ROLES[i];
      var cards = SKILLS.filter(function (s) {
        return s.role === role.id && skillMatches(s);
      });
      if (!cards.length) continue;
      any = true;
      out +=
        '<section class="role-section reveal">' +
        '<div class="role-head">' +
        '<span class="role-chip role-chip-' + role.accent + '">' + role.code + "</span>" +
        '<p class="role-desc">' + escapeHtml(t("roleDesc" + role.id.charAt(0).toUpperCase() + role.id.slice(1))) + "</p>" +
        "</div>" +
        '<div class="role-grid">';
      for (var c = 0; c < cards.length; c++) {
        out += cardHtml(cards[c], c);
      }
      out += "</div></section>";
    }

    if (!any) {
      out = '<p class="empty">' + escapeHtml(t("noResults")) + "</p>";
    }
    el.innerHTML = out;
    initReveal();
  }

  function cardHtml(skill, idx) {
    var r = roleById(skill.role);
    var p = skill.platform === null ? null : platformById(skill.platform);
    var title = p ? r.code + " · " + escapeHtml(p.name) : escapeHtml(universalTitle(skill));
    var platBadge = p
      ? '<span class="badge badge-platform">' + escapeHtml(p.name) + "</span>"
      : '<span class="badge badge-platform">' + escapeHtml(t("universal")) + "</span>";
    var isCustom = skill.role === "custom";
    var stars = isCustom ? '<div class="card-stars" data-skill-id="' + skill.id + '">' +
      '<span class="star" data-val="1">★</span><span class="star" data-val="2">★</span>' +
      '<span class="star" data-val="3">★</span><span class="star" data-val="4">★</span>' +
      '<span class="star" data-val="5">★</span>' +
      '<span class="star-label"></span></div>' : "";
    return (
      '<article class="skill-card reveal" style="--i:' + idx + '">' +
      '<div class="card-top">' +
      '<span class="badge badge-' + r.accent + '">' + r.code + "</span>" +
      platBadge +
      "</div>" +
      '<h3 class="card-title">' + title + "</h3>" +
      '<p class="card-desc">' + escapeHtml(cardDesc(skill)) + "</p>" +
      stars +
      '<code class="card-file">' + escapeHtml(basename(skill.file)) + "</code>" +
      '<div class="card-actions">' +
      '<button class="btn" type="button" data-action="preview" data-id="' + skill.id + '">' + escapeHtml(t("preview")) + "</button>" +
      '<button class="btn btn-primary" type="button" data-action="download" data-id="' + skill.id + '">' + escapeHtml(t("download")) + "</button>" +
      "</div>" +
      "</article>"
    );
  }

  function renderPlatforms() {
    var el = document.getElementById("platformsGrid");
    var out = "";
    for (var i = 0; i < PLATFORMS.length; i++) {
      var p = PLATFORMS[i];
      var paths = "";
      for (var k = 0; k < p.install.length; k++) {
        var item = p.install[k];
        paths +=
          "<div class=\"install-path\"><code>" + escapeHtml(item.path) + "</code><span>" +
          escapeHtml(t("level" + item.level.charAt(0).toUpperCase() + item.level.slice(1))) +
          "</span></div>";
      }
      out +=
        '<article class="platform-card reveal" style="--i:' + i + '">' +
        '<div class="plat-head">' +
        '<span class="plat-icon">' + p.short + "</span>" +
        "<div>" +
        "<h3>" + escapeHtml(p.name) + "</h3>" +
        '<span class="plat-vendor">' + escapeHtml(p.vendor) + "</span>" +
        "</div>" +
        "</div>" +
        '<p class="plat-desc">' + escapeHtml(t("platformDesc" + p.id.charAt(0).toUpperCase() + p.id.slice(1))) + "</p>" +
        "<dl>" +
        "<dt>" + escapeHtml(t("install")) + "</dt>" +
        "<dd>" + paths + "</dd>" +
        "<dt>" + escapeHtml(t("frontmatter")) + "</dt>" +
        "<dd><code>" + escapeHtml(p.fm.join(", ")) + "</code></dd>" +
        "<dt>" + escapeHtml(t("invocation")) + "</dt>" +
        "<dd>" + escapeHtml(t("platformInvoke" + p.id.charAt(0).toUpperCase() + p.id.slice(1))) + "</dd>" +
        "</dl>" +
        '<p class="plat-note">' + escapeHtml(t("platformNote" + p.id.charAt(0).toUpperCase() + p.id.slice(1))) + "</p>" +
        "</article>";
    }
    el.innerHTML = out;
    initReveal();
  }

  function render() {
    setI18nNodes();
    renderDigest();
    renderPills();
    renderGrid();
    renderPlatforms();
    initReveal();
  }

  /* ---------------- actions ---------------- */

  function downloadSingle(skill) {
    getContent(skill)
      .then(function (text) {
        downloadBlob(new Blob([text], { type: "text/markdown" }), basename(skill.file));
      })
      .catch(function () {
        alert("Could not load " + skill.file);
      });
  }

  function buildInstallGuide() {
    var lines = [];
    lines.push("# AGENT KD SKILL — install guide");
    lines.push("");
    lines.push("Every skill ships as a 3-file bundle in its own folder:");
    lines.push("- `<name>-SKILL.md` — hybrid markdown (markdown body, JSON frontmatter).");
    lines.push("- `<name>-skill.json` — machine-readable skill data (schema, role, platform, frontmatter, install, invoke).");
    lines.push("- `assembly.json` — assembly manifest combining the md + json (name, role, platform, files).");
    lines.push("");
    lines.push("For the Agent Skills open standard, install the SKILL.md (or the hybrid markdown file) at the path your platform expects, with frontmatter `name` and `description`.");
    lines.push("");
    for (var i = 0; i < PLATFORMS.length; i++) {
      var p = PLATFORMS[i];
      lines.push("## " + p.name + " (" + p.vendor + ")");
      for (var k = 0; k < p.install.length; k++) {
        var item = p.install[k];
        lines.push("- " + item.level + ": " + item.path.replace("<name>", "your-skill-folder"));
      }
      lines.push("");
    }
    lines.push("## Install steps");
    lines.push("1. Pick a variant folder, e.g. skills/agent-plan/plan-opencode/.");
    lines.push("2. Create the matching folder under your platform's skills directory.");
    lines.push("3. Copy the SKILL.md file into that folder (folder name = skill name).");
    lines.push("4. Keep <name>-skill.json and assembly.json alongside it for tooling/portability.");
    lines.push("5. Restart the agent session, then trigger it by description or the platform's invocation shortcut.");
    return lines.join("\n");
  }

  function downloadAll() {
    var entries = [];
    var failed = false;
    for (var i = 0; i < SKILLS.length; i++) {
      var skill = SKILLS[i];
      var files = skillFiles(skill);
      entries.push({ name: "skills/" + files.json, text: (window.SKILLS_CONTENT && window.SKILLS_CONTENT[files.json]) || "" });
      entries.push({ name: "skills/" + files.assembly, text: (window.SKILLS_CONTENT && window.SKILLS_CONTENT[files.assembly]) || "" });
      if (window.SKILLS_CONTENT && window.SKILLS_CONTENT[skill.file]) {
        entries.push({ name: "skills/" + skill.file, text: window.SKILLS_CONTENT[skill.file] });
      } else {
        failed = true;
        entries.push({ name: "skills/" + skill.file, text: "" });
      }
    }
    entries.unshift({ name: "INSTALL.md", text: buildInstallGuide() });
    if (failed) {
      console.warn("AGENT KD SKILL: some embedded contents were missing (window.SKILLS_CONTENT). Run node scripts/build-content.mjs.");
    }
    downloadBlob(makeZip(entries), "agent-kd-skill-bundle.zip");
  }

  function openPreview(skill) {
    getContent(skill)
      .then(function (text) {
        modalSkillId = skill.id;
        document.getElementById("modalTitle").textContent = t("preview") + " · " + basename(skill.file);
        document.getElementById("modalCode").textContent = text;
        document.getElementById("modal").hidden = false;
      })
      .catch(function () {
        alert("Could not load " + skill.file);
      });
  }

  function closePreview() {
    document.getElementById("modal").hidden = true;
    modalSkillId = null;
  }

  function copyModal() {
    var code = document.getElementById("modalCode").textContent;
    var btn = document.getElementById("modalCopy");
    function done() {
      btn.textContent = t("copied");
      setTimeout(function () {
        btn.textContent = t("copy");
      }, 1200);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(done, function () {
        fallbackCopy(code);
        done();
      });
    } else {
      fallbackCopy(code);
      done();
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
    } catch (e) {
      /* ignore */
    }
    document.body.removeChild(ta);
  }

  /* ---------------- events ---------------- */

  function bindEvents() {
    document.getElementById("langToggle").addEventListener("click", function () {
      lang = lang === "zh" ? "en" : "zh";
      localStorage.setItem("agks-lang", lang);
      render();
    });

    document.getElementById("search").addEventListener("input", function (e) {
      state.search = e.target.value.trim();
      renderGrid();
    });

    document.getElementById("rolePills").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-role]");
      if (!b) return;
      state.role = b.getAttribute("data-role");
      renderPills();
      renderGrid();
    });

    document.getElementById("platformPills").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-platform]");
      if (!b) return;
      state.platform = b.getAttribute("data-platform");
      renderPills();
      renderGrid();
    });

    document.getElementById("grid").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-action]");
      if (!b) return;
      var skill = skillById(b.getAttribute("data-id"));
      if (!skill) return;
      if (b.getAttribute("data-action") === "download") downloadSingle(skill);
      else openPreview(skill);
    });

    document.getElementById("downloadAll").addEventListener("click", downloadAll);

    document.getElementById("modalClose").addEventListener("click", closePreview);
    document.getElementById("modalCopy").addEventListener("click", copyModal);
    document.getElementById("modalDownload").addEventListener("click", function () {
      if (!modalSkillId) return;
      downloadSingle(skillById(modalSkillId));
    });
    document.getElementById("modal").addEventListener("click", function (e) {
      if (e.target === this) closePreview();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !document.getElementById("modal").hidden) closePreview();
    });
  }

  /* ---------------- carousel ---------------- */

  function renderCarousel() {
    var track = document.getElementById("carouselTrack");
    if (!track) return;
    var customSkills = SKILLS.filter(function (s) { return s.role === "custom"; });
    var html = "";
    for (var i = 0; i < 2; i++) {
      for (var j = 0; j < customSkills.length; j++) {
        var s = customSkills[j];
        var name = s.title || s.id.replace("custom-", "").replace(/-/g, " ");
        html += '<span class="carousel-item">' + escapeHtml(name) + ' <small>.md</small></span>';
      }
    }
    track.innerHTML = html;
  }

  /* ---------------- star rating ---------------- */

  function initStarRating() {
    document.getElementById("grid").addEventListener("click", function (e) {
      var star = e.target.closest(".star");
      if (!star) return;
      var container = star.closest(".card-stars");
      if (!container) return;
      var val = parseInt(star.getAttribute("data-val"), 10);
      var skillId = container.getAttribute("data-skill-id");
      var label = container.querySelector(".star-label");
      var labels = ["", "Least Used", "Rarely Used", "Moderately Used", "Frequently Used", "Most Popular"];
      var stars = container.querySelectorAll(".star");
      for (var i = 0; i < stars.length; i++) {
        stars[i].classList.toggle("active", i < val);
      }
      if (label) label.textContent = labels[val];
      try { localStorage.setItem("kd-star-" + skillId, val); } catch (ex) {}
    });
    var saved = document.querySelectorAll(".card-stars[data-skill-id]");
    saved.forEach(function (el) {
      var id = el.getAttribute("data-skill-id");
      try {
        var v = parseInt(localStorage.getItem("kd-star-" + id), 10);
        if (v > 0) {
          var stars = el.querySelectorAll(".star");
          for (var i = 0; i < stars.length; i++) stars[i].classList.toggle("active", i < v);
          var label = el.querySelector(".star-label");
          var labels = ["", "Least Used", "Rarely Used", "Moderately Used", "Frequently Used", "Most Popular"];
          if (label) label.textContent = labels[v];
        }
      } catch (ex) {}
    });
  }

  /* ---------------- sidebar + pull-to-refresh ---------------- */

  function initSidebar() {
    var toggle = document.getElementById("sidebarToggle");
    var sidebar = document.getElementById("sidebar");
    if (toggle && sidebar) {
      toggle.addEventListener("click", function () { sidebar.classList.toggle("open"); });
    }

    var indicator = document.getElementById("pullIndicator");
    var homeLink = document.getElementById("homeLink");
    if (!indicator || !homeLink) return;

    var startY = 0;
    var pulling = false;
    var threshold = 80;

    homeLink.addEventListener("touchstart", function (e) {
      if (window.scrollY === 0) {
        startY = e.touches[0].clientY;
        pulling = true;
      }
    }, { passive: true });

    homeLink.addEventListener("touchmove", function (e) {
      if (!pulling) return;
      var dy = e.touches[0].clientY - startY;
      if (dy > 10 && window.scrollY === 0) {
        indicator.classList.add("visible");
        indicator.textContent = dy > threshold ? "↑ Release to refresh" : "↓ Pull to refresh";
        var progress = Math.min(dy / threshold, 1);
        homeLink.style.transform = "translateY(" + (dy * 0.4) + "px)";
        homeLink.style.transition = "none";
      }
    }, { passive: true });

    homeLink.addEventListener("touchend", function () {
      if (!pulling) return;
      pulling = false;
      var indicatorText = indicator.textContent;
      homeLink.style.transform = "";
      homeLink.style.transition = "transform 0.3s ease";

      if (indicatorText.indexOf("Release") !== -1) {
        indicator.classList.add("refreshing");
        indicator.textContent = "↻ Refreshing…";
        setTimeout(function () { window.location.reload(); }, 600);
      } else {
        indicator.classList.remove("visible");
      }
    });
  }

  /* ---------------- init ---------------- */

  render();
  bindEvents();
  wireReveal();
  renderCarousel();
  initStarRating();
  initSidebar();
})();
