"use client";

import React from "react";
import { ArrowRight, Target, Brain, Shield } from "lucide-react";
import Button from "./Button";

export default function CoreValues() {
  const values = [
    {
      icon: <Target className="w-7 h-7 text-primary" strokeWidth={2} />,
      title: "Dedication",
      description: "Our customers define our products. The ENT treatment units are designed based on their needs."
    },
    {
      icon: <Brain className="w-7 h-7 text-primary" strokeWidth={2} />,
      title: "Innovation",
      description: "Our products are based on years of innovation. Continuous development defines who we are."
    },
    {
      icon: <Shield className="w-7 h-7 text-primary" strokeWidth={2} />,
      title: "Safety guaranteed",
      description: "We put safety for doctors and patients first. All of our products are hand built to the highest safety and quality standards."
    }
  ];

  return (
    <section className="bg-[#FCFAFA] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content - Image Placeholder */}
          <div className="rounded-[20px] shadow-md aspect-square bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-100 relative w-full h-full min-h-[500px]">
            <img src="/entermed/core-values.png" alt="core-values" className="w-full h-full object-cover" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-[34px] font-bold text-primary mb-12 flex items-center gap-3">
              <span className="text-primary text-4xl leading-none pb-1">&bull;</span> Our Core Values
            </h2>
            <p className="text-gray-600 mb-8 text-[15px] leading-[1.8] pr-4">
              Driven by dedication, powered by innovation, and committed to safety, we deliver reliable solutions that meet the highest standards of quality and excellence.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {values.map((val, idx) => (
                <div key={idx} className="bg-white rounded-[16px] p-6 flex gap-6 shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-gray-50 items-start transition-transform hover:-translate-y-1 duration-300">
                  <div className="flex-shrink-0 mt-1">
                    {val.icon}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-gray-800 font-bold text-[17px] mb-2">{val.title}</h4>
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
