"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { partnersContent } from "../data/content";

interface PartnersSectionProps {
  data?: typeof partnersContent;
}

export default function PartnersSection({ data = partnersContent }: PartnersSectionProps) {
  // Helper to render custom high-fidelity SVG icons matching the screenshot
  const renderSVGIcon = (iconName: string) => {
    const commonStyles = "w-12 h-12 stroke-primary fill-none stroke-[1.5]";
    switch (iconName) {
      case "pharmaceutical":
        return (
          <svg viewBox="0 0 24 24" className={commonStyles} strokeLinecap="round" strokeLinejoin="round">
            {/* Wing 1 */}
            <path d="M12 6c-2.5-2.5-6-1.5-8 .5 1.5 2 3.5 2.5 5 1.5" />
            {/* Wing 2 */}
            <path d="M12 6c2.5-2.5 6-1.5 8 .5-1.5 2-3.5 2.5-5 1.5" />
            {/* Staff */}
            <line x1="12" y1="2" x2="12" y2="22" strokeWidth="2" />
            <circle cx="12" cy="2" r="1" className="fill-primary" />
            {/* Snake 1 */}
            <path d="M8.5 17c1.5-1 3.5-2 3.5-4.5s-2.5-3.5-3.5-4.5" />
            <path d="M12 8c1.5 1 3.5 2 3.5 4.5S13 16 12 17" />
            {/* Snake 2 */}
            <path d="M15.5 17c-1.5-1-3.5-2-3.5-4.5s2.5-3.5 3.5-4.5" />
            <path d="M12 8c-1.5 1-3.5 2-3.5 4.5S11 16 12 17" />
          </svg>
        );
      case "healthcare":
        return (
          <svg viewBox="0 0 24 24" className={commonStyles} strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 10V12a7.5 7.5 0 0 0 15 0V10" />
            <path d="M12 19.5v2" />
            <rect x="10" y="21" width="4" height="1" rx="0.5" />
            <path d="M5 4.5v3a1.5 1.5 0 0 0 3 0v-3" />
            <path d="M16 4.5v3a1.5 1.5 0 0 0 3 0v-3" />
            <path d="M8 4.5h8" />
          </svg>
        );
      case "research":
        return (
          <svg viewBox="0 0 24 24" className={commonStyles} strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H8v3h6V2z" />
            <path d="M11 5v9" />
            <path d="M7 17a4 4 0 0 0 8 0V8h-4" />
            <path d="M4 21h16" />
            <path d="M15 13.5a2 2 0 1 0 4 0" />
          </svg>
        );
      case "device":
        return (
          <svg viewBox="0 0 24 24" className={commonStyles} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18" />
            <path d="M4 21V10l5-3v4l5-3v4l6-3v12H4z" />
            <path d="M7 14h2v3H7v-3z" />
            <path d="M11 14h2v3h-2v-3z" />
            <path d="M15 14h2v3h-2v-3z" />
            <line x1="6" y1="6" x2="6" y2="8" />
            <line x1="10" y1="6" x2="10" y2="8" />
            <line x1="14" y1="6" x2="14" y2="8" />
          </svg>
        );
      case "distribution":
        return (
          <svg viewBox="0 0 24 24" className={commonStyles} strokeLinecap="round" strokeLinejoin="round">
            {/* Top box */}
            <rect x="9.5" y="2" width="5" height="4" rx="1" />
            <circle cx="12" cy="4" r="0.5" className="fill-primary" />
            {/* Branch lines */}
            <line x1="12" y1="6" x2="12" y2="11" />
            <line x1="5" y1="11" x2="19" y2="11" />
            <line x1="5" y1="11" x2="5" y2="16" />
            <line x1="12" y1="11" x2="12" y2="16" />
            <line x1="19" y1="11" x2="19" y2="16" />
            {/* Bottom 3 boxes */}
            <rect x="2.5" y="16" width="5" height="4" rx="1" />
            <rect x="9.5" y="16" width="5" height="4" rx="1" />
            <rect x="16.5" y="16" width="5" height="4" rx="1" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative overflow-visible flex flex-col bg-white">
      {/* 1. Wide Banner Card with Background Image */}
      <div className="relative w-full overflow-hidden py-24 sm:py-32 lg:py-40 bg-[#3363AC] flex items-center justify-start">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={data.backgroundImageUrl}
            alt="Therapies Banner Background"
            fill
            sizes="100vw"
            className="object-cover opacity-50"
            priority
            unoptimized
          />
          {/* Soft blue overlay matching reference design */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3363AC]/50 via-[#3363AC]/50 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 w-full relative z-10 text-white">
          <div className="max-w-xl space-y-6" data-aos="fade-right">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              {data.title}
            </h2>
            <p className="text-base sm:text-lg text-white leading-relaxed font-medium">
              {data.description}
            </p>

            <div className="pt-2">
              <Link
                href={data.buttonHref}
                className="btn-primary"
              >
                <span className="btn-primary-text">{data.buttonText}</span>
                <span className="btn-primary-icon">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Partner Section */}
      <div className="relative -mt-6 z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0" data-aos="fade-up" data-aos-delay="100">

            {/* We Partner With Badge */}
            <div className="shrink-0 self-center lg:mr-8 lg:translate-y-5 mb-4 lg:mb-0">
              <div className="relative bg-[#3568B8] text-white rounded-[7px] px-10 py-6 font-semibold text-[20px] whitespace-nowrap">
                We Partner With

                {/* Sharp Triangle */}
                <div
                  className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-6 w-0 h-0"
                  style={{
                    borderTop: "18px solid transparent",
                    borderBottom: "18px solid transparent",
                    borderLeft: "24px solid #3568B8",
                  }}
                />
              </div>
            </div>

            {/* Partner Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5 3xl:gap-8 w-full lg:w-auto">
              {data.partners.map((partner, index) => (
                <div
                  key={index}
                  className="
              bg-white
              border
              border-[#E8E8E8]
              rounded-[10px]
              shadow-[0_4px_12px_rgba(0,0,0,0.08)]
              hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
              transition-all
              duration-300
              w-full
              max-w-[200px]
              3xl:max-w-[220px]
              h-[220px]
              3xl:h-[240px]
            
              flex
              flex-col
              items-center
              justify-center
              px-5
              mx-auto
            "
                >
                  {/* Icon */}
                  <div className="h-[100px] flex items-center justify-center mb-4">
                    <Image
                      src={`/micrel/therapy_image${index + 1}.png`}
                      alt={partner.label}
                      width={64}
                      height={64}
                      className="object-contain w-[64px] h-[64px]"
                      unoptimized
                    />
                  </div>

                  {/* Text */}
                  <div className="h-[60px] flex items-start justify-center">
                    <span
                      className="
                  text-center
                  font-semibold
                  text-[15px]
                  leading-[1.5]
                  text-[#333333]
                  font-['Outfit']
                "
                    >
                      {partner.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
