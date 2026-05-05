interface SectionFooterProps {
  updateText: string;
  verifiedText: string;
  className?: string;
}

export function SectionFooter({ updateText, verifiedText, className = "" }: SectionFooterProps) {
  return (
    <div className={`mt-10 pt-6 border-t-4 border-double border-text-main flex flex-col md:flex-row justify-between items-center gap-4 ${className}`}>
      <div className="font-pixel text-lg text-text-secondary">{updateText}</div>
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary-dark">verified_user</span>
        <span className="font-bold">{verifiedText}</span>
      </div>
    </div>
  );
}
