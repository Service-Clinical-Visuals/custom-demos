"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight, Check } from "lucide-react";

const features = [
  "Manufactured from high-quality stainless steel alloys",
  "Specifically designed for the treatment of femoral neck fractures",
  "Bipolar design with dual centers of rotation supports smooth and natural movement",
  "Self-centering mechanism helps maximize implant stability and performance",
  "Large contact area and polished surface helps fully protect from wear and contact damage",
];

export default function HighPerformanceSection() {
  return (
    <section className="py-24 bg-[#E8F7F6]">
      <div className="max-w-[1560px] 2xl:max-w-[80%] mx-auto px-6">
        <div className="grid lg:grid-cols-[48%_48%] gap-[4%] items-center">

          {/* LEFT: Content */}
          <div data-aos="fade-right">
            <h2 className="text-[38px] font-bold text-[#222222] leading-[1.2]">
              Bipolar Head
            </h2>
            <p className="mt-4 text-[16px] leading-[26px] text-[#555555]">
              The Bipolar Head is particularly suitable for the treatment of femoral neck fractures
              and functions as a direct sliding partner with the acetabulum. The principle of the
              bipolar head with different centres of rotation for the head and the outer shell has
              been established for years as the standard in the treatment of femoral neck fractures.
            </p>
            <ul className="mt-6 space-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#099F94] flex items-center justify-center mt-0.5">
                    <Check size={11} color="white" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] text-[#444444] leading-[24px]">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 h-[48px] px-8 rounded-full bg-[#099F94] text-white font-semibold flex items-center gap-2 hover:bg-[#07877e] hover:scale-105 transition-all duration-300 shadow-md">
              Explore Features
              <ArrowRight size={18} />
            </button>
          </div>

          {/* RIGHT: 360 Video */}
          <div
            data-aos="fade-left"
            className="bg-white rounded-[24px] shadow-lg overflow-hidden relative"
            style={{ aspectRatio: "4/3" }}
          >
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}
