import React from 'react';
import Image from 'next/image';
import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer';
import Link from 'next/link';
import Button from './Button';

export default function Technology() {
  return (
    <section className="w-full bg-[#FCF3EF] py-10 lg:py-15">
      <div className="custom-container px-4 xl:px-0">
        
        {/* Top Row */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center mb-4">
          <div className="order-2 xl:order-1 xl:col-span-7" data-aos="fade-right">
            {/* 360 DEG Placeholder / Video */}
            <div className="w-full aspect-video bg-black flex items-center justify-center relative overflow-hidden ">
              
                 <div className="absolute inset-0 z-0 ">
                        <DynamicVideoPlayer type="360" />
                     </div>
              
             
            </div>
          </div>
          
          <div className="order-1 xl:order-2 xl:col-span-5" data-aos="fade-left">
            <h2 className="section-title text-[#121f38] font-heading font-semibold mb-6 leading-tight">
              Advanced <span className="text-secondary">Smart Patch</span> Technology
            </h2>
            <p className="section-text text-[#546476] font-body mb-6 leading-relaxed">
              Discover the future of wearable medical technology with our advanced Smart Patches, designed to combine intelligent functionality, patient comfort, and reliable medical performance in one seamless solution. Engineered with precision and developed for modern healthcare requirements, our smart patches provide a convenient and efficient approach to monitoring, supporting, and managing essential health-related applications. The lightweight and flexible design allows the patch to integrate naturally with the body while maintaining comfort during extended use.
            </p>
            <p className="section-text text-[#546476] font-body leading-relaxed">
              Every element of the Smart Patch is thoughtfully designed to deliver a balance of technology, usability, and medical reliability. From its compact structure and skin-friendly application to its integrated smart technology, the solution is created to support healthcare professionals and patients with a more connected experience. The 360° product view allows you to explore the patch from every angle and understand the details behind its innovative construction, advanced features, and practical design.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col-reverse xl:grid xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          <div className=" xl:col-span-7" data-aos="fade-right">
            <h2 className="section-title text-[#121f38] font-heading font-semibold mb-6 leading-tight">
              Designed around <span className="text-secondary">Precision and Patient</span> Comfort
            </h2>
            <p className="section-text text-[#546476] font-body mb-8 leading-relaxed">
              Smart Patches Medical solutions are developed with a strong focus on accuracy, convenience, and ease of use. Their compact form factor enables smooth application while reducing unnecessary complexity in everyday medical routines. Advanced components work together within a carefully engineered structure to provide dependable functionality while maintaining a discreet and comfortable profile. This combination of intelligent design and practical usability makes smart patches suitable for a wide range of modern healthcare applications.
            </p>
            <Button href="#">Explore the 360° Experience</Button>
          </div>
          
          <div className="xl:col-span-5 w-full" data-aos="fade-left">
             <div className="relative w-full aspect-video  overflow-hidden">
               <img 
                 src="/medical/tunning-element/landingpage/patch_design_around.webp" 
                 alt="Patient Comfort"                 className="object-cover"
               />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
