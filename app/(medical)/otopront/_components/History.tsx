"use client";

import React, { useState } from "react";
import { CheckSquare } from "lucide-react";

export default function History() {
  const [activeIndex, setActiveIndex] = useState(0);

  const historyData = [
    {
      year: "1949",
      description: "In a collaboration with engaged ENT physicians, in particular the then head physician of the ENT department of the Wiesbaden Städt."
    },
    {
      year: "1950",
      description: "The Otopront column is exhibited for the first time at the 21st Annual ENT Conference in Bad Kissingen and attracts a great deal of attention."
    },
    {
      year: "1959",
      description: "The company moves to Hohenstein Breithardt, where the headquarters are still located today."
    }
  ];

  return (
    <section className="w-full py-16 py-20 bg-[#C23A4A] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <h2 className="text-[26px] md:text-[36px] font-semibold text-white mb-4 leading-tight">
            Our Journey
          </h2>
          <p className="text-white! leading-relaxed max-w-6xl">
            For decades, Otopront has been redefining excellence in ENT innovation with a passion for precision, care, and advanced medical engineering. What began as a groundbreaking idea in 1949 evolved into a globally trusted name in ENT treatment and diagnostic solutions. Driven by continuous research and technological advancement, Otopront continues to shape the future of modern healthcare while honoring a legacy built on innovation and trust.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative w-full pb-12 mt-16 md:mt-24" data-aos="fade-up">
          
          {/* Connecting Line */}
          {/* The line passes through the center of the dots. Dot center is at 5px. We position line at top: 4px or top: 5px */}
          <div className="absolute top-[5px] left-[32px] right-[32px] h-[1px] bg-white z-0 hidden md:block"></div>
          
          {/* Exact checkmark positions accounting for the grid's columns and gap-8 (32px gap) */}
          {(() => {
            const checkmarkPositions = [
              "calc(0% + 32px)",
              "calc(33.333% + 42.67px)",
              "calc(66.666% + 53.33px)"
            ];
            return (
              <div 
                className="absolute -top-[24px] hidden md:block bg-[#C23A4A] px-1 z-20 transition-all duration-500 ease-out"
                style={{ 
                  left: checkmarkPositions[activeIndex]
                }}
              >
                 <CheckSquare size={18} className="text-white animate-pulse" strokeWidth={2.5} />
              </div>
            );
          })()}

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            
            {historyData.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center md:items-start relative mt-10 md:mt-0 px-4 md:px-0 group cursor-pointer h-full"
                onMouseEnter={() => setActiveIndex(index)}
              >
                
                {/* Timeline Dot */}
                <div className={`w-[10px] h-[10px] rounded-full bg-white mb-8 hidden md:block relative ml-9 z-10 shadow-[0_0_0_8px_#C23A4A] transition-transform duration-300 ${activeIndex === index ? "scale-125" : ""}`}></div>

                {/* Timeline Card */}
                <div className={`relative w-full bg-white p-8 md:p-10 shadow-lg mt-4 md:mt-0 transition-all duration-300 rounded-[8px] flex flex-col flex-1 ${activeIndex === index ? "translate-y-[-8px] shadow-2xl ring-1 ring-white/10" : "opacity-90 hover:opacity-100"}`}>
                  {/* Upward Triangle Pointer */}
                  <div className="absolute -top-[10px] left-[32px] w-[20px] h-[20px] bg-white transform rotate-45 hidden md:block"></div>
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-[22px] font-bold text-[#111111] mb-4">
                      {item.year}
                    </h3>
                    <p className="text-[#484848] leading-relaxed flex-1">
                      {item.description}
                    </p>
                  </div>
                </div>
                
              </div>
            ))}
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
