interface DividerProps {
  className?: string;
}

export function Divider({ className = "" }: DividerProps) {
  return <div className={`w-full border-t-2 border-dashed border-text-main/30 ${className}`} />;
}
