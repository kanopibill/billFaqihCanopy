import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/section-label";
import CtaBand from "@/components/cta-band";
import { MATERIALS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Material & Model Kanopi",
  description:
    "Pilihan material kanopi berkualitas: baja ringan, polycarbonate, spandek, dan kaca tempered. Model kanopi minimalis untuk rumah dan ruko.",
  alternates: { canonical: "/material/" },
};

export default function MaterialPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionLabel>Material &amp; Model</SectionLabel>
          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Material Kanopi: Baja Ringan, Polycarbonate, Spandek
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            Kami menggunakan material terbaik yang kuat, tahan cuaca, dan memiliki tampilan
            modern untuk hasil yang maksimal. Pilih rangka baja ringan yang kokoh, atap
            polycarbonate yang terang, spandek yang ekonomis, atau kaca tempered yang elegan —
            semua tersedia untuk pemasangan kanopi rumah, carport, dan ruko di Jabodetabek.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {MATERIALS.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl bg-paper ring-1 ring-line"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={`Material ${item.title}`}
                    fill
                    sizes="(max-width:640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="mt-1 text-sm text-muted">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
