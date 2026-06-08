"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative h-screen min-h-[650px] overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 bg-black">
        <DynamicVideoPlayer type="banner" className="object-cover w-full h-full opacity-80" />
      </div>

      {/* Modern Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-32">
        <div className="max-w-[1560px] 2xl:max-w-[80%] mx-auto w-full px-6">
          <div
            className="max-w-[900px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1
              className="
                text-white
                text-[36px]
                sm:text-[46px]
                md:text-[54px]
                lg:text-[60px]
                leading-[1.15]
                font-bold
                tracking-tight
                mb-8
              "
            >
              OHST Medizintechnik AG is a medical devices company based in Rathenow, Germany.
            </h1>

            <button
              className="
                h-[52px]
                px-8
                rounded-full
                bg-[#099F94]
                text-white
                font-semibold
                text-[16px]
                flex items-center gap-2
                hover:bg-[#07877e]
                hover:scale-105
                transition-all duration-300
                shadow-lg
              "
            >
              Discover Innovation
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}