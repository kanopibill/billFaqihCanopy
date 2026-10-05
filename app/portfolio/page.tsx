import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/section-label";
import Breadcrumbs from "@/components/breadcrumbs";
import ProjectCarousel from "@/components/project-carousel";
import { GALLERY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio Pemasangan Kanopi & Carport",
  description:
    "Proyek pemasangan kanopi, carport, dan railing yang telah kami kerjakan di Jabodetabek — hasil rapi, kokoh, dan tahan lama.",
  alternates: { canonical: "/portfolio/" },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionLabel>Portfolio</SectionLabel>
          <Breadcrumbs label="Portfolio" href="/portfolio/" />
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Portfolio
                <br />
                Pemasangan Kanopi
              </h1>
            </div>
            <p className="leading-relaxed text-muted">
              Berbagai proyek pemasangan kanopi, carport, dan railing yang telah kami kerjakan
              di Jabodetabek — hasil rapi, kuat, dan memuaskan. Mulai dari kanopi rumah tinggal
              minimalis hingga kanopi ruko dan area komersial, setiap pekerjaan diselesaikan
              dengan material berkualitas dan finishing yang rapi.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((item, i) => (
              <div
                key={item.src}
                className={`relative overflow-hidden rounded-2xl ${
                  i === 0 ? "aspect-square lg:col-span-2 lg:row-span-2" : "aspect-square"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={
                    i === 0 ? "(max-width:1024px) 100vw, 66vw" : "(max-width:640px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionLabel light>Project</SectionLabel>
          <h2 className="mt-5 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Proyek Terbaru Kami
          </h2>

          <div className="mt-10 lg:max-w-4xl">
            <ProjectCarousel />
          </div>
        </div>
      </section>
    </>
  );
}
