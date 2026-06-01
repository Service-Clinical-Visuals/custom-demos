"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  const listItems = [
    "Founded on March 15, 2003, with a vision to deliver innovative orthopaedic solutions",
    "Works closely with leading orthopaedic surgeons to create advanced medical technologies",
    "Celebrated its 20th anniversary in 2023, marking a major milestone in innovation and growth",
    "Trusted by healthcare professionals in more than 35 countries across Europe and beyond"
  ];

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center" data-aos="fade-right">
            
            {/* Subhead label with Journey Line */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#EC4899] font-semibold text-sm md:text-[15px] tracking-wider">
                Our Journey
              </span>
              <span className="h-[2px] w-12 bg-[#EC4899] rounded-full"></span>
            </div>

            {/* Main Section Title */}
            <h2 className="text-[26px] md:text-[28px] lg:text-[32px] font-semibold text-[#212121] mb-6 leading-tight tracking-tight">
              The History of Group
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-[#6D6B6B] font-light leading-relaxed text-[15px] md:text-[16px] mb-8">
              <p>
                X.NOV is an independent French family group originally formed by a triumvirate of creative enthusiasts with complementary academic and professional backgrounds in the medical sector. The founders decided to unite their know-how and ideas in the service of the patient in the field of orthopaedic surgery. In order to reduce the risks of contamination and to facilitate the work of the personnel in the operating theatre, they develop the first disposable ancillary for the hip.
              </p>
              
              <p>
                At the same time they designed the KAPS® solution for partial knee arthroplasty, which allows the surgeon to adapt to the patient's clinical situation during the operation thanks to an innovative ancillary.
                <br />
                <span className="font-semibold text-[#212121] mt-1 block">
                  These two inventions won awards!
                </span>
              </p>

              <p>
                In 2003, the founders won the national competition for the creation of innovative technology companies organised by the Ministry of Research with the collaboration of Anvar (now BPI).
              </p>
            </div>

            {/* Checklist items */}
            <div className="flex flex-col gap-4 mb-10">
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

            {/* Story CTA Button */}
            <div>
              <Button>
                Our Story
              </Button>
            </div>

          </div>

          {/* Right Column: Headquarter Building Image */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative w-full aspect-[4/3] lg:aspect-[1/1.2] rounded-[32px] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.01]">
              <img 
                src="/medical/x-nov/about.jpg" 
                alt="X.NOV Headquarter Building" 
                className="w-full h-full object-cover object-center" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
