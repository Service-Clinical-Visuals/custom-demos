"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex flex-col">
          {/* Row 1: About Us */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left: Image */}
            <div className="w-full" data-aos="fade-right">
              <img 
                src="/alivecor/images/about.png" 
                alt="About Us - Doctor and Patient" 
                className="w-full h-full aspect-[4/1.5] object-cover rounded-[32px] lg:rounded-br-none" 
              />
            </div>
            
            {/* Right: Text */}
            <div className="flex flex-col items-start justify-center py-4 lg:py-6 lg:pl-8" data-aos="fade-left">
              <h2 className="text-[28px] md:text-[32px] font-semibold text-[#004B87] mb-4">
                About Us
              </h2>
              <p className="text-[15px] leading-relaxed mb-6 font-light text-[#484848]">
                AliveCor, Inc. is transforming cardiological care using deep learning. The FDA-cleared KardiaMobile device is the most clinically-validated personal ECG solution in the world. KardiaMobile 6L provides instant detection of Atrial Fibrillation, Bradycardia, Tachycardia, Sinus Rhythm with Supraventricular Ectopy, Sinus Rhythm with Premature Ventricular Contractions, Sinus Rhythm with Wide QRS, and Normal Sinus Rhythm in an ECG.
              </p>
              <p className="text-[15px] leading-relaxed font-light text-[#484848]">
                AliveCor protects its customers with stringent data security and compliance practices, achieving ISO 27001 Certification, SOC 2 Type 2 Certification and HIPAA compliance attestation. AliveCor is a privately-held company headquartered in Mountain View, Calif.
              </p>
            </div>
          </div>

          {/* Row 2: Our Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch mt-8 lg:mt-0">
            {/* Left: Text */}
            <div className="flex flex-col items-start justify-center py-4 lg:py-6 lg:pr-8 order-2 lg:order-1" data-aos="fade-right">
              <h2 className="text-[28px] md:text-[32px] font-semibold text-[#004B87] mb-4">
                 Our solutions
              </h2>
              <h3 className="text-[24px] font-semibold text-[#004B87] mb-2">
                Heart disease is the leading cause of death in the United States
              </h3>
              
              <p className="text-[15px] leading-relaxed mb-8 font-light text-[#484848]">
                AliveCor was founded on the strength of our proprietary technologies: AI-enabled, machine learning-powered ECG sensors that deliver medical-grade heart data anytime, anywhere. Our digital tools help patients access, manage and share their data and connect with cardiologists to better understand and manage their heart health.
              </p>
              <Button variant="outline" size="sm">
                Our Legacy
              </Button>
            </div>
            
            {/* Right: Image */}
            <div className="w-full order-1 lg:order-2" data-aos="fade-left">
              <img 
                src="/alivecor/images/our-solution.png" 
                alt="Our Solutions - People holding KardiaMobile" 
                className="w-full h-full aspect-[4/1.5] object-cover rounded-[32px] lg:rounded-tl-none" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
