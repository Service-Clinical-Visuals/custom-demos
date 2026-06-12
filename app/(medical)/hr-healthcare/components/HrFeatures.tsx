// components/ProductFeatureSection.tsx

"use client";

import { Check } from "lucide-react";


import "aos/dist/aos.css";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const features = [
  "Large inner drainage lumen allows for a higher flow rate compared to latex.",
  "Smooth balloon without any ridges at the edges for ease of insertion.",
  "Radiopaque strip for easy x-ray visualization.",
  "Balloons are pretested and inspected for integrity and position verification to support upright position in the bladder",
];

export default function HrFeatures() {


  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-16">
      {/* CONTAINER */}
      <div className="mx-auto max-w-380 px-6">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-6">
          {/* LEFT VIDEO */}
          <div
            data-aos="fade-right"
            className="relative flex overflow-hidden rounded-[6px]"
          >
            {/* VIDEO PLACEHOLDER */}
            <div className="relative w-full overflow-hidden rounded-[6px] bg-[#E7E7E7]">
              {/* FUTURE VIDEO */}
              {/* Replace this with actual video */}

              {/* CHECKERBOARD BG */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, #ECECEC 25%, transparent 25%),
                    linear-gradient(-45deg, #ECECEC 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #ECECEC 75%),
                    linear-gradient(-45deg, transparent 75%, #ECECEC 75%)
                  `,
                  backgroundSize: "64px 64px",
                  backgroundPosition:
                    "0 0, 0 32px, 32px -32px, -32px 0px",
                  backgroundColor: "#DDDDDD",
                }}
              />

              {/* LABEL */}
              <div className="absolute inset-0 flex items-center justify-center">
                <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover rounded-2xl" />
               
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            data-aos="fade-left"
            data-aos-delay="120"
            className="max-w-380 pt-[6px]"
          >
            {/* TITLE */}
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-1.6px] text-[#132033]">
              TruCath® Foley Catheters
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 text-base leading-[2] text-[#6C6C6C]">
              TruCath 100% Silicone Foley Catheters feature a biocompatible,
              all-silicone material composition that helps resist encrustation.
              The product line includes a wide range of French- and
              balloon-sizes, as well as tip and lumen configurations.
            </p>

            {/* FEATURE LIST */}
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={180 + index * 80}
                  className="flex items-start gap-4"
                >
                  {/* ICON */}
                  <div className="mt-[2px] flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center rounded-full border border-[#122238]">
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className="text-[#122238]"
                    />
                  </div>

                  {/* TEXT */}
                  <p className="text-base leading-[1.9] text-[#6A6A6A]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}