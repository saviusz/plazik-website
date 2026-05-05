interface SectionHeaderProps {
  title: string;
  icon: string;
  align?: "left" | "right";
}

export function SectionHeader({ title, icon, align = "left" }: SectionHeaderProps) {
  if (align === "right") {
    return (
      <div className="flex items-center gap-4 justify-end">
        <h2 className="text-4xl md:text-5xl font-pixel tracking-tight text-right">{title}</h2>
        <div className="bg-text-main text-primary p-2 border-2 border-primary shadow-retro-sm">
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="bg-text-main text-primary p-2 border-2 border-primary shadow-retro-sm">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-pixel tracking-tight">{title}</h2>
    </div>
  );
}
