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
  "agent-capability": "AGENT CAPABILITY"
};

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
  "html2canvas.md": "html2canvas"
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
    const roleDir = parts[0]; // agent-plan | agent-build | agent-compact | agent-capability
    const fileName = parts[parts.length - 1];
    const role = roleDir.replace("agent-", "");
    const roleCode = ROLE_CODE[roleDir];
    const base = path.basename(fileName, path.extname(fileName));
    const skillId = skillIdFromFile(rel);
    const text = fs.readFileSync(file, "utf8");
    const { fm, body } = parseFrontmatter(text);

    const isCapability = roleDir === "agent-capability";
    const platform = isCapability ? null : skillId.replace(role + "-", "");
    const plat = isCapability ? null : PLATFORMS[platform];
    const title = isCapability
      ? CAP_TITLES[fileName]
      : roleCode + " · " + plat.name;

    const install = isCapability
      ? [{ level: "universal", path: "<agent>/skills/<name>/SKILL.md" }]
      : plat.install.map((i) => ({ ...i, path: i.path.replace("<name>", fm.name || skillId) }));

    const invoke = isCapability
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
      platformName: isCapability ? "Universal" : plat.name,
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
