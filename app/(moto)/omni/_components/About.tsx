import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function About() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="custom-container">
        {/* Main Wrapper */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 bg-white">
          
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-full rounded-tl-[4rem] rounded-br-[4rem]  overflow-hidden " data-aos="fade-right">
            <img 
              src="/moto/omni/omniabout.jpg" 
              alt="Industrial Tanks" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 py-8 flex flex-col justify-center" data-aos="fade-left" data-aos-delay="100">
            
            {/* Heading */}
            <div className="flex items-center mb-6">
              <img src="/moto/omni/bulletdot.png" className="w-3.5 h-3.5 mr-2"/>
               <h2 className="text-2xl md:text-[26px] xl:text-[30px] !font-normal text-[#333333] uppercase tracking-tight leading-none font-heading">
                ABOUT OUR PURPOSE
              </h2>
            </div>
            <div className="w-full h-px bg-gray-300/60 mb-8"></div>

            {/* Paragraphs */}
            <div className="space-y-4 mb-8 text-[#333] text-sm lg:text-[14px] xl:text-[15px] leading-[1.8]">
              <p>
                We manufacture, market, and distribute lubricants and chemicals to automotive and industrial markets in the United States and internationally. Its production includes light and heavy automotive lubricants, industrial and hydraulic lubricants, automotive gear oil, automatic transmission and brake fluids, greases, and oil.
              </p>
              <p>
                We offer power steering fluids, fuel injector cleaners, torque and tractor hydraulic fluids, anti wear hydraulic fluids, degreasers, solvents, compressor and refrigerator oil, turbine and hydraulic oil, metalworking and rust preventatives, oil and gas treatments, octane boosters, 2 and 4 cycle oil, bar and chain oil, and refined petroleum products.
              </p>
              <p>
                In addition, we perform custom blending, packaging, processing, and product design services, as well as the production of lawn and garden equipment lubricants for private label companies. Omni Specialty Packaging serves mass merchandisers, retailers, wholesale distributors, manufacturers, industrial users, and the oil and gas industry and they sell their products through distributors and suppliers.
              </p>
            </div>

            <div className="w-full h-px bg-gray-300/60 mb-8"></div>

            {/* Button */}
            <div>
              <Button href="#" variant="primary">Discover More</Button>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
