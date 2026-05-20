"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { FiArrowRight } from "react-icons/fi";

const features = [
  "Weight : 600 g – 1,32 lb.",
  '7" Screen',
  "11 Interchangeable Probes",
  "Ultra-fast boot-up",
];

export default function SonoPro() {
  return (
    <section className="relative overflow-hidden bg-[#14387F] py-24">
      {/* DOT PATTERN BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      {/* RADIAL GLOW */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* LEFT */}
          <div data-aos="fade-up">
            <h2 className="max-w-[760px] text-white text-4xl leading-[1.12] tracking-[-2px] font-semibold">
              Discover The New, Unique Handheld Ultrasound Scanner: The U-Lite
              PRO.
            </h2>
          </div>

          {/* RIGHT */}
          <div
            className="flex flex-col items-start lg:items-end gap-7 pt-3"
            data-aos="fade-left"
          >
            <p className="text-white text-[16px] font-medium tracking-[0.2px]">
              Advanced Imaging with Intelligent Performance
            </p>

            <button className="group bg-white hover:bg-[#f2f2f2] transition-all duration-300 h-[58px] px-10 rounded-full flex items-center gap-5 text-[#123f88] text-[16px] font-semibold shadow-xl">
              Get a quote

              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <FiArrowRight className="text-[18px]" />
              </div>
            </button>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/20 mt-12 mb-12" />

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-stretch">
          {/* VIDEO SIDE */}
          <div data-aos="zoom-in">
            <div className="relative overflow-hidden rounded-[28px] bg-[#e6e6e6] aspect-[16/9] shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
             <DynamicVideoPlayer type="short-1" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="pt-2">
            {/* DESCRIPTION */}
            <div
              className="space-y-5"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <p className="text-white/90 text-[16px] leading-[1.9]">
                Thanks to its exceptional image quality and advanced
                functionalities, including AI-powered automatic measurements and
                image optimization, this high-performance ultrasound scanner
                delivers accurate and efficient diagnostics wherever it is
                needed.
              </p>

              <p className="text-white/90 text-[16px] leading-[1.9]">
                Designed with mobility and convenience in mind, the system is
                always ready when and where it is needed. Its intuitive user
                interface simplifies operation for healthcare professionals,
                while the near-instant boot-up time ensures rapid access during
                critical situations.
              </p>
            </div>

            {/* SUBTITLE */}
            <div
              className="mt-5"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <h3 className="text-white text-[24px] font-semibold tracking-[-1px]">
                Power On, Scan, Diagnose.
              </h3>
            </div>

            {/* FEATURE PILLS */}
            <div
              className="mt-4 grid grid-cols-2 gap-4"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              {features.map((item, index) => (
                <div
                  key={index}
                  className="h-[64px] rounded-[18px] bg-[#1E66B3]/80 border border-white/5 backdrop-blur-sm flex items-center justify-center text-center px-5 shadow-lg"
                >
                  <p className="text-white text-[16px] font-medium leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="mt-5"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <button className="cursor-pointer group bg-white hover:bg-[#f2f2f2] transition-all duration-300 h-[58px] px-9 rounded-full flex items-center gap-5 text-[#123f88] text-[16px] font-semibold shadow-xl">
                Discover Our Story

                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <FiArrowRight className="text-[18px]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}