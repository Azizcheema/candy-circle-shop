import Image from "next/image";
import { InstagramIcon, TikTokIcon, FacebookIcon } from "../icons";

const navLinks = [
  { label: "Snack Boxes", href: "#products" },
  { label: "Chocolate Boxes", href: "#products" },
  { label: "Candy Mixes", href: "#products" },
  { label: "Why Candy Circle", href: "#why-candy-circle" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/candycircle", icon: InstagramIcon },
  { label: "TikTok", href: "https://tiktok.com/@candycircle", icon: TikTokIcon },
  { label: "Facebook", href: "https://facebook.com/candycircle", icon: FacebookIcon },
];

const legalLinks = [
  { label: "Terms of service", href: "#" },
  { label: "Privacy policy", href: "#" },
  { label: "Do not sell my personal information", href: "#" },
  { label: "Accessibility", href: "#" },
];

export function Footer() {
  return (
    <footer
      className="relative"
      id="footer"
      style={{ backgroundColor: "oklch(0.58 0.12 40)" }}
    >
      {/* Main footer content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16">
          {/* Left — Logo & Brand statement */}
          <div className="flex-shrink-0 flex flex-col items-start">
            <a
              href="#"
              aria-label="Candy Circle Home"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <Image
                src="/images/candy-circle/candy-circle-logo-white.png"
                alt="Candy Circle"
                width={260}
                height={136}
                className="h-14 md:h-20 w-auto object-contain brightness-125 contrast-125"
                unoptimized
              />
            </a>
            <p className="font-sans text-white/90 text-[18px] md:text-[20px] max-w-sm mt-4 leading-snug">
              Curated candy and snack gift boxes loaded with your favorite chocolates, sweets, and treats.
            </p>
          </div>

          {/* Right — Nav + Social */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16 lg:gap-24">
            {/* Nav links (+30% font size: ~18px-21px) */}
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-white text-[18px] md:text-[21px] font-medium hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:hi@candycircle.com"
                className="font-sans text-white text-[18px] md:text-[21px] font-medium hover:opacity-70 transition-opacity mt-2"
              >
                hi@candycircle.com
              </a>
            </nav>

            {/* Social links (+30% font size) */}
            <nav className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-sans text-white text-[18px] md:text-[21px] font-medium hover:opacity-70 transition-opacity"
                >
                  <link.icon className="w-5 h-5 md:w-6 md:h-6" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar (+30% font size: ~15px-18px) */}
      <div className="border-t border-white/20 px-6 md:px-12 py-5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-white/80 text-[15px] md:text-[18px]">
            © 2026 - Candy Circle
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-white/80 text-[15px] md:text-[18px] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
