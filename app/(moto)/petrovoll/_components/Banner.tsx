"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen  overflow-hidden  flex items-end petrovoll-banner-font">
      {/* Background Video / Fallback Overlay */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
       
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 custom-container w-full py-4 sm:py-8 md:py-16 mb-2 sm:mb-6 md:mb-12">
        <div className="flex flex-col items-start gap-3 sm:gap-6 md:gap-8" data-aos="fade-right">
          {/* Main Title */}
          <h2 className="text-white text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-oswald! font-bold leading-[1.3] tracking-wide uppercase">
            Advanced high performance lubricants <br className="hidden md:inline" />
            for automotive
          </h2>

          {/* Slanted Button */}
          <div className="mt-1 sm:mt-2">          
              <Button
              text="Read More"
              variant="white-slanted"
              href="#about"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
