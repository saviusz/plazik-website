import { PageHero, CtaBanner } from "../components/shared";

const CONTACT_ITEMS = [
  {
    icon: "cottage",
    title: "Gdzie nas znajdziesz?",
    content: (
      <p className="font-hand text-xl text-text-secondary leading-relaxed">
        ul. Zielonych Liści 42/7
        <br />
        00-123 Warszawa
        <br />
        <span className="text-sm opacity-75">
          (Szukaj drzwi z wielką naklejką żaby, trzecie piętro bez windy)
        </span>
      </p>
    ),
  },
  {
    icon: "call",
    title: "Gorąca Linia",
    content: (
      <div>
        <p className="font-hand text-xl text-text-secondary leading-relaxed mb-1">
          Tel:{" "}
          <a
            className="hover:underline decoration-wavy decoration-primary font-bold text-text-main"
            href="tel:+48500600700"
          >
            +48 500 600 700
          </a>
        </p>
        <p className="font-hand text-xl text-text-secondary leading-relaxed">
          Mail:{" "}
          <a
            className="hover:underline decoration-wavy decoration-primary font-bold text-text-main"
            href="mailto:kontakt@zabiskok.club"
          >
            kontakt@zabiskok.club
          </a>
        </p>
        <p className="text-sm font-hand mt-1 opacity-75">
          (Odpisujemy zazwyczaj między kawą a pakowaniem plecaka)
        </p>
      </div>
    ),
  },
  {
    icon: "account_balance",
    title: "Papierkowa Robota",
    content: (
      <div className="bg-gray-50 border-2 border-dashed border-text-main/30 p-4 rounded-sm font-pixel text-lg space-y-1">
        <p>
          <span className="text-text-secondary">NIP:</span> 525-000-11-22
        </p>
        <p>
          <span className="text-text-secondary">Konto:</span> 12 3456 0000 0000 7890 1111
        </p>
        <p>
          <span className="text-text-secondary">Bank:</span> Zielony Listek SA
        </p>
        <p>
          <span className="text-text-secondary">Odbiorca:</span> Klub Żabiego Skoku
        </p>
      </div>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="OTWARTE 24/7 (CHYBA)"
        title="Kontakt"
        titleHighlight="z Bazą"
        subtitle='Masz sprawę? Wal śmiało. <span class="font-normal text-text-main">Jesteśmy tu, żeby pomóc Ci odpalić tripa życia. Albo po prostu pogadać o tym, czy żaby mają pępki.</span>'
        imageCaption="RYS. 1: Oczekiwanie na sygnał"
      />

      {/* Contact info card */}
      <section className="w-full py-10">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-white border-2 border-text-main shadow-retro p-8 md:p-12 relative rounded-sm">
            {/* Tape strip */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-gray-200 border-2 border-text-main rounded-full z-10 flex items-center justify-center">
              <div className="w-20 h-1 bg-gray-400 rounded-full" />
            </div>

            <div className="space-y-8">
              {CONTACT_ITEMS.map(({ icon, title, content }, idx) => (
                <div key={title}>
                  {idx > 0 && (
                    <div className="w-full border-t-2 border-dashed border-text-main/30 mb-8" />
                  )}
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/20 border-2 border-text-main flex items-center justify-center shadow-retro-sm">
                      <span className="material-symbols-outlined text-3xl text-text-main">
                        {icon}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold font-display mb-2">{title}</h3>
                      {content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t-4 border-double border-text-main flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="font-pixel text-lg text-text-secondary">
                Ostatnio widziani: W kuchni, robiąc tosty
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-dark">verified_user</span>
                <span className="font-bold">Potwierdzona miejscówka</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Nie lubisz dzwonić?"
        subtitle="Spoko, my też wolimy pisać. Wyślij nam wiadomość gołębiem, albo po prostu użyj maila."
        buttonText="NAPISZ MAILA"
        buttonIcon="send"
        onButtonClick={() => {
          window.location.href = "mailto:kontakt@zabiskok.club";
        }}
      />
    </>
  );
}
