import { FrogDecoration } from "./FrogDecoration";
import { SpinningSun } from "./SpinningSun";

interface PageHeroProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  imageCaption: string;
}

const FROG_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDCFAABswJRbh2JyKIDnFbDfhoUUzlX73qteFciEz85KxOylSREdYYqvaAjTlPM_GqYnfyI91MOZLDMdPBO0nMo2LupOCqGjLd1IUHV9vQBxQNu-CGJw6k6MQ8L1OefUm25skdRsuYobl7EtYyaiiINnYZFc7guEdHvK93BxTnjL5jatzxdTxGcT8zK25KHWTjo5dSwD5FuLLbv14BC3YumpYGJpSDR6lhYX4qWd4DEt9jYTHetHb9ceKYwN9zn28ZjpgSiVT77GY56";

export function PageHero({ badge, title, titleHighlight, subtitle, imageCaption }: PageHeroProps) {
  return (
    <section className="w-full max-w-[1200px] px-6 py-12 md:py-20 relative overflow-hidden md:overflow-visible">
      <FrogDecoration className="top-4 right-4 md:top-10 md:right-1/3 w-32 h-32" />
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
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
