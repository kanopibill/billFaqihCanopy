import { readdir, rename, rmdir, stat } from "node:fs/promises";
import path from "node:path";

const OUT = path.resolve(import.meta.dirname, "..", "out");

async function flatten(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (!entry.isDirectory()) continue;

    if (entry.name.startsWith("__next.")) {
      for (const inner of await readdir(full)) {
        await rename(path.join(full, inner), path.join(dir, `${entry.name}.${inner}`));
      }
      await rmdir(full);
      console.log("flat:", path.relative(OUT, dir), "/", entry.name);
    } else {
      await flatten(full);
    }
  }
}

try {
  if (!(await stat(OUT)).isDirectory()) throw new Error("missing");
} catch {
  console.error("out/ not found — run `next build` first");
  process.exit(1);
}

await flatten(OUT);
console.log("done");
