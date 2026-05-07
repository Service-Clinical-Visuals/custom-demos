"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { CheckCircle2 } from "lucide-react";
import Button from "./Button";

export default function Diagnostics() {
  return (
    <section className="pb-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div 
          data-aos="fade-up"
          className="bg-[#00427C] rounded-[40px] p-8 lg:p-12 overflow-hidden"
        >
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-white text-2xl lg:text-3xl font-bold mb-4">
                Diagnostics
              </h2>
              <h3 className="text-white text-xl lg:text-2xl font-bold mb-6">
                Adapting to Continuously Evolving Demands
              </h3>
              <p className="text-white! text-[15px] lg:text-[16px] leading-relaxed mb-8">
                The innovative keyboard is designed with all essential routine examination features, 
                while advanced functions are seamlessly accessed through the 13-inch touchscreen 
                panel, ensuring a smooth and efficient workflow. It delivers superior image quality, 
                high CFM sensitivity, accurate quantification, and integrated interventional 
                technologies as part of its standard configuration.
              </p>
              <Button variant="white" size='md' hasArrow>
                View Product Range
              </Button>
            </div>

            {/* Right Video Placeholder */}
            <div className="aspect-video relative rounded-3xl overflow-hidden bg-white">
              <DynamicVideoPlayer 
                type="short-2" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-white/20 mb-12"></div>

          {/* Bottom Section - Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Card */}
            <div className="bg-white rounded-[30px] p-8 flex flex-col justify-between">
              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#00427C] shrink-0 mt-1" size={20} />
                  <p className="text-[15px] lg:text-[16px] leading-relaxed">
                    5-band adjustable frequency in B mode (fundamental wave and harmonic wave)
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#00427C] shrink-0 mt-1" size={20} />
                  <p className="text-[15px] lg:text-[16px] leading-relaxed">
                    Full range of Linear, Convex, Phased Array, endocavity, TEE, 
                    Intraoperative, VoluMeTric, and Biplane TRT probes.
                  </p>
                </li>
              </ul>
              <button className="text-[#00427C] font-semibold text-md flex items-center justify-center gap-1 hover:gap-2 transition-all">
                Read More &gt;&gt;&gt;
              </button>
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-[30px] p-8 flex flex-col justify-between">
              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#00427C] shrink-0 mt-1" size={20} />
                  <p className="text-[15px] lg:text-[16px] leading-relaxed">
                    Complete imaging mode: 2D with THI, Colour M, CFM, PDI, PW, HPRF, CW, 
                    Contrast Imaging, Elastography, Stress Echo.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#00427C] shrink-0 mt-1" size={20} />
                  <p className="text-[15px] lg:text-[16px] leading-relaxed">
                    Five active transducer sockets and one pencil socket Ergonomic design 
                    with 13,3-inch touch screen with intuitive user.
                  </p>
                </li>
              </ul>
              <button className="text-[#00427C] font-semibold text-md flex items-center justify-center gap-1 hover:gap-2 transition-all">
                Read More &gt;&gt;&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
