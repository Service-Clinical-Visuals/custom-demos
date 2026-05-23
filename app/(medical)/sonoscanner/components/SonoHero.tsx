"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { FiArrowRight } from "react-icons/fi";


export default function SonoHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* VIDEO WRAPPER */}
      {/* Replace with video later */}
      <div className="absolute inset-0 w-full h-full">

        <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 pb-16 sm:pb-28">
          <div className="max-w-[775px]">
            <div data-aos="fade-up">
              <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl leading-[1.4] font-semibold tracking-[1px] [word-spacing:3px]">
                Ultrasound Machine: Sonoscanner, Premium Diagnostic Ultrasound
              </h1>
            </div>

            <div data-aos="fade-up" data-aos-delay="150">
              <p className="mt-5 sm:mt-7 text-white/80 text-base sm:text-xl font-light">
                A full range of outstanding performance ultrasounds
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <button className="mt-8 sm:mt-10 bg-white text-[#1b3e84] hover:bg-[#f5f5f5] transition-all duration-300 rounded-full h-[50px] sm:h-[56px] px-7 sm:px-8 flex items-center gap-4 text-[14px] font-semibold shadow-xl">
                Discover Technology

                <div className="w-7 h-7 rounded-full bg-[#f4f6fb] flex items-center justify-center">
                  <FiArrowRight className="text-[16px]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BORDER BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20" />
    </section>
  );
}