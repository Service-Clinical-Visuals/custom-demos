"use client";

import { useState } from "react";
import "aos/dist/aos.css";
import DeltaScrollRevealText from "./DeltaScrollRevealText";

const features = [
  {
    badge: "ISO 13485:2016",
    hoverImg: "/delta/delta-comfort-1.png",
    title: "ISO Certified",
    description:
      "Our devices meet the rigorous ISO 13485:2016 standards for medical device quality. We maintain MDSAP certification to ensure global regulatory excellence.",
  },
  {
    badge: "Comfort",
    hoverImg: "/delta/delta-comfort-2.png",
    title: "The Technology",
    description:
      "Automatically maintain constant warmth and moisture to prevent dry throat and congestion, without you touching a settings.",
  },
  {
    badge: "Proudly Canadian",
    hoverImg: "/delta/delta-comfort-3.png",
    title: "The Origin",
    description:
      "Licensed by Health Canada. Assembled in Ontario. We combined hospital-grade precision with a direct-to-you model that respects your time, your wallet, and your health",
  },
];

export default function DeltaComfort() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const displayIndex = hoveredIndex ?? activeIndex;
  const activeImg = features[displayIndex].hoverImg;

  return (
    <section className="relative overflow-hidden bg-[#dfe7e3] py-24 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* Top Content */}
        <div
          className="text-center max-w-[900px] mx-auto"
          data-aos="fade-up"
        >
          {/* Small Label */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-[8px] h-[8px] rounded-full bg-[#00695f]" />

            <p className="text-[16px] text-[#8a8a8a] font-medium">
              Comfort solutions
            </p>
          </div>

          {/* Heading */}
          <DeltaScrollRevealText text="Your Journey to Restful Nights Begins Here." className="text-[#232323] text-4xl  leading-[1.08] font-semibold">
          </DeltaScrollRevealText>
        </div>

        {/* Main Layout */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            {/* Intro Paragraph */}
            <p className="text-[#4b4b4b] text-[16px] leading-[1.9]">
              Designed to deliver trusted sleep therapy solutions with comfort,
              safety, and advanced performance. Engineered with precision
              technology to support better sleep and improved respiratory care.
            </p>

            {/* Feature List */}
            <div className="mt-5 flex flex-col gap-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className={`py-3 px-4 rounded-[10px] border border-[#979797] cursor-pointer transition-colors duration-200 ${displayIndex === index ? "bg-[#00695f]" : ""
                    }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => { setActiveIndex(index); setHoveredIndex(null); }}
                >
                  {/* Badge */}

                  {/* Title */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className={`mt-3 text-[#2a2a2a] text-xl font-semibold leading-none ${displayIndex === index ? "text-white" : "text-[#2a2a2a]"}`}>
                      {item.title}
                    </h3>
                    <div className={`inline-flex items-center justify-center px-3 py-2 rounded-full ${displayIndex === index ? "bg-white" : "bg-[#00695f]"}`}>
                      <span className={`text-[14px] font-bold ${displayIndex === index ? "text-[#00695f]" : "text-white"}`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`mt-3 text-[#666666] text-[16px] leading-[1.9] ${displayIndex === index ? "text-white" : "text-[#666666]"}`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div
            className="relative rounded-[26px] overflow-hidden h-[620px] bg-[#cfd8d4]"
            data-aos="fade-left"
          >
            <img
              src={activeImg}
              alt="Feature Visual"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}