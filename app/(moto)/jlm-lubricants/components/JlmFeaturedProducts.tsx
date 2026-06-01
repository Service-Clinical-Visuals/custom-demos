"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import ProductCard from "./JlmProductCard";

const VISIBLE = 3;

export default function JlmFeaturedProducts() {
  const [startIndex, setStartIndex] = useState(0);

  const products = [
    { title: "JLM 5W30 Premium Grade Performance Oil", image: "/jlm/jlm-engine-1.png" },
    { title: "JLM 5W40 Premium Grade Performance Oil", image: "/jlm/jlm-engine-2.png" },
    { title: "JLM Automatic Transmission Fluid ATF Stop Leak & Conditioner ", image: "/jlm/jlm-engine-3.png" },
    { title: "JLM Automatic Transmission Flush", image: "/jlm/jlm-engine-4.png" },
    { title: "JLM Bortec Oil Additive – Engine Friction Reduction", image: "/jlm/jlm-engine-5.png" },
    { title: "JLM Ceramic Engine Protector", image: "/jlm/jlm-engine-6.png" },
  ];

  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE < products.length;
  const visible = products.slice(startIndex, startIndex + VISIBLE);

  return (
    <section className="bg-[#F5F5F5] py-14">
      <div className="mx-auto max-w-[1600px] px-6">
        {/* Header */}
        <div data-aos="fade-up" className="flex items-center justify-between">
          <h2 className="text-4xl font-bold text-[#161616]">
            Our Products
          </h2>

          <button
            className="
              cursor-pointer flex items-center gap-3
              rounded-full bg-[#F4B400] px-5 py-2.5
              text-[16px] text-white transition-all duration-300 hover:scale-105 font-medium
            "
          >
            View All Products
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
              <ArrowUpRight size={14} className="text-black" />
            </span>
          </button>
        </div>

        <div className="mt-5 h-px bg-black/15" />

        {/* Products with side arrows */}
        <div className="relative mt-10">
          {/* Left arrow */}
          <button
            onClick={() => setStartIndex((i) => i - 1)}
            disabled={!canPrev}
            className="
              cursor-pointer absolute -left-5 top-1/2 z-10 -translate-y-1/2
              flex h-11 w-11 items-center justify-center
              rounded-full bg-white shadow-md
              text-[#161616] transition-all duration-200
              hover:bg-[#F4B400] hover:text-white hover:shadow-lg
              disabled:opacity-0 disabled:pointer-events-none
            "
          >
            <ArrowLeft size={20} />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => setStartIndex((i) => i + 1)}
            disabled={!canNext}
            className="
              cursor-pointer absolute -right-5 top-1/2 z-10 -translate-y-1/2
              flex h-11 w-11 items-center justify-center
              rounded-full bg-white shadow-md
              text-[#161616] transition-all duration-200
              hover:bg-[#F4B400] hover:text-white hover:shadow-lg
              disabled:opacity-0 disabled:pointer-events-none
            "
          >
            <ArrowRight size={20} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${startIndex * (100 / VISIBLE)}%)` }}
            >
              {products.map((item) => (
                <div key={item.title} className="w-1/3 shrink-0 px-4">
                  <ProductCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        {/* <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: products.length - VISIBLE + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                i === startIndex ? "w-6 bg-[#F4B400]" : "w-2 bg-black/20"
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}