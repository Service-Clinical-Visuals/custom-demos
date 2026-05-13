"use client";


import { ArrowRight } from "lucide-react";

import "aos/dist/aos.css";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const features = [
  "Customizable",
  "One-Stop Service",
  "Advanced Technology",
  "Large-Scale Production",
  "Cost Effective",
  "Fast Delivery",
];

export default function CatheChoose() {

  return (
    <section className="overflow-hidden bg-[#F7F7F5]">
      {/* ================================================= */}
      {/* TOP FEATURE SECTION */}
      {/* ================================================= */}

      <div className="border-b border-black/5 py-16">
        <div className="mx-auto grid max-w-[1600px] items-stretch gap-20 px-8 lg:grid-cols-[1fr_0.95fr] lg:px-16">
          {/* ================================================= */}
          {/* LEFT VIDEO / IMAGE */}
          {/* ================================================= */}

          <div
            data-aos="fade-right"
            className="relative overflow-hidden rounded-[26px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
          >
            <div className="h-full w-full min-h-[300px]">
              {/* PLACEHOLDER */}
              <div className="relative h-full w-full">
                {/* FUTURE VIDEO / IMAGE */}
                <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover rounded-2xl"/>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT CONTENT */}
          {/* ================================================= */}

          <div className="max-w-[650px]">
            {/* TITLE */}
            <div data-aos="fade-up">
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-2px] text-[#2B2B2B]">
                Encrustation reduced by over 96% over thesame period.
              </h2>
            </div>

            {/* PARAGRAPHS */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="mt-5 space-y-4"
            >
              <p className="text-[16px] leading-[2] text-[#666666]">
                The surfaces of the ureteral stent are treated with a
                specialized anti-crusting coating designed to inhibit calcium
                salt deposition effectively. This advanced coating helps
                maintain unobstructed urinary drainage, reduces the risk of
                bacterial adhesion and infection, and extends the stent’s
                functional lifespan—enhancing both procedural success and
                patient safety.
              </p>

              <p className="text-[16px] leading-[2] text-[#666666]">
                Endura™ Ureteral Stents and uncoated stent samples were immersed
                in artificial urine for a simulated crusting assessment. The
                extent of surface crusting on the samples was observed,
                revealing that Endura™ Ureteral Stents exhibited superior
                anti-crusting capability.
              </p>
            </div>

            {/* BUTTON */}
            <div data-aos="fade-up" data-aos-delay="300" className="mt-6">
              <button className="cursor-pointer relative group flex h-[46px] items-center bg-[#05429B] overflow-hidden">
                <span className="px-6 text-base font-semibold text-white transition-all duration-300 group-hover:pr-12">
                    Product Details
                </span>

                <span className="absolute right-0 flex h-full items-center justify-center text-white transition-all duration-300 translate-x-full group-hover:-translate-x-1">
                    <div className="bg-[#9DCA3A] p-2.5">
                    <ArrowRight size={18} strokeWidth={2.8} />
                    </div>
                </span>
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* WHY CHOOSE US */}
      {/* ================================================= */}

      <div className="py-10">
        <div className="mx-auto grid max-w-[1600px] items-center gap-20 px-8 lg:grid-cols-[0.95fr_1fr] lg:px-16">
          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <div>
            {/* TITLE */}
            <div data-aos="fade-up">
              <h2 className="text-4xl font-semibold tracking-[-2px] text-[#2B2B2B]">
                Why Choose Us?
              </h2>

              <p className="mt-5 max-w-[620px] text-[16px] leading-[2] text-[#666666]">
                Equipped with advanced precision extrusion systems, certified
                testing laboratories, large-scale production capacity,
                exceptional component manufacturing capabilities, and a
                specialized R&D team spanning biology, physics, chemistry, and
                medical sciences.
              </p>
            </div>

            {/* FEATURES */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 grid gap-5 md:grid-cols-2"
            >
              {features.map((feature, index) => (
                <button
                  key={index}
                  className="flex cursor-pointer items-center justify-center rounded-full bg-[#0047A6] px-8 py-3.5 text-base font-semibold text-white shadow-[0_10px_24px_rgba(0,71,166,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#003C92]"
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT IMAGE */}
          {/* ================================================= */}

          <div
            data-aos="fade-left"
            className="relative overflow-hidden rounded-[28px] shadow-[0_14px_35px_rgba(0,0,0,0.08)]"
          >
            {/* IMAGE */}
            <div className="aspect-[16/9] w-full">
              {/* PLACEHOLDER IMAGE */}
              <img
                src="/cathegenix/cathe-choose.jpg"
                alt="Corporate Building"
                className="h-full w-full object-cover"
              />

              {/* FUTURE IMAGE */}
              {/*
              <Image
                src="/why-choose-us/building.jpg"
                alt="Corporate Building"
                fill
                className="object-cover"
              />
              */}
            </div>

            {/* SOFT OVERLAY */}
            {/* <div className="absolute inset-0 bg-black/[0.03]" /> */}

            {/* LIGHT DEPTH */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_35%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}