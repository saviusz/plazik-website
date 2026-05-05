const SOCIAL_LINKS = [
  { icon: "public", href: "#" },
  { icon: "share", href: "#" },
  { icon: "thumb_up", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t-2 border-text-main py-12 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-text-main">
            <span className="material-symbols-outlined text-3xl">cruelty_free</span>
            <span className="font-bold text-xl font-pixel tracking-wider">
              KLUB ŻABIEGO SKOKU
            </span>
          </div>
          <p className="text-base font-hand text-text-secondary">
            © 2024. Wszystkie chwyty dozwolone.
          </p>
        </div>

        <div className="flex gap-4">
          {SOCIAL_LINKS.map(({ icon, href }) => (
            <a
              key={icon}
              href={href}
              className="w-12 h-12 border-2 border-text-main bg-accent-light flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all shadow-retro-sm rounded-full"
            >
              <span className="material-symbols-outlined text-xl">{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
