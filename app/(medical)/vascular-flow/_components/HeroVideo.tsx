"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
      {/* Background Video / Image Placement */}
      <div className="absolute inset-0 z-0 select-none">
        <DynamicVideoPlayer 
          type="banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-80" 
        />
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32">
        <div 
          className="max-w-3xl text-left" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <h1 className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-white leading-[1.4] tracking-tight mb-8">
            Talk to us, We will listen, <br />
            We will help
          </h1>
          
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button href="#about" variant="outline">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
