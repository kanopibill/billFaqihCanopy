import sharp from "sharp";
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "_originals");
const OUT = path.join(ROOT, "public", "images");

const MAP = {
  "5d7508b5-3f39-4b75-bed7-faea4fd6e1d5.JPG.jpeg": ["hero-carport-senja", 1920, 75],
  "e845cd34-feb5-4ef4-9eec-ff6cdab8d342.JPG.jpeg": ["hero-carport-putih", 1920, 75],

  "daed7833-e57c-4558-a3b9-81b7a157ba87.JPG.jpeg": ["project-carport-minimalis", 1600, 80],
  "6d9ffd73-dccd-4849-a70c-a356da0d2e07.JPG.jpeg": ["project-carport-putih", 1600, 80],
  "7a01d369-31d8-4bc1-b016-69616c2680c5.JPG.jpeg": ["project-carport-kolom-putih", 1600, 80],
  "d10a0293-b656-4721-b621-b47151842b42.JPG.jpeg": ["project-carport-malam", 1600, 80],
  "51c35834-bcf5-48ee-bcb1-45693f31391b.JPG.jpeg": ["project-carport-malam-2", 1600, 80],
  "35031586-2318-4ece-8d70-17fa6c86beb0.JPG.jpeg": ["project-kanopi-putih", 1600, 80],
  "f34ab8be-6246-4ac7-80d9-7fe3475864f3.JPG.jpeg": ["project-kanopi-hitam", 1600, 80],
  "34a70fac-5e0c-4b1f-98e1-602f93cfde5a.JPG.jpeg": ["project-kanopi-hitam-2", 1600, 80],
  "b72749b0-4c11-4a5e-953c-3268ac96ee9a.JPG.jpeg": ["project-kanopi-kaca-tempered", 1600, 80],

  "7d8a66f7-03c2-4c3c-90fe-cb78de80b77f.JPG.jpeg": ["railing-atap-putih", 1600, 80],
  "fd4bad0f-f6d6-40c0-a76c-1e389b333893.JPG.jpeg": ["railing-balkon", 1600, 80],
  "5ab3a0a5-7ef6-428e-aa9f-c6ccabe28f8d.JPG.jpeg": ["railing-kaca", 1600, 80],
  "7ac98389-8d91-43c3-98dd-2bdedadaa354.JPG.jpeg": ["railing-tangga", 1600, 80],

  "cf579465-8972-47a2-8b54-89f1d7602380.JPG.jpeg": ["proses-plafon", 1600, 80],
  "ca72a956-e713-4d7b-9772-5940f3c41667.JPG.jpeg": ["proses-kanopi", 1600, 80],
  "aeee2267-c2ba-4765-a7bc-9560fb3ab092.JPG.jpeg": ["proses-atap-transparan", 1600, 80],
  "97485362-b3b2-46e3-95e3-9240d420eb66.JPG.jpeg": ["proses-kanopi-jaring", 1600, 80],
  "96772acc-5777-49b4-88ed-c8452f99915b.JPG.jpeg": ["proses-cat-carport", 1600, 80],
  "7f718dd9-1742-470b-bc56-becbbf35ee80.JPG.jpeg": ["proses-rangka", 1600, 80],
  "2d1fdb4b-3866-4f28-b6d9-09caaf5ac67d.JPG.jpeg": ["proses-rangka-2", 1600, 80],
  "6b80d120-3d7e-464c-92cc-aff8fba34f3d.JPG.jpeg": ["proses-genteng-metal", 1600, 80],
  "5e7d36aa-ed61-49d5-9fbf-d0c7089757c1.JPG.jpeg": ["proses-teras", 1600, 80],
  "55902e4c-f5fd-4cde-b436-c15666c257f7.JPG.jpeg": ["proses-pasang-carport", 1600, 80],

  "logo.jpg": ["logo", 800, 90],
};

await mkdir(OUT, { recursive: true });

const files = await readdir(SRC);
let done = 0;
for (const file of files) {
  const spec = MAP[file];
  if (!spec) {
    console.warn("SKIP (no mapping):", file);
    continue;
  }
  const [name, width, quality] = spec;
  const pipeline = sharp(path.join(SRC, file));
  if (name === "logo") await pipeline.trim();
  await pipeline
    .resize({ width, height: width, fit: "inside", withoutEnlargement: true })
    .webp({ quality })
    .toFile(path.join(OUT, `${name}.webp`));
  done++;
}

const missing = Object.keys(MAP).filter((f) => !files.includes(f));
if (missing.length) console.warn("MISSING sources:", missing);
console.log(`done: ${done}/${files.length} files -> public/images`);
