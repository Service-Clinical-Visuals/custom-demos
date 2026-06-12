"use client";

import React from "react";

const services = [
  {
    title: "Computer Aided Design Services",
    image: "/vascular-flow/service-1.png",
    description: "Vascular Flow utilises the latest Solidworks 3D CAD software to compliment its R&D offering...",
    link: "#cad"
  },
  {
    title: "In Vitro Flow Services",
    image: "/vascular-flow/service-2.png",
    description: "In vitro tests with a bespoke, computer-controlled flow rig are used to verify the outcomes of medical devices ...",
    link: "#in-vitro"
  },
  {
    title: "Prototyping & Testing Services",
    image: "/vascular-flow/service-3.png",
    description: "To assist our clients to rapidly get their products to market, we offer a range of rapid prototyping services including ...",
    link: "#prototyping"
  }
];

export default function MedicalServices() {
  return (
    <section id="services" className="w-full py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-2">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-14 items-stretch">
          
          {/* Left Column: Heading & Subtext (Spans 4 columns) */}
          <div className="xl:col-span-4 flex flex-col justify-center items-start text-left" data-aos="fade-right">
            <h2 className="text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#212121] leading-tight mb-6">
              Medical Device <br className="hidden md:block" />
              Development Services
            </h2>
            
            <p>
              We understand the financial constraints when developing a new cardiovascular medical device and will work with you to deliver cost effective solutions to your needs. We understand the financial constraints when developing a new cardiovascular medical device and will work with you to deliver cost effective solutions to your needs.
            </p>

            {/* Static Navigation Arrows (UI Only, No functionality) */}
            <div className="flex gap-4 mt-8">
              <div className="w-12 h-12 rounded-md border border-gray-300 flex items-center justify-center text-gray-400 hover:border-[#004A87] hover:text-[#004A87] hover:shadow-md transition-all cursor-pointer">
                <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="w-12 h-12 rounded-md border border-[#004A87] bg-[#004A87] flex items-center justify-center text-white shadow-md hover:bg-[#003865] transition-all cursor-pointer">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Equal Height Static Grid (Spans 8 columns) */}
          <div className="xl:col-span-8 w-full" data-aos="fade-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full items-stretch">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex flex-col h-full bg-[#004A87] rounded-2xl overflow-hidden shadow-lg border border-[#004A87]/10 transition-transform duration-300 hover:-translate-y-1 group"
                >
                  {/* Top Image */}
                  <div className="w-full h-[180px] relative overflow-hidden select-none">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Bottom Deep Blue Content Block */}
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <h3 className="text-white font-extrabold text-[18px] md:text-[20px] leading-snug mb-3">
                      {service.title}
                    </h3>
                    <div className="w-full h-px bg-white/50 my-2"></div>
                    
                    <p className="leading-relaxed mb-6 flex-grow text-white!">
                      {service.description}
                    </p>
                    
                    <a
                      href={service.link}
                      className="text-white hover:text-[#00A0E0] text-[14px] lg:text-[15px] font-bold underline transition-colors duration-200 mt-auto inline-block"
                    >
                      Read More...
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
