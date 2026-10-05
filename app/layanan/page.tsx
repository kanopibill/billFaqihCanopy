import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/section-label";
import Breadcrumbs from "@/components/breadcrumbs";
import CtaBand from "@/components/cta-band";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Layanan Jasa Pasang Kanopi",
  description:
    "Layanan pemasangan kanopi: kanopi rumah tinggal, ruko & toko, area komercial, dan custom design. Melayani Jabodetabek.",
  alternates: { canonical: "/layanan/" },
};

export default function LayananPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionLabel>Layanan Kami</SectionLabel>
          <Breadcrumbs label="Layanan" href="/layanan/" light />
          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Layanan Jasa Pasang Kanopi &amp; Carport
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-white/70">
            Bill Faqih&apos;s Canopy melayani berbagai jenis kanopi sesuai kebutuhan dan
            gaya bangunan Anda — mulai dari kanopi rumah tinggal, kanopi ruko, carport, sampai
            area komersial. Setiap proyek dikerjakan dengan rangka baja ringan berkualitas,
            pemasangan rapi, dan garansi pekerjaan untuk pelanggan di seluruh Jabodetabek.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-white/60">
            Lihat juga{" "}
            <Link href="/material/" className="font-semibold text-brand-light hover:underline">
              material kanopi
            </Link>{" "}
            yang kami gunakan dan{" "}
            <Link href="/portfolio/" className="font-semibold text-brand-light hover:underline">
              portfolio proyek
            </Link>{" "}
            yang sudah selesai kami kerjakan.
          </p>

          <ul className="mt-14 divide-y divide-white/10 border-t border-white/10">
            {SERVICES.map((item) => (
              <li
                key={item.title}
                className="group grid gap-6 py-8 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white transition-transform group-hover:scale-105">
                  <item.icon size={26} />
                </span>

                <div>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {item.text}
                  </p>
                </div>

                <div className="relative h-40 w-full overflow-hidden rounded-2xl md:h-28 md:w-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:768px) 100vw, 224px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
