"use client";

import { ChevronRight, Star } from "lucide-react";
import Button from "./Button";

export default function AboutEndoscopy() {
  return (
    <section className="py-24 bg-[#f8f9fa] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left: Image Collage */}
          <div data-aos="fade-right" className="relative">
            {/* Decorative Teal Outline (Top Right) */}
            <div className="hidden lg:block absolute top-40 right-10 w-52 h-52 border-t-[12px] border-r-[12px] border-[#00AFAF] z-0" />

            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-square lg:w-[85%] bg-gray-200 overflow-hidden shadow-2xl z-10 border-[6px] border-white">
                 <img src="/xion/images/about-1.png" alt="Exhibition" className="w-full h-full object-cover" />
              </div>
              
              {/* Secondary Inset Image (Bottom Right) */}
              <div 
                className="hidden lg:block absolute right-0 -bottom-10 w-[60%] aspect-[1.4/1] bg-gray-300 overflow-hidden shadow-2xl border-[12px] border-white z-30"
              >
                 <img src="/xion/images/about-2.png" alt="Surgery" className="w-full h-full object-cover" />
              </div>
              
              {/* Teal Experience Badge (Floating Left) */}
              <div 
                className="hidden lg:flex absolute -left-12 top-[10%] bg-[#00AFAF] text-white pt-12 pb-10 px-8 z-40 flex flex-col items-center text-center min-w-[210px] shadow-2xl"
              >
                 {/* Precise Tail Implementation (Bottom Left) */}
                 <div className="absolute left-0 bottom-0 translate-y-full w-0 h-0 border-t-[30px] border-t-[#00AFAF] border-l-[30px] border-l-transparent" />

                 {/* Medal Icon Simulation */}
                 <div className="relative w-16 h-16 mb-8 flex flex-col items-center">
                    <div className="flex gap-1.5 -mb-1">
                       <div className="w-5 h-8 bg-white/40 skew-x-[15deg]" />
                       <div className="w-5 h-8 bg-white/40 -skew-x-[15deg]" />
                    </div>
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner">
                       <Star className="text-[#00AFAF] fill-[#00AFAF]" size={24} />
                    </div>
                 </div>
                 
                 <div className="lg:text-[38px] text-[20px] font-black mb-1 tracking-tight leading-none">30 Years</div>
                 <div className="lg:text-[16px] text-[12px] font-bold mt-2 tracking-wide uppercase">Working Experience</div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div data-aos="fade-left" className="grid gap-8">
            <div>
              <span className="text-[#00AFAF] font-bold text-[16px] mb-3 block">XION – See More Than Others.</span>
              <h2 className="text-[26px] lg:text-[34px] font-extrabold leading-tight">
                XION – System Solutions For Endoscopy
              </h2>
              <p className="text-[16px] font-semibold mt-3 tracking-tight italic uppercase">
                "EVERYTHING FROM ONE SOURCE – ENDOSCOPY SYSTEMS SINCE 1991"
              </p>
            </div>
            
            <div className="grid gap-8 text-[#484848] text-[14px] lg:text-[16px] leading-[1.8] text-justify lg:text-left">
              <p>
                XION manufactures devices, endoscopes and instruments for minimally invasive diagnostics and therapy. Our close collaboration with leading hospitals provides the environment that favours the creation of practical and user-friendly system solutions. Our interdisciplinary competence in the fields of precision mechanics, optics, electronics and software development are the basis upon which we set new standards in endoscopy. All products are manufactured in Germany and offered internationally through our network of subsidiaries and authorised dealers.
              </p>
              <p>
                Our Expertise In Precision Mechanics, Optics, Electronics And Software Development And Close Cooperation With Leading Users Enable Us To Perfectly Match Technologies. Integrated System Solutions Allow The Physician To Work More Efficiently, Increase Patient Safety And Set New Standards In Endoscopy.
              </p>
            </div>
            
            <Button href="#" className="justify-self-start">Know More</Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
