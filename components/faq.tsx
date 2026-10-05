import SectionLabel from "./section-label";
import { SITE } from "@/lib/site";

const ITEMS = [
  {
    q: "Berapa harga pasang kanopi per m²?",
    a: "Harga pasang kanopi bergantung pada jenis material, model, dan luas area. Kanopi polycarbonate lebih terjangkau, sedangkan kaca tempered lebih premium. Kirimkan ukuran dan desain yang diinginkan lewat WhatsApp, dan kami berikan penawaran harga kanopi secara gratis.",
  },
  {
    q: "Berapa lama proses pemasangan kanopi?",
    a: "Untuk rumah tinggal dan carport, pemasangan umumnya selesai dalam 1–3 hari kerja tergantung luas dan kondisi lokasi. Survey lokasi dijadwalkan lebih dulu agar material dan desain siap sebelum tim kami datang.",
  },
  {
    q: "Apa bedanya atap polycarbonate dan spandek?",
    a: "Polycarbonate bersifat transparan sehingga cahaya masih masuk, cocok untuk teras dan kanopi taman. Spandek lebih tipis, ringan, dan ekonomis, cocok untuk carport dan kanopi ruko. Keduanya sama-sama tahan cuaca jika dipasang dengan rangka baja ringan yang benar.",
  },
  {
    q: "Kanopi seperti apa yang cocok untuk rumah dan ruko?",
    a: "Untuk rumah tinggal, model kanopi minimalis dengan rangka baja ringan paling sering dipilih karena ringkas dan rapi. Untuk ruko dan toko, kanopi dengan pencahayaan yang lebih terang lebih disarankan agar display barang terlihat jelas dari luar.",
  },
  {
    q: "Melayani wilayah mana saja?",
    a: `Bill Faqih's Canopy melayani pemasangan kanopi di ${SITE.area}, termasuk kanopi rumah, carport, kanopi ruko, dan proyek komersial. Survey lokasi gratis untuk area yang masih dalam jangkauan kami.`,
  },
  {
    q: "Apakah pemasangan kanopi bergaransi?",
    a: "Ya. Setiap pekerjaan kami beri garansi agar hasil pemasangan rapi, kokoh, dan tahan lama. Garansi mencakup struktur rangka dan pengerjaan yang dilakukan oleh tim kami.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Faq() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Pertanyaan Umum Seputar Pasang Kanopi
        </h2>

        <div className="mt-10 grid gap-3 lg:max-w-4xl">
          {ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl bg-paper ring-1 ring-line open:bg-cream"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-5 text-sm font-bold sm:text-base [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-brand transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
