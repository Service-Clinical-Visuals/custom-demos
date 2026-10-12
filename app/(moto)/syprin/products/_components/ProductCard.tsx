"use client";

import React from "react";
import Link from "next/link";
import { type Product, formatPrice } from "./products";

interface ProductCardProps {
  product: Product;
  layout?: "grid" | "list";
}

export default function ProductCard({ product, layout = "grid" }: ProductCardProps) {
  const isList = layout === "list";

  return (
    <article
      className={`group relative bg-primary rounded-[4px] min-[3800px]:rounded-[8px] p-3 md:p-3.5 min-[2500px]:p-6 shadow-[0_6px_20px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.5)] transition-all duration-300 flex ${
        isList ? "flex-col sm:flex-row gap-4 sm:gap-6 min-[2500px]:gap-10" : "flex-col"
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-[4px] min-[3800px]:rounded-[8px] aspect-[350/260] bg-[#1d2a44] flex-shrink-0 ${
          isList ? "w-full sm:w-[38%] desk:w-[32%]" : "w-full"
        }`}
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className={`flex flex-col flex-1 ${isList ? "sm:py-2" : "pt-4 md:pt-5 min-[2500px]:pt-8"}`}>
        <span className="card-meta text-[#A8A8A8]">{product.category}</span>
        <h3 className="text-[#F6F6F6] mt-1.5 min-[2500px]:mt-3">
          {/* Stretched link: its ::after covers the whole card, so clicking anywhere opens the details page */}
          <Link href="/syprin/product-details" className="after:absolute after:inset-0 after:content-[''] hover:text-white">
            {product.title}
          </Link>
        </h3>
        <p className="card-desc text-[#CACACA] mt-2 min-[2500px]:mt-4">
          {product.volume ? `${product.volume} ml • ` : ""}
          {product.description}
        </p>

        <div className="mt-auto pt-4 min-[2500px]:pt-7">
          <div className="border-t border-dashed border-white/30 pt-3.5 min-[2500px]:pt-6 flex items-center justify-between gap-3">
            <span className="card-price text-[#F6F6F6]">{formatPrice(product.price)}</span>
            <button
              type="button"
              className="button relative z-10 bg-accent hover:bg-accent-hover text-white rounded-[3px] min-[3800px]:rounded-[6px] px-4 py-1 md:px-5 min-[2500px]:px-8 min-[2500px]:py-2.5 transition-colors active:scale-95"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
