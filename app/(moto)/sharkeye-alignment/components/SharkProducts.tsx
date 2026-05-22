"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [1, 2, 3];

export default function SharkProducts() {

  return (
    <section className="w-full bg-[#f3f3f3] py-24 overflow-hidden">
      <div className="max-w-380 mx-auto ">
        {/* TOP HEADER */}
        <div className="flex items-center justify-between mb-10">
          {/* TITLE */}
          <h2
            data-aos="fade-right"
            className="text-[42px] font-black tracking-[-1px] text-[#232323] leading-none"
          >
            latest Featured Wheel Aligners
          </h2>

          {/* TABS */}
          <div
            data-aos="fade-left"
            className="flex items-center overflow-hidden border border-black/5"
          >
            <button className="h-[58px] px-10 bg-[#f0df32] text-black font-bold text-[16px]">
              Car 2 & 4
            </button>

            <button className="h-[58px] px-12 bg-transparent text-[#232323] font-bold text-[16px]">
              4X4 2 & 4
            </button>
          </div>
        </div>

        {/* PRODUCT AREA */}
        <div className="relative">
          {/* LEFT ARROW */}
          <button className="absolute left-[-26px] top-[40%] -translate-y-1/2 z-20 w-[54px] h-[54px] rounded-full bg-[#f0df32] flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300">
            <ChevronLeft size={24} strokeWidth={2.2} />
          </button>

          {/* RIGHT ARROW */}
          <button className="absolute right-[-26px] top-[40%] -translate-y-1/2 z-20 w-[54px] h-[54px] rounded-full bg-[#f0df32] flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300">
            <ChevronRight size={24} strokeWidth={2.2} />
          </button>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((item, index) => (
              <div
                key={item}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group bg-[#efefef] border border-black/5 shadow-[0_6px_18px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500"
              >
                {/* IMAGE AREA */}
                <div className="relative h-[390px] bg-[#ececec] overflow-hidden">
                  {/* TOP LOGO */}
                  <div className="absolute top-7 left-7 z-10">
                    <div className="bg-black text-[#f0df32] text-[18px] font-black px-4 py-1 rounded-full tracking-tight">
                      BIGEYE
                    </div>
                  </div>

                  {/* MACHINE MOCKUP */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* MAIN BODY */}
                      <div className="w-[120px] h-[230px] bg-[#1f2937] shadow-2xl relative">
                        {/* TOP BAR */}
                        <div className="absolute top-[-16px] left-[-45px] w-[210px] h-[16px] bg-[#ff5a2f]" />

                        {/* BOTTOM BAR */}
                        <div className="absolute bottom-[42px] left-[-55px] w-[230px] h-[18px] bg-[#ff5a2f]" />

                        {/* CENTER RED */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[20px] w-[42px] h-[170px] bg-[#ff5a2f] shadow-[0_0_25px_rgba(255,90,47,0.45)]" />

                        {/* SCREEN */}
                        <div className="absolute left-[-55px] top-[80px] w-[42px] h-[14px] bg-black border border-yellow-400" />

                        {/* WHEELS */}
                        <div className="absolute bottom-[-12px] left-[12px] w-[14px] h-[14px] rounded-full bg-neutral-600" />
                        <div className="absolute bottom-[-12px] right-[12px] w-[14px] h-[14px] rounded-full bg-neutral-600" />
                      </div>

                      {/* SIDE PANEL */}
                      <div className="absolute right-[-70px] bottom-0 w-[30px] h-[120px] bg-[#232323] rounded-sm">
                        <div className="absolute inset-x-0 top-2 flex flex-col items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                          <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                          <div className="w-4 h-4 bg-red-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SUBTLE GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/5 pointer-events-none" />
                </div>

                {/* CONTENT */}
                <div className="px-6 py-7">
                  <h3 className="text-[20px] leading-[1.35] font-black tracking-[-0.5px] text-[#1f1f1f] max-w-[320px]">
                    SharkEye BigEye 4 Wheel Laser Aligner - BE4WLA
                  </h3>

                  <p className="mt-5 text-[20px] font-black text-[#8a8a8a]">
                    ₹31,875.20
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM AREA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mt-16">
          {/* DESCRIPTION */}
          <p
            data-aos="fade-right"
            className="max-w-[700px] text-[16px] leading-[2] text-[#6c6c6c] font-medium"
          >
            We understand the importance of staying up-to-date with the latest
            trends and technologies. That's why we are continually investing in
            research and development to ensure our products remain the very best
            on the market.
          </p>

          {/* BUTTON */}
          <button
            data-aos="fade-left"
            className="relative h-[54px] px-10 bg-[#f0df32] text-black font-bold text-[15px] tracking-wide hover:translate-x-1 transition-all duration-300"
          >
            View All Products

            {/* ANGLED EDGE */}
            <span className="absolute top-0 right-[-18px] border-t-[27px] border-b-[27px] border-l-[18px] border-t-transparent border-b-transparent border-l-[#f0df32]" />
          </button>
        </div>
      </div>
    </section>
  );
}