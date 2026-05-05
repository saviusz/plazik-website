/** Animated bouncing frog silhouette used on several hero sections */
export function FrogDecoration({ className = "" }) {
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

/** Spinning sun icon used on hero sections */
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

/** Diagonal stripe CTA banner used on several pages */
export function CtaBanner({ title, subtitle, buttonText, buttonIcon = "arrow_forward", onButtonClick }) {
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

/** Standard hero section used across most pages */
export function PageHero({ badge, title, titleHighlight, subtitle, imageCaption }) {
  const FROG_IMG =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDCFAABswJRbh2JyKIDnFbDfhoUUzlX73qteFciEz85KxOylSREdYYqvaAjTlPM_GqYnfyI91MOZLDMdPBO0nMo2LupOCqGjLd1IUHV9vQBxQNu-CGJw6k6MQ8L1OefUm25skdRsuYobl7EtYyaiiINnYZFc7guEdHvK93BxTnjL5jatzxdTxGcT8zK25KHWTjo5dSwD5FuLLbv14BC3YumpYGJpSDR6lhYX4qWd4DEt9jYTHetHb9ceKYwN9zn28ZjpgSiVT77GY56";

  return (
    <section className="w-full max-w-[1200px] px-6 py-12 md:py-20 relative overflow-hidden md:overflow-visible">
      <FrogDecoration className="top-4 right-4 md:top-10 md:right-1/3 w-32 h-32" />
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        {/* Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-text-main shadow-retro-sm w-fit mx-auto md:mx-0 -rotate-2 transform hover:rotate-0 transition-transform cursor-help"
            title="Zatwierdzono pieczątką z ziemniaka"
          >
            <span className="font-pixel text-xl text-primary-dark mt-1">{badge}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] text-text-main relative">
            {title}
            <br />
            <span className="text-primary font-pixel drop-shadow-[3px_3px_0_rgba(26,46,5,1)]">
              {titleHighlight}
            </span>
            <span className="relative inline-block ml-2">
              <svg
                className="absolute bottom-[-15px] left-0 w-full h-6 text-primary"
                preserveAspectRatio="none"
                viewBox="0 0 100 15"
              >
                <path
                  d="M0,7 Q50,14 100,7"
                  fill="none"
                  opacity="0.6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="6"
                />
              </svg>
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl font-hand text-text-secondary max-w-xl mx-auto md:mx-0 leading-relaxed font-bold"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>

        {/* Image */}
        <div className="flex-1 w-full relative max-w-md">
          <div className="relative w-full aspect-square bg-white border-4 border-text-main shadow-retro rounded-sm overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-300">
            <img
              alt="Frog"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              src={FROG_IMG}
            />
            <div className="absolute bottom-0 left-0 w-full bg-primary border-t-2 border-text-main p-2 text-center font-pixel text-xl tracking-wider">
              {imageCaption}
            </div>
          </div>
          <SpinningSun />
        </div>
      </div>
    </section>
  );
}
