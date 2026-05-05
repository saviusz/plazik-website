export function SpinningSun() {
  return (
    <div className="absolute -top-8 -right-8 text-text-main rotate-12 hidden md:block animate-spin-slow">
      <svg fill="none" height="70" stroke="currentColor" strokeWidth="3" viewBox="0 0 100 100" width="70">
        <circle cx="50" cy="50" fill="#fef08a" r="20" stroke="#1a2e05" />
        <path
          d="M50 0 L50 20 M50 80 L50 100 M0 50 L20 50 M80 50 L100 50 M15 15 L30 30 M70 70 L85 85 M15 85 L30 70 M70 30 L85 15"
          stroke="#1a2e05"
          strokeLinecap="round"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
}
