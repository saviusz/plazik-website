const NAV_LINKS = [
  { label: "O nas", page: "about" },
  { label: "Wyprawy", page: "trips" },
  { label: "Galeria", page: "gallery" },
  { label: "Dokumenty", page: "documents" },
  { label: "Zasady gry", page: "rules" },
  { label: "Kontakt", page: "contact" },
];

export default function Header({ currentPage, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b-2 border-text-main">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          className="flex items-center gap-3"
          onClick={() => onNavigate("home")}
        >
          <div className="w-10 h-10 bg-primary border-2 border-text-main flex items-center justify-center shadow-retro-sm">
            <span className="material-symbols-outlined font-bold text-text-main">
              cruelty_free
            </span>
          </div>
          <h2 className="text-2xl font-pixel text-text-main tracking-wide mt-1">
            KLUB ŻABIEGO SKOKU
          </h2>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-hand text-xl">
          {NAV_LINKS.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={`transition-all hover:text-primary-dark hover:underline decoration-wavy decoration-2 underline-offset-4 ${
                currentPage === page
                  ? "text-primary-dark font-bold underline decoration-wavy decoration-2 underline-offset-4"
                  : ""
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA + Mobile menu */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex h-10 px-6 items-center justify-center bg-primary border-2 border-text-main shadow-retro text-text-main font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-retro-sm transition-all font-pixel text-xl tracking-wider">
            WBJAJ!
          </button>
          <button className="md:hidden p-2 text-text-main">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
