import Image from "next/image";
import { ShopifyCartIcon, ShopifyUserIcon } from "../icons";

export function Header() {
  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Snack Boxes", href: "#products" },
    { label: "Chocolates", href: "#products" },
  ];

  const rightLinks = [
    { label: "Candies", href: "#products" },
    { label: "Why Us", href: "#why-candy-circle" },
  ];

  return (
    <header className="sticky top-0 z-50" id="header" style={{ backgroundColor: "#FFF0E2" }}>
      <nav className="relative flex items-center justify-between px-6 py-3.5 md:py-4 md:px-12 lg:px-16 max-w-[1440px] mx-auto">
        {/* Left nav links */}
        <div className="flex-1 hidden md:flex items-center gap-6 lg:gap-10 justify-start">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display font-bold text-[17px] lg:text-[19.5px] tracking-tight hover:opacity-70 transition-opacity"
              style={{ color: "#3A1D00" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile left spacer to balance menu button and keep logo mathematically centered */}
        <div className="md:hidden flex-1 flex items-center justify-start">
          <span className="w-8 h-8" />
        </div>

        {/* Center Logo — Precisely Centered in the Middle of Header */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center py-1 group"
            id="logo"
            aria-label="Candy Circle Home"
          >
            <Image
              src="/images/candy-circle/candy-circle-logo.png"
              alt="Candy Circle"
              width={260}
              height={136}
              className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </a>
        </div>

        {/* Right nav links + Shopify User & Cart Icons */}
        <div className="flex-1 flex items-center justify-end gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {rightLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display font-bold text-[17px] lg:text-[19.5px] tracking-tight hover:opacity-70 transition-opacity"
                style={{ color: "#3A1D00" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Shopify User & Cart Icons */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* User Account Icon */}
            <a
              href="#account"
              className="p-2 text-[#3A1D00] hover:opacity-70 transition-opacity rounded-full flex items-center justify-center"
              aria-label="Account"
            >
              <ShopifyUserIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            {/* Shopping Cart Icon with item counter */}
            <a
              href="#cart"
              className="relative p-2 text-[#3A1D00] hover:opacity-70 transition-opacity rounded-full flex items-center justify-center"
              aria-label="Shopping Cart"
            >
              <ShopifyCartIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              <span
                className="absolute top-0.5 right-0.5 min-w-[17px] h-[17px] px-1 bg-[#C0451B] text-white text-[10px] font-black rounded-full flex items-center justify-center font-display leading-none shadow-sm"
              >
                0
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1.5 -mr-1 rounded-lg hover:opacity-70 transition-opacity"
            aria-label="Open menu"
            type="button"
            style={{ color: "#3A1D00" }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M4 12h16M4 6h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Scalloped wave — cream bumps draping over the hero image */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          transform: "translateY(100%)",
          zIndex: 40,
          pointerEvents: "none",
          lineHeight: 0,
          overflow: "hidden",
        }}
      >
        <svg
          style={{
            display: "block",
            width: "100%",
            height: "clamp(18px, 2.4vw, 36px)",
            transform: "scaleY(-1)",
          }}
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 12 full bumps — scallop pattern */}
          <path
            d="M0,60 C30,60 30,0 60,0 C90,0 90,60 120,60 C150,60 150,0 180,0 C210,0 210,60 240,60 C270,60 270,0 300,0 C330,0 330,60 360,60 C390,60 390,0 420,0 C450,0 450,60 480,60 C510,60 510,0 540,0 C570,0 570,60 600,60 C630,60 630,0 660,0 C690,0 690,60 720,60 C750,60 750,0 780,0 C810,0 810,60 840,60 C870,60 870,0 900,0 C930,0 930,60 960,60 C990,60 990,0 1020,0 C1050,0 1050,60 1080,60 C1110,60 1110,0 1140,0 C1170,0 1170,60 1200,60 C1230,60 1230,0 1260,0 C1290,0 1290,60 1320,60 C1350,60 1350,0 1380,0 C1410,0 1410,60 1440,60 L1440,60 L0,60 Z"
            fill="#FFF0E2"
          />
        </svg>
      </div>
    </header>
  );
}
