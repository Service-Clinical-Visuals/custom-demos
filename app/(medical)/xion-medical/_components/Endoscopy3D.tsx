"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Endoscopy3D() {
  return (
    <section className="bg-[#00AFAF] py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Content */}
          <div className="text-white">
            <span className="text-white font-bold text-[16px] mb-3 block">Endoscopy</span>
            <h2 className="text-[30px] lg:text-[34px] font-extrabold leading-tight mb-3">
              3D endoscopy and microscopy on a single platform
            </h2>
            
            <p className="text-white text-[15px] lg:text-[16px] leading-[1.8] font-medium mb-12">
              At a later date, a 3D camera head and the economical 3D endoscope attachments can be used to upgrade the system to a state-of-the-art 3D endoscopy system – all at moderate cost. The 3D microscope camera provides the means to connect existing surgical microscopes, e.g. from ZEISS or LEICA, to the EndoSTROBE PL Spectar camera processor and thus their seamless integration into the 2D/3D endoscopy system.
            </p>
            
            <Button href="#">View Product</Button>
          </div>

          {/* Right Side: Image Placeholder */}
          <div className="aspect-video rounded-lg overflow-hidden relative">
             <DynamicVideoPlayer type="short-2" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
