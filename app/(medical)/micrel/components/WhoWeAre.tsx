"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { whoWeAreContent, missionContent } from "../data/content";
import { SectionBlock } from "../types";

interface WhoWeAreProps {
  whoWeAreData?: SectionBlock;
  missionData?: SectionBlock;
}

export default function WhoWeAre({
  whoWeAreData = whoWeAreContent,
  missionData = missionContent,
}: WhoWeAreProps) {
  return (
    <section id="about-us" className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 space-y-12 lg:space-y-16">

        {/* Row 1: Who We Are */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Image - takes ~58% */}
          <div
            className="relative w-full lg:w-[58%] h-[260px] sm:h-[320px] lg:h-[354px] rounded-[30px] overflow-hidden shadow-[0px_3px_8px_0px_#0000003D] group flex-shrink-0"
            data-aos="fade-right"
          >
            <div className="absolute inset-0 bg-slate-100 animate-pulse rounded-[30px]" />
            <Image
              src={whoWeAreData.imageUrl}
              alt={whoWeAreData.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-105 rounded-[30px]"
              unoptimized
            />
          </div>

          {/* Text - takes ~42% */}
          <div
            className="flex flex-col items-start space-y-4 w-full lg:w-[42%]"
            data-aos="fade-left"
          >
            <h2
              className="font-semibold leading-[125%] tracking-[0px]"
              style={{ fontFamily: 'Outfit', fontSize: '38px', color: '#3363AC' }}
            >
              {whoWeAreData.title}
            </h2>
            <div className="space-y-3">
              <p
                className="font-normal leading-[150%] tracking-[0.8px]"
                style={{ fontFamily: 'Outfit', fontSize: '16px', color: '#626262' }}
              >
                {whoWeAreData.description}
              </p>
              {whoWeAreData.descriptionExtended && (
                <p
                  className="font-normal leading-[150%] tracking-[0.8px]"
                  style={{ fontFamily: 'Outfit', fontSize: '16px', color: '#626262' }}
                >
                  {whoWeAreData.descriptionExtended}
                </p>
              )}
            </div>
            <div className="pt-1">
              <Link href={whoWeAreData.buttonHref} className="btn-primary">
                <span className="btn-primary-text">{whoWeAreData.buttonText}</span>
                <span className="btn-primary-icon"><ArrowUpRight size={18} /></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Row 2: Our Mission */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Text - takes ~42% (left on desktop) */}
          <div
            className="flex flex-col items-start space-y-4 w-full lg:w-[42%] order-2 lg:order-1"
            data-aos="fade-right"
          >
            <h2
              className="font-semibold leading-[125%] tracking-[0px]"
              style={{ fontFamily: 'Outfit', fontSize: '38px', color: '#3363AC' }}
            >
              {missionData.title}
            </h2>
            <div className="space-y-3">
              <p
                className="font-normal leading-[150%] tracking-[0.8px]"
                style={{ fontFamily: 'Outfit', fontSize: '16px', color: '#626262' }}
              >
                {missionData.description}
              </p>
              {missionData.descriptionExtended && (
                <p
                  className="font-normal leading-[150%] tracking-[0.8px]"
                  style={{ fontFamily: 'Outfit', fontSize: '16px', color: '#626262' }}
                >
                  {missionData.descriptionExtended}
                </p>
              )}
            </div>
            <div className="pt-1">
              <Link href={missionData.buttonHref} className="btn-primary">
                <span className="btn-primary-text">{missionData.buttonText}</span>
                <span className="btn-primary-icon"><ArrowUpRight size={18} /></span>
              </Link>
            </div>
          </div>

          {/* Image - takes ~58% (right on desktop) */}
          <div
            className="relative w-full lg:w-[58%] h-[260px] sm:h-[320px] lg:h-[354px] rounded-[30px] overflow-hidden shadow-[0px_3px_8px_0px_#0000003D] group order-1 lg:order-2 flex-shrink-0"
            data-aos="fade-left"
          >
            <div className="absolute inset-0 bg-slate-100 animate-pulse rounded-[30px]" />
            <Image
              src={missionData.imageUrl}
              alt={missionData.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-105 rounded-[30px]"
              unoptimized
            />
          </div>
        </div>

      </div>
    </section>
  );
}