"use client";

import React from "react";
import { BedDouble, Settings, Lightbulb, ArrowUpRight } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function PrecisionSection() {
  const leftCards = [
    {
      title: "Patient Positioning",
      body: "Patient positioning refers to the way patients are positioned and...",
      href: "#patient-positioning",
      icon: "/medical/fisso-medical/specific1.png",
    },
    {
      title: "Adaptable and Ergonomic Designs",
      body: "Fisso's positioning systems are user-friendly and...",
      href: "#ergonomic-designs",
      icon: "/medical/fisso-medical/specific2.png",
    },
  ];

  const rightCards = [
    {
      title: "Fisso's Patient Positioning Solutions",
      body: "Fisso offers advanced patient positioning systems....",
      href: "#positioning-solutions",
      icon: "/medical/fisso-medical/specific3.png",
    },
    {
      title: "Commitment to Innovation",
      body: "Fisso continuously enhances its positioning systems with....",
      href: "#innovation-commitment",
      icon: "/medical/fisso-medical/specific4.png",
    },
  ];

  return (
    <section
      id="precision"
      className="w-full bg-white px-3 sm:px-4 lg:px-6 2xl:px-8 py-4 sm:py-5 lg:py-6 2xl:py-8"
    >
      <div className="w-full max-w-[1400px] 2xl:max-w-[1760px] mx-auto flex flex-col">

        {/* Banner */}
        <div
          className="relative w-full overflow-hidden text-center rounded-[30px] pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-36 2xl:pt-20 2xl:pb-44"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/medical/fisso-medical/background2.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-[800px] 2xl:max-w-[1000px] mx-auto px-6">
            <Typography
              variant="h2"
              color="white"
              className="leading-[150%] tracking-[0.005em] mb-3"
            >
              Engineered for Precision, Comfort, and Efficiency
            </Typography>
            <Typography
              variant="body"
              color="white"
              className="opacity-90 leading-[150%] tracking-normal text-[14px] sm:text-[15px] lg:text-[16px] 2xl:text-[18px]"
            >
              FISSO solutions deliver precision, flexibility, and ergonomic support for efficient surgical workflows.
            </Typography>
          </div>
        </div>

        {/* Overlapping grid */}
        <div className="relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 2xl:gap-8 xl:mt-2 items-start">

            {/* Left cards */}
            <div
              className="lg:col-span-3 flex flex-col xl:mt-[-3] p-3 xl:px-4 xl:py-9 gap-4 sm:gap-5 order-2 lg:order-1"
              data-aos="fade-right"
            >
              {leftCards.map((card, i) => (
                <CardItem key={i} {...card} />
              ))}
            </div>

            {/* Center video
                spec: 985×506, border-radius 30px
                aspect-[985/506] preserves the exact ratio at every screen size
                -mt pulls it up to overlap the banner bottom
            */}
            <div
              className="lg:col-span-6 order-1 lg:order-2 relative z-30 -mt-12 sm:-mt-16 lg:-mt-24 2xl:-mt-32"
              data-aos="zoom-in"
            >
              <div className="relative w-full overflow-hidden rounded-[30px] aspect-[985/506]">
                <DynamicVideoPlayer type="360" />
              </div>
            </div>

            {/* Right cards */}
            <div
              className="lg:col-span-3 xl:mt-[-3] p-3 xl:px-4 xl:py-9 flex flex-col gap-4 sm:gap-5 order-3"
              data-aos="fade-left"
            >
              {rightCards.map((card, i) => (
                <CardItem key={i} {...card} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 lg:mt-10 xl:mt-[-10] flex justify-center z-20" data-aos="fade-up">
          <Button
            href="#specs"
            variant="primary"
            size="md"
            className="rounded-full px-6 py-3"
          >
            Product Specifications
          </Button>
        </div>

      </div>
    </section>
  );
}

function CardItem({
  title,
  body,
  href,
  icon,
}: {
  title: string;
  body: string;
  href: string;
  icon: string | React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-100 flex items-stretch gap-4 w-full rounded-[10px] p-4 shadow-[0px_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[140px] sm:min-h-[150px] 2xl:min-h-[164px]">

      <div className="flex-1 min-w-0 text-left flex flex-col justify-between">
        <div>
          <Typography
            variant="h4"
            color="dark"
            className="font-semibold text-[15px] sm:text-[17px] 2xl:text-[20px]"
          >
            {title}
          </Typography>
          <Typography
            variant="body"
            color="none"
            className="text-[#555555] text-[12px] sm:text-[13px] 2xl:text-[18px]"
          >
            {body}
          </Typography>
          <Typography
            as="a"
            variant="small"
            color="primary"
            href={href}
            className="inline-flex items-center gap-0.5 font-bold hover:underline"
          >
            Read More <ArrowUpRight size={12} strokeWidth={2.5} />
          </Typography>
        </div>


      </div>

      <div className="shrink-0 self-start w-8 h-8 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-[#9C0B38] rounded-xl flex items-center justify-center text-white">
        {typeof icon === "string" ? (
          <img src={icon} alt={title} className="w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
        ) : (
          icon
        )}
      </div>

    </div>
  );
}