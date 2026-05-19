import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function FlexibleEndoscopes() {
  return (
    <section className="w-full py-16 py-20 bg-[#F46E7012]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: 360 Video Placeholder */}
          <div className="w-full" data-aos="fade-right">
            {/* The checkerboard pattern replicates the image placeholder style */}
            <div className="relative w-full aspect-video rounded-[24px] overflow-hidden">
              
              <DynamicVideoPlayer type='360'/>
            </div>
          </div>
          
          {/* Right Column: Text Content */}
          <div className="flex flex-col items-start" data-aos="fade-left">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#111111] mb-4 leading-tight">
              Flexible Endoscopes
            </h2>
            
            <div className="space-y-6 text-[#484848] md:leading-relaxed mb-10">
              <p>
                The Flexible ENT endoscope is designed to provide clear and reliable visualization during nasal, pharyngeal, and laryngeal examinations. With its slim and ergonomic structure, it offers comfortable handling and smooth maneuverability for precise diagnostics.
              </p>
              <p>
                With its front-mounted touchscreen and compact size the device can be incorporated directly into the working area (e.g. at the ENT unit). All functions can be operated conveniently with the use of the touchscreen, allowing the user to work as efficiently as possible.
              </p>
              <p>
                Two additional monitors can also be connected to the PILOT screen. So the process of endoscopy can be made easier, for example by placing a monitor for the doctor at an angle behind the patient's chair (removing the need to turn the head).
              </p>
            </div>
            
            <Button href="#" variant="white" arrowType="circle">
              Explore Technology
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
