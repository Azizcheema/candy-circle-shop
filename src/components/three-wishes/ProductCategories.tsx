"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StarFourPoint, SparkleIcon } from "../icons";

interface ProductItem {
  id: string;
  tileColor: string;
  image: string;
  alt: string;
  ratingText: string;
  eyebrow: string;
  title: string;
  desc: string;
  originalPrice: string;
  salePrice: string;
}

const products: ProductItem[] = [
  {
    id: "schoko-traum",
    tileColor: "#F9E1DC", // Soft blush rose-peach matching the red Schoko Traum box
    image: "/images/candy-circle/box-closed-red.png",
    alt: "Candy Circle Schoko Traum, 45 Stück Premium Box",
    ratingText: "(261 REVIEWS)",
    eyebrow: "Chocolate Box",
    title: "Schoko Traum",
    desc: "45 Kinder & hazelnut treats",
    originalPrice: "$21.99 USD",
    salePrice: "$14.99 USD",
  },
  {
    id: "gute-laune",
    tileColor: "#DCF0E4", // Soft sage-mint matching the green Gute Laune Box
    image: "/images/candy-circle/box-closed-green.png",
    alt: "Candy Circle Gute Laune Box, 150 Stück Premium Candy Mix",
    ratingText: "(342 REVIEWS)",
    eyebrow: "Candy Mix Box",
    title: "Gute Laune Box",
    desc: "150 Haribo, Milka & fruit chews",
    originalPrice: "$29.99 USD",
    salePrice: "$22.99 USD",
  },
  {
    id: "happy-party",
    tileColor: "#E1EFF7", // Soft pastel sky blue matching the box artwork & contrasting the white box
    image: "/images/candy-circle/box-closed-white.png",
    alt: "Candy Circle Happy Party Box, 130 Stück Nostalgic Sweets",
    ratingText: "(198 REVIEWS)",
    eyebrow: "Party & Retro Box",
    title: "Happy Party Box",
    desc: "130 nostalgic sweets & lollipops",
    originalPrice: "$27.99 USD",
    salePrice: "$19.99 USD",
  },
];

export function ProductCategories() {
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAddToCart = (id: string) => {
    setAddedId(id);
    setTimeout(() => {
      setAddedId(null);
    }, 2000);
  };

  return (
    <section className="relative bg-[#FFF0E2] py-14 md:py-24" id="products">
      <style>{`
        .shelf {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 44px;
          padding: 0 20px;
        }

        /* ---------- image tile ---------- */
        .card {
          display: flex;
          flex-direction: column;
        }

        .tile {
          position: relative;
          aspect-ratio: 625/792;
          border-radius: 22px;
          background: var(--tile);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 4px 18px -4px rgba(51, 23, 10, 0.08);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .card:hover .tile {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px -4px rgba(51, 23, 10, 0.14);
        }

        /* drop your product photo in here */
        .tile .shot {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 72px 24px 28px;
          transition: transform 0.32s ease;
          pointer-events: none;
        }

        .tile .shot[src=""],
        .tile .shot:not([src]) {
          display: none;
        }

        .card:hover .shot {
          transform: scale(1.05);
        }

        .rating {
          position: relative;
          z-index: 2;
          margin-top: 33px;
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .stars svg {
          width: 23px;
          height: 23px;
          display: block;
        }

        .rating span {
          font-family: "ITC Souvenir Std", Georgia, Cambria, serif;
          font-size: 15.5px;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #231107;
        }

        /* ---------- text block ---------- */
        .eyebrow {
          margin: 22px 0 0;
          font-family: "ITC Souvenir Std", Georgia, Cambria, serif;
          font-size: 16.5px;
          font-weight: 800;
          color: #33170A;
          letter-spacing: 0.01em;
        }

        .title {
          margin: 5px 0 0;
          font-family: "ITC Souvenir Std", Georgia, Cambria, serif;
          font-size: 29px;
          font-weight: 800;
          line-height: 1.06;
          letter-spacing: 0.005em;
          text-transform: uppercase;
          font-stretch: 92%;
          color: #33170A;
        }

        .desc {
          margin: 11px 0 0;
          font-family: "ITC Souvenir Std", Georgia, Cambria, serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.015em;
          text-transform: uppercase;
          color: rgba(51, 23, 10, 0.85);
        }

        .cta {
          margin-top: 20px;
          width: 100%;
          height: 50px;
          border: 0;
          border-radius: 999px;
          background: #C0451B;
          color: #fff;
          font-family: "ITC Souvenir Std", Georgia, Cambria, serif;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.34em;
          transition: background 0.15s ease, transform 0.15s ease;
        }

        .cta s {
          opacity: 0.92;
        }

        .cta:hover {
          background: #A63A15;
          transform: translateY(-1px);
        }

        .cta:active {
          transform: translateY(0);
        }

        .cta:focus-visible {
          outline: 3px solid #33170A;
          outline-offset: 3px;
        }

        @media (prefers-reduced-motion: reduce) {
          .cta, .tile, .shot {
            transition: none;
          }
        }

        @media (max-width: 900px) {
          .shelf {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }

        @media (max-width: 600px) {
          .shelf {
            grid-template-columns: 1fr;
            gap: 36px;
            max-width: 380px;
          }
          .title {
            font-size: 26px;
          }
          .cta {
            font-size: 15px;
            height: 46px;
          }
        }
      `}</style>

      {/* Heading with star decorations */}
      <div className="text-center mb-12 md:mb-16 px-6">
        <div className="flex items-center justify-center gap-3 md:gap-5 mb-2">
          <StarFourPoint className="text-sunshine-yellow w-5 h-5 md:w-7 md:h-7 animate-float" />
          <h2 className="font-display font-black text-chocolate text-3xl md:text-5xl lg:text-6xl tracking-tight">
            Explore Our Snack Boxes
          </h2>
          <SparkleIcon className="text-sky-blue w-5 h-5 md:w-7 md:h-7 animate-float-delayed" />
        </div>
        <p className="font-sans text-chocolate/80 text-base md:text-lg max-w-xl mx-auto">
          Hand-packed gift boxes overflowing with top brand chocolates, candies, and sweet surprises.
        </p>
      </div>

      {/* Shelf Grid */}
      <div className="shelf">
        {products.map((product) => (
          <article className="card" key={product.id}>
            <div
              className="tile"
              style={{ ["--tile" as string]: product.tileColor }}
            >
              {/* Product Photo */}
              <Image
                className="shot"
                src={product.image}
                alt={product.alt}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                unoptimized
              />

              {/* Rating */}
              <div className="rating">
                <div className="stars" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="#231107"
                      d="M12 2.2l2.95 6.3 6.85.83-5.05 4.72 1.35 6.75L12 17.4l-6.1 3.4 1.35-6.75L2.2 9.33l6.85-.83z"
                    />
                  </svg>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="#231107"
                      d="M12 2.2l2.95 6.3 6.85.83-5.05 4.72 1.35 6.75L12 17.4l-6.1 3.4 1.35-6.75L2.2 9.33l6.85-.83z"
                    />
                  </svg>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="#231107"
                      d="M12 2.2l2.95 6.3 6.85.83-5.05 4.72 1.35 6.75L12 17.4l-6.1 3.4 1.35-6.75L2.2 9.33l6.85-.83z"
                    />
                  </svg>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="#231107"
                      d="M12 2.2l2.95 6.3 6.85.83-5.05 4.72 1.35 6.75L12 17.4l-6.1 3.4 1.35-6.75L2.2 9.33l6.85-.83z"
                    />
                  </svg>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="#231107"
                      clipPath="inset(0 50% 0 0)"
                      d="M12 2.2l2.95 6.3 6.85.83-5.05 4.72 1.35 6.75L12 17.4l-6.1 3.4 1.35-6.75L2.2 9.33l6.85-.83z"
                    />
                    <path
                      fill="none"
                      stroke="#231107"
                      strokeWidth="1.6"
                      d="M12 2.2l2.95 6.3 6.85.83-5.05 4.72 1.35 6.75L12 17.4l-6.1 3.4 1.35-6.75L2.2 9.33l6.85-.83z"
                    />
                  </svg>
                </div>
                <span>{product.ratingText}</span>
              </div>
            </div>

            {/* Text block */}
            <p className="eyebrow">{product.eyebrow}</p>
            <h3 className="title">{product.title}</h3>
            <p className="desc">{product.desc}</p>
            <button
              type="button"
              className="cta"
              onClick={() => handleAddToCart(product.id)}
            >
              {addedId === product.id ? (
                <span>✓ Added to cart!</span>
              ) : (
                <>
                  Add to cart – <s>{product.originalPrice}</s> {product.salePrice}
                </>
              )}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
