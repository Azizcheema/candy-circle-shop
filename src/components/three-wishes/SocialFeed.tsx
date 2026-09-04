import { GoldStar } from "../icons";

const socialPosts = [
  {
    id: 1,
    alt: "Unboxing the 45-piece Kinder chocolate snack box",
    gradient: "from-amber-800 to-amber-600",
    overlay: "unboxing pure chocolate joy 🍫",
  },
  {
    id: 2,
    alt: "Gute Laune Box with 150 pieces of candy and chocolate snacks",
    gradient: "from-green-700 to-emerald-500",
    overlay: "150 pieces of pure happiness 🎉",
  },
  {
    id: 3,
    alt: "Happy party candy box with lollipops and retro sweets",
    gradient: "from-pink-500 to-rose-400",
    overlay: "retro candy dreams 🍭",
  },
  {
    id: 4,
    alt: "Sharing Candy Circle snack boxes with friends",
    gradient: "from-purple-600 to-indigo-500",
    overlay: "party ready in seconds ✨",
  },
  {
    id: 5,
    alt: "Hand-packing gift boxes with red and gold ribbons",
    gradient: "from-orange-500 to-amber-400",
    overlay: "hand-packed with love 🎁",
  },
  {
    id: 6,
    alt: "Sweet movie night with Candy Circle treats",
    gradient: "from-rose-600 to-red-500",
    overlay: "ultimate movie night haul 🍿",
  },
];

export function SocialFeed() {
  return (
    <section
      className="relative py-12 md:py-16"
      id="social-feed"
      style={{ backgroundColor: "oklch(0.88 0.18 95)" }}
    >
      <div>
        {/* Star decoration */}
        <div className="px-6 md:px-12">
          <GoldStar className="text-amber-700/60 w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 animate-float-slow" />
        </div>

        {/* Heading */}
        <div className="text-center px-6 mb-8 md:mb-12">
          <h2 className="font-display font-black text-chocolate text-3xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            Follow the Sweet Moments
          </h2>
          <p className="font-sans text-chocolate/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Unboxings, sweet surprises, and a front-row seat to the ultimate candy party with Candy Circle.
          </p>
        </div>

        {/* Gallery cards — horizontal scrolling */}
        <div className="relative overflow-hidden pt-2">
          <div className="flex gap-3 md:gap-4 overflow-x-auto pb-6 px-4 md:px-8 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {socialPosts.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 w-[200px] md:w-[240px] lg:w-[260px] aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden relative group cursor-pointer shadow-md hover:shadow-xl transition-all"
              >
                {/* Gradient placeholder for social media images */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`}
                />
                {/* Overlay text */}
                {post.overlay && (
                  <div className="absolute inset-0 flex items-end p-4">
                    <p className="font-display font-bold text-white text-sm md:text-base drop-shadow-lg leading-tight">
                      {post.overlay}
                    </p>
                  </div>
                )}
                {/* Hover effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Tag us text */}
        <div className="text-center py-6 md:py-8">
          <p className="font-sans text-chocolate text-base md:text-lg">
            tag us{" "}
            <a
              href="https://instagram.com/candycircle"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              @candycircle
            </a>
          </p>
        </div>

        {/* Star decoration bottom */}
        <div className="flex justify-end px-6 md:px-12 pb-4">
          <GoldStar className="text-amber-700/60 w-8 h-8 md:w-12 md:h-12 animate-float-delayed" />
        </div>
      </div>
    </section>
  );
}
