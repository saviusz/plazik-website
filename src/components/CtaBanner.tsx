interface CtaBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonIcon?: string;
  onButtonClick: () => void;
}

export function CtaBanner({ title, subtitle, buttonText, buttonIcon = "arrow_forward", onButtonClick }: CtaBannerProps) {
  return (
    <section className="w-full max-w-[1200px] px-6 py-12">
      <div className="bg-text-main text-white rounded-none border-4 border-black shadow-retro p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #4ADE80 0, #4ADE80 2px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10 space-y-2 text-center md:text-left flex-1">
          <h2 className="text-3xl font-black leading-tight font-display">{title}</h2>
          <p className="text-gray-300 text-lg font-hand max-w-lg">{subtitle}</p>
        </div>
        <div className="relative z-10 w-full md:w-auto">
          <button
            onClick={onButtonClick}
            className="h-14 px-8 bg-primary text-text-main font-bold text-lg border-2 border-white hover:bg-white hover:text-text-main transition-colors shadow-retro-sm flex items-center justify-center gap-2 font-pixel tracking-wide w-full md:w-auto"
          >
            <span className="material-symbols-outlined">{buttonIcon}</span>
            <span>{buttonText}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
