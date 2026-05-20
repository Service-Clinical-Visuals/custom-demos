"use client";

import { useState } from "react";
import "aos/dist/aos.css";

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
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const activeImg = features[hoveredIndex].hoverImg;

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

            <p className="text-[16px] text-[#8a8a8a] font-medium tracking-[-0.3px]">
              Comfort solutions
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-[#232323] text-4xl  leading-[1.08] tracking-[-2.5px] font-semibold">
            Your Journey to Restful Nights Begins Here.
          </h2>
        </div>

        {/* Main Layout */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-start">
          {/* Left Content */}
          <div data-aos="fade-right">
            {/* Intro Paragraph */}
            <p className="text-[#4b4b4b] text-[16px] leading-[1.9]">
              Designed to deliver trusted sleep therapy solutions with comfort,
              safety, and advanced performance. Engineered with precision
              technology to support better sleep and improved respiratory care.
            </p>

            {/* Feature List */}
            <div className="mt-5 flex flex-col">
              {features.map((item, index) => (
                <div
                  key={index}
                  className={`py-3 border-b border-[#b8c0bc] px-4 rounded-[10px] cursor-pointer transition-colors duration-200 ${
                    hoveredIndex === index ? "bg-white" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(0)}
                >
                  {/* Badge */}
                  <div className="inline-flex items-center justify-center px-6 py-2 rounded-[3px] bg-[#00695f]">
                    <span className="text-white text-[16px] font-medium tracking-[-0.2px]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 text-[#2a2a2a] text-xl font-semibold tracking-[-1.4px] leading-none">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[#444444] text-[16px] leading-[1.9] ">
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