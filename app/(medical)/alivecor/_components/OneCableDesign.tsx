"use client";

import React from "react";
import Button from "./Button";

export default function OneCableDesign() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center 2xl:items-start">
          
          {/* Left Column: Text Content and Cards */}
          <div className="flex flex-col items-start xl:col-span-7" data-aos="fade-right">
            <h2 className="text-[28px] md:text-[32px] font-semibold text-[#004B87] mb-4 leading-tight">
              One-cable design + AI trained with one million ECGs.
            </h2>
            
            <p className="font-sans text-[15px] leading-relaxed mb-6 font-light text-[#484848]">
              The FDA-cleared Kardia 12L is an AI-powered handheld 12-lead resting ECG system. With simplified leadset technology, Kardia 12L offers outstanding clinical efficiency that expands access to 12-lead recordings in more settings than ever before. Its unique single-cable design makes lead placement more intuitive and less error-prone, so even qualified personnel with infrequent ECG experience can acquire an accurate recording in minutes.
            </p>
            
            <p className="font-sans text-[15px] leading-relaxed mb-8 font-light text-[#484848]">
              And with 1 million ECGs from leading U.S. medical institutions, our team developed a robust algorithm with multiple deep neural network AI models. The Kardia 12L ECG algorithm received FDA 510(k) clearance by demonstrating substantial equivalence to the state-of-the-art 12-lead ECG algorithm.
            </p>
            
            <Button variant="outline" size="sm" className="mb-8">
              Discover Solutions
            </Button>

            {/* Workflow Section */}
            <h3 className="text-[28px] md:text-[32px] font-semibold text-[#004B87] mb-4">
              Streamlined Workflow
            </h3>
            
            <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4 w-full">
              {/* Card 1 */}
              <div className="bg-[#1b5088] rounded-xl p-5 flex flex-col shadow-sm text-white!">
                <h4 className="font-sans text-[15px] font-bold mb-3 leading-snug text-white!">
                  Get started with the KardiaStation app
                </h4>
                <p className="font-sans text-[12px] leading-relaxed font-light text-white!">
                  The KardiaStation app, compatible with most smartphones and tablets, guides users in selecting one of two lead set placement options depending on patient symptoms.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-[#1b5088] rounded-xl p-5 flex flex-col shadow-sm text-white!">
                <h4 className="font-sans text-[15px] font-bold mb-3 leading-snug text-white!">
                  Record a 12-lead ECG
                </h4>
                <p className="font-sans text-[12px] leading-relaxed font-light text-white!">
                  From KardiaStation, record a 12-lead ECG with just five electrodes. Providing eight standard diagnostic-bandwidth leads, it synthesizes the remaining four leads.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-[#1b5088] rounded-xl p-5 flex flex-col shadow-sm text-white!">
                <h4 className="font-sans text-[15px] font-bold mb-3 leading-snug text-white!">
                  Share ECGs for quick review
                </h4>
                <p className="font-sans text-[12px] leading-relaxed font-light text-white!">
                  Patient data are automatically uploaded to the KardiaPro® web portal, a secure and streamlined platform to manage and review patient ECG history.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Single Image Placeholder */}
          <div className="w-full xl:col-span-5" data-aos="fade-left" data-aos-delay="200">
            {/* The user requested a single image instead of a layout here */}
            <img 
              src="/alivecor/images/ecg.png" 
              alt="One-cable design image collage" 
              className="w-full h-full lg:hidden xl:block rounded-[32px] object-cover shadow-sm"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
