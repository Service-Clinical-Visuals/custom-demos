"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Manufacturer() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-[url('/x-nov/manufacturer-bg.png')]">

      <div className="custom-container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12" data-aos="fade-up">
          {/* Subhead label */}
          {/* <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#EC4899] font-semibold text-sm md:text-[15px] tracking-wider">
              Expertise
            </span>
            <span className="h-[2px] w-12 bg-[#EC4899] rounded-full"></span>
          </div> */}

          <h2 className="text-[26px] md:text-[28px] lg:text-[32px] font-semibold text-[#212121] mb-6 leading-tight tracking-tight">
            Manufacturer of hip and knee prostheses
          </h2>
          <p className="text-[#6D6B6B] font-light leading-relaxed text-[15px] md:text-[16px]">
            X.NOV is a French healthcare group specializing in hip and knee orthopaedic prostheses and surgical instrumentation, delivering innovative, reliable, and advanced solutions for healthcare professionals worldwide.
          </p>
        </div>

        <div className="w-full max-w-6xl 2xl:max-w-[70%] mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full aspect-video rounded-[26px] overflow-hidden shadow-2xl bg-white/50 border border-white/40 backdrop-blur-sm p-1">
            <div className="w-full h-full rounded-[20px] overflow-hidden relative">
              <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
