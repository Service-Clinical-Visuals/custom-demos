"use client";
import React from "react";
import { Wrench, ArrowRight } from "lucide-react";

const expertiseData = [
  {
    title: "Industry expertise",
    desc: "We work to improve your industrial productivity, maintain a safe operating environment, and minimise the environmental footprint of your business.",
    imgSrc: "/moove/home/card-1.png",
  },
  {
    title: "Dedicated service",
    desc: "We work with leading manufacturers to assist in the research and formulation of state-of-the-art lubricants for the most demanding applications.",
    imgSrc: "/moove/home/card-2.png",
  },
  {
    title: "High performance products",
    desc: "Regardless of the application or industry, our brand portfolio of lubricants and complementary products is uniquely positioned to help you meet current and future challenges.",
    imgSrc: "/moove/home/card-3.png",
  },
];

export default function Expertise() {
  return (
    <section className="w-full bg-[var(--moove-bg-grey)] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">

        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-4 text-[var(--moove-text-dark)]">
            <Wrench className="w-5 h-5" />
            <h6 className="text-[15px]! font-bold tracking-wider text-gray-600">
              Our Services
            </h6>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--moove-text-dark)]">
            The Next Generation of Fluid Technology
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm border-2 border-transparent hover:border-[#006CA5] flex flex-col group transition-colors duration-300"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="py-6 px-6 text-center flex flex-col flex-1">
                <h4 className="text-[22px]! font-bold text-[#006CA5] mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>
                <div className="flex justify-center">
                  <button className="flex items-center bg-[#001C46] hover:bg-[#002D72] text-white transition-colors">
                    <span className="px-6 py-2.5 text-[16px] font-bold">Read More</span>
                    <div className="bg-white text-[#001C46] px-3 py-2.5 border border-[#001C46]">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
