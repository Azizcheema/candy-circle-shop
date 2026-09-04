import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFF0E2]" id="hero">
      {/* Hero Image Container */}
      <div className="relative w-full aspect-[16/9] md:aspect-[16/9] lg:aspect-[16/9]">
        <Image
          src="/images/candy-circle/hero-party-flatlay-hd.png"
          alt="Candy Circle festive table spread with Gute Laune Box, Schoko Traum chocolate box, and Happy Box surrounded by bowls of cookies, chocolates, gummies, candies, and happy hands reaching in"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          unoptimized
        />
      </div>

      {/* Circular Arc Overlay — cuts into hero corners to create the curved circular bottom with #F76F3B border */}
      <div
        className="absolute left-0 right-0 bottom-0 w-full pointer-events-none z-10 overflow-visible"
        style={{
          height: "min(calc(190 * 100vw / 1920), 190px)",
        }}
      >
        <svg
          className="block w-full h-full overflow-visible"
          viewBox="0 0 1920 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Cream fill covering the bottom-left and bottom-right corners */}
          <path
            d="M0,0 Q960,200 1920,0 L1920,100 L0,100 Z"
            fill="#FFF0E2"
          />
          {/* Circular #F76F3B orange border line */}
          <path
            d="M0,0 Q960,200 1920,0"
            fill="none"
            stroke="#F76F3B"
            strokeWidth="16"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
          />
        </svg>

        {/* Left wing decorative stars on cream area */}
        <div className="absolute left-4 md:left-10 lg:left-16 bottom-3 md:bottom-6 flex items-center gap-3 md:gap-5 text-[#FFDB45]">
          <svg className="w-5 h-5 md:w-8 md:h-8" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 0l4 12 12 4-12 4-4 12-4-12L0 16l12-4z" />
          </svg>
          <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#FFDB45]" />
          <svg className="w-4 h-4 md:w-6 md:h-6 hidden sm:block" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2 8 8 4-8 4-2 8-2-8-8-4 8-4z" />
          </svg>
        </div>

        {/* Right wing decorative stars on cream area */}
        <div className="absolute right-4 md:right-10 lg:right-16 bottom-3 md:bottom-6 flex items-center gap-3 md:gap-5 text-[#FFDB45]">
          <svg className="w-4 h-4 md:w-6 md:h-6 hidden sm:block" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2 8 8 4-8 4-2 8-2-8-8-4 8-4z" />
          </svg>
          <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#FFDB45]" />
          <svg className="w-6 h-6 md:w-10 md:h-10" viewBox="0 0 36 36" fill="currentColor">
            <path d="M18 0l5.196 12.804L36 18l-12.804 5.196L18 36l-5.196-12.804L0 18l12.804-5.196z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
