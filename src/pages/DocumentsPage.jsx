import { PageHero, CtaBanner } from "../components/shared";

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

      {/* Documents grid */}
      <section className="w-full py-10">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-white border-2 border-text-main shadow-retro p-8 md:p-12 relative rounded-sm">
            {/* Tape strip */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-gray-200 border-2 border-text-main rounded-full z-10 flex items-center justify-center">
              <div className="w-20 h-1 bg-gray-400 rounded-full" />
            </div>

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

            <div className="mt-10 pt-6 border-t-4 border-double border-text-main flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="font-pixel text-lg text-text-secondary">
                Ostatnia aktualizacja: Wczoraj, po kawie
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-dark">
                  verified_user
                </span>
                <span className="font-bold">Zatwierdzone przez Zarząd</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
