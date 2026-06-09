"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Video */}
      <div className="absolute inset-0 bg-black">
        <DynamicVideoPlayer type="banner" className="object-cover w-full h-full" />
      </div>


      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="max-w-[1550px] mx-auto h-full px-8">

          <div
            className="
              absolute
              left-40
              2xl:left-70
              bottom-24
              max-w-[450px]
            "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1
              className="
                text-[#FFFFFF]!
                text-[48px]
                leading-[1.15]
                font-bold
                tracking-[-2px]
                drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]
              "
            >
              Empowering discovery, Advancing
              results.
            </h1>

            <button
              className="
                mt-6
                h-[56px]
                px-8
                rounded-full
                bg-[#005FA3]
                text-white
                font-semibold
                2xl:text-[20px]
                flex items-center gap-3
                hover:scale-105
                transition-all duration-300
              "
            >
              Read More About Me

              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}