"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Check } from "lucide-react";

const technologies = [
  "Delayed fuel injection to increase the temperature of the exhaust system",
  "One or more diesel oxidation catalysts to work alongside the DPF",
  "An additive system which lowers the temperature at which soot combusts",
  "Exhaust gas recirculation or selective catalyst reduction technologies",
];

export default function DpfTechnologies() {
  return (
    <section className="relative w-full overflow-hidden split-bg">
      {/* Full-width DPF background image overlay at the bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[60%] lg:h-[50%] bg-cover bg-center pointer-events-none z-0"
        style={{
          backgroundImage: `url('/bm-catalysts/images/dpf-bg.png')`,
        }}
      />
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-16">
        
        {/* Top Section: Split Row (Technologies Card vs video player) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: White Card with checklist */}
          <div 
            className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-2xl border border-gray-100/60 flex flex-col justify-between"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#333333] font-oxanium mb-2">
                DPF Technologies
              </h3>
              <hr className="w-20 border-t-2 border-[#1B1537]/80 my-3" />
              
              <p className="text-[#6E777D] font-medium text-[16px] leading-relaxed mb-6 font-exo2">
                These days, most diesel vehicles employ one or more different built-in systems to treat exhaust emissions and reduce the levels of soot being emitted during use. These include:
              </p>

              <ul className="space-y-4 font-exo2 font-medium">
                {technologies.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1B1537] flex items-center justify-center shrink-0 text-white shadow-sm mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-gray-600 text-[13.5px] lg:text-[15px] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Dynamic Video Player box with dynamic aspect ratio */}
          <div 
            className="rounded-[2.5rem] overflow-hidden shadow-2xl relative w-full"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="w-full h-auto object-contain block"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />

          </div>

        </div>

        {/* Bottom Section: DPF Maintenance & Repair block on dark background */}
        <div 
          className="w-full flex flex-col items-center text-center mt-12 pb-16 relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >

          <h2 className="text-[26px] md:text-[28px] lg:text-[32px] font-bold text-white font-oxanium mb-2 relative z-10">
            DPF Maintenance And Repair
          </h2>
          
          {/* Centered line */}
          <div className="w-20 h-[1.5px] bg-white/80 mb-6 relative z-10"></div>

          {/* Centered copy */}
          <p className="text-white leading-relaxed font-exo2 font-medium max-w-6xl mx-auto mb-10 tracking-wide px-4 relative z-10">
            Maintain your vehicle's performance and emissions system with proper servicing, quality fuels, correct lubricants, and recommended driving practices. Using high-quality replacement parts, correct fittings, and following manufacturer guidelines helps ensure efficient DPF regeneration, improved reliability, and long-lasting engine performance.
          </p>

          {/* Centered Button */}
          <div className="pt-2 relative z-10">
            <Button
              href="#products"
              variant="white"
              size="md"
              rounded="full"
              hasArrow
              className="px-10 shadow-xl font-bold hover:bg-white/95"
            >
              See Product Details
            </Button>
          </div>

        </div>

      </div>

      <style jsx>{`
        .split-bg {
          background: linear-gradient(to bottom, #ffffff 40%, #1B1537 40%);
        }
        @media (min-width: 1024px) {
          .split-bg {
            background: linear-gradient(to bottom, #ffffff 50%, #1B1537 50%);
          }
        }
      `}</style>
    </section>
  );
}
