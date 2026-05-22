"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Cog } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const features = [
  {
    title: "Compact & Portable",
    description:
      "Perfect for mobile mechanics and small shops.",
  },
  {
    title: "Built to Last",
    description:
      "No wires, minimal moving parts, and a rugged design.",
  },
  {
    title: "Pinpoint Laser Accuracy",
    description:
      "Get professional results anywhere, anytime.",
  },
];

export default function SharkWhyChoose() {

  return (
    <section className="w-full bg-[#f5f5f5] py-28 overflow-hidden">
      <div className="max-w-full mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            {/* TITLE */}
            <h2 className="text-[48px] leading-none tracking-[-1.5px]  text-[#242424]">
              Why Choose the Roller?
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 text-[17px] leading-[2] text-[#727272] font-medium max-w-[520px]">
              Whether you're running a garage, working on the go, or
              setting up at home, the Roller makes professional wheel
              alignment easy and profitable.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="flex items-start gap-5"
                >
                  {/* ICON */}
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-[30px] h-[30px] rounded-full border border-black/10 bg-white flex items-center justify-center shadow-sm">
                      <Cog
                        size={15}
                        strokeWidth={2.1}
                        className="text-black"
                      />
                    </div>
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-[21px] leading-[1.55] tracking-[-0.4px] text-[#1f1f1f]">
                      <span className="font-sans font-semibold">
                        {feature.title}
                      </span>

                      <span className="font-sans text-[#757575]">
                        {" "}
                        — {feature.description}
                      </span>
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* DIVIDER */}
            <div className="w-full h-[1px] bg-[#e4e4e4] mt-10" />

            {/* BUTTON */}
            <div data-aos="fade-up" data-aos-delay="300">
              <button className="cursor-pointer relative mt-8 h-[56px] px-12 bg-[#f0df32] text-black font-black text-[15px] tracking-wide hover:translate-x-1 transition-all duration-300">
                View Product

                {/* ANGLED EDGE */}
                <span className="absolute top-0 right-[-18px] border-t-[28px] border-b-[28px] border-l-[18px] border-t-transparent border-b-transparent border-l-[#f0df32]" />
              </button>
            </div>
          </div>

          {/* RIGHT VIDEO PLACEHOLDER */}
          <div
            data-aos="fade-left"
            className="relative"
          >
            {/* VIDEO WRAPPER */}
            <div className="relative overflow-hidden bg-[#ececec] shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              {/* FUTURE VIDEO CONTAINER */}
              <div className="relative aspect-[16/9] w-full">
                <DynamicVideoPlayer type="short-1" className="absolute top-0 left-0 w-full h-full object-contain" />
              </div>
            </div>

            {/* SUBTLE GLOW */}
            <div className="absolute inset-0 bg-white/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}