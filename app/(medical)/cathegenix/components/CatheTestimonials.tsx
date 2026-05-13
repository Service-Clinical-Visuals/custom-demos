"use client";

import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CatheTestimonials() {

  return (
    <section className="overflow-hidden bg-[#F7F7F5] py-24">
      <div className="mx-auto max-w-[1600px] px-8 lg:px-16">
        {/* ================================================= */}
        {/* TOP SECTION */}
        {/* ================================================= */}

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <div className="max-w-[680px]">
            {/* TITLE */}
            <div data-aos="fade-up">
              <h2 className="text-4xl font-semibold tracking-[-2px] text-[#2B2B2B]">
                News & Events
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div data-aos="fade-up" data-aos-delay="150">
              <p className="mt-7 max-w-[620px] text-[16px] leading-[2] text-[#666666]">
                Stay connected with CatheGenix for the latest updates, global
                exhibitions, product innovations, and inspiring healthcare
                stories shaping the future of urological care.
              </p>
            </div>
          </div>

          {/* ================================================= */}
          {/* FILTER BUTTONS */}
          {/* ================================================= */}

          <div
            data-aos="fade-left"
            className="flex flex-col gap-4 lg:items-end"
          >
            <button className="cursor-pointer flex h-[52px] min-w-[220px] items-center justify-center rounded-full bg-[#0047A6] px-8 text-[15px] font-semibold text-white shadow-[0_10px_20px_rgba(0,71,166,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#003C92]">
              Patient Health
            </button>

            <button className="cursor-pointer flex h-[52px] min-w-[280px] items-center justify-center rounded-full bg-[#0047A6] px-8 text-[15px] font-semibold text-white shadow-[0_10px_20px_rgba(0,71,166,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#003C92]">
              Medical Professionals
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/* NEWS SLIDER AREA */}
        {/* ================================================= */}

        <div className="mt-20 flex items-center gap-6">
          {/* ================================================= */}
          {/* LEFT NAV */}
          {/* ================================================= */}

          <button className="cursor-pointer hidden h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#0047A6] text-white shadow-[0_10px_20px_rgba(0,71,166,0.18)] transition-all duration-300 hover:scale-105 lg:flex">
            <ArrowLeft size={20} strokeWidth={2.8} />
          </button>

          {/* ================================================= */}
          {/* NEWS CARD */}
          {/* ================================================= */}

          <div
            data-aos="fade-up"
            className="group flex-1 overflow-hidden rounded-[28px] border border-[#ECECEC] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
          >
            <div className="grid items-center lg:grid-cols-[0.85fr_1.4fr]">
              {/* ================================================= */}
              {/* IMAGE */}
              {/* ================================================= */}

              <div className="p-5">
                <div className="relative overflow-hidden rounded-[22px]">
                  {/* IMAGE */}
                  <div className="aspect-[1.15/0.65] w-full">
                    <img
                      src="/cathegenix/cathe-testimonial-1.png"
                      alt="WHX Dubai"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    {/* FUTURE IMAGE */}
                    {/*
                    <Image
                      src="/news/news-banner.jpg"
                      alt="WHX Dubai"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>

                  {/* SOFT OVERLAY */}
                  <div className="absolute inset-0 bg-black/[0.03]" />

                  {/* DEPTH LIGHT */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%)]" />
                </div>
              </div>

              {/* ================================================= */}
              {/* CONTENT */}
              {/* ================================================= */}

              <div className="px-8 py-10 lg:px-10">
                {/* TITLE */}
                <h3 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-1px] text-[#2B2B2B]">
                  Visit CatheGenix At WHX Dubai 2026 - Booth N23 E79
                </h3>

                {/* DATE */}
                <p className="mt-5 text-[16px] font-medium text-[#888888]">
                  February 9, 2026
                </p>

                {/* DESCRIPTION */}
                <p className="mt-6 max-w-[760px] text-[16px] leading-[2] text-[#666666]">
                  CatheGenix will be exhibiting at WHX Dubai 2026 held at the
                  Dubai Exhibition Centre from February 9th to 12th, 2026. We
                  cordially invite you to visit our booth N23 E79 for in-depth
                  exchanges and further communication..
                </p>

                {/* LINK */}
                <button className="cursor-pointer group/link mt-8 inline-flex items-center gap-2 text-base font-semibold text-[#0047A6]">
                  Learn More

                  <ArrowRight
                    size={17}
                    strokeWidth={2.8}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT NAV */}
          {/* ================================================= */}

          <button className="cursor-pointer hidden h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#0047A6] text-white shadow-[0_10px_20px_rgba(0,71,166,0.18)] transition-all duration-300 hover:scale-105 lg:flex">
            <ArrowRight size={20} strokeWidth={2.8} />
          </button>
        </div>
      </div>
    </section>
  );
}