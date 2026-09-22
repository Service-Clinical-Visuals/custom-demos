"use client";

import React from "react";
import Button from "./Button";
import SectionBadge from "./SectionBadge";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function PrecisionLubrication() {
  return (
    <section
      id="precision-lubrication"
      className="relative w-full bg-[#353535] py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 flex items-center overflow-hidden"
    >
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-12 min-[3800px]:gap-20 w-full">
          {/* Left Column: Product Info & Features (40%) */}
          <div
            className="w-full xl:w-[calc(40%-1rem)] min-[3800px]:xl:w-[calc(40%-1.5rem)] flex flex-col items-start flex-shrink-0"
            data-aos="fade-right"
          >
            <SectionBadge text="Precision Lubrication" className="mb-3 min-[3800px]:mb-6" />

            <h2 className="text-[#F6F6F6] mb-5 min-[3800px]:mb-8">
              ORIGINAL SYPRIN Sewing Oil
            </h2>

            <p className="text-[#CACACA] mb-8 min-[3800px]:mb-12 w-full leading-relaxed">
              The oil remains thin at room temperature, flowing into the smallest
              crevices for precise lubrication. Its innovative dispensing tip enables
              accurate application, while the resin- and acid-free formula is made in
              Germany for professional use.
            </p>

            {/* Feature Cards */}
            <div className="w-full space-y-4 sm:space-y-5 min-[3800px]:space-y-8 mb-8 min-[3800px]:mb-12">
              {/* Feature 1 */}
              <div className="w-full bg-[#0D0D0D] border border-[#666666] rounded-[8px] p-4 sm:p-5 min-[3800px]:p-8 flex items-center gap-4 sm:gap-6 min-h-[110px] min-[3800px]:min-h-[160px]">
                <div className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] min-[3800px]:w-[120px] min-[3800px]:h-[120px] bg-[#A12624] rounded-full flex items-center justify-center flex-shrink-0 p-4">
                  <img
                    src="/moto/syprin/tick.png"
                    alt="Engine flow"
                    className="w-8 h-8 sm:w-10 sm:h-10 min-[3800px]:w-14 min-[3800px]:h-14 object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="!font-bold font-bold text-[#F6F6F6] mb-1 tracking-wide">
                    EXCELLENT FLOW PROPERTIES:
                  </h4>
                  <p className="text-[#CACACA] font-normal leading-relaxed">
                    The Oil remains thin, flowing into the smallest crevices for smooth and precise lubrication.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="w-full bg-[#0D0D0D] border border-[#666666] rounded-[8px] p-4 sm:p-5 min-[3800px]:p-8 flex items-center gap-4 sm:gap-6 min-h-[110px] min-[3800px]:min-h-[160px]">
                <div className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] min-[3800px]:w-[120px] min-[3800px]:h-[120px] bg-[#A12624] rounded-full flex items-center justify-center flex-shrink-0 p-4">
                  <img
                    src="/moto/syprin/tap.png"
                    alt="Precise application"
                    className="w-8 h-8 sm:w-10 sm:h-10 min-[3800px]:w-14 min-[3800px]:h-14 object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="!font-bold font-bold text-[#F6F6F6] mb-1 tracking-wide">
                    PRECISE APPLICATION:
                  </h4>
                  <p className="text-[#CACACA] font-normal leading-relaxed">
                    The innovative dispensing tip lubricants small parts with a resin - and acid-free formula.
                  </p>
                </div>
              </div>
            </div>

            <Button
              text="Explore More"
              href="#categories"
            />
          </div>

          {/* Right Column: 360° Video Box (60%, aspect-video like Deleo) */}
          <div
            className="w-full xl:w-[calc(60%-1rem)] min-[3800px]:xl:w-[calc(60%-1.5rem)] flex justify-center items-center flex-shrink-0"
            data-aos="fade-left"
          >
            <div className="w-full aspect-video bg-black rounded-[6px] shadow-2xl relative overflow-hidden flex items-center justify-center">
              <DynamicVideoPlayer
                type="360"
                className="absolute inset-0 w-full h-full object-cover rounded-[6px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
