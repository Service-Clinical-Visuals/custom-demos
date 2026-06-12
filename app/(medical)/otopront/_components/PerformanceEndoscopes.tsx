import React from "react";
import Button from "./Button";

export default function PerformanceEndoscopes() {
  return (
    <section className="w-full py-16 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start" data-aos="fade-right">
            <h2 className="text-[26px] md:text-[36px] font-semibold text-[#111111] mb-4 leading-tight">
              Performance Flexible Endoscopes
            </h2>
            
            <div className="space-y-6 text-[#484848] md:leading-relaxed mb-10">
              <p>
                The endoscope delivers high-quality imaging while features such as the adjustable ocular and 130° angle of movement allow improved flexibility and control during procedures. Available in multiple diameters, it also includes an integrated light guide and transport case for convenient clinical use and portability.
              </p>
              <p>
                Designed to deliver precision, comfort, and reliable performance, these flexible ENT endoscopes combine advanced engineering with modern clinical functionality. Built using specialized fiber technology, they provide sharp, high-resolution image quality that supports accurate observation and confident diagnosis during ENT examinations. Their slim and lightweight construction allows for smooth maneuverability, while the ergonomic design ensures comfortable handling and better control for medical professionals during extended procedures. 
              </p>
            </div>
            
            <Button href="#" variant="red" arrowType="circle">
              View Solutions
            </Button>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="w-full mt-12 lg:mt-0" data-aos="fade-left">
            <div className="relative w-full rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] ">
              {/* Space for the endoscopes image */}
              <img src="/otopront/images/endoscopes.png" alt="Flexible Endoscopes" className="w-full h-full object-contain" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
