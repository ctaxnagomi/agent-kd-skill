// scripts/generate-skill-files.mjs
// Converts every flat skill .md into a per-skill folder containing 3 files:
//   <folder>/<file>.md       - hybrid markdown (markdown body, JSON frontmatter)
//   <folder>/<base>-skill.json  - full skill data
//   <folder>/assembly.json   - manifest combining md + json (name, role, platform, files)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const skillsDir = path.join(root, "skills");

const ROLE_CODE = {
  "agent-plan": "AGENT PLAN",
  "agent-build": "AGENT BUILD",
  "agent-compact": "AGENT COMPACT",
  "agent-capability": "AGENT CAPABILITY",
  "agent-sub": "AGENT SUB",
  "agent-deep": "AGENT DEEP",
  "agent-micro": "AGENT MICRO"
};

// Roles whose skills are platform-agnostic ("universal"): no platform column,
// install target is any agent's skills dir.
const UNIVERSAL_ROLES = new Set([
  "agent-capability",
  "agent-sub",
  "agent-deep",
  "agent-micro"
]);

const PLATFORMS = {
  claudecode: {
    name: "Claude Code",
    install: [
      { level: "personal", path: "~/.claude/skills/<name>/SKILL.md" },
      { level: "project", path: ".claude/skills/<name>/SKILL.md" }
    ],
    fm: ["name", "description", "allowed-tools", "disable-model-invocation", "paths", "model", "effort"],
    invoke: "Press \"#\" and pick the skill, or let it auto-load when your prompt matches the description."
  },
  opencode: {
    name: "opencode",
    install: [
      { level: "project", path: ".opencode/skills/<name>/SKILL.md" },
      { level: "global", path: "~/.config/opencode/skills/<name>/SKILL.md" }
    ],
    fm: ["name", "description", "license", "compatibility", "metadata", "agent"],
    invoke: "The native `skill` tool loads it on demand by description; also exposed as a slash command."
  },
  codex: {
    name: "Codex CLI",
    install: [
      { level: "user", path: "~/.codex/skills/<name>/SKILL.md" },
      { level: "project", path: ".codex/skills/<name>/SKILL.md" }
    ],
    fm: ["name", "description", "license", "compatibility", "metadata", "allowed-tools (experimental)"],
    invoke: "Auto-loads by description; force it with $<skill-name>."
  },
  cursor: {
    name: "Cursor",
    install: [
      { level: "user", path: "~/.cursor/skills/<name>/SKILL.md" },
      { level: "project", path: ".cursor/skills/<name>/SKILL.md" }
    ],
    fm: ["name", "description", "paths", "globs", "disable-model-invocation"],
    invoke: "Type @skill-name or /skill-name, or let Cursor auto-route by description."
  },
  "gemini-cli": {
    name: "Gemini CLI",
    install: [
      { level: "user", path: "~/.gemini/skills/<name>/SKILL.md" },
      { level: "project", path: ".gemini/skills/<name>/SKILL.md" }
    ],
    fm: ["name", "description"],
    invoke: "Activated through the activate_skill tool after a consent prompt."
  }
};

const CAP_TITLES = {
  "design.md": "Design",
  "frontend-specialist.md": "Frontend Specialist",
  "search.md": "Search",
  "skill.md": "Skill Authoring",
  "cut-cost-token.md": "Cut-Cost Token",
  "dgui-emitter-snapDOM.md": "DGUI Emitter · snapDOM",
  "html2canvas.md": "html2canvas",
  "whitepaper-tex.md": "Whitepaper · LaTeX arXiv",
  "pdf-ready.md": "PDF-Ready Output"
};

// Title overrides for ecosystem (universal) skills, keyed by file name.
const ECO_TITLES = {
  // agent-sub
  "sub-context-isolation.md": "Sub-agent Context Isolation",
  "sub-task-decomposition.md": "Sub-agent Task Decomposition",
  "sub-budgeting.md": "Sub-agent Budgeting",
  "sub-parallel-fanout.md": "Sub-agent Parallel Fan-out",
  "sub-result-synthesis.md": "Sub-agent Result Synthesis",
  "sub-handoff.md": "Sub-agent Handoff Protocol",
  "sub-escalation.md": "Sub-agent Escalation",
  "sub-verification.md": "Sub-agent Verification",
  "sub-reporting.md": "Sub-agent Reporting",
  "sub-file-scoping.md": "Sub-agent File Scoping",
  "sub-tool-restriction.md": "Sub-agent Tool Restriction",
  "sub-token-caps.md": "Sub-agent Token Caps",
  "sub-warm-start.md": "Sub-agent Warm Start",
  "sub-failure-recovery.md": "Sub-agent Failure Recovery",
  "sub-observability.md": "Sub-agent Observability",
  // agent-deep
  "deep-research-plan.md": "Deep-agent Research Plan",
  "deep-source-priority.md": "Deep-agent Source Priority",
  "deep-chunked-digestion.md": "Deep-agent Chunked Digestion",
  "deep-multi-source.md": "Deep-agent Multi-source",
  "deep-iterative-refinement.md": "Deep-agent Iterative Refinement",
  "deep-contradiction.md": "Deep-agent Contradiction",
  "deep-verification.md": "Deep-agent Verification",
  "deep-summarization.md": "Deep-agent Summarization",
  "deep-long-context.md": "Deep-agent Long Context",
  "deep-knowledge-graph.md": "Deep-agent Knowledge Graph",
  "deep-citation.md": "Deep-agent Citation",
  "deep-checkpoint.md": "Deep-agent Checkpointing",
  "deep-reasoning-trace.md": "Deep-agent Reasoning Trace",
  "deep-context-budget.md": "Deep-agent Context Budget",
  "deep-synthesis.md": "Deep-agent Synthesis",
  // agent-micro
  "micro-single-purpose.md": "Micro-agent Single Purpose",
  "micro-prompt-minimalism.md": "Micro-agent Prompt Minimalism",
  "micro-schema-strict.md": "Micro-agent Strict Schema",
  "micro-tool-minimalism.md": "Micro-agent Tool Minimalism",
  "micro-no-prose.md": "Micro-agent No-Prose",
  "micro-batching.md": "Micro-agent Batching",
  "micro-context-precision.md": "Micro-agent Context Precision",
  "micro-retry.md": "Micro-agent Retry",
  "micro-caching.md": "Micro-agent Caching",
  "micro-composition.md": "Micro-agent Composition",
  "micro-orchestration.md": "Micro-agent Orchestration",
  "micro-observability.md": "Micro-agent Observability",
  "micro-output-schema.md": "Micro-agent Output Schema",
  "micro-timeboxing.md": "Micro-agent Timeboxing",
  "micro-reuse.md": "Micro-agent Reuse"
};

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name.toLowerCase().endsWith(".md")) out.push(full);
  }
  return out;
}

function parseFrontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!m) return { fm: {}, body: text };
  const raw = m[1].trim();
  if (raw.startsWith("{")) {
    try {
      return { fm: JSON.parse(raw), body: text.slice(m[0].length) };
    } catch (e) {
      /* fall through to YAML-ish parsing */
    }
  }
  const fm = {};
  let key = null;
  for (const line of m[1].split(/\r?\n/)) {
    if (/^\s*-/.test(line)) {
      if (key) {
        if (!Array.isArray(fm[key])) fm[key] = [];
        fm[key].push(line.replace(/^\s*-\s*/, "").trim());
      }
      continue;
    }
    const kv = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
    if (kv) {
      key = kv[1];
      fm[key] = kv[2].trim();
    } else {
      key = null;
    }
  }
  return { fm, body: text.slice(m[0].length) };
}

function skillIdFromFile(rel) {
  const base = path.basename(rel, path.extname(rel));
  if (/-SKILL$/.test(base)) return base.replace(/-SKILL$/, "");
  return base;
}

function main() {
  const files = walk(skillsDir).sort();
  let created = 0;

  for (const file of files) {
    const rel = path.relative(skillsDir, file).replace(/\\/g, "/");
    const parts = rel.split("/");
    const roleDir = parts[0]; // agent-plan | agent-build | agent-compact | agent-capability | agent-sub | agent-deep | agent-micro
    const fileName = parts[parts.length - 1];
    const role = roleDir.replace("agent-", "");
    const roleCode = ROLE_CODE[roleDir];
    const base = path.basename(fileName, path.extname(fileName));
    const skillId = skillIdFromFile(rel);
    const text = fs.readFileSync(file, "utf8");
    const { fm, body } = parseFrontmatter(text);

    const isUniversal = UNIVERSAL_ROLES.has(roleDir);
    const platform = isUniversal ? null : skillId.replace(role + "-", "");
    const plat = isUniversal ? null : PLATFORMS[platform];
    const title = isUniversal
      ? (ECO_TITLES[fileName] || CAP_TITLES[fileName] || skillId)
      : roleCode + " · " + plat.name;

    const install = isUniversal
      ? [{ level: "universal", path: "<agent>/skills/<name>/SKILL.md" }]
      : plat.install.map((i) => ({ ...i, path: i.path.replace("<name>", fm.name || skillId) }));

    const invoke = isUniversal
      ? "Universal skill: load it in any compatible agent by description match."
      : plat.invoke;

    const folder = path.join(skillsDir, roleDir, skillId);
    fs.mkdirSync(folder, { recursive: true });

    const mdName = fileName;
    const jsonName = skillId + "-skill.json";
    const assemblyName = "assembly.json";

    // 1) Hybrid markdown: JSON frontmatter + markdown body
    const hybridMd =
      "---\n" + JSON.stringify(fm, null, 2) + "\n---\n" + body;
    fs.writeFileSync(path.join(folder, mdName), hybridMd);

    // 2) Skill data (json)
    const skillJson = {
      $schema: "https://agentkd.skill/skill-schema-v1",
      name: fm.name || skillId,
      title,
      role,
      roleCode,
      platform,
      platformName: isUniversal ? "Universal" : plat.name,
      description: fm.description || "",
      frontmatter: fm,
      install,
      invoke,
      files: { md: mdName, json: jsonName, assembly: assemblyName }
    };
    fs.writeFileSync(path.join(folder, jsonName), JSON.stringify(skillJson, null, 2) + "\n");

    // 3) Assembly manifest combining md + json
    const assemblyJson = {
      $schema: "https://agentkd.skill/assembly-schema-v1",
      name: fm.name || skillId,
      title,
      role,
      roleCode,
      platform,
      description: fm.description || "",
      files: { md: mdName, json: jsonName, assembly: assemblyName },
      install,
      invoke
    };
    fs.writeFileSync(path.join(folder, assemblyName), JSON.stringify(assemblyJson, null, 2) + "\n");

    // Remove the old flat file (only when it is not the file we just wrote)
    if (path.resolve(file) !== path.resolve(path.join(folder, mdName))) {
      fs.unlinkSync(file);
    }
    created++;
    console.log(`  ${rel} -> ${path.join(roleDir, skillId)}/`);
  }

  console.log(`Generated 3-file structure for ${created} skills under ${path.relative(root, skillsDir)}.`);
}

main();
