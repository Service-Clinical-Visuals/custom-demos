"use client";

import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function ProductSection() {
  return (
    <section className="relative w-full py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Split Grid Layout (Video on the left, product details on the right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Responsive 360° Dynamic Video Player */}
          <div 
            data-aos="fade-right"
            className="lg:col-span-7 relative w-full aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-[0_15px_45px_rgba(0,0,0,0.06)] group"
          >

            {/* Video Player */}
            <DynamicVideoPlayer 
              type="360"
              className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Subtle Gradient Shadow Inside Card */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: Product Content & Description */}
          <div 
            data-aos="fade-left"
            className="lg:col-span-5 flex flex-col items-start"
          >
            <h2 className="text-[28px] md:text-[30px] lg:text-[32px] font-bold mb-4">
              HERACLES Proximal Femur Nail
            </h2>
            
            <div className="space-y-5 mb-8">
              <p className="leading-relaxed">
                The HERACLES Proximal Femur Nail by 7S Medical is an advanced orthopedic fixation system designed to provide stable, precise, and patient-specific treatment options for proximal femur fractures. Engineered for smooth insertion and reliable fixation, the system combines innovative locking technology, optimized nail geometry, and adaptable sizing to support efficient surgical procedures and improved patient outcomes.
              </p>
              
              <p className="leading-relaxed">
                With features such as TwinLock technology, radiolucent aiming arm, and multiple nail configurations, HERACLES delivers enhanced stability, controlled gliding, and simplified surgical handling for both surgeons and patients.
              </p>
            </div>

            {/* Explore Products Button */}
            <Link
              href="#products"
              className="inline-flex items-center justify-center px-8 h-[44px] bg-[#CE112D] hover:bg-[#A70F25] text-white text-[13px] font-semibold tracking-wider rounded-[3px] uppercase transition-all duration-300 shadow-[0_2px_10px_rgba(193,2,48,0.3)] hover:shadow-[0_4px_15px_rgba(193,2,48,0.4)] transform hover:-translate-y-0.5"
            >
              Explore Our Products
            </Link>
          </div>

        </div>

        {/* Horizontal Divider */}
        <div data-aos="fade-up" className="w-full border-t border-gray-200/80 my-10" />

        {/* Bottom Three-Column Technical Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Innovation */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-white border border-gray-150 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Header Icon + Title */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#CE112D] flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-gray-900 tracking-tight">
                Innovation
              </h3>
            </div>
            
            {/* Description */}
            <p className="leading-relaxed">
              Our innovative products are developed in close collaboration with leading surgeons. The aim of this collaboration is to identify common difficulties and improve them with products that are based on the latest scientific findings.
            </p>
          </div>

          {/* Card 2: Type II Anodization */}
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white border border-gray-150 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Header Icon + Title */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#CE112D] flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="6" cy="6" r="2" />
                  <circle cx="18" cy="6" r="2" />
                  <circle cx="12" cy="20" r="2" />
                  <line x1="7.5" y1="7.5" x2="10" y2="10" />
                  <line x1="16.5" y1="7.5" x2="14" y2="10" />
                  <line x1="12" y1="18" x2="12" y2="15" />
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-gray-900 tracking-tight">
                Type II Anodization
              </h3>
            </div>
            
            {/* Description */}
            <p className="leading-relaxed">
              Type II anodizing is an electrochemical process in which a defined oxide layer is applied to a metallic surface, replacing the thin natural oxide layer on the implant surface. This is achieved by a spark discharge.
            </p>
          </div>

          {/* Card 3: Osteoporotic Bone */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white border border-gray-150 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Header Icon + Title */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#CE112D] flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v8" />
                  <path d="M9 12h6" />
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-gray-900 tracking-tight">
                Osteoporotic Bone
              </h3>
            </div>
            
            {/* Description */}
            <p className="leading-relaxed">
              These products are specifically designed for high stability in osteoporotic bone. In plate systems, this is achieved by diverging and converging screw patterns.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
