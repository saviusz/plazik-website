import { PageHero, CtaBanner, Section, SectionCard, SectionFooter, IconBox, Divider } from "../components";

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

      <Section className="py-10">
        <SectionCard>
          <div className="space-y-8">
            {CONTACT_ITEMS.map(({ icon, title, content }, idx) => (
              <div key={title}>
                {idx > 0 && <Divider className="mb-8" />}
                <div className="flex gap-6 items-start">
                  <IconBox icon={icon} />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold font-display mb-2">{title}</h3>
                    {content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SectionFooter
            updateText="Ostatnio widziani: W kuchni, robiąc tosty"
            verifiedText="Potwierdzona miejscówka"
          />
        </SectionCard>
      </Section>

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
