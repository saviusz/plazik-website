interface PhotoCardProps {
  src: string;
  caption: string;
  filter?: string;
  className?: string;
}

export function PhotoCard({ src, caption, filter = "", className = "" }: PhotoCardProps) {
  return (
    <div className={`group relative bg-white border-2 border-text-main shadow-retro-sm p-2 hover:shadow-retro hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all cursor-pointer ${className}`}>
      <div className={`aspect-square overflow-hidden ${filter} transition-all duration-500`}>
        <img alt={caption} src={src} className="w-full h-full object-cover" />
      </div>
      <p className="font-hand text-center text-text-main text-lg font-bold mt-2">{caption}</p>
    </div>
  );
}
