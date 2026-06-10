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
      <div className="mx-auto grid max-w-[1550px] grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

        {/* Specs left */}
        <div data-aos="fade-right" data-aos-duration="1000">
          <span className="content flex max-w-[300px] justify-center items-center rounded-full border bg-[#FD423926] border-[#FF4A43] px-4 py-1 text-[black] uppercase tracking-wider">
            <><Dot /> Technical Overview</>
          </span>

          <h2 className="mt-4 text-[38px] font-bold leading-tight text-[#1A1A1A]">
            Performance Specifications
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-8">
            {specs.map((s, i) => {
              const isRed = (i % 2 + Math.floor(i / 2)) % 2 === 0;
              return isRed ? (
                <div
                  key={i}
                  className="flex items-center justify-center bg-[#FF4A43] px-6 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:brightness-110"
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
                  className="flex items-center justify-center bg-white px-6 py-4 text-[15px] font-semibold text-[#1A1A1A] border border-gray-200"
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
          className="relative aspect-video w-full overflow-hidden bg-[repeating-conic-gradient(#D4D4D4_0%_25%,#EAEAEA_0%_50%)] bg-[length:32px_32px]"
        >
          <DynamicVideoPlayer
            type="short-1"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="text-[32px] font-black text-white/30 select-none">Video 01</span>
          </div>
        </div>
      </div>
    </section>
  );
}
