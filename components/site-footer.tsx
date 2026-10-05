import Link from "next/link";
import { MapPin, ShieldCheck, MessageCircle } from "lucide-react";
import { NAV, SITE, waLink } from "@/lib/site";

const items = [
  { icon: MapPin, title: SITE.area, text: "Datang ke lokasi Anda" },
  { icon: ShieldCheck, title: "Garansi Pekerjaan", text: "Jaminan hasil rapi dan kuat" },
  { icon: MessageCircle, title: "Hubungi Kami Sekarang", text: "Konsultasi & pemesanan" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="flex h-20 items-center rounded-lg bg-white px-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.webp" alt={SITE.name} className="h-16 w-auto" />
          </span>
          <p className="text-sm text-white/60">
            Kanopi Berkualitas, <br className="sm:hidden" />
            untuk Masa Depan yang Lebih Baik.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="flex items-start gap-4">
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <item.icon size={20} />
              </span>
              <span>
                <span className="block text-sm font-bold">{item.title}</span>
                <span className="block text-sm text-white/55">{item.text}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} {SITE.name}. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
