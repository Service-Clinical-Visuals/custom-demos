import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function Wellness() {
  return (
    <section className="w-full bg-[#FAF4EF] pt-10 lg:pt-15 pb-6 lg:pb-8 relative">
      {/* Background decoration block on the first half */}
      <div className="absolute top-0 left-0 w-full h-[40%] bg-wellness-gradient z-0 hidden lg:block"></div>
      
      <div className="custom-container px-4 xl:px-0 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
          {/* Left Side: Image */}
          <div className="order-2 lg:order-1 xl:order-1" data-aos="fade-right">
             <div className="relative w-full aspect-[16/9]   overflow-hidden mt-5">
               <img 
                 src="/medical/tunning-element/landingpage/Image 2.webp"
                 alt="New Level 4 Aqua Tune"                  
                 className="object-cover"
               />
             </div>
          </div>
          
          {/* Right Side: Content */}
          <div data-aos="fade-left" className="order-1 lg:order-2 bg-white/40 xl:bg-transparent p-6 xl:p-0 rounded-lg">
            <h2 className="section-title text-[#121f38] font-heading font-semibold mb-6 leading-tight">
              Make your <span className="text-[#9a5631]">wellness</span> easy.™
            </h2>
            <p className="section-text text-[#546476] manrope mb-6 leading-relaxed">
              Experience natural relief and improved cellular health with Tuning Element's innovative bio-frequency wellness products. From frequency patches to smart jewelry, our wearable technology provides non-invasive support for holistic pain management and optimal cell function.
            </p>
            <p className="section-text text-[#546476] manrope mb-6 leading-relaxed">
              Tuning Element's proprietary bio-frequency blends are available in a variety of convenient lifestyle products, including frequency skin patches, smart jewelry, water bottles, and wellness clips. Each product is engineered to emit specific cellular communication resonance signals that target your body's unique needs. Acting like a tuning fork for your body, these gentle frequencies help harmonize and energize your cells' natural electromagnetic fields.
            </p>
            <p className="section-text text-[#546476] manrope mb-8 leading-relaxed">
              Our products have been rigorously tested by third-party clinics and featured in leading medical and scientific literature.
            </p>
            <Button href="#">Read More About Us</Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
