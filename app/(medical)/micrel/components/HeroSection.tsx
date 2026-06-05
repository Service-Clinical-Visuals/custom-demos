"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { heroContent } from "../data/content";
import { HeroData } from "../types";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

interface HeroSectionProps {
  data?: HeroData;
}

export default function HeroSection({ data = heroContent }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative w-full h-screen  min-h-[550px] flex items-end justify-start bg-black overflow-hidden"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-screen z-0">
        <DynamicVideoPlayer
          type="banner"

          className="absolute inset-0 w-full h-screen object-cover"
        />
        {/* Light gradient only at the bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
      </div>

      {/* Hero Content — bottom-left aligned */}
      <div className="relative z-20 w-full container mx-auto pb-16 md:pb-20 lg:pb-24">
        <div className="w-full text-left flex flex-col items-start" data-aos="fade-up">

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white tracking-tight leading-[1.2] mb-3 md:whitespace-nowrap">
            {data.title}
          </h1>

          {/* Subtitle — white, small */}
          <p className=" text-white max-w-[580px] mb-6 text-sm md:text-[14px] leading-relaxed">
            {data.subtitle}
          </p>

          {/* CTA Button — split style */}
          <Link href={data.buttonHref} className="btn-primary">
            <span className="btn-primary-text">
              {data.buttonText}
            </span>

            <span className="btn-primary-icon">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>
      </div>


    </section>
  );
}
