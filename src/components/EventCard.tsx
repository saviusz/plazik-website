interface EventCardProps {
  title: string;
  schedule: string;
  desc: string;
  bg: string;
  shadow?: boolean;
}

export function EventCard({ title, schedule, desc, bg, shadow }: EventCardProps) {
  return (
    <div className="group bg-white border-2 border-text-main p-6 shadow-retro hover:shadow-retro-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col gap-4 relative overflow-hidden">
      <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-colors" />
      <div className="flex justify-between items-start">
        <h3
          className={`text-3xl font-pixel ${bg} px-2 inline-block border border-text-main -rotate-1 ${
            shadow ? "shadow-retro-sm" : ""
          }`}
        >
          {title}
        </h3>
        <span className="font-hand font-bold text-gray-500 rotate-3">{schedule}</span>
      </div>
      <p className="text-base font-display font-medium leading-relaxed">{desc}</p>
    </div>
  );
}
