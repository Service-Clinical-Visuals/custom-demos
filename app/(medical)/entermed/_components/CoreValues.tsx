"use client";

import React from "react";
import { ArrowRight, Target, Brain, Shield } from "lucide-react";
import Button from "./Button";

export default function CoreValues() {
  const values = [
    {
      icon: <img src="/entermed/logo-1.png" alt="core-values" className="w-7 h-7 text-primary" />,
      title: "Dedication",
      description: "Our customers define our products. The ENT treatment units are designed based on their needs."
    },
    {
      icon: <img src="/entermed/logo-2.png" alt="core-values" className="w-7 h-7 text-primary" />,
      title: "Innovation",
      description: "Our products are based on years of innovation. Continuous development defines who we are."
    },
    {
      icon: <img src="/entermed/logo-3.png" alt="core-values" className="w-7 h-7 text-primary" />,
      title: "Safety guaranteed",
      description: "We put safety for doctors and patients first. All of our products are hand built to the highest safety and quality standards."
    }
  ];

  return (
    <section className="bg-[#F5333F0D] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">

        
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 ">
          {/* Left Content - Image */}
          <div className="rounded-[20px] shadow-md bg-gray-200 overflow-hidden border border-gray-100 relative w-full lg:h-full" data-aos="fade-right">
            <img src="/entermed/core-values.png" alt="core-values" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center h-full" data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-3xl md:text-[32px] font-bold !text-primary mb-5 flex items-center gap-3">
          <span className="text-primary text-2xl leading-none pb-1">&bull;</span> Our Core Values
        </h2>
            <p className="text-gray-600 mb-8 text-[15px] leading-[1.8] pr-4">
              Driven by dedication, powered by innovation, and committed to safety, we deliver reliable solutions that meet the highest standards of quality and excellence.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {values.map((val, idx) => (
                <div key={idx} className="bg-white rounded-[16px] p-6 flex items-center gap-6 shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-gray-50 transition-transform hover:-translate-y-1 duration-300">
                  <div className="flex-shrink-0">
                    {val.icon}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-gray-800 font-bold text-[17px]">{val.title}</h4>
                    <p className="text-gray-500 text-[14.5px] leading-[1.6]">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="primary-outline">Explore More</Button>
          </div>
        </div>

      </div>
    </section>
  );
}
