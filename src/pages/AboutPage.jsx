import { PageHero, CtaBanner } from "../components/shared";

const STATS = [
  {
    value: "Od 2010 Roku",
    desc: "Zaczynaliśmy, gdy Instagram był tylko dla hipsterów. Przetrwaliśmy wszystkie końce świata.",
  },
  {
    value: "420+ Wypraw",
    desc: "Bieszczady, Beskidy, Tatry i ten jeden raz, gdy zgubiliśmy się w parku miejskim.",
  },
  {
    value: "Spalone Kalorie",
    desc: "Oficjalnie: tysiące. Nieoficjalnie: bilans wychodzi na zero przez pizzę na mecie.",
  },
  {
    value: "Ziomków",
    desc: "Przewinęło się u nas pół kampusu. Niektórzy nawet znaleźli tu drugą połówkę (lub chociaż dobre buty).",
  },
];

const MEMORIES = [
  { label: "Beskid Niski '14", filter: "sepia-[.6] hover:sepia-0" },
  { label: "Pierwsza \"Żaba\"", filter: "grayscale contrast-125 hover:grayscale-0" },
  { label: "Zaginieni w Akcji", filter: "hue-rotate-90 hover:hue-rotate-0" },
];

const FROG_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDCFAABswJRbh2JyKIDnFbDfhoUUzlX73qteFciEz85KxOylSREdYYqvaAjTlPM_GqYnfyI91MOZLDMdPBO0nMo2LupOCqGjLd1IUHV9vQBxQNu-CGJw6k6MQ8L1OefUm25skdRsuYobl7EtYyaiiINnYZFc7guEdHvK93BxTnjL5jatzxdTxGcT8zK25KHWTjo5dSwD5FuLLbv14BC3YumpYGJpSDR6lhYX4qWd4DEt9jYTHetHb9ceKYwN9zn28ZjpgSiVT77GY56";

export default function AboutPage({ onNavigate }) {
  return (
    <>
      <PageHero
        badge="HISTORIA KLUBU #1"
        title="O Nas i"
        titleHighlight="Naszej Żabie"
        subtitle='Studencki klub turystyczny od 2010 roku. <span class="font-normal text-text-main">Chodziliśmy po górach, zanim to było modne. A przynajmniej tak twierdzimy.</span>'
        imageCaption="RYS. 1: Maskotka na Służbie"
      />

      {/* Stats */}
      <section className="w-full py-16 bg-accent-light">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-text-main mb-4 inline-block relative z-10">
            Nasza Historia w Liczbach
          </h2>
          <p className="font-hand text-2xl text-text-secondary mt-2">
            Trochę statystyki, trochę ściemy, 100% prawdy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
            {STATS.map(({ value, desc }) => (
              <div
                key={value}
                className="bg-white border-2 border-text-main shadow-retro-sm p-6"
              >
                <h3 className="text-2xl font-pixel font-bold mb-3">{value}</h3>
                <p className="text-text-secondary font-hand text-xl leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo memories */}
      <section className="w-full max-w-[1000px] px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-black text-text-main mb-4">
          Kroniki i Wspominki
        </h2>
        <p className="font-hand text-xl text-text-secondary mt-4 max-w-2xl mb-10">
          Każda wyprawa zostawia ślad. Zazwyczaj błota na butach, ale też w sercu.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEMORIES.map(({ label, filter }) => (
            <div key={label} className="bg-white border-2 border-text-main shadow-retro-sm p-3 pb-8 group">
              <div className={`aspect-square overflow-hidden mb-3 ${filter} transition-all duration-500`}>
                <img
                  alt={label}
                  className="w-full h-full object-cover"
                  src={FROG_IMG}
                />
              </div>
              <p className="font-hand text-center text-text-main text-xl font-bold">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t-2 border-dashed border-text-main/30">
          <h3 className="text-2xl font-pixel font-bold text-center mb-6">
            Ziomki z Innych Stawów (Partnerzy)
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["PTTK", "AZS", "Szlak Beskidzki", "Zielony Szlak"].map((partner) => (
              <span
                key={partner}
                className="px-4 py-2 bg-accent-light border-2 border-text-main font-hand text-xl shadow-retro-sm"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Chcesz być częścią tej legendy?"
        subtitle="Dołącz do nas. Jedyne wymagania to ciekawość świata i gotowość na błoto."
        buttonText="DOŁĄCZ TERAZ"
        buttonIcon="hiking"
        onButtonClick={() => onNavigate("contact")}
      />
    </>
  );
}
