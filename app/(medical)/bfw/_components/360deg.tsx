"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section id="explore360" className="w-full py-12 md:py-16 lg:py-20 min-[2500px]:py-28 min-[3800px]:py-40 bg-[#F5F5F5] overflow-hidden">
      <div className="custom-container flex flex-col">

        {/* Text Content and Button */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center w-full pb-6 md:pb-8 min-[2500px]:pb-12 min-[3800px]:pb-16 border-b border-[#CFCFCF] gap-6 md:gap-8 min-[2500px]:gap-12"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7 md:max-w-[65%] lg:max-w-[60%]">
            <Typography variant="h2" color="dark" className="leading-tight">
              Explore Bristol-Plus&trade; In 360&deg;
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Take a closer look at the Bristol-Plus&trade; LED Surgical Headlight System through an interactive 360&deg; experience. Explore its lightweight design, adjustable spot, headband options, and portable configuration.
            </Typography>
          </div>
          <div className="shrink-0">
            <Button text="View in 360°" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* Video Player */}
        <div
          className="relative w-full lg:max-w-[80%] mx-auto mt-8 md:mt-10 min-[2500px]:mt-16 min-[3800px]:mt-20 aspect-video overflow-hidden rounded-tl-[24px] rounded-br-[24px] md:rounded-tl-[40px] md:rounded-br-[40px] lg:rounded-tl-[50px] lg:rounded-br-[50px] min-[2500px]:rounded-tl-[70px] min-[2500px]:rounded-br-[70px] min-[3800px]:rounded-tl-[100px] min-[3800px]:rounded-br-[100px] shadow-[0_4px_14px_rgba(0,0,0,0.15)] min-[3800px]:shadow-[0_8px_28px_rgba(0,0,0,0.15)]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default Deg360;
