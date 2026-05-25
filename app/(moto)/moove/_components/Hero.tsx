"use client";
import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[var(--moove-dark-blue)] overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer type="banner" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="max-w-2xl text-white pt-24 sm:pt-28 md:pt-[17%]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px]! font-bold mb-4 tracking-tight">
            We are Moove™
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-[30px]! font-bold italic mb-6">
            A Global Lubricants Solutions Company.
          </h2>
          <p className="text-sm sm:text-base md:text-[16px] max-w-xl leading-relaxed">
            We produce, sell and distribute lubricants and greases for the automotive and industrial segments ensuring productivity, efficiency and performance.
          </p>
        </div>
      </div>
    </section>
  );
}
