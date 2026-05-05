import { PageHero, CtaBanner } from "../components/shared";

const GALLERY_ITEMS = [
  { filter: "grayscale hover:grayscale-0", caption: "Bieszczady '23" },
  { filter: "sepia-[.7] hover:sepia-0", caption: "Tatry zimą" },
  { filter: "hue-rotate-30 hover:hue-rotate-0", caption: "Beskid Śląski" },
  { filter: "grayscale contrast-125 hover:grayscale-0", caption: "Kajaki na Bugu" },
  { filter: "sepia hover:sepia-0", caption: "Ognisko '22" },
  { filter: "grayscale hover:grayscale-0", caption: "Zerówka w Beskidach" },
];

const FROG_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDCFAABswJRbh2JyKIDnFbDfhoUUzlX73qteFciEz85KxOylSREdYYqvaAjTlPM_GqYnfyI91MOZLDMdPBO0nMo2LupOCqGjLd1IUHV9vQBxQNu-CGJw6k6MQ8L1OefUm25skdRsuYobl7EtYyaiiINnYZFc7guEdHvK93BxTnjL5jatzxdTxGcT8zK25KHWTjo5dSwD5FuLLbv14BC3YumpYGJpSDR6lhYX4qWd4DEt9jYTHetHb9ceKYwN9zn28ZjpgSiVT77GY56";

export default function GalleryPage({ onNavigate }) {
  return (
    <>
      <PageHero
        badge="ARCHIWUM WSPOMNIEŃ"
        title="Galeria"
        titleHighlight="Wypraw"
        subtitle='Każde zdjęcie to historia. <span class="font-normal text-text-main">Błoto, szczyty, ogniska i twarze ludzi, którzy wiedzą, że najlepsze rzeczy zdarzają się poza miastem.</span>'
        imageCaption="RYS. 1: Kronikarz w Terenie"
      />

      <section className="w-full max-w-[1000px] mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map(({ filter, caption }) => (
            <div
              key={caption}
              className="group relative bg-white border-2 border-text-main shadow-retro-sm p-2 hover:shadow-retro hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all cursor-pointer"
            >
              <div className={`aspect-square overflow-hidden ${filter} transition-all duration-500`}>
                <img
                  alt={caption}
                  src={FROG_IMG}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-hand text-center text-text-main text-lg font-bold mt-2">
                {caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Byłeś z nami?"
        subtitle="Wyślij nam swoje zdjęcia z wypraw. Najlepsze trafią do galerii z podpisem i legendą."
        buttonText="PODEŚLIJ FOTY"
        buttonIcon="photo_camera"
        onButtonClick={() => onNavigate("contact")}
      />
    </>
  );
}
