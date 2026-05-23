"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Check } from "lucide-react";

const technologies = [
  "Delayed Fuel Injection To Increase The Temperature Of The Exhaust System",
  "One Or More Diesel Oxidation Catalysts To Work Alongside The DPF",
  "An Additive System Which Lowers The Temperature At Which Soot Combusts",
  "Exhaust Gas Recirculation Or Selective Catalyst Reduction Technologies",
  "Alternative Technologies Such As Microwave Or Heater Coils To Raise The Temperature Within The DPF"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-20">
          
          {/* Left Column: White Card with checklist */}
          <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-2xl border border-gray-100/60 flex flex-col justify-between">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#333333] font-oxanium mb-2">
                DPF Technologies
              </h3>
              <hr className="w-20 border-t-2 border-[#1B1537]/80 my-3" />
              
              <p className="text-[#6E777D] font-medium text-[16px] leading-relaxed mb-6 font-exo2">
                These Days, Most Diesel Vehicles Employ One Or More Different Built-In Systems To Treat Exhaust Emissions And Reduce The Levels Of Soot Being Emitted During Use. These Include:
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

          {/* Right Column: Dynamic Video Player aspect-video box */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative aspect-video">
            <DynamicVideoPlayer
              type="banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />

          </div>

        </div>

        {/* Bottom Section: DPF Maintenance & Repair block on dark background */}
        <div className="w-full flex flex-col items-center text-center mt-12 pb-16 relative">

          <h2 className="text-[26px] md:text-[28px] lg:text-[32px] font-bold text-white font-oxanium mb-2 relative z-10">
            DPF Maintenance And Repair
          </h2>
          
          {/* Centered line */}
          <div className="w-20 h-[1.5px] bg-white/80 mb-6 relative z-10"></div>

          {/* Centered copy */}
          <p className="text-white leading-relaxed font-exo2 font-medium max-w-6xl mx-auto mb-10 tracking-wide px-4 relative z-10">
            Maintain Your Vehicle's Performance And Emissions System With Proper Servicing, Quality Fuels, Correct Lubricants, And Recommended Driving Practices. Using High-Quality Replacement Parts, Correct Fittings, And Following Manufacturer Guidelines Helps Ensure Efficient DPF Regeneration, Improved Reliability, And Long-Lasting Engine Performance.
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
