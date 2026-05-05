const FROG_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCRGSPror_oBxePeajN8Jo9qclkgaSPl_XE3dcMLfJBvh0fmdE8yDme7xM_pEFlshlXdTkon3Hd4PbhceytMC32F1RdM7HsaUbuVOCeCdpDgfDumZH9KR1z5eWNeWpaS_w2zUuDG3jaPWesK6l4yMgg4Y-BQCKwfsoqLHfA7BA0NXbBGRNMgTVbCJotOGP2YRnfYP5a_x_CjlY48DzFtqwwB9iqcGmGQMYSgKwX7Q3uGUXwvceF50vKv1SeotL8ahDvI2W52Y9kTj9z";

const ACTIVITY_PHOTOS = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmCDgb5uIrWzjC5E432oWREMEVyBOMpgUZ3d32dIqGsphcbxQ_EbywdRgtp2Yceorbyef0q49phZ217XXn7kEGMq8Z2ioTSu14bh1G2GqojjppP4kx9zvcidEIIrHMR66yWUP4mED2eLnksKfBVze7i3Qhc8p2bLsJlcEANkQ--C_UHfhlTNG4i83xWQvjotb-5o-RdticRSgki1Hjh10ZZrFnOrBPDBd2nug1XO0IjDKaziFJvdFyY-srNXWffxgQ7lCcEKk2Z7BT",
    label: "Beskidzkie błoto",
    tilt: "-rotate-2",
    tape: "bg-primary/40 rotate-2",
    marginTop: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWzNzXOTSkaQ61qgEPddnsqjh9dc8o2BW3v3BnoZZkcm7nDDdMy6uFAVRELGsD0NNGwDQORB1h2dEmYr-abiWRQ1KYQoAxyKf6xS2B3aKo4uxv2jb40RbeKM5Q1T42fBv0yHzQ2gGB146W04lOn2Aro94AhMEzUlQx5oKYtBu_3bxNWalS0JLqh28tv-ppsxtpI22j6tKbgJRghgLAdjibyGvoelj3JJTlvB2eCR7oOHzmMwOq-tKotToWYPN7kFJTdiG8kABYp4Nk",
    label: "Kajaki & Komary",
    tilt: "rotate-[1.5deg]",
    tape: "bg-red-400/30 -rotate-1",
    marginTop: "md:mt-6",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5oEOLtdYrf7aGgP9Gh3-9GAyLOdPUIRBb6TEu26x2bCsngG_W2b1f6Gxfk71GfQqe6CYAGFKYjZnh9e1i1RNcuUOzWRT7MuqHsOGDw72Rax8LKHzGSfv9ApmQiasQTvvZBlWdISx2et5AwcLhtk3kLJ-bXGVlb4q8bahtBGldfpCOGIVG2h0eNECyNMyyrrRNvcKEQK_-dk-mWtMgXvkInPV_067FE-kX3_iOg4Ni5T03lN-mIM2__lFDTze9VW8CgXkJtTO4fz8",
    label: "Ognisko do rana",
    tilt: "-rotate-[1.5deg]",
    tape: "bg-blue-400/30 rotate-1",
    marginTop: "",
  },
];

function PolaroidCard({ src, label, tilt, tape, marginTop }) {
  return (
    <div
      className={`group relative ${tilt} hover:rotate-0 hover:scale-[1.02] hover:z-10 transition-all duration-300 ${marginTop}`}
    >
      <div className="bg-white p-3 pb-8 border-2 border-gray-200 shadow-lg">
        <div className="aspect-square bg-gray-200 border border-gray-100 mb-3 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${src}')` }}
          />
        </div>
        <p className="font-hand text-center text-xl text-gray-800 font-bold">
          {label}
        </p>
      </div>
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 ${tape}`}
      />
    </div>
  );
}

export default function HomePage({ onNavigate }) {
  return (
    <>
      {/* Hero */}
      <section className="w-full max-w-[900px] mx-auto px-4 pt-8 pb-4 border-b-4 border-dashed border-text-main">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-primary border-2 border-text-main px-3 py-1 mb-4 font-pixel text-xl shadow-retro -rotate-2">
              CZEŚĆ, TU KLUB!
            </div>
            <h1 className="text-5xl md:text-7xl font-pixel leading-[0.9] mb-6">
              GÓRY, NAMIOTY <br /> I DOBRY VIBE.
            </h1>
            <p className="text-lg md:text-xl font-display text-gray-700 leading-relaxed">
              Zero korpo-gadki. Jesteśmy studencką ekipą, która lubi tanio
              podróżować. Chodzimy po górach, śpimy w krzakach (czasem w
              schroniskach), robimy ogniska i unikamy tłumów. Jak masz ochotę
              odetchnąć – wpadnij.
            </p>
          </div>

          {/* Mascot image */}
          <div className="relative w-48 md:w-64 flex-shrink-0 group">
            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            <div className="relative border-2 border-text-main bg-white p-2 z-10 aspect-square overflow-hidden">
              <div
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url('${FROG_IMG}')` }}
              />
            </div>
            <div className="absolute -bottom-4 -right-8 bg-white border-2 border-text-main px-3 py-1 -rotate-[5deg] shadow-retro font-hand text-sm z-20">
              ~ Maskotka Prezesa
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="w-full max-w-[900px] mx-auto px-4 py-10 bg-gray-50">
        <div className="flex justify-between items-end mb-8">
          <h2 className="font-pixel text-4xl underline decoration-wavy decoration-primary decoration-4 underline-offset-4">
            CO ROBIMY?
          </h2>
          <span className="font-hand text-xl text-gray-500 hidden md:block rotate-2">
            rzeczy różne i dziwne...
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-8">
          {ACTIVITY_PHOTOS.map((photo) => (
            <PolaroidCard key={photo.label} {...photo} />
          ))}
        </div>

        <div className="text-center md:text-right mt-6">
          <button
            onClick={() => onNavigate("gallery")}
            className="inline-flex items-center gap-2 font-pixel text-2xl hover:text-primary transition-colors group"
          >
            ZOBACZ WIĘCEJ FOTEK
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_right_alt
            </span>
          </button>
        </div>
      </section>

      {/* Info cards */}
      <section className="w-full max-w-[900px] mx-auto px-4 py-10 border-t-4 border-dashed border-text-main bg-primary/10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Location card */}
          <div className="flex-1 bg-white border-2 border-text-main p-6 shadow-retro relative">
            <div className="absolute -top-4 -left-4 bg-primary border-2 border-text-main w-12 h-12 flex items-center justify-center shadow-retro-sm">
              <span className="material-symbols-outlined text-2xl">location_on</span>
            </div>
            <h3 className="font-pixel text-3xl mb-4 pl-6">Gdzie nas szukać?</h3>
            <p className="font-display text-lg mb-4">
              Spotykamy się stacjonarnie, żeby pogadać o planach i zjeść pizzę.
            </p>
            <div className="font-mono text-sm bg-gray-100 p-3 border border-gray-300 mb-4">
              &gt; LOKACJA: BUDYNEK C<br />
              &gt; SALA: 304 (3 PIĘTRO)<br />
              &gt; CZAS: CZWARTKI, 19:00
            </div>
            <p className="font-hand text-xl text-primary-dark rotate-1 text-center md:text-left">
              Wpadaj śmiało, nie gryziemy!
            </p>
          </div>

          {/* Sticky note */}
          <div className="md:w-1/3 bg-[#fff9c4] text-black p-6 shadow-lg rotate-1 border border-black/10 self-start relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 shadow-sm border border-red-700" />
            <h4 className="font-pixel text-2xl mb-2 border-b-2 border-black/20 pb-1">
              NAJBLIŻSZY TRIP
            </h4>
            <p className="font-bold text-lg mb-1">JESIENNE BIESZCZADY</p>
            <p className="text-sm mb-4 opacity-80">
              15-17 Listopada. <br /> Spanie w glebie (albo wiacie).
            </p>
            <button
              onClick={() => onNavigate("trips")}
              className="w-full bg-text-main text-white font-pixel py-2 hover:bg-gray-800 transition-colors"
            >
              SPRAWDŹ TO
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
