"use client";

import React from "react";
import Button from "./Button";
import SectionBadge from "./SectionBadge";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function BicycleChainOil() {
  return (
    <section className="relative w-full bg-[#353535] py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 flex flex-col justify-center overflow-hidden">
      {/* Background Graphic Image bg2.png without dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/moto/syprin/bg2.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="custom-container relative z-10">
        <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-12 min-[3800px]:gap-20 w-full">
          {/* Left Column: Product Information (40%) */}
          <div className="w-full xl:w-[calc(40%-1rem)] min-[3800px]:xl:w-[calc(40%-1.5rem)] flex flex-col items-start flex-shrink-0" data-aos="fade-right">
            <SectionBadge text="Original Syprin" className="mb-3 min-[3800px]:mb-6" />

            <h2 className="text-[#F6F6F6] mb-6 min-[3800px]:mb-10">
              ORIGINAL SYPRIN Bicycle Chain Oil
            </h2>

            <div className="space-y-4 min-[3800px]:space-y-6 text-[#CACACA] mb-8 min-[3800px]:mb-12 leading-relaxed">
              <p>
                ORIGINAL SYPRIN Bicycle Chain Oil provides high-performance
                lubrication and long-lasting protection in all weather conditions.
                Specially developed for mountain bikes, e-bikes, road bikes, and
                e-scooters, its advanced formula helps keep chains running smoothly
                while protecting against drying, friction, wear, and corrosion. The
                oil is easy to apply and supports reliable performance even during
                demanding rides and changing weather conditions.
              </p>

              <p>
                Manufactured 100% in Germany, the premium waterproof formula
                delivers excellent lubrication and durable chain protection. It helps
                reduce friction, maintain smooth gear changes, protect against rust
                and corrosion, and support the efficient operation of moving parts.
                ORIGINAL SYPRIN Bicycle Chain Oil provides long-lasting protection
                for smooth, reliable rides.
              </p>
            </div>

            <Button
              text="Know More"
              href="#categories"
            />
          </div>

          {/* Right Column: VIDEO 02 Box (60%, aspect-video like Deleo) */}
          <div className="w-full xl:w-[calc(60%-1rem)] min-[3800px]:xl:w-[calc(60%-1.5rem)] flex justify-center items-center flex-shrink-0" data-aos="fade-left">
            <div className="w-full aspect-video bg-black rounded-[6px] shadow-2xl relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center font-['Fraunces'] font-[600] text-[32px] min-[3800px]:text-[64px] leading-[150%] text-white/30 select-none pointer-events-none">
                VIDEO 02
              </div>
              <DynamicVideoPlayer
                type="short-2"
                className="absolute inset-0 w-full h-full object-cover rounded-[6px] relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
