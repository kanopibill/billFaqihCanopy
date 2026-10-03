"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV, SITE, waLink } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 items-center rounded-md bg-white px-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.webp" alt={SITE.name} className="h-8 w-auto" />
          </span>
          <span className="hidden text-white sm:block">
            <span className="block text-[11px] tracking-[0.2em] text-white/50 uppercase">
              Bill Faqih&apos;s
            </span>
            <span className="block text-sm font-extrabold tracking-wide">CANOPY</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-brand-light" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={waLink("Halo, saya ingin konsultasi pemasangan kanopi.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
          >
            <MessageCircle size={16} /> Hubungi Kami
          </a>
        </nav>

        <button
          type="button"
          aria-label="Buka menu"
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-ink px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    pathname === item.href
                      ? "bg-white/10 text-brand-light"
                      : "text-white/75 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={waLink("Halo, saya ingin konsultasi pemasangan kanopi.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle size={16} /> Hubungi Kami
          </a>
        </nav>
      )}
    </header>
  );
}
