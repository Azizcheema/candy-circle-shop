import Image from "next/image";
import { ArrowRightIcon } from "../icons";

export function BetterForYou() {
  return (
    <section className="relative bg-cream py-8 md:py-14" id="why-candy-circle">
      <div className="mx-auto max-w-[1300px] px-4 md:px-8">
        <div
          className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg"
          style={{ backgroundColor: "#FF8900" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            {/* Left text content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-[#3A1D00] font-display font-black text-xs md:text-sm tracking-widest uppercase mb-3">
                Why Candy Circle?
              </span>
              <h2 className="font-display font-black text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-[1.05] mb-6 md:mb-8 drop-shadow-sm">
                The Ultimate Gift Box.<br />
                Packed with Joy.<br />
                Hand-Tied with Love.
              </h2>
              <p className="font-sans text-white text-sm md:text-base leading-relaxed mb-6 font-medium">
                Every Candy Circle box is a celebration waiting to be opened. We hand-select only the best-loved chocolates, nostalgic retro sweets, and mouth-watering candies — packaged in premium gift boxes ready to impress.
              </p>
              <div>
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 bg-[#FFDB45] text-[#3A1D00] font-display font-bold text-xs md:text-sm px-7 py-3 rounded-full hover:brightness-105 transition-all shadow-md"
                >
                  find your box
                  <ArrowRightIcon className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Right image with annotations — Transparent cutout without black background */}
            <div className="relative w-full aspect-[1800/1643] min-h-[340px] md:min-h-[480px] lg:min-h-[540px] flex items-center justify-center p-2 sm:p-4 md:p-6">
              <Image
                src="/images/candy-circle/why-candy-circle-box-hd.png"
                alt="Candy Circle Schoko Traum 45 Stück feature breakdown with Kinder products and gift box details"
                fill
                className="object-contain object-center drop-shadow-2xl"
                priority
                quality={100}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
