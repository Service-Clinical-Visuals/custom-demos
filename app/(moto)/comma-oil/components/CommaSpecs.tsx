"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Dot } from "lucide-react";

const specs = [
  { label: "Viscosity CCS @ -30°C (cP): 6000 cP", active: true },
  { label: "Viscosity CCS @ -30°C (cP): 6000 cP", active: false },
  { label: "Phosphorus (%): 0.08 %", active: false },
  { label: "Viscosity @ 100°C (cSt): 12.1 cSt", active: true },
  { label: "Sulphated Ash Mass (%): 0.8 %", active: true },
  { label: "Density @ 20°C: 0.849 g/cm3", active: false },
];

export default function CommaSpecs() {
  return (
    <section className="bg-[#FFECEC] py-20">
      <div className="mx-auto grid max-w-[90%] grid-cols-1 gap-8 2xl:grid-cols-[50fr_50fr] lg:items-center">

        {/* Specs left */}
        <div data-aos="fade-right" data-aos-duration="1000" className="flex justify-center flex-col items-center 2xl:items-start">
          <span className="content max-w-[330px] justify-center font-semibold flex flex-row items-center rounded-full border bg-[#FD423926] border-[#FF4A43] px-2 py-1 text-[black] tracking-wider">
            <><Dot /> Technical Overview</>
          </span>

          <h2 className="mt-4 text-[48px] font-normal leading-tight text-[#1A1A1A]">
            Performance Specifications
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-[400px_400px] gap-[22px] justify-center">
            {specs.map((s, i) => {
              const isRed = (i % 2 + Math.floor(i / 2)) % 2 === 0;
              return isRed ? (
                <div
                  key={i}
                  className="flex items-center min-w-[380px] max-w-[400px] min-h-[80px] max-h-[86px] justify-center bg-[#FF4A43] text-[18px] font-medium text-white"
                  style={{
                    clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
                    letterSpacing: "0.3px",
                  }}
                >
                  {s.label}
                </div>
              ) : (
                <div
                  key={i}
                  className="flex items-center min-w-[380px] max-w-[400px] min-h-[80px] max-h-[86px]  justify-center bg-white text-[18px] font-medium text-[#1A1A1A] border border-gray-200"
                  style={{
                    clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
                    letterSpacing: "0.3px",
                  }}
                >
                  {s.label}
                </div>
              );
            })}
          </div>
        </div>

        {/* Video right — placeholder */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="relative aspect-video w-full overflow-hidden w-[840px]"
        >
          <DynamicVideoPlayer
            type="short-1"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
