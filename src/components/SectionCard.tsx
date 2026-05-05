interface SectionCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionCard({ children, className = "" }: SectionCardProps) {
  return (
    <div className={`bg-white border-2 border-text-main shadow-retro p-8 md:p-12 relative rounded-sm ${className}`}>
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-gray-200 border-2 border-text-main rounded-full z-10 flex items-center justify-center">
        <div className="w-20 h-1 bg-gray-400 rounded-full" />
      </div>
      {children}
    </div>
  );
}
