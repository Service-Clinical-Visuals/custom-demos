"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FiArrowRight } from "react-icons/fi";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function OptimedComfort() {

  return (
    <section className="w-full bg-[#ffff] py-14 md:py-20 xl:py-24 overflow-hidden">

      <div className="max-w-[1600px] mx-auto px-6">

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-10 xl:gap-20 items-stretch">

          {/* Left Content */}
          <div data-aos="fade-right">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl  font-semibold tracking-[-1.2px] leading-[1.05] text-black">
              Advanced Comfort & Reliable Performance
            </h2>

            {/* Paragraphs */}
            <div className="mt-4 space-y-4">
              
              <p className="text-[#7f7f7f] text-[16px] leading-[2]">
                To support better postoperative outcomes, the OptiSoft Renal
                Transplantation Ureteral Stents combine innovative material
                technology with a patient-focused design approach. The soft
                surface and flexible construction help reduce friction and
                discomfort, while the optimized shape ensures reliable placement
                and drainage efficiency.
              </p>

              <p className="text-[#7f7f7f] text-[16px] leading-[2]">
                Designed with an open pigtail configuration on both ends, the
                stents offer reliable positioning and improved drainage
                performance. The advanced OptiSoft material minimizes irritation
                and discomfort, allowing better patient comfort during recovery
                and long-term use. Developed with precision and clinical
                reliability in mind, these ureteral stents provide healthcare
                professionals with an effective solution for specialized
                post-transplant urinary management.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-6">
              
              <button className="cursor-pointer group flex items-center overflow-hidden rounded-l-xl rounded-r-4xl bg-[#f29b58] shadow-md hover:scale-[1.02] transition-all duration-300">
                
                <span className="px-7 py-4 text-white text-[15px] font-semibold whitespace-nowrap">
                  Explore Products
                </span>

                <span className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center">
                  <FiArrowRight className="text-black text-[18px] group-hover:translate-x-1 transition" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Video Area */}
          <div
            data-aos="fade-left"
            className="relative rounded-[26px] overflow-hidden border border-[#e3e3e3] bg-[#ececec] shadow-xl aspect-video"
          >

            <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
            
          </div>
        </div>
      </div>
    </section>
  );
}