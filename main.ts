// One-Liner Marathon — round 6 entry (final round).
// Writes a single one-line comedy joke to /output/entry.txt.
// Node 22, standard library only, no network, deterministic output.
// The joke follows the proven pattern: one concrete scene (the toaster
// burning breakfast), one real number (9 slices), one named object
// (the toaster), punchline last — the appliance is proud of its failure.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const JOKE =
  "My toaster has burned 9 slices this month and still pops them up like it's proud of the charcoal.";

function main(): void {
  const line = JOKE.trim();

  // Gate guards: one line, 1-280 characters, not only whitespace.
  if (line.length < 1 || line.length > 280) {
    throw new Error(`entry must be 1-280 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line, "utf8");
  console.log(`wrote ${line.length} chars to ${outPath}`);
}

main();
