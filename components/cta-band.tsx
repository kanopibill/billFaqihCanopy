import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-14 text-center text-white sm:px-16">
          <span className="absolute -top-24 -right-16 h-64 w-64 rotate-45 bg-white/10" />
          <span className="absolute -bottom-32 -left-20 h-64 w-64 rotate-45 bg-ink/20" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Siap Pasang Kanopi?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white">
              Konsultasikan kebutuhan dan desain kanopi Anda langsung dengan tim kami.
              Gratis, tanpa biaya.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={waLink("Halo, saya ingin konsultasi pemasangan kanopi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-dark transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle size={18} /> Hubungi Kami
              </a>
              <Link
                href="/layanan/"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Lihat Layanan <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
