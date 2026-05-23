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
      <div className="max-w-380 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 items-start">
          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            {/* TITLE */}
            <h2 className="text-4xl leading-none tracking-[-1.5px] font-medium text-[#242424]">
              Why Choose the Sharkeye?
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 text-[16px] leading-[2] text-[#727272] font-medium">
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
                  className="flex items-start gap-5 text-[16px]"
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
                    <h3 className="font-sans leading-[1.4] tracking-[-0.5px] text-[#1f1f1f]">
                      {feature.title}
                      <span className="font-sans text-[#7a7a7a]">
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
                <h4 className="text-xl leading-[1.25]  tracking-[-0.8px] text-[#1f1f1f]">
                  Handmade in Sheffield, Yorkshire, England
                </h4>
              </div>

              {/* BOX 2 */}
              <div
                data-aos="fade-up"
                data-aos-delay="220"
                className="h-[150px] bg-white border border-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center justify-center px-8 text-center"
              >
                <h4 className="text-xl leading-[1.25]  tracking-[-0.8px] text-[#1f1f1f]">
                  25,000 Units Sold Worldwide Without Issue
                </h4>
              </div>
            </div>

            {/* BUTTON */}
            <div data-aos="fade-up" data-aos-delay="300">
              <button className="cursor-pointer relative mt-14 h-[56px] px-12 bg-[#f0df32] text-black font-black text-[16px] tracking-wide hover:translate-x-1 transition-all duration-300">
                View Product

                {/* ANGLED EDGE */}
                <span className="absolute top-0 right-[-18px] border-t-[28px] border-b-[28px] border-l-[18px] border-t-transparent border-b-transparent border-l-[#f0df32]" />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE AREA */}
          <div
            data-aos="fade-left"
            className="relative min-h-[760px] overflow-hidden"
          >
            <img src="/moto/shark/shark-choose.png" alt="choose" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}