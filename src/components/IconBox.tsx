interface IconBoxProps {
  icon: string;
  className?: string;
}

export function IconBox({ icon, className = "" }: IconBoxProps) {
  return (
    <div className={`flex-shrink-0 w-14 h-14 bg-primary/20 border-2 border-text-main flex items-center justify-center shadow-retro-sm ${className}`}>
      <span className="material-symbols-outlined text-3xl text-text-main">{icon}</span>
    </div>
  );
}
