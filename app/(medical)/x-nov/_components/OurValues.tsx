"use client";

import React from "react";
import Button from "./Button";

export default function OurValues() {
  const listItems = [
    "Patient safety, clinical follow-up and long-term results of our implants are the objectives of our company.",
    "Use high industrial and scientific technologies (metallurgy, rheology, tribology, micromechanics, surface coating, microbiology, ...) to ensure the quality of our implants and instruments.",
    "Act in our management with human and environmental ethics in compliance with regulations."
  ];

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="custom-container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Area */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-start" data-aos="fade-right">
            <div className="relative w-full  rounded-[32px] overflow-hidden shadow-xl bg-[#f4f6f9] border border-gray-100 flex items-center justify-center transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
              <img src="/x-nov/values.jpg" alt="Our Values" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center" data-aos="fade-left">
            
            {/* Subhead label with Journey Line */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#EC4899] font-semibold text-sm md:text-[15px] xl:text-[17px] tracking-wider">
                Our Values
              </span>
              <span className="h-[2px] w-12 bg-[#EC4899] rounded-full"></span>
            </div>

            {/* Main Section Title */}
            <h2 className="text-[26px] md:text-[28px] lg:text-[32px] font-semibold text-[#212121] mb-6 leading-tight tracking-tight">
              Driven by Innovation, Quality & Care
            </h2>

            {/* Paragraph */}
            <p className="text-[#6D6B6B] font-light leading-relaxed text-[15px] md:text-[16px] mb-8">
              At X.NOV, we are committed to patient safety, innovation, quality, and ethical practices while delivering advanced orthopaedic solutions and exceptional service through teamwork and continuous development.
            </p>

            {/* Checklist items */}
            <div className="flex flex-col gap-6 mb-10">
              {listItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {/* Filled Pink Circle Checkmark */}
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EC4899] flex items-center justify-center mt-0.5 shadow-sm shadow-[#EC4899]/30">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[14px] md:text-[15px] text-[#6D6B6B] font-normal leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Button>
                Our Core Values
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
