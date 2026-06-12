"use client";

import React from "react";
import Button from "./Button";

export default function OurEvents() {
  const events = [
    {
      month: "March 2026",
      details: "2 to 6 March: AAOS - NEW ORLEANS - USA",
    },
    {
      month: "June 2026",
      details: "11 and 12 June: SOO - ANGERS - FRANCE",
    },
    {
      month: "June 2026",
      details: "17 to 19 June: FIME - MIAMI - USA",
    },
    {
      month: "July 2026",
      details: "8 to 10 July: ASIA HEALTH - BANGKOK - THAILAND",
    },
    {
      month: "October 2026",
      details: "15 and 16 October: ISAKOS - BRUSSELS - BELGIUM",
    },
    {
      month: "November 2026",
      details: "11 to 13 November: SOFCOT - CANNES - FRANCE",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[url('/x-nov/events-bg.png')] relative overflow-hidden">
      {/* Background radial lines placeholder - keeping it soft pink as requested */}
      
      <div className="custom-container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text and Events Grid */}
          <div className="flex flex-col" data-aos="fade-right">
            {/* Subhead label */}
            {/* <div className="flex items-center gap-3 mb-4">
              <span className="text-[#EC4899] font-semibold text-sm md:text-[15px] xl:text-[17px] tracking-wider">
                Events
              </span>
              <span className="h-[2px] w-12 bg-[#EC4899] rounded-full"></span>
            </div> */}

            <h2 className="text-[26px] md:text-[28px] lg:text-[32px] font-semibold text-[#212121] mb-6 leading-tight tracking-tight">
              Our Events
            </h2>
            
            <p className="text-[#6D6B6B] font-light leading-relaxed text-[15px] md:text-[16px] mb-10">
              Throughout the year, X.NOV actively participates in a wide range of medical fairs, congresses, and industry events across France and internationally. These events provide valuable opportunities to showcase our latest orthopaedic innovations, connect with healthcare professionals, and exchange expertise with industry experts and partners.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {events.map((event, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl p-4 shadow-sm border border-pink-50 hover:shadow-md transition-shadow duration-300"
                >
                  <p className="text-[#EC4899]! font-semibold! text-[15px]! mb-1">
                    {event.month}
                  </p>
                  <p className="text-[#6D6B6B] font-light text-[13px] leading-snug">
                    {event.details}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Button>
                Explore Events
              </Button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex items-center justify-center lg:justify-end h-full" data-aos="fade-left">
            <div className="relative w-full  rounded-[32px] overflow-hidden shadow-xl bg-[#eef1f6] flex items-center justify-center border border-gray-100">
              <img src="/x-nov/events.png" alt="Our Events" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
