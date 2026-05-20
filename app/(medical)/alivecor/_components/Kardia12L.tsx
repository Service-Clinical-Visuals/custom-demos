"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";
import { Pointer } from "lucide-react";

export default function Kardia12L() {
  return (
    <section className="bg-[#004B87] py-16 md:py-20 text-white">
      <div className="container mx-auto px-4 lg:px-12">
        
        {/* Top Part: 360 Video and Main Text */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left: 360 Video */}
          <div className="w-full rounded-3xl aspect-video flex items-center justify-center overflow-hidden" data-aos="fade-right">
            <div className="relative w-full h-full">
              <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover mix-blend-normal" />
            </div>
          </div>

          {/* Right: Kardia 12L Description */}
          <div className="flex flex-col items-start" data-aos="fade-left">
            <h2 className="text-[28px] md:text-[32px] font-semibold mb-4 text-white!">
              Kardia 12L
            </h2>
            <p className="font-sans text-[14px] leading-relaxed mb-6 font-light text-white!">
              Kardia 12L is a highly portable FDA 510(k) cleared 12-lead resting ECG system with simplified leadset technology. Paired with our sophisticated AI algorithm, Kardia 12L offers healthcare professionals outstanding clinical efficiency, making critical data accessible in more places, more often.
            </p>
            <p className="font-sans text-[14px] leading-relaxed mb-8 font-light text-white!">
              Kardia 12L is intended for use by qualified healthcare professionals or trained personnel. Activation of the Kardia 12L requires a valid National Provider Identifier (NPI) number. The provisional automated ECG analysis should not be used for clinical action if it has not been reviewed by a qualified healthcare professional capable of independently interpreting the ECG signal.
            </p>
            <Button variant="white-outline" size="sm">
              Find Your Solution
            </Button>
          </div>
          
        </div>

        {/* Bottom Part: Features Cards and Accessory Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Three Feature Cards */}
          <div className="lg:col-span-12 xl:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="border border-white/80 rounded-2xl p-5 xl:p-6 flex flex-row items-start gap-3 xl:gap-4 hover:bg-white/5 transition-colors" data-aos="fade-up" data-aos-delay="100">
              <Pointer size={20} className="text-white transform rotate-90 flex-shrink-0 mt-1" strokeWidth={1.5} />
              <p className="font-serif text-[13px] xl:text-[14px] leading-[1.6] font-normal text-white!">
                CME/Professional Development Reimbursement: Kardia 12L may be eligible for reimbursement through CME or professional development funds. Check your employer's policy for eligibility.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="border border-white/80 rounded-2xl p-5 xl:p-6 flex flex-row items-start gap-3 xl:gap-4 hover:bg-white/5 transition-colors" data-aos="fade-up" data-aos-delay="200">
              <Pointer size={20} className="text-white transform rotate-90 flex-shrink-0 mt-1" strokeWidth={1.5} />
              <p className="font-serif text-[13px] xl:text-[14px] leading-[1.6] font-normal text-white!">
                HSA/FSA Eligible: Kardia 12L may be eligible for reimbursement using your HSA/FSA funds. Check with your plan administrator for details.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="border border-white/80 rounded-2xl p-5 xl:p-6 flex flex-row items-start gap-3 xl:gap-4 hover:bg-white/5 transition-colors" data-aos="fade-up" data-aos-delay="300">
              <Pointer size={20} className="text-white transform rotate-90 flex-shrink-0 mt-1" strokeWidth={1.5} />
              <p className="font-serif text-[13px] xl:text-[14px] leading-[1.6] font-normal text-white!">
                FDA-cleared 35 determinations (14 arrhythmias and 21 morphologies), including acute myocardial infarction (MI) and the most common types of cardiac ischemia.
              </p>
            </div>
            
          </div>
          
          {/* Right Accessory Image */}
          <div className="hidden xl:block xl:col-span-3 w-full flex items-center justify-center" data-aos="fade-left" data-aos-delay="400">
            <img 
              src="/alivecor/images/kardia.png" 
              alt="Kardia 12L Accessories" 
              className="w-full h-auto rounded-3xl object-cover shadow-lg" 
            />
          </div>
          
        </div>

      </div>
    </section>
  );
}
