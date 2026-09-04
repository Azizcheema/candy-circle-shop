import Image from "next/image";

const retailers = [
  { name: "Amazon", logo: "/images/three-wishes/retailers/amazon.svg" },
  { name: "Target", logo: "/images/three-wishes/retailers/target.svg" },
  { name: "Walmart", logo: "/images/three-wishes/retailers/walmart.svg" },
  { name: "Whole Foods", logo: "/images/three-wishes/retailers/wholefoods.svg" },
  { name: "Costco", logo: "/images/three-wishes/retailers/costco.svg" },
  { name: "Publix", logo: "/images/three-wishes/retailers/publix.svg" },
  { name: "Erewhon", logo: "/images/three-wishes/retailers/erewhon.svg" },
  { name: "Stew Leonard's", logo: "/images/three-wishes/retailers/stew-leonards.svg" },
  { name: "Albertsons", logo: "/images/three-wishes/retailers/albertsons.svg" },
  { name: "Big Y", logo: "/images/three-wishes/retailers/big-y.svg" },
  { name: "Central Market", logo: "/images/three-wishes/retailers/central-market.svg" },
  { name: "Harris Teeter", logo: "/images/three-wishes/retailers/harris-teeter.svg" },
  { name: "H-E-B", logo: "/images/three-wishes/retailers/heb.svg" },
  { name: "Kroger", logo: "/images/three-wishes/retailers/kroger.svg" },
];

export function WhereToBuy() {
  return (
    <section className="relative bg-cream py-10 md:py-16" id="where-to-buy">
      {/* Heading */}
      <h2 className="font-display font-black text-chocolate text-3xl md:text-5xl lg:text-6xl text-center tracking-tight mb-8 md:mb-12">
        Where to Buy
      </h2>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        {/* Gradient masks on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-cream to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex animate-marquee">
          {/* Duplicate the logos for seamless loop */}
          {[...retailers, ...retailers].map((retailer, i) => (
            <div
              key={`${retailer.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center px-6 md:px-10"
            >
              <Image
                src={retailer.logo}
                alt={retailer.name}
                width={120}
                height={50}
                className="h-8 md:h-10 lg:h-12 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
