"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import Button from "./Button";
import { Check } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
export default function DrivenByInnovation() {
  const points = [
    "German-engineered lubricant technology",
    "Continuous research and product innovation",
    "Solutions tailored to industry-specific requirements",
    "Global quality standards and dependable support"
  ];

  return (
    <section className="relative w-full py-20 lg:py-24 bg-[#565C62] overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <Typography variant="h3" color="white" className="font-bebas tracking-widest uppercase">
            DRIVEN BY INNOVATION. TRUSTED WORLDWIDE.
          </Typography>
          <div className="shrink-0">
            <Button text="REQUEST INFORMATION" variant="primary" showIcon={true} />
          </div>
        </div>

        <hr className="border-t border-white w-full mb-12" />

        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-x-12 gap-y-8 lg:gap-x-16 items-center mt-10">
          
          {/* Top Content: Title & Body (Right column on Desktop, Top on Mobile) */}
          <div className="2xl:col-start-2 2xl:row-start-1 flex flex-col space-y-6 w-full order-1">
            <Typography variant="h3" color="white" className="font-bebas tracking-widest uppercase mb-2">
              LUBRICATION EXCELLENCE, WORLDWIDE.
            </Typography>
            <hr className="border-t border-white h-px w-full mb-10" />

            <Typography variant="body" color="white" className="font-exo leading-relaxed block text-sm md:text-base">
              EMKA Schmiertechnik GmbH combines German engineering expertise with modern lubricant technology to create solutions that perform under the toughest conditions. Our focus on research, development, and customer collaboration enables us to deliver products that support productivity, efficiency, and long-term equipment health.
            </Typography>

            <Typography variant="body" color="white" className="font-exo leading-relaxed block text-sm md:text-base">
              From everyday transportation to heavy-duty industrial operations, our lubricants are designed to enhance performance, improve fuel efficiency, and extend service life. By understanding the unique challenges of every industry, we provide tailored solutions that help our customers stay competitive in an evolving market.
            </Typography>
          </div>

          {/* Middle: Video (Left column spanning 2 rows on Desktop, Middle on Mobile) */}
          <div className="2xl:col-start-1 2xl:row-start-1 2xl:row-span-2 w-full aspect-video mt-2 relative flex items-center justify-center overflow-hidden shadow-xl order-2">
            <DynamicVideoPlayer type="short" />
          </div>

          {/* Bottom: Points (Right column below text on Desktop, Bottom on Mobile) */}
          <div className="2xl:col-start-2 2xl:row-start-2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full order-3 mt-2 2xl:mt-8">
            {points.map((point, idx) => (
              <div key={idx} className="bg-white p-4 flex items-center gap-4 shadow-md min-h-[80px]">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
                <Typography variant="body" color="dark" className="font-exo opacity-80 text-xs md:text-sm leading-tight font-medium">
                  {point}
                </Typography>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
