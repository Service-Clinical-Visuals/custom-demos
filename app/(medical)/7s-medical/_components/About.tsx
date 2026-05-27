"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-[#111111] overflow-hidden">
      {/* Tailwind standard container - no max-width hardcoded */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Responsive Grid Layout (1 column on mobile, 2 columns on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Area (Leaves space for custom image updates) */}
          <div 
            data-aos="fade-right" 
            className="lg:col-span-6 relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-[0_8px_35px_rgba(0,0,0,0.5)] border border-white/10 group"
          >
            {/* 
              IMAGE SPACE EXPLANATION:
              This displays our beautifully generated high-definition Swiss Medical Facility image.
              To replace this image yourself in the future:
              1. Drop your new image file into the `public/medical/7s-medical/` directory.
              2. Update the `src` attribute below to point to your new file (e.g., src="/medical/7s-medical/your-new-image.jpg").
            */}
            <Image
              src="/medical/7s-medical/about_company.png"
              alt="7S Medical International AG Facility"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Subtle premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>

          {/* Right Column: About Content */}
          <div data-aos="fade-left" className="lg:col-span-6 flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl font-bold text-white! tracking-tight mb-6" style={{ color: 'white' }}>
              About Our Company
            </h2>
            
            <div className="space-y-5 mb-8">
              <p className="text-[15px] leading-relaxed text-gray-300!" style={{ color: '#d1d5db' }}>
                7S Medical International AG was founded by partners coming from leading medical technology
                enterprises together with experienced entrepreneurs, who invest in long-term projects and
                sustainable companies. The experience of these partners is complemented by a global network of
                surgeons, developers, manufacturers and distribution partners.
              </p>
              
              <p className="text-[15px] leading-relaxed text-gray-300!" style={{ color: '#d1d5db' }}>
                7S Medical International AG is a dynamic Swiss medtech company based in Oberkirch. We
                distribute surgical instruments and implants and organize versatile hybrid educational events.
              </p>
            </div>

            {/* Mission & Vision Responsive Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
              {/* Card 1: Our Mission */}
              <div className="bg-[#1A1A1A] border border-white/10 rounded-lg p-6 flex flex-col items-center text-center shadow-[0_4px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.3)] transition-all duration-300">
                <h3 className="text-lg font-bold text-white! mb-3 tracking-tight" style={{ color: 'white' }}>
                  Our Mission
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-400!" style={{ color: '#9ca3af' }}>
                  To deliver innovative and reliable orthopedic solutions that enhance surgical precision, improve patient outcomes
                </p>
              </div>

              {/* Card 2: Our Vision */}
              <div className="bg-[#1A1A1A] border border-white/10 rounded-lg p-6 flex flex-col items-center text-center shadow-[0_4px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.3)] transition-all duration-300">
                <h3 className="text-lg font-bold text-white! mb-3 tracking-tight" style={{ color: 'white' }}>
                  Our Vision
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-400!" style={{ color: '#9ca3af' }}>
                  To become a globally trusted leader in orthopedic innovation by advancing patient-focused medical technologies.
                </p>
              </div>
            </div>

            {/* Learn More Button */}
            <Link
              href="#about"
              className="inline-flex items-center justify-center px-6 h-[44px] bg-[#C10230] hover:bg-[#9B0124] text-white text-[13px] font-semibold tracking-wider rounded-[3px] uppercase transition-colors duration-300 shadow-[0_2px_10px_rgba(193,2,48,0.3)]"
            >
              Learn More About Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
