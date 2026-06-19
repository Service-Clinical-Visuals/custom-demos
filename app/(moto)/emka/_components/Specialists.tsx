"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Specialists() {
  const highlights = [
    {
      id: "01",
      title: "Comprehensive Lubrication Solutions for Automotive, Industrial, and Commercial Application",
    },
    {
      id: "02",
      title: "Innovative Formulations Engineered for Maximum Protection and Performance",
    },
    {
      id: "03",
      title: "A Strong Commitment to Excellence, Efficiency, and Environmental Responsibility",
    },
  ];

  return (
    <section className="relative w-full py-20 lg:py-24 bg-[#565C62] text-white overflow-hidden">
      <Container>
        <div className="flex flex-col">
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5 2xl:gap-5  items-center justify-center pb-5 order-1 2xl:order-none">

            {/* Left Content (Title/Body) */}
            <div className="flex flex-col space-y-4 z-20 mt-4 order-1 2xl:order-none">
              <Typography variant="h2" color="white" className="font-bebas leading-tight tracking-wider uppercase">
                SPECIALISTS IN HIGH-PERFORMANCE <br className="hidden 2xl:block" />
                LUBRICATION SOLUTIONS
              </Typography>

              <hr className="border-t border-gray-400/50 w-full my-6" />

              <div className="space-y-4">
                <Typography variant="body" color="white" className="font-exo leading-relaxed text-sm md:text-base">
                  At EMKA Schmiertechnik GmbH, lubrication is more than a product—it's a critical component of operational efficiency and equipment longevity. With decades of industry expertise, we develop and supply premium lubricants engineered to meet the demanding requirements of automotive, industrial, agricultural, and specialized applications.
                </Typography>

                <Typography variant="body" color="white" className="font-exo leading-relaxed text-sm md:text-base">
                  Our comprehensive portfolio includes engine oils, hydraulic fluids, gear oils, greases, and specialty lubricants designed to deliver outstanding protection, performance, and reliability. Through continuous innovation and strict quality standards, we help businesses optimize performance while reducing maintenance costs and downtime.
                </Typography>
              </div>

              <hr className="border-t border-gray-400/50 w-full my-6" />
            </div>

            {/* Right Image Placeholder (Video) */}
            <div className="w-full aspect-video 2xl:aspect-video bg-white relative flex items-center justify-center overflow-hidden shadow-2xl order-2 2xl:order-none">
              {/* Checkerboard Pattern for placeholder */}
              <div
                className="absolute inset-0  opacity-20"

              />
              <DynamicVideoPlayer type="360" />
            </div>

          </div>

          {/* Bottom Highlights Section */}
          <div className="pt-2 order-3 2xl:order-none">
            <Typography variant="h3" color="white" className="font-bebas tracking-widest uppercase mb-16">
              KEY HIGHLIGHTS
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {highlights.map((item) => (
                <div key={item.id} className="flex flex-col relative group w-full h-full pl-4 md:pl-6 lg:pl-8">
                  {/* Number Badge */}
                  <div className="absolute -top-10 left-0 z-20">
                    {/* Red Hexagon */}
                    <div className="w-20 h-24 lg:w-24 lg:h-28 bg-primary flex items-center justify-center transition-transform hover:scale-105 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                      <span className="font-bebas text-white text-4xl lg:text-5xl tracking-widest font-bold">{item.id}</span>
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="bg-white text-dark p-6 pt-10 pl-[4.5rem] md:pl-[5rem] lg:pl-[5.5rem] shadow-lg min-h-[140px] flex items-center relative z-10 w-full h-full">
                    <Typography variant="body" color="body" className="font-exo  leading-relaxed">
                      {item.title}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
