"use client";

import React from "react";
import Button from "./Button";

export default function OneCableDesign() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-12">
        
        {/* Top Part: First Grid (Content & Image Collage) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-center mb-16">
          
          {/* Left Column: Text Content and Lists */}
          <div className="flex flex-col items-start xl:col-span-8" data-aos="fade-right">
            <h2 className="text-[28px] md:text-[32px] font-semibold text-[#004B87] mb-6 leading-tight">
              One-cable design + AI trained with one million ECGs.
            </h2>
            
            <p className="text-[15px] leading-relaxed mb-6 font-light text-[#666666]">
              The FDA-cleared Kardia 12L is an AI-powered handheld 12-lead resting ECG system. With simplified leadset technology, Kardia 12L offers outstanding clinical efficiency that expands access to 12-lead recordings in more settings than ever before. Its unique single-cable design makes lead placement more intuitive and less error-prone, so even qualified personnel with infrequent ECG experience can acquire an accurate recording in minutes.
            </p>
            
            <p className="text-[15px] leading-relaxed mb-8 font-light text-[#666666]">
              And with 1 million ECGs from leading U.S. medical institutions, our team developed a robust algorithm with multiple deep neural network AI models. The Kardia 12L ECG algorithm received FDA 510(k) clearance by demonstrating substantial equivalence to the state-of-the-art 12-lead ECG algorithm.
            </p>
            
            {/* Features Bullet List */}
            <div className="flex flex-col gap-4 w-full">
              {/* Item 1 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#004B87]/10 flex items-center justify-center mt-1">
                  <svg className="w-3.5 h-3.5 text-[#004B87]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[14px] leading-normal text-[#666666]">
                  <strong className="text-[#004B87] font-semibold">Major Rhythm Types</strong> - Normal Sinus Rhythm, Sinus Rhythm, Atrial Fibrillation
                </p>
              </div>
              
              {/* Item 2 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#004B87]/10 flex items-center justify-center mt-1">
                  <svg className="w-3.5 h-3.5 text-[#004B87]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[14px] leading-normal text-[#666666]">
                  <strong className="text-[#004B87] font-semibold">Rhythm Modifiers</strong> - 1st Degree AV Block, High Degree AV Block, Sinus Arrhythmia
                </p>
              </div>
              
              {/* Item 3 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#004B87]/10 flex items-center justify-center mt-1">
                  <svg className="w-3.5 h-3.5 text-[#004B87]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[14px] leading-normal text-[#666666]">
                  <strong className="text-[#004B87] font-semibold">Hypertrophy</strong> - Left Ventricle Hypertrophy (LVH), Right Ventricle Hypertrophy (RVH)
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column: 4 Square Images Grid */}
          <div className="w-full xl:col-span-4 mx-auto lg:hidden xl:block" data-aos="fade-left" data-aos-delay="200">
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1 */}
              <div className="aspect-square rounded-[24px] overflow-hidden shadow-sm">
                <img 
                  src="/alivecor/images/one-cable-1.png" 
                  alt="Doctor and patient using Kardia device" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Image 2 */}
              <div className="aspect-square rounded-[24px] overflow-hidden shadow-sm">
                <img 
                  src="/alivecor/images/one-cable-2.png" 
                  alt="Smiling people holding KardiaMobile devices" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Image 3 */}
              <div className="aspect-square rounded-[24px] overflow-hidden shadow-sm">
                <img 
                  src="/alivecor/images/one-cable-3.png" 
                  alt="Kardia 12L resting ECG system" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Image 4 */}
              <div className="aspect-square rounded-[24px] overflow-hidden shadow-sm">
                <img 
                  src="/alivecor/images/one-cable-4.jpg" 
                  alt="Kardia accessories" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Part: Second Grid (Streamlined Workflow Banner) */}
        <div className="bg-[#1b5088] rounded-[24px] p-8 md:p-10 lg:p-12 text-white! shadow-lg" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center lg:items-stretch">
            
            {/* Column 1: Title and Call to Action */}
            <div className="flex flex-col justify-center items-start lg:pr-8">
              <h3 className="text-[28px] md:text-[32px] font-semibold text-white! mb-6 leading-tight">
                Streamlined Workflow
              </h3>
              
              <Button variant="white-outline" size="sm">
              Find Your Solution
            </Button>
            </div>
            
            {/* Column 2: App step description */}
            <div className="flex flex-col justify-start  lg:border-l lg:border-white/20 lg:px-8  py-4 lg:py-0">
              <h4 className="text-[18px] md:text-[20px] font-semibold text-white! mb-3 leading-snug">
                Get started with the KardiaStation app
              </h4>
              <p className="leading-relaxed text-white!">
                The KardiaStation app, compatible with most smartphones and tablets, guides users in selecting one of two lead set placement options depending on patient symptoms.
              </p>
            </div>
            
            {/* Column 3: Recording step description */}
            <div className="flex flex-col justify-start lg:border-l lg:border-white/20 lg:pl-8 xl:pl-12 py-4 lg:py-0">
              <h4 className="text-[18px] md:text-[20px] font-semibold text-white! mb-3 leading-snug">
                Record a 12-lead ECG
              </h4>
              <p className="leading-relaxed text-white!">
                From KardiaStation, record a 12-lead ECG with just five electrodes. Providing eight standard diagnostic-bandwidth leads, it synthesizes the remaining four leads.
              </p>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
