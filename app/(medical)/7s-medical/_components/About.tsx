"use client";

import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative w-full py-16 md:py-20 overflow-hidden">
      {/* Tailwind standard container - no max-width hardcoded */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Responsive Grid Layout (1 column on mobile, 2 columns on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Area (Leaves space for custom image updates) */}
          <div 
            data-aos="fade-right" 
            className="lg:col-span-6 relative w-full aspect-[4/3.5] rounded-xl overflow-hidden shadow-[0_8px_35px_rgba(0,0,0,0.1)] border border-gray-200 group"
          >

            <img
              src="/7s-medical/about.png"
              alt="7S Medical International AG Facility"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right Column: About Content */}
          <div data-aos="fade-left" className="lg:col-span-6 flex flex-col items-start">
            <h2 className="text-[28px] md:text-[30px] lg:text-[32px] font-bold mb-4">
              About Our Company
            </h2>
            
            <div className="space-y-5 mb-8">
              <p className="leading-relaxed">
                7S Medical International AG was founded by partners coming from leading medical technology
                enterprises together with experienced entrepreneurs, who invest in long-term projects and
                sustainable companies. The experience of these partners is complemented by a global network of
                surgeons, developers, manufacturers and distribution partners.
              </p>
              
              <p className="leading-relaxed">
                7S Medical International AG is a dynamic Swiss medtech company based in Oberkirch. We
                distribute surgical instruments and implants and organize versatile hybrid educational events.
              </p>
            </div>

            {/* Mission & Vision Responsive Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
              {/* Card 1: Our Mission */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300">
                <h3 className="text-lg font-bold  mb-3 tracking-tight">
                  Our Mission
                </h3>
                <p className="text-[16px]! leading-relaxed">
                  To deliver innovative and reliable orthopedic solutions that enhance surgical precision, improve patient outcomes
                </p>
              </div>

              {/* Card 2: Our Vision */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
                  Our Vision
                </h3>
                <p className="text-[16px]! leading-relaxed">
                  To become a globally trusted leader in orthopedic innovation by advancing patient-focused medical technologies.
                </p>
              </div>
            </div>

            {/* Learn More Button */}
            <Link
              href="#about"
              className="inline-flex items-center justify-center px-6 h-[44px] bg-[#CE112D] hover:bg-[#A70F25] text-white text-[13px] font-semibold tracking-wider rounded-[3px] uppercase transition-colors duration-300 shadow-[0_2px_10px_rgba(193,2,48,0.3)]"
            >
              Learn More About Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
