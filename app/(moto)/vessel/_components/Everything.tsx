"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Wrench, FileText, Settings } from "lucide-react";

const Everything = () => {
  return (
    <section className="w-full py-16 xl:py-24 overflow-hidden bg-white relative">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-12 xl:gap-8 items-center">

        {/* Left Image with slanted background */}
        <div className="w-full order-2 xl:order-1 xl:col-span-5 relative flex items-center justify-center" data-aos="fade-right">
          {/* Thick diagonal line background breaking out of container */}
          <div className="absolute left-[-12%] top-0 w-[70vw] h-[60px] xl:h-[100px] bg-[var(--color-primary)] -translate-x-1/2 -translate-y-1/2 rotate-50 z-0 hidden lg:block"></div>

          <img
            src="/moto/vessel/section3.png"
            alt="European Catalogue 2025 / 2026"
            className="w-full xl:right-[-60px]  mx-auto h-auto object-contain relative z-10 filter drop-shadow-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-6 order-1 xl:order-2 xl:col-span-7 w-full xl:pl-10" data-aos="fade-left">
          <div className="flex flex-col gap-2">
            <Typography variant="h6" color="primary">
              • Your Guide To Vessel
            </Typography>
            <Typography variant="h2" color="dark">
              Everything You Need to Choose the Right Tool
            </Typography>
          </div>

          <Typography variant="p" color="muted" className="leading-relaxed">
            Explore the VESSEL European Catalogue for a comprehensive overview of professional tools, advanced fastening solutions, product specifications and application-focused technologies. Discover detailed information on each product, including features, technical data, available models and recommended applications, helping you compare solutions and identify the right VESSEL tool for your specific professional requirements.
          </Typography>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-4">

            <div className="flex flex-col gap-2 pr-4 sm:border-r border-gray-200">
              <div className="flex items-center gap-2 mb-1">
                <Wrench className="w-10 h-10 min-[3800px]:w-14 min-[3800px]:h-14 text-[var(--color-primary)]" strokeWidth={1.5} />
                <Typography variant="h4" color="dark" className="font-bold text-base min-[3800px]:text-2xl">
                  Product Overview
                </Typography>
              </div>
              <Typography variant="p" color="muted" className="text-sm min-[3800px]:text-xl">
                Browse VESSEL's extensive range of professional hand tools, bits, air tools and fastening solutions.
              </Typography>
            </div>

            <div className="flex flex-col gap-2 px-0 sm:px-4 sm:border-r border-gray-200">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="w-10 h-10 min-[3800px]:w-14 min-[3800px]:h-14 text-[var(--color-primary)]" strokeWidth={1.5} />
                <Typography variant="h4" color="dark" className="font-bold text-base min-[3800px]:text-2xl">
                  Technical Information
                </Typography>
              </div>
              <Typography variant="p" color="muted" className="text-sm min-[3800px]:text-xl">
                Compare product specifications, dimensions, performance details and available models.
              </Typography>
            </div>

            <div className="flex flex-col gap-2 pl-0 sm:pl-4">
              <div className="flex items-center gap-2 mb-1">
                <Settings className="w-10 h-10 min-[3800px]:w-14 min-[3800px]:h-14 text-[var(--color-primary)]" strokeWidth={1.5} />
                <Typography variant="h4" color="dark" className="font-bold text-base min-[3800px]:text-2xl">
                  Application Solutions
                </Typography>
              </div>
              <Typography variant="p" color="muted" className="text-sm min-[3800px]:text-xl">
                Discover tools designed for different professional applications, from assembly and maintenance to industrial fastening.
              </Typography>
            </div>

          </div>

          <div className="pt-2" data-aos="fade-up" data-aos-delay="100">
            <Button text="Download Catalogue" href="#" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Everything;
