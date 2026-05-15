"use client";

import { useEffect } from "react";
import { Check } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const features = [
  "Adjustable Omni-Clip™",
  "Breathable Headgear",
  "Bayonet-Style Lock",
  "Interchangeable Elbows",
  "Custom Fit",
  "Additional Velcro Tabs",
];

export default function PulmoDetails() {


  return (
    <section className="overflow-hidden bg-[#F5F5F5] py-16 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-16">
        {/* ================================================= */}
        {/* TOP GRID */}
        {/* ================================================= */}

        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <div className="max-w-full lg:max-w-[560px]">
            {/* TITLE */}
            <div data-aos="fade-up">
              <h2 className="text-2xl font-semibold tracking-[-1px] text-[#2B2B2B] sm:text-3xl sm:tracking-[-2px] lg:text-4xl">
                BiTrac® Full Face
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div data-aos="fade-up" data-aos-delay="120">
              <p className="mt-4 text-[16px] leading-[2] text-[#666666]">
                The BiTrac® NIV Product Family Features A Variety Of Interfaces
                That Are Designed To Increase Patient Comfort And Compliance In
                Respiratory Distress Scenarios. The Full-Face And Nasal Masks
                Are Highly Adjustable, And Their Cushion Designs Minimize
                Pressure Exerted On The Bridge Of The Nose. Our Total Perimeter
                Mask, The MaxShield™, Avoids The Nose And Dispenses Pressure
                Over A Larger Surface Area While Reducing Claustrophobia For The
                Patient. Our Range Of Interchangeable Elbows Greatly Reduces
                Waste Since You Can Easily Remove And Replace The Mask's Elbow
                When Transitioning Patients Between Standard Ventilators And
                Bi-Level Machines.
              </p>
            </div>

            {/* DIVIDER */}
            <div
              data-aos="fade-up"
              data-aos-delay="180"
              className="mt-4 h-[1px] w-full bg-[#E4E4E4]"
            />

            {/* BUTTON */}
            <div data-aos="fade-up" data-aos-delay="260" className="mt-4">
              <button className="cursor-pointer flex h-[52px] items-center justify-center rounded-[4px] bg-[#0068A8] px-8 text-[16px] font-semibold text-white shadow-[0_10px_22px_rgba(0,104,168,0.12)] transition-all duration-300 hover:bg-[#00598F] hover:shadow-[0_14px_28px_rgba(0,104,168,0.18)]">
                View Product Details
              </button>
            </div>
          </div>

          {/* ================================================= */}
          {/* VIDEO / IMAGE SIDE */}
          {/* ================================================= */}

          <div
            data-aos="fade-left"
            className="relative overflow-hidden rounded-[20px] shadow-[0_14px_30px_rgba(0,0,0,0.08)]"
          >
            {/* VIDEO / IMAGE CONTAINER */}
            <div className="aspect-[1.3/0.75] w-full">
              {/* PLACEHOLDER */}
              <div className="relative h-full w-full overflow-hidden">
                {/* CHECKER BG */}

                {/* FUTURE VIDEO */}
                <DynamicVideoPlayer type="360" className="h-full w-full object-cover" />
              </div>
            </div>

            {/* SOFT OVERLAY */}
            <div className="absolute inset-0 bg-black/[0.02]" />
          </div>
        </div>

        {/* ================================================= */}
        {/* BOTTOM GRID */}
        {/* ================================================= */}

        <div className="mt-16 grid  items-center gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          {/* ================================================= */}
          {/* GREEN CTA PANEL */}
          {/* ================================================= */}

          <div
            data-aos="fade-up"
            className="relative overflow-hidden rounded-[18px] bg-[#008D70] px-7 py-12 shadow-[0_16px_32px_rgba(0,0,0,0.08)] lg:px-10 lg:py-16"
          >
            {/* BACKGROUND DEPTH */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />

            {/* CURVED LINES */}
            <div className="absolute -left-[120px] top-[-120px] h-[380px] w-[380px] rounded-full border border-white/[0.06]" />
            <div className="absolute -left-[60px] top-[-60px] h-[300px] w-[300px] rounded-full border border-white/[0.05]" />

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <h3 className="max-w-[500px] text-2xl font-semibold leading-[1.2] tracking-[-1px] text-white sm:text-3xl lg:text-4xl lg:tracking-[-1.5px]">
                BiTrac Full Face Mask With Fixed Anti-Asphyxia Elbow
              </h3>

              <button className="cursor-pointer mt-10 flex h-[54px] items-center justify-center rounded-[6px] bg-white px-8 text-[16px] font-semibold text-[#0068A8] shadow-[0_10px_20px_rgba(255,255,255,0.08)] transition-all duration-300 hover:bg-[#F3F3F3]">
                Request More Information
              </button>
            </div>
          </div>

          {/* ================================================= */}
          {/* FEATURE CONTENT */}
          {/* ================================================= */}

          <div>
            {/* DESCRIPTION */}
            <div data-aos="fade-up">
              <p className="text-[16px] leading-[2] text-[#555555]">
                The BiTrac® NIV Full Face Mask Offers Multi-Adjustment Fittings
                Using The OmniClip™. It Has A Silicone Cushion That Gently Rests
                On A Patient’s Face To Create An Efficient And Comfortable Seal.
                It Comes Available With A Fixed Standard And Fixed Anti-Asphyxia
                Elbow.
              </p>
            </div>

            {/* FEATURES GRID */}
            <div
              data-aos="fade-up"
              data-aos-delay="160"
              className="mt-8 grid gap-4 md:grid-cols-3"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex min-h-[62px] items-start gap-3 rounded-[8px] border border-[#E7E7E7] bg-white px-5 py-4 shadow-[0_6px_14px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_22px_rgba(0,0,0,0.06)]"
                >
                  {/* ICON */}
                  <div className="mt-[2px] flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full border border-[#00A887]">
                    <Check
                      size={14}
                      strokeWidth={3}
                      className="text-[#00A887]"
                    />
                  </div>

                  {/* TEXT */}
                  <p className="text-[14px] leading-[1.7] text-[#555555]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}