"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Cog } from "lucide-react";

const features = [
  {
    title: "Most Affordable Professional Aligner",
    description: "No unnecessary tech, just precision alignment.",
  },
  {
    title: "Free Comprehensive Online Tutorials, Email & Phone Support",
    description: "Learn everything you need with expert guidance.",
  },
  {
    title: "Portable & Versatile",
    description: "Ideal for mobile mechanics and independent garages.",
  },
];

export default function SharkChoose() {

  return (
    <section className="w-full bg-[#f5f5f5] py-24 overflow-hidden">
      <div className="max-w-full mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 items-start">
          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            {/* TITLE */}
            <h2 className="text-[48px] leading-none tracking-[-1.5px] font-medium text-[#242424]">
              Why Choose the Sharkeye?
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 text-[17px] leading-[2] text-[#727272] font-medium max-w-[620px]">
              Versatile mobile car 4 wheel laser aligner for professional
              garages. This sturdy mobile trolley allows for practical storage
              of aligners and accessories with the added bonus of being able to
              'roll' it into, and out of, any corner of your workshop.
            </p>

            {/* FEATURE LIST */}
            <div className="mt-12 space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="flex items-start gap-5"
                >
                  {/* ICON */}
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-[28px] h-[28px] rounded-full border border-black/10 bg-white flex items-center justify-center shadow-sm">
                      <Cog
                        size={15}
                        strokeWidth={2.1}
                        className="text-black"
                      />
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="">
                    <h3 className="text-[22px] leading-[1.4] font-sans tracking-[-0.5px] text-[#1f1f1f]">
                      {feature.title}
                      <span className=" text-[#7a7a7a] font-sans">
                        {" "}
                        — {feature.description}
                      </span>
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* INFO BOXES */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* BOX 1 */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="h-[150px] bg-white border border-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center justify-center px-8 text-center"
              >
                <h4 className="text-[28px] leading-[1.25]  tracking-[-0.8px] text-[#1f1f1f]">
                  Handmade in Sheffield, Yorkshire, England
                </h4>
              </div>

              {/* BOX 2 */}
              <div
                data-aos="fade-up"
                data-aos-delay="220"
                className="h-[150px] bg-white border border-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center justify-center px-8 text-center"
              >
                <h4 className="text-[28px] leading-[1.25]  tracking-[-0.8px] text-[#1f1f1f]">
                  25,000 Units Sold Worldwide Without Issue
                </h4>
              </div>
            </div>

            {/* BUTTON */}
            <div data-aos="fade-up" data-aos-delay="300">
              <button className="cursor-pointer relative mt-14 h-[56px] px-12 bg-[#f0df32] text-black font-black text-[15px] tracking-wide hover:translate-x-1 transition-all duration-300">
                View Product

                {/* ANGLED EDGE */}
                <span className="absolute top-0 right-[-18px] border-t-[28px] border-b-[28px] border-l-[18px] border-t-transparent border-b-transparent border-l-[#f0df32]" />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE AREA */}
          <div
            data-aos="fade-left"
            className="relative bg-[#efefef] min-h-[760px] overflow-hidden"
          >
            {/* LOGO */}
            <div className="absolute top-8 left-8 z-20">
              <div className="bg-black text-[#f0df32] px-5 py-2 rounded-full text-[34px] font-black tracking-tight shadow-lg">
                ROLLER
              </div>
            </div>

            {/* MACHINE MOCKUP */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative scale-[1.1]">
                {/* MAIN BODY */}
                <div className="relative w-[170px] h-[420px] bg-[#1f2937] shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
                  {/* TOP ARM */}
                  <div className="absolute top-[120px] left-[-95px] w-[340px] h-[18px] bg-[#ff4b2b]" />

                  {/* BOTTOM ARM */}
                  <div className="absolute bottom-[85px] left-[-100px] w-[350px] h-[20px] bg-[#ff4b2b]" />

                  {/* CENTER PANELS */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-[40px] w-[55px] h-[150px] bg-black border border-yellow-400" />

                  <div className="absolute left-1/2 -translate-x-1/2 bottom-[80px] w-[55px] h-[120px] bg-black border border-yellow-400" />

                  {/* RED SUPPORT */}
                  <div className="absolute left-[-12px] top-[70px] w-[10px] h-[380px] bg-[#ff4b2b]" />

                  {/* BASE */}
                  <div className="absolute bottom-[-42px] left-[-40px] w-[250px] h-[42px] bg-[#ff4b2b]" />

                  {/* SMALL DETAILS */}
                  <div className="absolute left-[-55px] top-[160px] w-[55px] h-[14px] bg-[#ff4b2b]" />

                  <div className="absolute right-[-55px] top-[160px] w-[55px] h-[14px] bg-[#ff4b2b]" />
                </div>

                {/* WHEELS */}
                <div className="absolute bottom-[-58px] left-[-20px] w-[24px] h-[24px] rounded-full bg-neutral-400 shadow-md" />
                <div className="absolute bottom-[-58px] right-[-20px] w-[24px] h-[24px] rounded-full bg-neutral-400 shadow-md" />

                {/* SIDE CONTROL PANEL */}
                <div className="absolute right-[-110px] bottom-[-10px] w-[46px] h-[220px] bg-[#181818] rounded-md shadow-xl">
                  <div className="absolute inset-x-0 top-3 flex flex-col items-center gap-4">
                    <div className="w-7 h-7 rounded bg-yellow-400" />
                    <div className="w-7 h-7 rounded bg-yellow-400" />
                    <div className="text-[#f0df32] text-[40px] font-black leading-none">
                      3
                    </div>
                    <div className="w-8 h-8 rounded-full bg-red-500" />
                    <div className="w-8 h-8 rounded-full bg-blue-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* LIGHT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-black/[0.04]" />
          </div>
        </div>
      </div>
    </section>
  );
}