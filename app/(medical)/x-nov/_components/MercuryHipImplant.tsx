"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";

export default function MercuryHipImplant() {
  return (
    <section className="py-16 md:py-20 bg-[url('/x-nov/mercury-bg.png')] relative overflow-hidden">
      {/* Optional subtle background pattern can be added here */}
      
      <div className="custom-container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column */}
          <div className="flex flex-col" data-aos="fade-right">
            {/* Subhead label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#EC4899] font-semibold text-sm md:text-[15px] xl:text-[17px] tracking-wider">
                Mercury
              </span>
              <span className="h-[2px] w-12 bg-[#EC4899] rounded-full"></span>
            </div>

            {/* Main Title */}
            <h2 className="text-[26px] md:text-[28px] lg:text-[32px] font-semibold text-[#212121] mb-6 leading-tight tracking-tight">
              The Mercury Hip Implant
            </h2>

            {/* Description */}
            <p className="text-[#6D6B6B] font-light leading-relaxed text-[15px] md:text-[16px] mb-10">
              The MERCURY® range consists of advanced acetabular cups with dual mobility inserts, specially designed for primary and revision hip replacement procedures. Developed to restore the natural function and stability of the hip joint, the system helps improve patient mobility, comfort, and long-term performance. Its innovative dual mobility design reduces the risk of dislocation while providing enhanced range of motion and durability for orthopaedic applications.
            </p>

            {/* Video Player */}
            <div className="w-full aspect-video rounded-[24px] overflow-hidden shadow-lg bg-white/50 border border-white/20">
              <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col h-full lg:pt-0 pt-8" data-aos="fade-left">
            {/* Pink Bordered Card */}
            <div className="border border-[#EC4899]/30 rounded-[24px] p-8 md:p-10 flex-grow flex flex-col bg-white/30 backdrop-blur-sm">
              <h3 className="text-[#EC4899] text-[20px] font-semibold text-center mb-8 underline decoration-2 underline-offset-4">
                The range:
              </h3>

              <div className="flex flex-col gap-5 flex-grow">
                {/* Range Item 1 */}
                <div className="bg-white rounded-[16px] p-6 shadow-sm shadow-pink-100/50 flex items-start gap-4">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EC4899] flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[14px] text-[#6D6B6B] font-normal leading-relaxed">
                    The MERCURY® range includes MERCURY® PRESS-FIT, MERCURY® PRESS-FIT PLUS, and MERCURY® À CIMITER solutions designed for reliable hip replacement performance.
                  </p>
                </div>

                {/* Range Item 2 */}
                <div className="bg-white rounded-[16px] p-6 shadow-sm shadow-pink-100/50 flex items-start gap-4">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EC4899] flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[14px] text-[#6D6B6B] font-normal leading-relaxed">
                    Available in up to 12 different sizes depending on the selected version, ensuring better anatomical compatibility and surgical flexibility for diverse patient needs.
                  </p>
                </div>

                {/* Range Item 3 */}
                <div className="bg-white rounded-[16px] p-6 shadow-sm shadow-pink-100/50 flex items-start gap-4">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EC4899] flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[14px] text-[#6D6B6B] font-normal leading-relaxed">
                    Compatible with stainless steel heads from Ø22.2 mm to Ø28 mm and Ø28 mm ceramic heads for smooth articulation and long-term durability in orthopaedic applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Explore Specifications Button */}
            <div className="mt-8 flex justify-start lg:ml-8">
              <Button>
                Explore Specifications
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
