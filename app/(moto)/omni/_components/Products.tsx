import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Products() {
  const features = [
    { num: "01", text: "Protects engines under all driving conditions" },
    { num: "02", text: "Lowers friction and improves gas mileage" },
    { num: "03", text: "Excellent high and low-temperature performance" },
    { num: "04", text: "Provides longer engine life & Resists thermal break-down" },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="custom-container">
        
        {/* Main Product Container */}
        <div className="bg-[#003161] rounded-[2.5rem] w-full pt-10 pb-16 px-8 md:px-12 xl:px-16 shadow-xl" data-aos="fade-up">
          
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="flex items-center gap-3 mb-6">
              <img src="/moto/omni/bulletdot1.png" className="w-3.5 h-3.5 "/>
              
              <h2 className="text-2xl md:text-[26px] xl:text-[30px] !font-normal !text-white uppercase tracking-tight leading-none font-heading">
                OUR PRODUCT
              </h2>
            </div>
            
            {/* Divider Line */}
            <div className="w-full h-px bg-white/10"></div>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
            
            {/* Left Column - Info */}
            <div className="w-full lg:w-5/12 flex flex-col justify-center" data-aos="fade-right" data-aos-delay="100">
              <h3 className="!text-white text-lg md:text-[22px] !font-normal uppercase mb-4 tracking-wide">
                FULL SYNTHETIC EURO SAE 5W-30 SN/C3
              </h3>
              
              
              <p className="mb-8 !text-white text-sm lg:text-[14px] xl:text-[15px] leading-[1.8]">
                SAE 5W-30 ACEA C3 is a fully synthetic engine oil utilizing mid-SAPs passenger car
                technology. It is designed for modern passenger diesel vehicles equipped with a Diesel
                Particulate Filter (DPF) and in the latest gasoline applications, including the ones with 3-way catalytic converters.
              </p>

              {/* Features Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative ml-8 group cursor-default"
            >
              {/* White Card */}
              <div className="relative bg-white py-4 pl-4 pr-4 min-h-[90px] flex items-center shadow-sm">

                {/* Blue Strip */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[30px] h-[70%] bg-[#002f6c]" />

                {/* Yellow Badge */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2
                                w-[50px] h-[50px]
                                bg-[#ffc72c]
                                rounded-md
                                flex items-center justify-center
                                font-bold text-[34px]
                                text-transparent
                                [-webkit-text-stroke:1px_#b38805]
                                shadow-md
                                transition-all duration-300
                                group-hover:text-[#002f6c]
                                group-hover:[-webkit-text-stroke:1px_#002f6c]">
                  {feature.num}
                </div>

        {/* Text */}
       
        <p className="ml-8 text-[#333] text-sm lg:text-[14px] xl:text-[15px] ">
          {feature.text}
        </p>
      </div>
    </div>
      ))}
</div>
<div className="w-full h-px bg-white/10 mb-5 "></div>

              {/* Button */}
              <div>
                <Button href="#" variant="secondary">Discover More</Button>
              </div>
            </div>

            <div className="w-full lg:w-7/12 flex items-center justify-center" data-aos="zoom-in" data-aos-delay="200">
              
               <div className="relative w-full h-full aspect-video rounded-[2rem] overflow-hidden ">
                            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover mix-blend-normal" />
                          </div>

            
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}
