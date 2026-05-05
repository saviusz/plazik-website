interface FrogDecorationProps {
  className?: string;
}

export function FrogDecoration({ className = "" }: FrogDecorationProps) {
  return (
    <svg
      className={`absolute text-primary opacity-20 rotate-12 animate-bounce-slow pointer-events-none ${className}`}
      fill="currentColor"
      viewBox="0 0 100 100"
    >
      <path d="M30,50 Q20,30 40,30 Q50,30 60,30 Q80,30 70,50 Q80,70 60,70 Q50,70 40,70 Q20,70 30,50 Z" />
      <circle cx="35" cy="40" fill="#000" opacity="0.5" r="3" />
      <circle cx="65" cy="40" fill="#000" opacity="0.5" r="3" />
    </svg>
  );
}
