export const SITE = {
  name: "Bill Faqih's Canopy",
  tagline: "Installation Service",
  url: "https://bill-faqih-canopy.vercel.app",
  description:
    "Jasa pasang kanopi dan carport di Jabodetabek untuk rumah, ruko, dan area komercial. Rangka baja ringan, atap polycarbonate & spandek, rapi, kuat, dan tahan lama.",
  phone: "+62 000-0000-0000",
  wa: "620000000000",
  email: "halo@billfaqihcanopy.id",
  address: "Jabodetabek",
  area: "Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)",
  keywords: [
    "jasa pasang kanopi",
    "kanopi carport",
    "kanopi rumah",
    "kanopi ruko",
    "kanopi baja ringan",
    "kanopi polycarbonate",
    "jasa kanopi Jabodetabek",
    "kanopi Jakarta",
    "tukang kanopi",
  ],
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
