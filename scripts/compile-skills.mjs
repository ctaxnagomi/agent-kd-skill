// scripts/compile-skills.mjs
// Compiles the skill gallery into token-optimized artifacts + a catalog index.
//
// Input contract: every skill folder's assembly.json (the assembly manifest).
// Output, per skill: data/compiled/<name>.json — a minified, deduplicated
//   artifact (metadata + condensed instructions + baked-in snapDOM emit profile).
// Output, one file: data/compiled/catalog.json — id/role/platform/description
//   index so an agent can pick the right skill for a fraction of the tokens.
//
// Run: node scripts/compile-skills.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const skillsDir = path.join(root, "skills");
const outDir = path.join(root, "data", "compiled");

const ASSEMBLY = "assembly.json";

// snapDOM emit profile baked into every artifact: leaner DOM snapshots at
// capture time, not just lighter skill payloads at load time.
const SNAPDOM_PROFILE = {
  drop: ["script", "style", "link", "meta", "noscript", "svg", "canvas", "iframe", "template"],
  inlineAssets: true,
  pruneEmpty: true,
  maxDepth: 12,
  maxChildren: 64
};

function walkAssemblies(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkAssemblies(full));
    else if (entry.name === ASSEMBLY) out.push(path.dirname(full));
  }
  return out.sort();
}

// Strip markdown structure + formatting; keep the instruction content dense.
function condense(text) {
  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
  const seen = new Set();
  const out = [];
  for (let raw of body.split(/\r?\n/)) {
    let line = raw.trim();
    if (!line) continue;
    line = line.replace(/^#{1,6}\s+/, "");
    line = line.replace(/^[-*+]\s+/, "");
    line = line.replace(/^>\s?/, "");
    line = line.replace(/`/g, "");
    line = line.replace(/\*\*/g, "");
    line = line.replace(/\*/g, "");
    line = line.replace(/_/g, "");
    line = line.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
    line = line.replace(/\s+/g, " ").trim();
    if (!line) continue;
    const key = line.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(line);
  }
  return out.join("\n");
}

function main() {
  const folders = walkAssemblies(skillsDir);
  if (!folders.length) {
    console.error("No assembly.json manifests found under skills/.");
    process.exit(1);
  }

  fs.mkdirSync(outDir, { recursive: true });

  const catalog = [];
  let totalRaw = 0;
  let totalMin = 0;

  for (const folder of folders) {
    const relDir = path.relative(skillsDir, folder).replace(/\\/g, "/");
    const id = path.basename(folder);
    const assembly = JSON.parse(fs.readFileSync(path.join(folder, ASSEMBLY), "utf8"));
    const mdRel = assembly.files && assembly.files.md;
    const mdPath = path.join(folder, mdRel);
    const mdText = fs.readFileSync(mdPath, "utf8");
    const instructions = condense(mdText);

    const artifact = {
      $schema: "https://agentkd.skill/compiled-v1",
      name: assembly.name || id,
      id,
      title: assembly.title || id,
      role: assembly.role || null,
      roleCode: assembly.roleCode || null,
      platform: assembly.platform ?? null,
      platformName: assembly.platform === null ? "Universal" : assembly.platformName || null,
      description: assembly.description || "",
      instructions,
      snapdom: SNAPDOM_PROFILE,
      install: assembly.install || [],
      invoke: assembly.invoke || "",
      source: path.join(relDir, ASSEMBLY).replace(/\\/g, "/")
    };

    const rawChars = mdText.length;
    const minChars = instructions.length;
    totalRaw += rawChars;
    totalMin += minChars;

    fs.writeFileSync(path.join(outDir, id + ".json"), JSON.stringify(artifact) + "\n");

    catalog.push({
      id,
      name: artifact.name,
      role: artifact.role,
      roleCode: artifact.roleCode,
      platform: artifact.platform,
      platformName: artifact.platformName,
      title: artifact.title,
      description: artifact.description
    });
  }

  const catalogOut = {
    $schema: "https://agentkd.skill/catalog-v1",
    version: 1,
    generated: new Date().toISOString(),
    count: catalog.length,
    snapdom: SNAPDOM_PROFILE,
    skills: catalog
  };
  fs.writeFileSync(path.join(outDir, "catalog.json"), JSON.stringify(catalogOut, null, 2) + "\n");

  const pct = totalRaw ? Math.round(((totalRaw - totalMin) / totalRaw) * 100) : 0;
  console.log(`Compiled ${catalog.length} skills -> ${path.relative(root, outDir)}`);
  console.log(`  raw instructions:   ${totalRaw} chars`);
  console.log(`  condensed payload:  ${totalMin} chars (${pct}% saved)`);
  console.log(`  catalog: ${path.join(path.relative(root, outDir), "catalog.json")}`);
}

main();
