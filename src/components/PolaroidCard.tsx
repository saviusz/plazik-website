interface PolaroidCardProps {
  src: string;
  label: string;
  tilt: string;
  tape: string;
  marginTop: string;
}

export function PolaroidCard({ src, label, tilt, tape, marginTop }: PolaroidCardProps) {
  return (
    <div
      className={`group relative ${tilt} hover:rotate-0 hover:scale-[1.02] hover:z-10 transition-all duration-300 ${marginTop}`}
    >
      <div className="bg-white p-3 pb-8 border-2 border-gray-200 shadow-lg">
        <div className="aspect-square bg-gray-200 border border-gray-100 mb-3 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${src}')` }}
          />
        </div>
        <p className="font-hand text-center text-xl text-gray-800 font-bold">
          {label}
        </p>
      </div>
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 ${tape}`}
      />
    </div>
  );
}
