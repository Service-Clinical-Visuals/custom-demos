"use client";

import React from "react";

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
    <section className="py-20 md:py-28 bg-[#fdf2f7] relative overflow-hidden">
      {/* Background radial lines placeholder - keeping it soft pink as requested */}
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text and Events Grid */}
          <div className="flex flex-col" data-aos="fade-right">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#212121] mb-6 leading-tight tracking-tight">
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
                  <p className="text-[#E33587] font-semibold text-[14px] mb-1">
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
              <button className="group inline-flex items-center gap-2 bg-[#E33587] hover:bg-[#c2226d] text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-[#E33587]/20 hover:shadow-xl hover:shadow-[#E33587]/30 hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer select-none">
                <span className="text-[14px] tracking-wide">Explore Events</span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex items-center justify-center lg:justify-end h-full" data-aos="fade-left">
            <div className="relative w-full aspect-[4/3] lg:aspect-[1/1.1] rounded-[32px] overflow-hidden shadow-xl bg-[#eef1f6] flex items-center justify-center border border-gray-100">
              <img src="/x-nov/events.png" alt="Our Events" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
