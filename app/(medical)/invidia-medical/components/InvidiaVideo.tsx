"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function InvidiaVideo() {
  return (
    <section className="relative overflow-hidden bg-[#E9EAEC] py-[58px]">


      <div className="relative z-10 mx-auto grid max-w-380 grid-cols-1 items-stretch gap-[42px] px-8 lg:grid-cols-[1.02fr_0.98fr]">
        {/* ======================================
            LEFT - VIDEO
        ======================================= */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="relative h-full"
        >
          {/* VIDEO WRAPPER */}
          <div className="relative h-full overflow-hidden rounded-[20px] bg-[#E4E4E4] shadow-[0_14px_35px_rgba(0,0,0,0.08)]">
            {/* CHECKER GRID */}
            <div
              className="absolute inset-0"
             
            />

            {/* FUTURE VIDEO */}
          <div className="w-full h-full bg-gray-100 rounded-2xl border border-dashed border-gray-300 overflow-hidden">
            <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover rounded-2xl" />
          </div>

          </div>
        </div>

        {/* ======================================
            RIGHT - CONTENT
        ======================================= */}
        <div>
          {/* TITLE */}
          <div
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <h2 className="text-4xl mb-5 font-semibold leading-[1.08] tracking-[-1.8px] text-[#D3AB00]">
              Advanced Visualization & Illumination System
            </h2>
          </div>

          {/* CARD 01 */}
          <div
            data-aos="fade-up"
            data-aos-delay="120"
            className="mt-1.5 rounded-[16px] border border-[#D9D9D9] bg-white p-[30px] shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
          >
            <h3 className="text-lg font-semibold tracking-[-0.4px] text-[#3A3A3A]">
              ICG/NIR Endoscopic Light Source
            </h3>

            <p className="mt-1.5 text-base leading-[1.95] text-[#666666]">
              Smart-link to CCU with automatic light
              source switch. Light intensity adjustable
              in 100 steps, plus smart protection to
              prevent accidental eye damage. 
            </p>
          </div>

          {/* CARD 02 */}
          <div
            data-aos="fade-up"
            data-aos-delay="220"
            className="mt-1.5 rounded-[16px] border border-[#D9D9D9] bg-white p-[30px] shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
          >
            <h3 className="text-lg font-semibold tracking-[-0.4px] text-[#3A3A3A]">
              4K LCD Monitor
            </h3>

            <p className="mt-1.5 text-base leading-[1.95] text-[#666666]">
              Supports both analog and digital signal
              sources from a variety of medical imaging
              modalities. Equipped with a large 32"
              monitor for clear, detailed viewing.
            </p>
          </div>

          {/* CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="120"
            className="mt-3"
          >
            <Link
              href="/"
              className="group inline-flex h-[42px] items-center overflow-hidden rounded-[4px] bg-[#D3AB00] pl-5 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-[2px]"
            >
              <span>View Product Details</span>

              <span className="ml-4 flex h-full w-[34px] items-center justify-center bg-white text-[#D3AB00] transition-all duration-300 group-hover:w-[42px]">
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}