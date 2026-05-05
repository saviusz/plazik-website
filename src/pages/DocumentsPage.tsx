import { PageHero, CtaBanner, Section, SectionCard, SectionFooter } from "../components";

const DOCUMENTS = [
  {
    icon: "description",
    title: "Deklaracja Członkowska",
    desc: "Oficjalny akt wstąpienia do klanu. Podpisz, oddaj, witaj w rodzinie.",
    tag: "PDF",
    color: "bg-primary/20",
  },
  {
    icon: "article",
    title: "Regulamin Wyjazdów",
    desc: "Co wolno, czego nie wolno i co się stanie jak zapomnisz karimaty.",
    tag: "PDF",
    color: "bg-blue-100",
  },
  {
    icon: "receipt_long",
    title: "Formularz Rezygnacji",
    desc: "Mamy nadzieję, że nie musisz. Ale jak musisz, to tu jest formularz.",
    tag: "DOCX",
    color: "bg-yellow-100",
  },
  {
    icon: "inventory_2",
    title: "Lista Ekwipunku",
    desc: "Co zabrać na wyjazd żeby nie płakać na szlaku. Wersja PDF i edytowalna.",
    tag: "PDF + XLSX",
    color: "bg-red-100",
  },
  {
    icon: "badge",
    title: "Statut Klubu",
    desc: "Pełny, urzędowy, z pieczątką. Na wypadek gdybyś chciał nam sprawdzić.",
    tag: "PDF",
    color: "bg-purple-100",
  },
  {
    icon: "account_balance_wallet",
    title: "Wzór Przelewu",
    desc: "Dane do przelewu, żeby wpisać wszystko poprawnie za pierwszym razem.",
    tag: "TXT",
    color: "bg-green-100",
  },
];

export default function DocumentsPage() {
  return (
    <>
      <PageHero
        badge="CENTRUM BIUROKRACJI"
        title="Dokumenty"
        titleHighlight="Klubu"
        subtitle='Wszystkie nudne papiery w jednym miejscu. <span class="font-normal text-text-main">Pobieraj, drukuj, wypełniaj. Staraliśmy się, żeby nie wiało nudą, ale prawo to prawo. Odpal tripa legalnie!</span>'
        imageCaption="RYS. 1: Segregator Ważnych Spraw"
      />

      <Section className="py-10">
        <SectionCard>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DOCUMENTS.map(({ icon, title, desc, tag, color }) => (
              <div
                key={title}
                className="flex gap-4 items-start p-4 border-2 border-text-main/20 hover:border-text-main hover:shadow-retro-sm transition-all cursor-pointer group"
              >
                <div
                  className={`flex-shrink-0 w-14 h-14 ${color} border-2 border-text-main flex items-center justify-center shadow-retro-sm group-hover:bg-primary/30 transition-colors`}
                >
                  <span className="material-symbols-outlined text-3xl text-text-main">
                    {icon}
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold font-display">{title}</h3>
                    <span className="font-pixel text-xs bg-accent-light border border-accent-border px-2 py-0.5">
                      {tag}
                    </span>
                  </div>
                  <p className="font-hand text-lg text-text-secondary leading-snug">
                    {desc}
                  </p>
                </div>
                <span className="material-symbols-outlined text-text-secondary group-hover:text-text-main transition-colors mt-1 flex-shrink-0">
                  download
                </span>
              </div>
            ))}
          </div>

          <SectionFooter
            updateText="Ostatnia aktualizacja: Wczoraj, po kawie"
            verifiedText="Zatwierdzone przez Zarząd"
          />
        </SectionCard>
      </Section>

      <CtaBanner
        title="Brakuje jakiegoś dokumentu?"
        subtitle="Napisz do nas, a my go wyszukamy w stosie papierów na biurku Prezesa."
        buttonText="NAPISZ DO NAS"
        buttonIcon="send"
        onButtonClick={() => {
          window.location.href = "mailto:kontakt@zabiskok.club";
        }}
      />
    </>
  );
}
