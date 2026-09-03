"use client";
import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen  overflow-hidden bg-black flex flex-col justify-end">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover lg:object-fill"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 custom-container w-full pb-20 md:pb-32">
        <div className="max-w-[650px]" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-2xl md:text-3xl lg:text-[34px] !font-oxanium font-bold text-white leading-[1.3] tracking-wide ">
            German Adler provides reliable lubricant solutions for better
            performance and longer equipment life.
          </h1>
        </div>
      </div>
    </section>
  );
}
