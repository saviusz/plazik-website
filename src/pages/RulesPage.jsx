import { PageHero, CtaBanner } from "../components/shared";

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

      {/* Rules card */}
      <section className="w-full py-10">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-white border-2 border-text-main shadow-retro p-8 md:p-12 relative rounded-sm">
            {/* Tape strip */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-gray-200 border-2 border-text-main rounded-full z-10 flex items-center justify-center">
              <div className="w-20 h-1 bg-gray-400 rounded-full" />
            </div>

            <div className="space-y-8">
              {RULES.map(({ num, title, text }, idx) => (
                <div key={num}>
                  {idx > 0 && (
                    <div className="w-full border-t-2 border-dashed border-text-main/30 mb-8" />
                  )}
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

            <div className="mt-10 pt-6 border-t-4 border-double border-text-main flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="font-pixel text-lg text-text-secondary">
                Ostatnia aktualizacja: Wczoraj, po obiedzie
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-dark">verified_user</span>
                <span className="font-bold">Zatwierdzone przez Zarząd</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
