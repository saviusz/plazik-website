import { PageHero, CtaBanner, Section, SectionCard, SectionFooter, Divider } from "../components";

const RULES = [
  {
    num: "01",
    title: "Członkostwo",
    text: "Do klubu może dołączyć każdy student posiadający ważną legitymację. Wymagana jest rejestracja przez formularz online oraz akceptacja niniejszego regulaminu. Brak opłaty wpisowej.",
  },
  {
    num: "02",
    title: "Zasady Wyjazdów",
    text: 'Zapisy na wyjazdy odbywają się w systemie "kto pierwszy ten lepszy". Rezygnacja możliwa najpóźniej na 48h przed startem. Nieobecność bez zgłoszenia skutkuje banem na kolejny wypad.',
  },
  {
    num: "03",
    title: "Bezpieczeństwo i Odpowiedzialność",
    text: "Każdy uczestnik odpowiada za siebie. Ubezpieczenie NNW we własnym zakresie. Na szlaku trzymamy się grupy i nie zostawiamy nikogo w tyle. Alkohol i inne używki na trasie – zabronione.",
  },
  {
    num: "04",
    title: "Środowisko",
    text: 'Obowiązuje zasada "Leave No Trace". Wszystkie śmieci wracają z nami do miasta. Nie niszczymy przyrody, nie hałasujemy. Szanujemy mieszkańców lasu.',
  },
];

export default function RulesPage() {
  return (
    <>
      <PageHero
        badge="OFICJALNY KODEKS #42"
        title="Regulamin"
        titleHighlight="Klubu"
        subtitle='Zasady, bez których nie ruszymy. <span class="font-normal text-text-main">Przeczytanie zajmuje mniej niż zaparzenie zupki chińskiej. Warto wiedzieć, co i jak, żeby nie było kwasu.</span>'
        imageCaption="RYS. 1: Skupienie na Treści"
      />

      <Section className="py-10">
        <SectionCard>
          <div className="space-y-8">
            {RULES.map(({ num, title, text }, idx) => (
              <div key={num}>
                {idx > 0 && <Divider className="mb-8" />}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 border-2 border-text-main flex items-center justify-center font-pixel text-2xl font-bold mt-1">
                    {num}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display mb-2">{title}</h3>
                    <p className="font-hand text-xl text-text-secondary leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SectionFooter
            updateText="Ostatnia aktualizacja: Wczoraj, po obiedzie"
            verifiedText="Zatwierdzone przez Zarząd"
          />
        </SectionCard>
      </Section>

      <CtaBanner
        title="Pełna wersja statutu"
        subtitle="Jeśli potrzebujesz więcej szczegółów lub formalnych definicji, pobierz pełny dokument PDF."
        buttonText="POBIERZ PDF"
        buttonIcon="download"
        onButtonClick={() => alert("Pobieranie Regulamin.pdf...")}
      />
    </>
  );
}
