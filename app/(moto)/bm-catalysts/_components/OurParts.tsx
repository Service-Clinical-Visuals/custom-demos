"use client";

import React from "react";
import Button from "./Button";

// Custom premium SVGs to match the 409 piston and 30% scale outline styles exactly
const PistonIcon = () => (
  <svg className="w-8 h-8 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4h14v4H5z" />
    <path d="M8 8v6h8V8" />
    <path d="M12 14v5" />
    <circle cx="12" cy="20" r="1.5" />
  </svg>
);

const ScalesIcon = () => (
  <svg className="w-8 h-8 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v17M12 20H8m8 0h-4" />
    <path d="M6 7h12" />
    <path d="M6 7v4a3 3 0 0 0 6 0V7" />
    <path d="M12 7v4a3 3 0 0 0 6 0V7" />
  </svg>
);

const stats = [
  {
    stat: "200M",
    text: "We Manufacture Automotive Parts For Over 200 Million Vehicles Across Europe, Delivering Reliable Performance And Trusted Aftermarket Solutions Worldwide.",
    icon: <img src="/bm-catalysts/images/parts-1.png" alt="Globe Icon" className="w-9 h-9 object-contain" />
  },
  {
    stat: "14%",
    text: "Everything We Do Is Focussed On Exceeding Quality Standards As Well As Delivering Value E.G. Our Lambda Sensor Ports Are 14% Thicker Than Other Suppliers",
    icon: <img src="/bm-catalysts/images/parts-2.png" alt="Caliper Icon" className="w-9 h-9 object-contain" />
  },
  {
    stat: "409",
    text: "We Manufacture Most Of Our Parts From Premium 409 Grade Stainless Steel Due To Its Strength And Resistance To Corrosion.",
    icon: <PistonIcon />
  },
  {
    stat: "30%",
    text: "On Average, We Can Reduce Your Stock Holdings By Up To 30% Whilst Actually Improving Your Car Parc Coverage - Ultimately Increasing Your Profits",
    icon: <ScalesIcon />
  }
];

export default function OurParts() {
  return (
    <section className="py-16 lg:py-20 bg-[url('/bm-catalysts/images/parts-bg.png')] bg-cover bg-center bg-no-repeat flex justify-center w-full">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Block: Grid for perfect responsiveness and alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-9">
            <h2 className="text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#333333] font-oxanium mb-2">
              Our Parts
            </h2>
            <hr className="w-20 border-t-2 border-[#1B1537]/80 my-3" />
            <p className="text-[#6E777D] font-medium leading-relaxed mt-4 font-exo2 max-w-4xl">
              Delivering High-Quality, Durable, And Performance-Driven Automotive Solutions Designed To Meet The Evolving Demands Of The Automotive Aftermarket Industry. With Extensive Vehicle Coverage, Premium-Grade Materials, And Precision Engineering, Our Products Are Built To Provide Exceptional Reliability, Efficiency, And Long-Lasting Performance.
            </p>
          </div>
          
          <div className="lg:col-span-3 flex lg:justify-end">
            <Button
              href="#products"
              variant="primary"
              size="md"
              rounded="full"
              hasArrow
              className="px-8 shadow-md"
            >
              Explore Parts
            </Button>
          </div>
        </div>

        {/* 4 Cards Stats Grid with concentric double-ring overlapping badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mt-12 pb-12">
          {stats.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-[2rem] p-8 pb-20 flex flex-col items-center text-center relative group hover:scale-[1.02] transition-all duration-300"
              style={{ boxShadow: "0px 3px 8px 0px #0000003D" }}
            >
              {/* Stat Value */}
              <span className="text-[36px] lg:text-[40px] font-bold text-[#1B1537] font-oxanium leading-tight mb-4 group-hover:scale-105 transition-transform duration-300 block">
                {card.stat}
              </span>
              
              {/* Descriptive Text */}
              <p className="text-gray-500 text-[14px] lg:text-[15px] leading-relaxed font-exo2 font-medium">
                {card.text}
              </p>
              
              {/* 🎯 Overlapping Circular Icon Badge */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full bg-[#281B68] border-[8px] border-white flex items-center justify-center text-white transition-all duration-300 group-hover:scale-105 select-none"
                style={{ boxShadow: "0px 3px 8px 0px #0000003D" }}
              >
                {card.icon}
              </div>

            </div>
          ))}
        </div>

        {/* Centered Separation Horizontal Divider & Big Quote */}
        <div className="mt-12">
          <hr className="border-t border-gray-200/80 my-16" />
          
          <h3
            className="text-center text-[20px] md:text-xl lg:text-[26px] font-extrabold text-[#281B68] font-oxanium max-w-5xl mx-auto leading-relaxed px-4 tracking-wider italic"
          >
            "Delivering High-Quality Automotive Parts With Exceptional Coverage, Durable Engineering, And Trusted Performance Across Europe."
          </h3>
        </div>

      </div>
    </section>
  );
}
