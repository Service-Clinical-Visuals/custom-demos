"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [1, 2, 3];

export default function SharkAllProducts() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#181315] py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
       <img src="/moto/shark/shark-products-bg.jpg" alt="bg" className="w-full h-full object-cover"/>
        </div>

        {/* LARGE SHAPES */}
        <div className="absolute right-[-140px] bottom-[-120px] rotate-[28deg] opacity-[0.04]">
          <div className="grid grid-cols-2 gap-10">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-[220px] h-[220px] bg-white"
              />
            ))}
          </div>
        </div>

        {/* DOT PATTERN */}
        <div className="absolute top-[90px] right-[30px] grid grid-cols-5 gap-8 opacity-40">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="w-[10px] h-[10px] rounded-full bg-[#8f7442]"
            />
          ))}
        </div>

        {/* BOTTOM GOLDEN GLOW */}
        <div className="absolute bottom-[-120px] left-1/3 w-[240px] h-[240px] rounded-full bg-[#8f7442]/20 blur-[100px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-380 mx-auto ">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* TITLE */}
          <div data-aos="fade-right">
            <h2 className="text-4xl leading-none tracking-[-1px] font-medium text-white">
              Truck Single & Twin Steer Laser Aligners
            </h2>
          </div>

          {/* BUTTON */}
          <div data-aos="fade-left">
            <button className="cursor-pointer font-black relative h-14 px-12 bg-[#f0df32] text-black text-[16px] tracking-wide hover:translate-x-1 transition-all duration-300">
              View All Product

              {/* ANGLED EDGE */}
              <span className="absolute top-0 -right-4.5 border-t-28 border-b-28 border-l-18 border-t-transparent border-b-transparent border-l-[#f0df32]" />
            </button>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 w-full h-px bg-white/20" />

        {/* PRODUCT GRID */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.map((item, index) => (
            <div
              key={item}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group bg-[#efefef] border border-black/5 shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* IMAGE AREA */}
              <div className="relative h-97.5 bg-[#ededed] overflow-hidden">
                {/* LOGO */}
                <div className="absolute top-7 left-7 z-10">
                  <div className="bg-black text-[#f0df32] text-[18px] font-black px-4 py-1 rounded-full tracking-tight">
                    BIGEYE
                  </div>
                </div>

                {/* MACHINE MOCKUP */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative scale-[1.02]">
                    {/* MAIN MACHINE */}
                    <div className="relative w-30 h-57.5 bg-[#1f2937] shadow-2xl">
                      {/* TOP ORANGE BAR */}
                      <div className="absolute -top-4 -left-12 w-53.75 h-4 bg-[#ff5a2f]" />

                      {/* LOWER BAR */}
                      <div className="absolute bottom-10.5 -left-14.5 w-58.75 h-4.5 bg-[#ff5a2f]" />

                      {/* CENTER COLUMN */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-4.5 w-10.5 h-43.75 bg-[#ff5a2f] shadow-[0_0_30px_rgba(255,90,47,0.4)]" />

                      {/* SCREEN */}
                      <div className="absolute -left-13.75 top-19.5 w-10.5 h-3.5 bg-black border border-yellow-400" />

                      {/* WHEELS */}
                      <div className="absolute -bottom-3 left-2.5 w-3.5 h-3.5 rounded-full bg-neutral-600" />
                      <div className="absolute -bottom-3 right-2.5 w-3.5 h-3.5 rounded-full bg-neutral-600" />
                    </div>

                    {/* SIDE CONTROL PANEL */}
                    <div className="absolute -right-17 bottom-0 w-7.5 h-31.25 bg-[#232323] rounded-sm">
                      <div className="absolute inset-x-0 top-2 flex flex-col items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-yellow-400" />
                        <div className="w-4 h-4 rounded-full bg-yellow-400" />
                        <div className="w-4 h-4 rounded-full bg-red-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* LIGHT OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-br from-white/25 via-transparent to-black/3" />
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
    </section>
  );
}