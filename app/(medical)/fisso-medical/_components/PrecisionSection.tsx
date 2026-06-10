"use client";

import React from "react";
import { BedDouble, Settings, Lightbulb, ArrowUpRight } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function PrecisionSection() {
  const leftCards = [
    {
      title: "Patient Positioning",
      body: "Patient positioning refers to the way patients are positioned and...",
      href: "#patient-positioning",
      icon: <BedDouble size={22} strokeWidth={1.5} />,
    },
    {
      title: "Adaptable and Ergonomic Designs",
      body: "Fisso's positioning systems are user-friendly and...",
      href: "#ergonomic-designs",
      icon: <Settings size={22} strokeWidth={1.5} />,
    },
  ];

  const rightCards = [
    {
      title: "Fisso's Patient Positioning Solutions",
      body: "Fisso offers advanced patient positioning systems....",
      href: "#positioning-solutions",
      icon: <BedDouble size={22} strokeWidth={1.5} />,
    },
    {
      title: "Commitment to Innovation",
      body: "Fisso continuously enhances its positioning systems with....",
      href: "#innovation-commitment",
      icon: <Lightbulb size={22} strokeWidth={1.5} />,
    },
  ];

  return (
    <section
      id="precision"
      className="w-full flex justify-center px-3 sm:px-4 lg:px-6 2xl:px-8 py-4 sm:py-5 lg:py-6 2xl:py-8 bg-white"
    >
      <div className="w-full max-w-[1400px] 2xl:max-w-[1760px] flex flex-col">
        <div
          className="relative w-full overflow-hidden bg-gradient-to-r from-[#9C0B38] to-[#80072C] text-center rounded-2xl sm:rounded-3xl 2xl:rounded-[28px] pt-12 pb-24 sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-40 2xl:pt-24 2xl:pb-48"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/medical/fisso-medical/background1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#9C0B38]/20" />
          </div>

          <div className="relative z-10 max-w-[800px] 2xl:max-w-[1200px] mx-auto px-6">
            <Typography
              variant="h2"
              color="white"
              weight="semibold"
              className="leading-tight mb-3"
            >
              Engineered for Precision, Comfort, and Efficiency
            </Typography>
            <Typography
              variant="body"
              color="white"
              className="opacity-90 leading-relaxed"
            >
              FISSO solutions deliver precision, flexibility, and ergonomic
              support for efficient surgical workflows.
            </Typography>
          </div>
        </div>

        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 2xl:px-10 mt-6 sm:mt-8 lg:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-6 2xl:gap-8 items-start">
            <div
              className="lg:col-span-3 flex flex-col gap-4 sm:gap-5 2xl:gap-6 order-2 lg:order-1"
              data-aos="fade-right"
            >
              {leftCards.map((card, i) => (
                <CardItem key={i} {...card} />
              ))}
            </div>

            <div
              className="lg:col-span-6 order-1 lg:order-2 mt-[-45px] sm:mt-[-60px] lg:mt-[-85px] 2xl:mt-[-105px] relative z-30"
              data-aos="zoom-in"
            >
              <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl h-[220px] sm:h-[300px] lg:h-[380px] 2xl:h-[460px]">
                <DynamicVideoPlayer type="360" />
              </div>
            </div>

            <div
              className="lg:col-span-3 flex flex-col gap-4 sm:gap-5 2xl:gap-6 order-3"
              data-aos="fade-left"
            >
              {rightCards.map((card, i) => (
                <CardItem key={i} {...card} />
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-8 sm:mt-10 lg:mt-12 flex justify-center z-20"
          data-aos="fade-up"
        >
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
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-stretch gap-4 min-h-[140px] sm:min-h-[150px] 2xl:min-h-[160px] w-full">
      <div className="flex-1 min-w-0 text-left flex flex-col justify-between">
        <div>
          <Typography
            variant="h3"
            color="dark"
            weight="bold"
            className="leading-snug mb-1.5 text-[#212121]"
          >
            {title}
          </Typography>
          <Typography
            variant="body"
            color="muted"
            className="leading-relaxed text-[#555555] mb-3"
          >
            {body}
          </Typography>
        </div>
        <div>
          <a
            href={href}
            className="inline-flex items-center gap-0.5 text-[12px] font-bold text-[#9C0B38] hover:underline"
          >
            Read More <ArrowUpRight size={12} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      <div className="shrink-0 self-start w-10 h-10 sm:w-11 sm:h-11 bg-[#9C0B38] rounded-xl flex items-center justify-center text-white shadow-sm">
        {icon}
      </div>
    </div>
  );
}
