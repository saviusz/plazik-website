interface StatCardProps {
  value: string;
  desc: string;
  className?: string;
}

export function StatCard({ value, desc, className = "" }: StatCardProps) {
  return (
    <div className={`bg-white border-2 border-text-main shadow-retro-sm p-6 ${className}`}>
      <h3 className="text-2xl font-pixel font-bold mb-3">{value}</h3>
      <p className="text-text-secondary font-hand text-xl leading-6">{desc}</p>
    </div>
  );
}
