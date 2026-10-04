import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import SectionLabel from "@/components/section-label";
import { FEATURES, WHY_US } from "@/lib/data";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Jasa Pasang Kanopi",
  description:
    "Kenali Bill Faqih's Canopy — penyedia jasa pemasangan kanopi dan carport untuk rumah, ruko, dan area komersial di Jabodetabek.",
  alternates: { canonical: "/tentang/" },
};

export default function TentangPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>Tentang Kami</SectionLabel>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Bill Faqih&apos;s
              <br />
              Canopy
            </h1>
            <p className="mt-6 leading-relaxed text-muted">
              Kami adalah penyedia jasa pemasangan kanopi untuk berbagai kebutuhan, mulai
              dari rumah tinggal, ruko, hingga area komersial. Dengan pengalaman dan tim
              profesional, kami berkomitmen memberikan hasil terbaik dengan kualitas
              material yang terjamin.
            </p>

            <blockquote className="mt-8 rounded-3xl bg-brand p-8 text-white">
              <p className="text-lg leading-relaxed font-medium">
                &ldquo;Kanopi yang tepat bukan hanya melindungi, tapi juga menambah nilai
                estetika bangunan Anda.&rdquo;
              </p>
              <footer className="label mt-5 flex items-center gap-3 text-white/70">
                <span className="h-px w-8 bg-current" />
                Bill Faqih&apos;s Canopy
              </footer>
            </blockquote>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/project-carport-minimalis.webp"
              alt="Kanopi carport minimalis rumah tinggal"
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionLabel>Keunggulan</SectionLabel>
          <h2 className="mt-5 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Kenapa Bekerja Sama dengan Kami
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((item) => (
              <div key={item.title} className="rounded-2xl bg-cream p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                  <item.icon size={22} />
                </span>
                <h3 className="mt-5 font-bold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionLabel>Kenapa Memilih Kami?</SectionLabel>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Lebih dari Sekadar Pemasangan
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-white/70">
              Kami bukan hanya memasang kanopi, tapi juga memberikan solusi terbaik untuk
              melindungi dan mempercantik bangunan Anda.
            </p>

            <ul className="mt-10 flex flex-col gap-6">
              {WHY_US.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <item.icon size={22} />
                  </span>
                  <span>
                    <span className="block font-bold">{item.title}</span>
                    <span className="block text-sm text-white/60">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={waLink("Halo, saya ingin konsultasi pemasangan kanopi.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-brand px-7 py-4 font-bold transition-colors hover:bg-brand-light"
            >
              <MessageCircle size={20} /> Hubungi Kami
              <span className="text-sm font-medium text-white/70">
                — untuk konsultasi dan pemesanan
              </span>
            </a>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/proses-kanopi.webp"
              alt="Tim memasang kanopi di rumah klien"
              fill
              sizes="(max-width:1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
