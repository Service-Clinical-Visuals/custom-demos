"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

import "aos/dist/aos.css";

import { ChevronsRight } from "lucide-react";

const features = [
  "Built-in 7.5GB storage, which can store approx. 10 hours of video or 70k+ pictures",
  "24hr time and date display",
  "One-click button suitably placed on the ergonomic handle for photography and video recording",
  "Quick data transfer via USB",
  "The 2.0 megapixel, high resolution camera features a 50°–60° lens angle",
  // "Anti-fog camera lens",
  // "HDMI connectivity to external monitor or TV screen",
  // "The sterile, single-use blade simply slides and clips onto the Optima View system",
];


export default function TimescoFeatures() {

  return (
    <section className="w-full bg-[#edf4ee] py-24">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-stretch gap-12 px-8 lg:grid-cols-[1fr_1fr]">
        
        {/* LEFT FEATURE CARD */}
        <div
          data-aos="fade-right"
          className="
            rounded-[32px]
            border-2
            border-[#0c6b2f]
            bg-[#edf4ee]
            px-8
            py-8
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          "
        >
          <h2
            className="
              text-4xl
              font-semibold
              tracking-[-0.03em]
              text-[#0d4f20]
            "
          >
            Features
          </h2>

          <div className="mt-4 space-y-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <ChevronsRight
                  size={20}
                  className="
                    mt-[6px]
                    shrink-0
                    text-[#0a8d34]
                  "
                />

                <p
                  className="
                    text-[16px]
                    leading-[1.9]
                    text-[#4f4f4f]
                  "
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <div
          data-aos="fade-left"
          className="relative"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              bg-[#dedede]
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            "
          >
            <div className="relative aspect-video w-full">
              <DynamicVideoPlayer 
                type="360"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}