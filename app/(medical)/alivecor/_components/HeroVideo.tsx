"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-end pb-16 md:pb-24">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 lg:px-12 relative z-10 w-full">
        {/* Left side text content aligned to bottom */}
        <div className="flex flex-col items-start text-white! max-w-[600px]" data-aos="fade-up" data-aos-delay="200">
          <h1 className="font-serif text-[32px] md:text-[42px] lg:text-[48px] font-bold leading-tight mb-4 text-white!">
            Transform Your Practice
          </h1>
          
          <p className="font-sans text-[15px] md:text-[16px] leading-relaxed mb-8 text-white!">
            For healthcare professionals, we provide deep, real-time analysis 
            of heart rhythm data that seamlessly connects our technology to 
            existing workflows.
          </p>
          
          <Button variant="outline" size="sm">
            Explore Alivecor
          </Button>
        </div>
      </div>
    </section>
  );
}
