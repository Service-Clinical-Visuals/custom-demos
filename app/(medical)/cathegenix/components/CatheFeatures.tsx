"use client";

import { ArrowRight } from "lucide-react";

import "aos/dist/aos.css";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function CatheFeatures() {


  return (
    <section className="relative overflow-hidden bg-[#0047A6] py-24">


      <div className="relative z-10 mx-auto max-w-[1600px] px-8 lg:px-16">
        {/* ================================================= */}
        {/* GRID */}
        {/* ================================================= */}

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.2fr]">
          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <div>
            {/* TITLE */}
            <div data-aos="fade-up">
              <h2 className="text-4xl font-semibold leading-[1] tracking-[-2px] text-white">
                Endura™ Ureteral Stents
              </h2>

              <p className="mt-5 max-w-[520px] text-[16px] leading-[1.9] text-white/82">
                Provides long-term drainage and patient comfort during extended
                stent placement.
              </p>
            </div>

            {/* ================================================= */}
            {/* FEATURE CARD */}
            {/* ================================================= */}

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-10 rounded-[28px] bg-[#F7F7F5] px-10 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
            >
              {/* FEATURE 1 */}
              <div>
                <h3 className="text-xl font-semibold tracking-[-1px] text-[#0047A6]">
                  Anti-crusting coating :
                </h3>

                <p className="mt-5 text-base leading-[2] text-[#666666]">
                  Supports long-term urinary drainage with high
                  biocompatibility, while resisting encrustation and minimizing
                  complications. Excellent Biocompatibility: Extended dwelling
                  period of up to 365 Days
                </p>
              </div>

              {/* SPACING */}
              <div className="mt-10" />

              {/* FEATURE 2 */}
              <div>
                <h3 className="text-xl font-semibold tracking-[-1px] text-[#0047A6]">
                  Thin wall for maximum lumen size :
                </h3>

                <p className="mt-5 text-base leading-[2] text-[#666666]">
                  Advanced thin-wall construction maximizes lumen size for
                  enhanced drainage efficiency, smoother fluid flow, and
                  improved overall performance while helping minimize the risk
                  of blockage or obstruction during use.
                </p>
              </div>

              {/* BUTTON */}
              <div className="mt-12">
               <button className="cursor-pointer relative group flex h-[46px] items-center bg-[#05429B] overflow-hidden">
                <span className="px-6 text-base font-semibold text-white transition-all duration-300 group-hover:pr-12">
                    Explore Features
                </span>

                <span className="absolute right-0 flex h-full items-center justify-center text-white transition-all duration-300 translate-x-full group-hover:-translate-x-1">
                    <div className="bg-[#9DCA3A] p-2.5">
                    <ArrowRight size={18} strokeWidth={2.8} />
                    </div>
                </span>
               </button>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT VIDEO AREA */}
          {/* ================================================= */}

          <div
            data-aos="fade-left"
            data-aos-delay="250"
            className="relative"
          >
            {/* VIDEO CONTAINER */}
            <div className="relative overflow-hidden rounded-[30px] bg-[#ECECEC] shadow-[0_14px_40px_rgba(0,0,0,0.16)]">
              {/* VIDEO RATIO */}
              <div className="aspect-[1/0.78] w-full">
                {/* PLACEHOLDER */}
                <div className="relative h-full w-full">
                 <DynamicVideoPlayer type="360" className="h-full w-full object-cover" />
                </div>
              </div>

              {/* SOFT LIGHT */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_35%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}