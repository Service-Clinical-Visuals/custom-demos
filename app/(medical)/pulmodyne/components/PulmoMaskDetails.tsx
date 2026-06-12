"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function PulmoMaskDetails() {


  return (
    <section className="relative overflow-hidden bg-[#0068A8] py-16 lg:py-28">
      {/* ================================================= */}
      {/* BACKGROUND DEPTH */}
      {/* ================================================= */}

      {/* RADIAL LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_35%)]" />

      {/* CURVED DECORATION */}
      <div className="absolute -bottom-[220px] left-[-180px] h-[560px] w-[900px] rounded-full border border-white/[0.05]" />

      {/* CURVED DECORATION */}
      <div className="absolute -bottom-[260px] left-[120px] h-[620px] w-[1100px] rounded-full border border-white/[0.04]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-16">
        {/* ================================================= */}
        {/* TOP SECTION */}
        {/* ================================================= */}

        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          {/* ================================================= */}
          {/* CONTENT SIDE */}
          {/* ================================================= */}

          <div className="max-w-full">
            {/* TITLE */}
            <div data-aos="fade-up">
              <h2 className="text-2xl font-semibold leading-[1.12] tracking-[-1px] text-white sm:text-3xl sm:tracking-[-2px] lg:text-4xl">
                Select & Connect In More Ways Than One
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div data-aos="fade-up" data-aos-delay="120">
              <p className="mt-4 text-[16px] leading-[2] text-white/88">
                This Mask Is BiLevel Compatible And Disposable. It Has
                Multi-Adjustment Fittings Using The OmniClip™ And Four Sizes:
                Adult Small, Adult Medium, Adult Large, Adult Extra Large.
              </p>

              <p className="mt-4 text-[16px] leading-[2] text-white/88">
                Along With 4 Sizes It Offers A Selection Of 4 Cushion Shapes,
                All Made Of Silicone For An Efficient Yet Comfortable Seal To
                Fit Any Patient’s Face. In Addition We Offer 7 Interchangeable
                Elbows To Fit Your Patients’ Needs.
              </p>
            </div>

            {/* BUTTON */}
            <div data-aos="fade-up" data-aos-delay="220" className="mt-5">
              <button className="cursor-pointer flex h-[54px] items-center justify-center rounded-[6px] bg-white px-8 text-[16px] font-semibold text-[#0068A8] shadow-[0_10px_20px_rgba(255,255,255,0.08)] transition-all duration-300 hover:bg-[#F3F3F3] hover:shadow-[0_14px_28px_rgba(255,255,255,0.12)]">
                View Product
              </button>
            </div>
          </div>

          {/* ================================================= */}
          {/* VIDEO / IMAGE SIDE */}
          {/* ================================================= */}

          <div
            data-aos="fade-left"
            className="relative overflow-hidden rounded-[18px] shadow-[0_16px_34px_rgba(0,0,0,0.12)]"
          >
            {/* MEDIA CONTAINER */}
            <div className="aspect-[1.28/0.72] w-full">
              <div className="relative h-full w-full overflow-hidden">
                {/* CHECKER PLACEHOLDER */}
                {/* FUTURE VIDEO */}
                
                <DynamicVideoPlayer type="short-1" className="absolute top-0 left-0 h-full w-full object-cover" />
               
              </div>
            </div>

            {/* SOFT OVERLAY */}
            <div className="absolute inset-0 bg-black/[0.02]" />
          </div>
        </div>

        {/* ================================================= */}
        {/* DIVIDER */}
        {/* ================================================= */}

        <div
          data-aos="fade-up"
          className="mt-20 h-[1px] w-full bg-white/30"
        />

        {/* ================================================= */}
        {/* BOTTOM CTA */}
        {/* ================================================= */}

        <div className="mx-auto mt-16 max-w-[980px] text-center">
          {/* TITLE */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-bold leading-[1.3] tracking-[-0.8px] text-white sm:text-2xl sm:tracking-[-1.6px] lg:text-3xl">
              Our Nasal Mask Line Consists Of Two Nasal Masks, The BiTrac® NIV
              Nasal And The ValueTrac™ NIV Ribbed Nasal Mask.
            </h3>
          </div>

          {/* BUTTON */}
          <div data-aos="fade-up" data-aos-delay="160" className="mt-10">
            <button className="cursor-pointer flex h-[56px] items-center justify-center rounded-[6px] bg-white px-9 text-[16px] font-semibold text-[#0068A8] shadow-[0_10px_20px_rgba(255,255,255,0.08)] transition-all duration-300 hover:bg-[#F3F3F3] hover:shadow-[0_14px_30px_rgba(255,255,255,0.14)] mx-auto">
              Request More Informations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}