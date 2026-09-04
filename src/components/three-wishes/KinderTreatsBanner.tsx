import Image from "next/image";
import { StarFourPoint } from "../icons";

export function KinderTreatsBanner() {
  return (
    <section className="relative overflow-hidden select-none" id="daily-treats">
      {/* Top Wave Strip — Exact shape from waves.png */}
      <div className="w-full leading-none overflow-hidden select-none pointer-events-none -mb-[1px]">
        <Image
          src="/images/candy-circle/waves.png"
          alt=""
          aria-hidden="true"
          width={1024}
          height={101}
          className="w-full h-auto block"
          priority
          unoptimized
        />
      </div>

      {/* Main Orange Content Block — Reduced height for compact proportion */}
      <div
        className="relative py-4 sm:py-5 md:py-7 lg:py-8 px-6 md:px-12 text-center"
        style={{ backgroundColor: "#FF8A00", color: "#380F01" }}
      >
        {/* Top-Right Decorative Sparkle Stars */}
        <div className="absolute top-2 right-6 md:top-4 md:right-14 flex items-start gap-1 pointer-events-none">
          <StarFourPoint className="w-5 h-5 md:w-7 md:h-7 text-[#380F01] animate-float" />
          <StarFourPoint className="w-3 h-3 md:w-4 md:h-4 text-[#380F01] mt-2.5 -ml-0.5 animate-float-delayed" />
        </div>

        {/* Bottom-Left Decorative Sparkle Stars */}
        <div className="absolute bottom-2 left-6 md:bottom-4 md:left-14 flex items-end gap-1 pointer-events-none">
          <StarFourPoint className="w-5 h-5 md:w-7 md:h-7 text-[#380F01] animate-float-delayed" />
          <StarFourPoint className="w-3 h-3 md:w-4 md:h-4 text-[#380F01] mb-2.5 -ml-0.5 animate-float" />
        </div>

        {/* Main Punchy Typography Content */}
        <div className="max-w-[1140px] mx-auto relative z-10">
          <h2
            className="font-display font-black text-xl sm:text-2xl md:text-4xl lg:text-[44px] xl:text-[48px] leading-[1.2] md:leading-[1.14] tracking-tight uppercase"
            style={{
              fontFamily: '"ITC Souvenir Std", Georgia, Cambria, serif',
              color: "#380F01",
            }}
          >
            Some small daily treats are worth enjoying:{" "}
            <span className="inline-flex items-center align-middle mx-1 md:mx-2 group cursor-pointer">
              <Image
                src="/images/candy-circle/kinder-surprise-tight.png"
                alt="Kinder Surprise"
                width={60}
                height={89}
                className="inline-block h-[1.25em] w-auto align-middle object-contain drop-shadow-md transition-transform duration-200 group-hover:scale-115 group-hover:rotate-6 -translate-y-[0.06em]"
                unoptimized
              />
            </span>{" "}
            Kinder Surprise{" "}
            <span className="inline-flex items-center align-middle mx-1 md:mx-2 group cursor-pointer">
              <Image
                src="/images/candy-circle/kinder-chocolate-tight.png"
                alt="Kinder Chocolate"
                width={90}
                height={66}
                className="inline-block h-[1.15em] w-auto align-middle object-contain drop-shadow-md transition-transform duration-200 group-hover:scale-115 group-hover:-rotate-6 -translate-y-[0.05em]"
                unoptimized
              />
            </span>{" "}
            Kinder Chocolate and{" "}
            <span className="inline-flex items-center align-middle mx-1 md:mx-2 group cursor-pointer">
              <Image
                src="/images/candy-circle/kinder-bueno-tight.png"
                alt="Kinder Bueno"
                width={120}
                height={46}
                className="inline-block h-[1.05em] w-auto align-middle object-contain drop-shadow-md transition-transform duration-200 group-hover:scale-115 group-hover:rotate-3 -translate-y-[0.04em]"
                unoptimized
              />
            </span>{" "}
            Kinder Bueno. All with creamy milk, crispy wafers, and real ingredients.
          </h2>
        </div>
      </div>

      {/* Bottom Wave Strip — Exact shape rotated 180° so wave crests flow in exact same direction */}
      <div className="w-full leading-none overflow-hidden select-none pointer-events-none -mt-[1px]">
        <Image
          src="/images/candy-circle/waves-bottom.png"
          alt=""
          aria-hidden="true"
          width={1024}
          height={101}
          className="w-full h-auto block"
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
