"use client";

import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  {
    title: "Extended Battery Life",
    text: "Provides up to 10 hours of operation at maximum brightness.",
  },
  {
    title: "Flexible Configuration",
    text: "Supports multiple headbands, Optic Clip, and battery options.",
  },
];

const Lightweight = () => {
  return (
    <section id="lightweight" className="w-full py-16 min-[3800px]:py-24 bg-white overflow-hidden">
      <div className="relative py-12 min-[1281px]:py-12 min-[2500px]:py-20 min-[3800px]:py-28">

        {/* Primary Panel – bleeds from the left edge, 60% of viewport on desktop */}
        <div className="absolute inset-y-0 left-0 w-full min-[1281px]:w-[60%] bg-[var(--color-primary)] min-[1281px]:rounded-r-2xl min-[3800px]:rounded-r-[3rem] shadow-[0_4px_12px_rgba(0,0,0,0.15)] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'url("/medical/bfw/bg.webp")', backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0 bg-[var(--color-primary)]/90" />
        </div>

        <div className="custom-container relative z-10 flex flex-col min-[1281px]:flex-row items-center gap-10 min-[1281px]:gap-8 min-[3800px]:gap-20">

          {/* Text Column */}
          <div className="w-full min-[1281px]:w-[32%] shrink-0 md:max-[1280px]:grid md:max-[1280px]:grid-cols-2 md:max-[1280px]:gap-x-10 md:max-[1280px]:content-start" data-aos="fade-right">
            <Typography variant="h2" color="white" className="md:max-[1280px]:col-span-2 leading-tight pb-5 min-[3800px]:pb-10 border-b border-white/25">
              Lightweight Surgical Lighting With Powerful Performance
            </Typography>

            {/* Tablet: intro, summary & button on the left, points on the right */}
            <Typography variant="p" className="md:max-[1280px]:col-start-1 md:max-[1280px]:row-start-2 mt-5 min-[3800px]:mt-10 text-sm leading-relaxed text-white">
              Bristol-Plus&trade; combines high-intensity LED illumination, adjustable spot control, and a lightweight portable design for surgical and clinical applications.
            </Typography>

            <ul className="md:max-[1280px]:col-start-2 md:max-[1280px]:row-start-2 md:max-[1280px]:row-span-3 mt-5 min-[3800px]:mt-10 flex flex-col gap-4 min-[3800px]:gap-8 pb-6 md:max-[1280px]:pb-0 min-[3800px]:pb-12 border-b md:max-[1280px]:border-b-0 border-white/25">
              {features.map((item) => (
                <li key={item.title} className="flex items-start gap-3 min-[3800px]:gap-6">
                  <FaCircleCheck className="mt-0.5 shrink-0 text-white w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10" />
                  <Typography variant="p" className="text-sm leading-relaxed text-white">
                    {item.title} – {item.text}
                  </Typography>
                </li>
              ))}
            </ul>

            <Typography variant="p" className="md:max-[1280px]:col-start-1 md:max-[1280px]:row-start-3 mt-6 md:max-[1280px]:mt-5 md:max-[1280px]:pt-5 md:max-[1280px]:border-t border-white/25 min-[3800px]:mt-12 text-sm leading-relaxed text-white">
              With peak brightness up to 132,000 LUX at 10 inches and up to 10 hours of operation, it provides reliable illumination. Its flexible mounting and battery options adapt to different clinical requirements.
            </Typography>

            <div className="md:max-[1280px]:col-start-1 md:max-[1280px]:row-start-4 mt-8 md:max-[1280px]:mt-6 min-[3800px]:mt-16">
              <Button text="View Product Details" href="#lightweight" variant="secondary" showIcon={true} />
            </div>
          </div>

          {/* Video – overlays the primary panel */}
          <div className="w-full min-[1281px]:flex-1 relative aspect-video overflow-hidden rounded-tl-[2rem] rounded-br-[2rem] min-[3800px]:rounded-tl-[4rem] min-[3800px]:rounded-br-[4rem] shadow-[0_8px_24px_rgba(0,0,0,0.2)]" data-aos="fade-left">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Lightweight;
