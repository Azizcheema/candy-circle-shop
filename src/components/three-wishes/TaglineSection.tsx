import { ArrowRightIcon } from "../icons";
import { StarFourPoint, SparkleIcon } from "../icons";

export function TaglineSection() {
  return (
    <section className="relative bg-[#FFF0E2]" id="tagline">
      {/* Tagline heading with star decorations */}
      <div className="relative px-6 pt-6 pb-8 md:pt-10 md:pb-12 text-center">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-2">
          <StarFourPoint
            className="text-sunshine-yellow w-6 h-6 md:w-8 md:h-8 animate-float"
          />
          <h1 className="font-display font-black text-chocolate text-3xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[0.95]">
            Sweet Happiness in Every Box.<br className="hidden md:inline" />{" "}
            Chocolates, Candies & Snacks.
          </h1>
          <SparkleIcon
            className="text-sky-blue w-6 h-6 md:w-8 md:h-8 animate-float-delayed"
          />
        </div>
      </div>

      {/* Candy Circle Full-Width Wavy Banner */}
      <div className="relative w-full overflow-hidden bg-[#FFF0E2] my-4 md:my-6">
        <a
          href="#products"
          className="lto-banner-masked relative block w-full text-center no-underline cursor-pointer group"
          style={{
            backgroundImage: "url('/images/candy-circle/promo-banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "260px",
          }}
          aria-label="Loaded Snack & Candy Boxes! — shop now"
        >
          {/* Centered Content Container */}
          <div className="flex flex-col items-center justify-center min-h-[160px] md:min-h-[180px] px-4">
            {/* Dark brown pill badge with white text */}
            <span
              className="inline-block font-display font-black text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl px-6 py-2 sm:px-8 sm:py-3 rounded-2xl md:rounded-3xl shadow-xl tracking-tight"
              style={{
                backgroundColor: "rgba(42, 21, 0, 0.86)",
                textShadow: "0 2px 6px rgba(58, 29, 0, 0.45)",
              }}
            >
              Loaded Snack & Candy Boxes!
            </span>

            {/* Cream pill CTA button */}
            <span
              className="inline-flex items-center gap-2 mt-3 sm:mt-4 bg-[#FFF0E2] text-[#3A1D00] font-sans font-extrabold text-xs sm:text-sm md:text-base px-6 py-2 md:px-7 md:py-2.5 rounded-full shadow-md transition-all duration-200 group-hover:scale-105 group-hover:bg-white"
            >
              shop the collection
              <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
