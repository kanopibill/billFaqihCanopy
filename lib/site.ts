export const SITE = {
  name: "Bill Faqih's Canopy",
  tagline: "Installation Service",
  description:
    "Jasa pemasangan kanopi untuk rumah tinggal, ruko, dan area komercial. Rapi, kuat, dan tahan lama.",
  phone: "+62 000-0000-0000",
  wa: "620000000000",
  email: "halo@billfaqihcanopy.id",
  address: "Indonesia",
  area: "Melayani area sekitar",
};

export const NAV = [
  { href: "/", label: "Beranda" },
  { href: "/tentang/", label: "Tentang" },
  { href: "/layanan/", label: "Layanan" },
  { href: "/material/", label: "Material" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/kontak/", label: "Kontak" },
];

export const waLink = (text: string) =>
  `https://wa.me/${SITE.wa}?text=${encodeURIComponent(text)}`;
