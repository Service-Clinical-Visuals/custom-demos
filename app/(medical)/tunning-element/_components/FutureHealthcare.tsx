import React from 'react';
import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer';

export default function FutureHealthcare() {
  return (
    <section className="w-full bg-[#FCF3EF] py-10 lg:py-15">
      <div className="custom-container px-4 xl:px-0">
        
        {/* Text Content */}
        <div className="text-center max-w-7xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="section-title text-[#121f38] font-heading font-semibold mb-6">
            Smart Patches Designed to <span className="text-secondary">Connected Technology Together</span> for the Future Healthcare
          </h2>
          <p className="section-text text-[#546476] manrope leading-relaxed ">
            Smart Patches Medical combines advanced smart technology, thoughtful engineering, and patient-focused design to create innovative solutions for modern healthcare applications. Designed to deliver a seamless balance of functionality, comfort, and reliability, our smart patches integrate intelligent features within a lightweight and flexible form factor. Every component is carefully developed to support convenient application.
          </p>
        </div>

        {/* Video Clip 2 Placeholder */}
        <div className="w-full max-w-7xl mx-auto aspect-video bg-black flex items-center justify-center relative overflow-hidden shadow-xl" data-aos="zoom-in">
           
           
             <div className="absolute inset-0 ">
               <DynamicVideoPlayer type="short-2" />
             </div>
          
        </div>

      </div>
    </section>
  );
}
