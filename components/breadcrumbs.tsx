import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Breadcrumbs({
  label,
  href,
  light = false,
}: {
  label: string;
  href: string;
  light?: boolean;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: SITE.url },
      { "@type": "ListItem", position: 2, name: label, item: `${SITE.url}${href}` },
    ],
  };

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className={`mt-6 flex flex-wrap items-center gap-2 text-xs ${
          light ? "text-white/60" : "text-muted"
        }`}
      >
        <Link href="/" className="transition-colors hover:text-brand-dark">
          Beranda
        </Link>
        <span aria-hidden="true">/</span>
        <span className={`font-bold ${light ? "text-white" : "text-ink"}`}>{label}</span>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
