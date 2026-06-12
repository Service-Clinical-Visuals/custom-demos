"use client";

import React, { useState } from "react";
import Link from "next/image"; // Wait, we should import standard Link from "next/link" for anchor elements
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ambulatoryInfusionContent } from "../data/content";
import { AmbulatoryInfusionData, AmbulatoryProduct } from "../types";
import NextLink from "next/link"; // Use NextLink for navigation to prevent conflicts

interface AmbulatoryInfusionProps {
  data?: AmbulatoryInfusionData;
}

export default function AmbulatoryInfusion({ data = ambulatoryInfusionContent }: AmbulatoryInfusionProps) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  // Map tab index to categories
  // tabIndex 0 -> pumps, tabIndex 1 -> sets, tabIndex 2 -> syringe, tabIndex 3 -> all
  const getFilteredProducts = () => {
    switch (activeTabIdx) {
      case 0:
        return data.products.filter((p) => p.category === "pumps");
      case 1:
        return data.products.filter((p) => p.category === "sets");
      case 2:
        return data.products.filter((p) => p.category === "syringe");
      case 3:
      default:
        return data.products; // Show all products
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section id="products" className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: "#EAF7FF5C" }}>
      <div className="container mx-auto px-4">

        {/* Header Block (Centered) */}
        <div className="text-center mb-10 space-y-4" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-primary tracking-tight">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base text-secondary leading-relaxed font-medium max-w-6xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Navigation Tabs (Centered Pills) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 pb-2" data-aos="fade-up">
          {data.tabLabels.map((label, idx) => {
            const isActive = idx === activeTabIdx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTabIdx(idx)}
                className={`py-2.5 px-6 rounded-[8px]  font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 ${isActive
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-secondary border border-slate-200 hover:bg-slate-50 hover:text-primary"
                  }`}
                style={{ minHeight: "40px" }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" data-aos="fade-up" data-aos-delay="100">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden  shadow-md p-5 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 h-full"
            >
              {/* Product Image Wrapper */}
              <div className="relative w-full aspect-[1.4/1] rounded-2xl  overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 25vw"
                  className="object-contain p-2 transition-transform duration-500 bg-transparent group-hover:scale-105"
                  unoptimized
                />
              </div>

              {/* Product Details Content */}
              <div className="flex-1 flex flex-col justify-between mt-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-primary text-base sm:text-lg group-hover:text-primary-hover transition-colors duration-200 leading-snug line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed font-medium line-clamp-3 mb-4">
                    {product.description}
                  </p>
                </div>
                <div className="w-full h-[1px] bg-[#E5E7EB] my-4" />

                <div className="pt-2">
                  <NextLink
                    href={product.linkHref}
                    className="inline-flex items-center gap-2 group/link"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover/link:text-primary transition-colors duration-200">
                      Read More
                    </span>
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                      <ArrowUpRight size={12} className="stroke-[3]" />
                    </div>
                  </NextLink>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Slide Pagination Indicator */}
        <div className="flex justify-center items-center gap-3 mt-12" data-aos="fade-up">
          <span className="w-12 h-1 bg-primary rounded-full" />
          <span className="w-12 h-1 bg-primary/20 rounded-full" />
        </div>

      </div>
    </section>
  );
}
