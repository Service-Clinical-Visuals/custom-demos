"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-2">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 items-center">
          
          {/* Left Column: Image Placeholder */}
          <div 
            className="w-full h-full min-h-[350px] md:min-h-[480px] relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/60 shadow-md group"
            data-aos="fade-right"
          >

            {/* Stylized background graphics indicating image frame */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-4 border-dashed border-[#004A87]/20 animate-spin-slow"></div>
            </div>

            {/* Ready <img /> tag (currently displaying a gorgeous abstract medical lab themed placeholder) */}
            <img 
              src="/vascular-flow/about.png" 
              alt="Vascular Flow Lab Work" 
              className="w-full h-full object-cover absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-103"
            />
          </div>

          {/* Right Column: Copy & Actions */}
          <div 
            className="flex flex-col items-start"
            data-aos="fade-left"
          >
            <h2 className="text-[26px] md:text-[30px] lg:text-[34px] font-extrabold text-[#212121] leading-tight mb-6">
              About Us
            </h2>
            
            <div className="space-y-5 mb-8">
              <p>
                Welcome to Vascular Flow Technologies. Take a look at what we can offer you including: Spiral Laminar Flow Technology, Medical Device Development and Contract Manufacturing Services. We can assist Companies, Universities, Inventors and SMEs with the development of their medical devices.
              </p>
              
              <p>
                Vascular Flow is an ISO 13485 Medical Device Development company with unique insight and capabilities in pre-clinical development and testing. Our focus is on the research & development of cardiovascular devices with the application of our Spiral Laminar Flow™ Technology to restore the natural pattern of blood flow.
              </p>
              
              <p>
                Vascular Flow are developing new products using the SLF™ technology platform and have considerable experience and understanding of pre-clinical development and testing processes. Having taken products from concept to regulatory approval, Vascular Flow are well placed to offer this service to our clients embarking on a similar path. We work in partnership with a number of leading medical device companies, Universities and SMEs offering a tailored service to assist their development process.
              </p>
            </div>

            <Button variant="split" href="#about-more">
              Learn About Us
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
