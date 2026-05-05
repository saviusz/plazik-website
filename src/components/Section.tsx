interface SectionProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Section({ children, className = "", narrow = false }: SectionProps) {
  const maxWidth = narrow ? "max-w-[900px]" : "max-w-[1000px]";
  const padding = narrow ? "px-4" : "px-6";
  return <section className={`w-full ${maxWidth} mx-auto ${padding} ${className}`}>{children}</section>;
}
