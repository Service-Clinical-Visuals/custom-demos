"use client";

import React from "react";

export default function OurValues() {
  const listItems = [
    "Patient safety, clinical follow-up and long-term results of our implants are the objectives of our company.",
    "Use high industrial and scientific technologies (metallurgy, rheology, tribology, micromechanics, surface coating, microbiology, ...) to ensure the quality of our implants and instruments.",
    "Act in our management with human and environmental ethics in compliance with regulations."
  ];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Area */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-start" data-aos="fade-right">
            <div className="relative w-full aspect-[4/3] lg:aspect-[1.2/1] rounded-[32px] overflow-hidden shadow-xl bg-[#f4f6f9] border border-gray-100 flex items-center justify-center transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
              <img src="/x-nov/values.jpg" alt="Our Values" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center" data-aos="fade-left">
            
            {/* Subhead label with Journey Line */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#E33587] font-semibold text-sm md:text-[15px] tracking-wider">
                Our Values
              </span>
              <span className="h-[2px] w-12 bg-[#E33587] rounded-full"></span>
            </div>

            {/* Main Section Title */}
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#212121] mb-6 leading-tight tracking-tight">
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
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E33587] flex items-center justify-center mt-0.5 shadow-sm shadow-[#E33587]/30">
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
              <button className="group inline-flex items-center gap-3 bg-[#E33587] hover:bg-[#c2226d] text-white font-semibold py-3.5 px-8 rounded-full shadow-lg shadow-[#E33587]/20 hover:shadow-xl hover:shadow-[#E33587]/30 hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer select-none">
                <span className="text-[15px] tracking-wide">Our Core Values</span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
