"use client";

import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SolutionsSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        {/* Top Part: Text + Human Torso */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 bg-[#0068B3]"></div>
                <h2 className="text-[#0068B3] font-semibold text-[16px]">
                  Discover our Solutions
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#000000]/10 mb-6"></div>
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#353A3D] leading-tight">
                Across The Continium Of Care
              </h3>
            </div>


            <div className="space-y-6 leading-relaxed  text-[17px] text-justify">
              <p>
                Welcome to Nihon Kohden's innovative solution portfolio, where cutting-edge technology meets healthcare excellence. Discover our advanced medical devices and systems designed to enhance patient care, streamline workflows, and empower clinical outcomes across the continuum of care.
              </p>
              <p>
                Driven by decades of innovation and a commitment to life-saving technology, Nihon Kohden combines precision engineering with medical expertise to support healthcare professionals in critical moments. From patient monitoring and neurology to cardiology, emergency care, and hospital IT solutions, our technologies are built to deliver reliability, accuracy, and confidence in every environment.
              </p>
            </div>

            <div className="pt-4">
              <Button href="#" variant="primary" size="md">
                Get to Know Us
              </Button>
            </div>
          </div>

          {/* Right Image Placeholder (Human Torso) */}
          <div className="relative lg:col-span-5 lg:-ml-20 z-0">
            <div className="relative w-full max-w-[550px] aspect-square flex justify-center lg:justify-start">
              {/* Blue Torso Illustration Placeholder */}
              <div className="w-full h-full bg-gradient-to-t from-[#0068B3]/20 to-transparent rounded-full absolute bottom-0 blur-3xl"></div>
              <img
                src="/nihon/images/blue-man.png"
                alt="Human Torso Solution Illustration"
                className="relative z-10 max-w-full h-auto object-contain scale-110"
              />
            </div>
          </div>
        </div>

        {/* Bottom Part: Slider/Feature Pill */}
        <div className="relative mt-4 mb-8">
          <div className="bg-[#2B78B1] rounded-full py-10 px-12 md:px-24 text-white relative overflow-hidden">
            {/* Arrows */}
            <div className="absolute inset-y-0 left-6 md:left-12 flex items-center z-20">
              <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2B78B1] shadow-xl hover:scale-110 transition-transform">
                <ChevronLeft size={24} strokeWidth={3} />
              </button>
            </div>

            <div className="absolute inset-y-0 right-6 md:right-12 flex items-center z-20">
              <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2B78B1] shadow-xl hover:scale-110 transition-transform">
                <ChevronRight size={24} strokeWidth={3} />
              </button>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
              <h4 className="text-[16px] md:text-[20px] font-bold tracking-normal mb-3">
                Across The Continium Of Care
              </h4>
              <p className="text-sm md:text-[16px] text-white leading-relaxed font-light">
                Early detection and timely intervention are crucial in critical care. Nihon Kohden utilizes advanced technology to transform invisible patient data into visible insights on monitors, facilitating comprehensive assessment of patient conditions. Integrated with their ventilators and defibrillators, this technology enables efficient monitoring and treatment in critical settings... <span className="font-bold border-b border-white/50 cursor-pointer hover:border-white transition-colors uppercase text-[12px] ml-1">READ MORE</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
