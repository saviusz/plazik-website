interface TripCardProps {
  title: string;
  when: string;
  desc: string;
}

export function TripCard({ title, when, desc }: TripCardProps) {
  return (
    <div className="bg-white border-2 border-text-main p-5 shadow-retro flex flex-col items-start gap-3 hover:shadow-retro-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
      <h3 className="text-3xl font-pixel">{title}</h3>
      <p className="font-hand text-sm font-bold text-gray-500">{when}</p>
      <p className="text-sm font-display font-medium border-t-2 border-text-main pt-4 w-full">
        {desc}
      </p>
    </div>
  );
}
