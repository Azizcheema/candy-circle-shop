import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Candy Circle – Candy, Chocolate & Snack Gift Boxes",
  description:
    "Candy Circle delivers premium curated candy and snack gift boxes loaded with favorite chocolates, gummy candies, and sweet treats. Perfect for gifts, parties, and sweet cravings.",
  openGraph: {
    title: "Candy Circle – Candy, Chocolate & Snack Gift Boxes",
    description:
      "Curated candy and snack boxes loaded with Kinder, Haribo, Milka, retro sweets, and chocolates.",
    type: "website",
    url: "https://candycircle.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Candy Circle – Candy, Chocolate & Snack Gift Boxes",
    description:
      "Curated candy and snack boxes loaded with Kinder, Haribo, Milka, retro sweets, and chocolates.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased font-sans">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
