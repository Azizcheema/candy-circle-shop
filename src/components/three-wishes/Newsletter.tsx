"use client";

import { PaperPlaneIcon, SparkleIcon, StarFourPoint } from "../icons";
import { ArrowRightIcon } from "../icons";

export function Newsletter() {
  return (
    <section
      className="relative py-14 md:py-20"
      id="newsletter"
      style={{ backgroundColor: "oklch(0.82 0.10 230)" }}
    >
      {/* Decorative sparkles at top */}
      <div className="absolute top-8 left-[10%] opacity-60">
        <SparkleIcon className="text-sky-blue/80 w-3 h-3 animate-float" />
      </div>
      <div className="absolute top-12 left-[25%] opacity-40">
        <StarFourPoint className="text-sky-blue/60 w-4 h-4 animate-float-delayed" />
      </div>
      <div className="absolute top-6 right-[20%] opacity-50">
        <SparkleIcon className="text-sky-blue/70 w-5 h-5 animate-float-slow" />
      </div>
      <div className="absolute top-16 right-[35%] opacity-30">
        <StarFourPoint className="text-sky-blue/50 w-3 h-3 animate-float" />
      </div>

      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Paper plane icon */}
        <div className="flex justify-center mb-4">
          <PaperPlaneIcon className="text-chocolate/80 w-10 h-10 md:w-12 md:h-12" />
        </div>

        {/* Heading */}
        <h2 className="font-display font-black text-chocolate text-3xl md:text-5xl lg:text-6xl tracking-tight mb-4 italic">
          Let&apos;s be friends
        </h2>

        {/* Subtext */}
        <p className="font-sans text-chocolate/80 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
          Be the first to know about limited-edition snack boxes, new candy drops, and sweet savings.
        </p>

        {/* Email signup form */}
        <form
          className="flex items-center gap-0 max-w-lg mx-auto bg-white rounded-full overflow-hidden shadow-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="feeling@hungry.com"
            className="flex-1 px-6 py-3 md:py-4 bg-transparent text-chocolate placeholder:text-chocolate/40 font-sans text-sm md:text-base border-none outline-none"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="flex items-center gap-2 bg-chocolate text-white font-display font-bold text-xs md:text-sm px-5 py-3 md:px-7 md:py-4 rounded-full mr-1 hover:bg-chocolate/90 transition-colors flex-shrink-0"
          >
            sign up
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Privacy policy text */}
        <p className="font-sans text-chocolate/60 text-xs md:text-sm mt-4">
          By signing up, you agree to our{" "}
          <a href="#" className="underline underline-offset-2 hover:text-chocolate transition-colors">
            privacy policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
