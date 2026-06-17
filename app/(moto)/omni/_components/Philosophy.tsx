import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Philosophy() {
  const principles = [
    {
      title: "PEOPLE-DRIVEN CULTURE",
      description: "At Omni Specialty Packaging, LLC, our employees are our most valuable asset. Their dedication, expertise, and commitment form the foundation of our success.",
    },
    {
      title: "BUILDING LASTING RELATIONSHIPS",
      description: "We believe that trust, communication, and long-term partnerships are key to sustainable success. Building strong relationships while sharing knowledge remains the cornerstone of our business philosophy.",
    },
    {
      title: "SHARED KNOWLEDGE & INNOVATION",
      description: "By fostering collaboration and encouraging the exchange of ideas, we continuously improve our capabilities and drive innovation throughout our organization.",
    },
  ];

  return (
    <section className="w-full py-16  bg-white" data-aos="fade-up">
      <div className="custom-container">
        
        {/* Main Dark Blue Container */}
        <div className="bg-[#003161] rounded-[2.5rem] w-full pt-10 pb-12 px-8 md:px-12 xl:px-16 shadow-xl">
          
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="flex items-center gap-3 mb-6 relative">
              <img src="/moto/omni/bulletdot1.png" className="w-3.5 h-3.5 "/>
              <h2 className="text-2xl md:text-[26px] xl:text-[30px] !font-normal !text-[#ffffff] uppercase tracking-tight leading-none font-heading">
                OUR PHILOSOPHY
              </h2>
            </div>
            
            {/* Divider Line */}
            <div className="w-[80%] max-w-3xl h-px bg-white/10 mb-6"></div>

            {/* Description */}
            
            <p className="mb-8 !text-white text-sm lg:text-[14px] xl:text-[15px] text-center leading-[1.8] max-w-5xl">
              Omni Specialty Packaging, LLC, people are our most precious asset. We continue to proactively seek win/win 
              alliances that have served our synergy from our collective team stakeholders. Our recent expansion and growth 
              illustrate our ongoing commitment to serve our customers' needs. Building relationships and sharing knowledge 
              is our formula for success.
            </p>
          </div>

          {/* Bottom Grid Section */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
            
            {/* Left Column - Image */}
            <div className="w-full lg:w-1/2 flex items-center" data-aos="fade-right">
             
                <img 
                  src="/moto/omni/ourphilosophy.jpg" 
                  alt="Our Philosophy" 
                  className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500 rounded-4xl"
                />
            </div>

            {/* Right Column - Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              
              <div className="flex flex-col space-y-0">
                {principles.map((principle, index) => (
                  <div key={index} className={`py-6 ${index !== 0 ? 'border-t border-white/10' : 'pt-0'}`}>
                    <h3 className="!text-white text-[16px] md:text-[18px] !font-normal uppercase mb-3 tracking-wide font-heading">
                      {principle.title}
                    </h3>
                    
                    <p className="!text-white text-sm lg:text-[14px] xl:text-[15px] leading-[1.8]">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="mt-8">
                <Button href="#" variant="secondary">Discover More</Button>
              </div>

            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}
