"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function CardiovascularSolutions() {
  return (
    <section id="technologies" className="w-full py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-2">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 items-center">
          
          {/* Left Column: short-1 Dynamic Video Player */}
          <div 
            className="w-full relative rounded-2xl overflow-hidden order-2 xl:order-1"
            data-aos="fade-right"
          >
            {/* Dynamic Video Player loading type="short-1" */}
            <DynamicVideoPlayer 
              type="short-1" 
              className="inset-0 w-full h-full object-cover aspect-video" 
            />
          
          </div>

          {/* Right Column: Copywriting content & CTA */}
          <div 
            className="flex flex-col items-start order-1 xl:order-2"
            data-aos="fade-left"
          >
            <h2 className="text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#212121] leading-tight mb-6 text-left">
              Innovative Spiral Flow™ Cardiovascular Solutions
            </h2>
            
            <div className="space-y-5 mb-8 text-left">
              <p>
                Our Spiral Flow™ Peripheral Vascular Graft is an expanded polytetrafluoroethylene (ePTFE) graft with removable external support over its proximal section. The distal portion of the graft contains the patented Spiral Flow™ Inducer and pre-cut distal anastomotic cuff. Any rings on this segment of the graft are NON-REMOVABLE. The Spiral Flow™ Inducer is an injection molded component running along the distal end of the graft. It should never be modified as loss of its form may cause Spiral Laminar Flow™ to not be propagated through the graft.
              </p>
              <p>
                We are the inventors and developers of innovative Spiral Flow™ cardiovascular devices that restore natural blood flow. Our patented platform technology benefits patients worldwide and we are seeking partners to co-develop novel spiral flow devices.
              </p>
            </div>

            <Button variant="split" href="#explore-solutions">
              Explore Solutions
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
