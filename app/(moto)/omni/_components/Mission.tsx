import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "./Button";

export default function Mission() {
  const points = [
    "We ensure our customers remain our highest priority by delivering responsive service and tailored solutions.",
    "Driven by continuous improvement and operational excellence, we strive for sustained superior performance in every aspect of our business.",
    "Our commitment to quality ensures reliable, high-performance products that consistently meet industry standards.",
    "We deliver exceptional value by offering premium products at competitive market prices.",
    "By leveraging advanced technology and streamlined operations, we provide efficient and dependable solutions.",
  ];

  return (
    <section className="w-full py-16  bg-white">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col" data-aos="fade-right">
            
            {/* Heading */}
            <div className="flex items-center gap-3 mb-4">
              <img src="/moto/omni/bulletdot.png" className="w-3.5 h-3.5"/>
              <h2 className="text-2xl md:text-[26px] xl:text-[30px] !font-normal text-[#333333] uppercase tracking-tight leading-none font-heading">
                OUR MISSION
              </h2>
            </div>
            
            {/* Divider Line */}
            <div className="w-full h-px bg-gray-200 mb-6"></div>

            {/* Paragraphs */}
            <div className="space-y-4 mb-8">
              
              <p className="text-[#333] text-sm lg:text-[14px] xl:text-[15px] leading-[1.8]">
                At Omni Specialty Packaging, LLC, we are committed to achieving sustained superior performance through continuous 
                improvement, operational excellence, and unwavering dedication to customer satisfaction. Every decision we make is guided 
                by our commitment to putting customers first, ensuring their needs are met with responsiveness, reliability, and exceptional 
                service.
              </p>
              <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed">
                By combining industry expertise, advanced manufacturing capabilities, and efficient supply chain operations, we consistently 
                deliver high-quality products that meet the highest standards of performance and value. Our focus on innovation, quality, and 
                competitive pricing enables us to build long-term partnerships and provide solutions that help our customers succeed in an 
                ever-evolving marketplace.
              </p>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-4 mb-8">
              {points.map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img
    src="/moto/omni/checkbox.png"
    className="checkbox-icon mt-0.5 shrink-0"
  />
                  <p className="font-[family-name:var(--font-exo-2)] text-[#333] text-sm !lg:text-[16px] !xl:text-[22px] leading-[1]">
                    {text}
                  </p>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-2">
              <Button href="#" variant="primary">Discover More</Button>
            </div>

          </div>

          {/* Right Column - Image with decorative border */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-10 lg:mt-0 pr-5" data-aos="fade-left" data-aos-delay="100 ">
            <div className="relative w-full max-w-[550px] min-[1920px]:max-w-[800px] min-[2500px]:max-w-[800px] h-[350px] sm:h-[450px] lg:h-[650px] xl:h-[700px] min-[1920px]:h-[650px] min-[2560px]:h-[700px] ">
              
              {/* Decorative Blue Offset Border */}
              <div className="absolute top-4 left-4 lg:top-6 lg:left-6 w-full h-full border-[3px] border-[#001f5c] rounded-tl-[3rem] rounded-tr-[3rem] rounded-br-[3rem] rounded-bl-none z-0 pointer-events-none "></div>
              
              {/* Image Container */}
              <div className="relative z-10 w-full h-full bg-white rounded-tl-[3rem] rounded-tr-[3rem] rounded-br-[3rem] rounded-bl-none overflow-hidden ">
                <img 
                  src="/moto/omni/omnimission.jpg" 
                  alt="Our Mission" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
