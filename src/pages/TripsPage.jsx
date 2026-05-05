const EVENTS = [
  {
    title: "SLAJDOWISKA",
    schedule: "Wtorki 20:00",
    desc: "Legendarna seria. Ktoś był daleko, wrócił i teraz gada. My słuchamy, oglądamy foty i pijemy browara. Czasem prelegent przynosi lokalne fanty do jedzenia (ryzykowne, ale warto).",
    bg: "bg-primary",
  },
  {
    title: "OTRZĘSINY",
    schedule: "Październik",
    desc: "Świeża krew musi przejść chrzest bojowy. Spodziewaj się błota, dziwnych zadań w lesie i integracji level hard. Po tym wyjeździe albo nas pokochasz, albo uciekniesz (ale wrócisz).",
    bg: "bg-[#ffeb3b]",
  },
  {
    title: "WIGILIA KLUBOWA",
    schedule: "Grudzień (przed świętami)",
    desc: "Zero krawatów. Barszcz z torebki smakuje najlepiej w metalowej menażce. Śpiewamy kolędy przy gitarze (fałszowanie mile widziane), dzielimy się opłatkiem i planujemy wyprawy na kolejny rok.",
    bg: "bg-white",
    shadow: true,
  },
];

const REGULAR_TRIPS = [
  {
    title: "ZERÓWKA",
    when: "Wrzesień / Beskidy",
    desc: "Obóz dla pierwszoroczniaków. Góry, namioty i pierwsza próba charakteru. Legendy głoszą, że przyjaźnie z zerówki są pancerne.",
  },
  {
    title: "RAJD JESIENNY",
    when: "Listopad / Gdzie popadnie",
    desc: "Klasyk gatunku. Deszcz, liście i chodzenie na azymut. Kto się zgubi, ten stawia kolejkę w schronisku.",
  },
  {
    title: "ZIMOWISKO",
    when: "Luty / Tatry lub Bieszczady",
    desc: "Narty, deski albo po prostu lepienie bałwana giganta. Śnieg gwarantowany (chyba). Wieczory przy kominku.",
  },
];

export default function TripsPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full max-w-[900px] mx-auto px-4 py-10 flex flex-col items-center text-center gap-6 relative">
        <div className="hidden md:block absolute top-0 right-10 rotate-[15deg] text-primary animate-pulse">
          <span className="material-symbols-outlined text-4xl">event_note</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-pixel leading-[0.9] text-text-main relative z-10">
          ROZKŁAD <br />
          <span className="bg-primary px-3 text-black border-2 border-text-main inline-block -rotate-1 shadow-retro">
            JAZDY
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-hand text-text-main/80 -rotate-1 max-w-2xl">
          Co robimy i kiedy robimy. Prawdopodobnie będzie błoto.
        </p>
      </section>

      {/* Events & Gatherings */}
      <section className="w-full max-w-[900px] mx-auto px-4 py-8 flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <div className="bg-text-main text-primary p-2 border-2 border-primary shadow-retro-sm">
            <span className="material-symbols-outlined text-3xl">celebration</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-pixel tracking-tight">
            IMPREZY &amp; SPOTKANIA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EVENTS.map(({ title, schedule, desc, bg, shadow }) => (
            <div
              key={title}
              className="group bg-white border-2 border-text-main p-6 shadow-retro hover:shadow-retro-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col gap-4 relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-colors" />
              <div className="flex justify-between items-start">
                <h3
                  className={`text-3xl font-pixel ${bg} px-2 inline-block border border-text-main -rotate-1 ${
                    shadow ? "shadow-retro-sm" : ""
                  }`}
                >
                  {title}
                </h3>
                <span className="font-hand font-bold text-gray-500 rotate-3">{schedule}</span>
              </div>
              <p className="text-base font-display font-medium leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Regular trips */}
      <section className="w-full max-w-[900px] mx-auto px-4 py-8 flex flex-col gap-8">
        <div className="flex items-center gap-4 justify-end">
          <h2 className="text-4xl md:text-5xl font-pixel tracking-tight text-right">
            STAŁE TRIPY
          </h2>
          <div className="bg-text-main text-primary p-2 border-2 border-primary shadow-retro-sm">
            <span className="material-symbols-outlined text-3xl">hiking</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REGULAR_TRIPS.map(({ title, when, desc }) => (
            <div
              key={title}
              className="bg-white border-2 border-text-main p-5 shadow-retro flex flex-col items-start gap-3 hover:shadow-retro-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <h3 className="text-3xl font-pixel">{title}</h3>
              <p className="font-hand text-sm font-bold text-gray-500">{when}</p>
              <p className="text-sm font-display font-medium border-t-2 border-text-main pt-4 w-full">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[900px] mx-auto px-4 py-10">
        <div className="relative overflow-hidden bg-primary border-4 border-text-main shadow-retro p-8 md:p-12 text-center">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#000 2px, transparent 2px)",
              backgroundSize: "16px 16px",
            }}
          />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-5xl font-pixel text-black">
              NIE CZAISZ BAZY?
            </h2>
            <p className="text-lg md:text-xl font-bold text-black/80 max-w-xl">
              Wpadnij na spotkanie, pogadamy. Zero zobowiązań, a może zgarniesz wlepkę.
            </p>
            <button className="flex items-center gap-2 h-14 px-8 bg-text-main hover:bg-gray-800 text-white text-xl font-pixel border-2 border-transparent shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-[2px_2px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              <span>KALENDARZ GOOGLE</span>
              <span className="material-symbols-outlined">calendar_month</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
