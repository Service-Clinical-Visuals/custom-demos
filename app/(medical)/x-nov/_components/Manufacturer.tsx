"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Manufacturer() {
  return (
    <section className="relative py-16 md:py-20a overflow-hidden bg-[#ffebf3]">
      {/* Hexagon Pattern Overlay (CSS implementation) */}
      <div 
        className="absolute inset-0 opacity-40 z-0 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='103.923' viewBox='0 0 60 103.923' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 103.923L0 86.603V51.962l30-17.32 30 17.32v34.641L30 103.923zM30 0l30 17.32v34.641L30 69.282 0 51.962V17.32L30 0z' fill='%23ffd6e8' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 207.846px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#212121] mb-6 leading-tight tracking-tight">
            Manufacturer of hip and knee prostheses
          </h2>
          <p className="text-[#6D6B6B] font-light leading-relaxed text-[15px] md:text-[16px]">
            X.NOV is a French healthcare group specializing in hip and knee orthopaedic prostheses and surgical instrumentation, delivering innovative, reliable, and advanced solutions for healthcare professionals worldwide.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full aspect-video rounded-[32px] overflow-hidden shadow-2xl bg-white/50 border border-white/40 backdrop-blur-sm p-2">
            <div className="w-full h-full rounded-[24px] overflow-hidden relative">
              <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
