import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import SectionLabel from "@/components/section-label";
import Breadcrumbs from "@/components/breadcrumbs";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Konsultasi & Pemesanan Kanopi",
  description:
    "Hubungi Bill Faqih's Canopy untuk konsultasi dan pemesanan pemasangan kanopi di Jabodetabek. Konsultasi gratis, survey lokasi, dan garansi pekerjaan.",
  alternates: { canonical: "/kontak/" },
};

const contacts = [
  { icon: Phone, label: "Telepon / WhatsApp", value: SITE.phone },
  { icon: Mail, label: "Email", value: SITE.email },
  { icon: MapPin, label: "Alamat", value: SITE.address },
  { icon: Clock, label: "Jam Operasional", value: "Senin – Sabtu, 08.00 – 17.00" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/images/og-cover.jpg`,
  description: SITE.description,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$$",
  address: { "@type": "PostalAddress", addressCountry: "ID", addressRegion: SITE.address },
  areaServed: SITE.cities,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "17:00",
  },
};

export default function KontakPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionLabel>Hubungi Kami</SectionLabel>
            <Breadcrumbs label="Kontak" href="/kontak/" />
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Konsultasi Pemasangan Kanopi &amp; Carport
            </h1>
            <p className="mt-6 max-w-lg leading-relaxed text-muted">
              Ceritakan kebutuhan kanopi Anda. Tim kami siap membantu mulai dari konsultasi
              desain, survey lokasi, hingga pemasangan kanopi di Jabodetabek — gratis tanpa
              biaya, lengkap dengan garansi pekerjaan.
            </p>

            <dl className="mt-10 grid gap-4 sm:grid-cols-2">
              {contacts.map((item) => (
                <div key={item.label} className="rounded-2xl bg-paper p-5 ring-1 ring-line">
                  <dt className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand-dark uppercase">
                    <item.icon size={15} /> {item.label}
                  </dt>
                  <dd className="mt-2 text-sm font-semibold break-words">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={waLink("Halo, saya ingin konsultasi pemasangan kanopi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-light"
              >
                <MessageCircle size={18} /> Chat WhatsApp
              </a>
              <a
                href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm font-bold transition-colors hover:bg-white"
              >
                <Phone size={18} /> Telepon
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/proses-pasang-carport.webp"
              alt="Tim memasang kanopi carport"
              fill
              priority
              sizes="(max-width:1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionLabel light>Area Layanan</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Wilayah Pemasangan Kanopi di Jabodetabek
          </h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-white/70">
            Bill Faqih&apos;s Canopy melayani pemasangan kanopi, carport, dan railing untuk
            pelanggan di seluruh Jabodetabek. Tim kami siap survey ke lokasi Anda — mulai dari
            kanopi rumah tinggal, kanopi ruko, sampai proyek komersial di setiap kota berikut.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {SITE.cities.map((city) => (
              <li
                key={city}
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold"
              >
                {city}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-white/60">
            Kota lain di luar daftar?{" "}
            <Link
              href="/layanan/"
              className="font-semibold text-brand-light hover:underline"
            >
              Hubungi kami
            </Link>{" "}
            untuk menanyakan ketersediaan survey lokasi.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
