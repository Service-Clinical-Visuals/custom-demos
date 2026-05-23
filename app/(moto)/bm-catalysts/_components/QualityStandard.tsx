"use client";

import React from "react";
import Button from "./Button";
import { Settings, CheckCircle2 } from "lucide-react";

export default function QualityStandard() {
  return (
    <section className="py-16 lg:py-20 flex justify-center w-full bg-[url('/bm-catalysts/images/standard-bg.png')] bg-no-repeat bg-cover bg-center overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Responsive Grid row for Image and Text content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-12">
          
          {/* Left Column: Rounded Branded Warehouse Photo */}
          <div 
            className="w-full"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative group aspect-[1.45/1] bg-slate-100">
              <img
                src="/bm-catalysts/images/quality.jpg"
                alt="Make Us Part of Your Quality Standard"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Copywriting content and promise trigger */}
          <div 
            className="w-full flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            
            <h2 className="text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#333333] font-oxanium mb-2">
              Make Us Part Of Your Quality Standard
            </h2>
            <hr className="border-t border-gray-200/80 my-4" />

            <div className="space-y-5 text-[#6E777D] leading-relaxed font-exo2 font-medium">
              <p>
                What does the word 'quality' mean to you? Our aim is to provide you with products where the fit and performance is of the highest level.
              </p>
              <p>
                All of our parts are rigorously checked and tested to exceed the highest quality and performance standards. All of our homologated catalysts and DPFs are tested in accordance with regulations, guaranteeing total confidence in their performance. This also ensures compliance to European legislative requirements.
              </p>
              <p>
                Our serial number system ensures complete traceability, strict quality control, and consistently reliable products for every customer.
              </p>
            </div>

            <div className="pt-6">
              <Button
                href="#promise"
                variant="primary"
                size="md"
                rounded="full"
                hasArrow
                className="px-8 shadow-md"
              >
                Our Quality Promise
              </Button>
            </div>

          </div>

        </div>

        {/* Centered Separation line carrying the circular badge "S" badge */}
        <div className="relative flex items-center justify-center my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-400/80"></div>
          </div>
        </div>

        {/* 2 Wide Footer Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative py-8">
          
          {/* Decorative Outline Boxes: Left (faded), Center (main color), Right (faded) */}
          <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-visible hidden lg:block">
            {/* Left Faded Box */}
            <div className="absolute inset-y-0 left-0 -translate-x-1/2 h-full aspect-square border-[12px] lg:border-[16px] border-[#281B68]/15"></div>
            
            {/* Center Main Box */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 h-full aspect-square border-[12px] lg:border-[16px] border-[#281B68]"></div>
            
            {/* Right Faded Box */}
            <div className="absolute inset-y-0 right-0 translate-x-1/2 h-full aspect-square border-[12px] lg:border-[16px] border-[#281B68]/15"></div>
          </div>

          {/* Card 1: Fit and Performance */}
          <div
            className="relative z-10 bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100/60 flex flex-col md:flex-row items-start gap-6 hover:shadow-[0_15px_45px_rgb(0,0,0,0.06)] transition-all duration-300"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="w-12 h-12 rounded-full bg-[#1B1537]/5 flex items-center justify-center shrink-0 text-[#1B1537] shadow-sm">
              <img src="/bm-catalysts/images/tyre.png" alt="Fit and Performance" className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#333333] font-oxanium mb-2 tracking-wide">
                High-quality products with superior fit and performance
              </h4>
              <p className="text-[#6E777D] text-[16px] leading-relaxed font-exo2">
                Our products are engineered for exceptional fitment, durability, and reliable performance, delivering consistent quality and efficiency for demanding automotive applications.
              </p>
            </div>
          </div>

          {/* Card 2: Exceed Standards */}
          <div
            className="relative z-10 bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100/60 flex flex-col md:flex-row items-start gap-6 hover:shadow-[0_15px_45px_rgb(0,0,0,0.06)] transition-all duration-300"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="w-12 h-12 rounded-full bg-[#1B1537]/5 flex items-center justify-center shrink-0 text-[#1B1537] shadow-sm">
              <img src="/bm-catalysts/images/tyre.png" alt="Fit and Performance" className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#333333] font-oxanium mb-2 tracking-wide">
                Rigorously tested to exceed quality standards
              </h4>
              <p className="text-[#6E777D] text-[16px] leading-relaxed font-exo2">
                Every component undergoes rigorous testing and detailed quality assurance processes to ensure exceptional durability, reliability, efficiency, and long-lasting aftermarket performance.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
