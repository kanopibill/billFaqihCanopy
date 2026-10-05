import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import SectionLabel from "@/components/section-label";
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
  description: SITE.description,
  telephone: SITE.phone,
  email: SITE.email,
  address: { "@type": "PostalAddress", addressLocality: SITE.address },
  areaServed: SITE.area,
};

export default function KontakPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionLabel>Hubungi Kami</SectionLabel>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
