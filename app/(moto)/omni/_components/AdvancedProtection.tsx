import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function AdvancedProtection() {
  const benefits = [
    "Helps reduce engine wear and extend component life under demanding operating conditions.",
    "Controls sludge and deposit formation to keep engines cleaner and running efficiently.",
    "Provides superior protection for turbocharged engines, ensuring long-term performance.",
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="custom-container">
        
        {/* Light Blue Container */}
        <div className="bg-[#eef6fc] rounded-[2.5rem] w-full p-8 md:p-12 xl:p-16" data-aos="fade-up">
          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            <div className="w-full lg:w-1/2 flex items-center justify-center" data-aos="fade-right" data-aos-delay="100">
             
                <div className="relative w-full h-full aspect-video rounded-[2rem] overflow-hidden ">
                <DynamicVideoPlayer type="short-1" className="absolute inset-0 object-cover" />
                </div>
            </div>

            {/* Right Column - Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center" data-aos="fade-left" data-aos-delay="200">
              
              {/* Heading */}
              <div className="flex items-center gap-3 mb-4">
                <img src="/moto/omni/bulletdot.png" className="w-3.5 h-3.5 "/>
                <h2 className="text-2xl md:text-[26px] xl:text-[30px] !font-normal text-[#333333] uppercase tracking-tight leading-none font-heading">
                  ADVANCED PROTECTION FOR EUROPEAN ENGINES
                </h2>
              </div>
              
              {/* Divider Line */}
              <div className="w-full h-px bg-gray-300/60 mb-6"></div>

              {/* Paragraph */}
                <p className="mb-8 text-[#333] text-sm lg:text-[14px] xl:text-[15px] leading-[1.8]">
                Developed to meet leading European manufacturer specifications, PureGuard Full 
                Synthetic European 5W-30 offers outstanding wear protection, enhanced engine 
                cleanliness, and excellent temperature stability. Its advanced formulation helps 
                maximize engine life, improve fuel economy, and maintain peak performance in 
                demanding driving environments.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-4 mb-8">
                {benefits.map((text, index) => (
                  <li key={index} className="flex items-start gap-3">
                   <img
    src="/moto/omni/checkbox.png"
    className="checkbox-icon mt-0.5 shrink-0"
  />
                    {/* <span className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed"> */}
                      <p className="font-[family-name:var(--font-exo-2)] text-[#333] text-sm !lg:text-[16px] !xl:text-[22px] leading-[1]">
                        
                      {text}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Divider Line */}
              <div className="w-full h-px bg-gray-300/60 mb-8"></div>

              {/* Button */}
              <div>
                <Button href="#" variant="primary">Discover More</Button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
