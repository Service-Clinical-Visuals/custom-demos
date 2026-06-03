"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import DeltaScrollRevealText from "./DeltaScrollRevealText";

const cards = [
  {
    number: "01",
    title: "Clinical Validity.",
    description:
      "Health Canada Licensed CPAP & APAP technology engineered for silence, reliability, and real life.",
  },
  {
    number: "02",
    title: "Engineered Silence.",
    description:
      "Operates at a whisper-quiet ≤26 dB quieter than a library ensuring your therapy never becomes a disturbance for you or your partner.",
  },
  {
    number: "03",
    title: "Intelligent Response.",
    description:
      "Advanced sensors automatically detect your breathing to start therapy instantly ('Smart Start') and adjust in real-time to compensate for mask leaks.",
  },
];

export default function DeltaAbout() {

  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] py-24 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* Top Heading */}
        <div
          className="mx-auto text-center"
          data-aos="fade-up"
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-2 mb-6">

           <div className="flex items-center gap-3 pl-6" data-aos="fade-up">
              <span className="w-[8px] h-[8px] rounded-full bg-[#00695f]" />
              <p className="text-[22px] font-semibold text-[#00695f]">
                About Us
              </p>
            </div>
          </div>

          

          {/* Main Title */}
          <DeltaScrollRevealText
            text="DeltaSleep Diagnostics & Therapy Inc. is a Canadian leader in respiratory innovation, specializing in the engineering and manufacture of advanced CPAP, APAP, and BiPAP systems."
            className="text-[#222222] font-semibold text-4xl lg:text-[58px] leading-[1.15] tracking-[-0.5px]"
          />
        </div>

        {/* Bottom Layout */}
        <div className="relative mt-24 grid grid-cols-1 lg:grid-cols-[0.7fr_1fr] gap-8 lg:gap-6 items-start">
          {/* Left Cards */}
          <div className="relative z-20 flex flex-col gap-5">
            {cards.map((card, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 150}
                className="group relative bg-[#f7f7f7] rounded-[18px] border border-[#e5e5e5] shadow-[0_12px_35px_rgba(0,0,0,0.08)] px-7 py-6 overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-[#00695f] text-white text-[16px] font-medium w-[42px] h-[28px] rounded-[3px] flex items-center justify-center">
                    {card.number}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#2a2a2a] text-2xl  font-semibold leading-none">
                  {card.title}
                </h3>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[#dddddd] my-5" />

                {/* Description */}
                <p className="text-[#666666] text-[16px] leading-[1.8] max-w-[95%]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Video Layout */}
          <div
            className="relative h-full rounded-[18px] overflow-hidden"
            data-aos="fade-left"
          >

            <DynamicVideoPlayer type="short-1" className="absolute top-0 left-0 w-full h-full object-cover" />
            {/* Soft Fade */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}