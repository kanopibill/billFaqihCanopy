import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import SectionLabel from "@/components/section-label";
import CtaBand from "@/components/cta-band";
import { SERVICES, GALLERY } from "@/lib/data";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} — Jasa Pasang Kanopi Rumah, Ruko & Carport Jabodetabek`,
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src="/images/hero-carport-senja.webp"
          alt="Kanopi carport rumah tinggal"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <span className="absolute -right-16 -bottom-24 hidden h-72 w-72 rotate-45 bg-brand/80 sm:block" />

        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <div className="flex items-start justify-between gap-6">
            <span className="flex h-24 items-center rounded-xl bg-white px-4 sm:h-28">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.webp" alt={SITE.name} className="h-20 w-auto sm:h-24" />
            </span>
            <span className="label text-right text-white/70">
              Company
              <br />
              Profile
              <span className="mt-3 ml-auto block h-px w-16 bg-white/40" />
            </span>
          </div>

          <h1 className="mt-14 max-w-3xl text-4xl leading-[1.05] font-extrabold tracking-tight sm:mt-20 sm:text-6xl">
            Jasa Pasang Kanopi &amp; Carport untuk Rumah dan Bisnis Anda
          </h1>
          <p className="mt-6 max-w-lg text-base text-white/75 sm:text-lg">
            Jasa pemasangan kanopi di Jabodetabek untuk rumah tinggal, ruko, dan area
            komersial — rangka kuat, pemasangan rapi, dan tahan lama.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={waLink("Halo, saya ingin konsultasi pemasangan kanopi.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold transition-colors hover:bg-brand-light"
            >
              <MessageCircle size={18} /> Konsultasi Gratis
            </a>
            <Link
              href="/layanan/"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold transition-colors hover:bg-white/10"
            >
              Layanan Kami <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm font-semibold tracking-wide text-white/70">
            <span>Modern Design</span>
            <span className="h-4 w-px bg-white/25" />
            <span>Strong Protection</span>
          </div>
        </div>
      </section>

      {/* Tentang singkat */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionLabel>Tentang Kami</SectionLabel>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Bill Faqih&apos;s Canopy
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Kami adalah penyedia jasa pemasangan kanopi untuk berbagai kebutuhan, mulai
              dari rumah tinggal, ruko, hingga area komersial. Dengan pengalaman dan tim
              profesional, kami berkomitmen memberikan hasil terbaik dengan kualitas
              material yang terjamin.
            </p>
            <Link
              href="/tentang/"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:underline"
            >
              Selengkapnya tentang kami <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {GALLERY.slice(0, 4).map((item) => (
              <div key={item.src} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image src={item.src} alt={item.alt} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionLabel>Layanan Kami</SectionLabel>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Layanan Pemasangan Kanopi
            </h2>
            <Link
              href="/layanan/"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-light hover:underline"
            >
              Semua layanan <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-ink-2 p-6 ring-1 ring-white/10 transition-colors hover:ring-brand/60"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                  <item.icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
