"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BarChart3, MessageSquare, Gauge, ArrowUpRight } from "lucide-react";
import { micrelCareContent } from "../data/content";
import { MicrelCareTab, MicrelCareFeature } from "../types";
import { textStyles } from "./typography";

interface MicrelCareProps {
  data?: MicrelCareTab[];
}
const iconImages = [
  "/micrel/micrelcare1.png",
  "/micrel/micrelcare2.png",
  "/micrel/micrelcare3.png",
  "/micrel/micrelcare4.png",
  "/micrel/micrelcare5.png",
  "/micrel/micrelcare6.png ",
  "/micrel/micrelcare7.png ",
  "/micrel/micrelcare8.png ",
  "/micrel/micrelcare9.png ",
  "/micrel/micrelcare10.png ",

];
export default function MicrelCare({ data = micrelCareContent }: MicrelCareProps) {
  const [activeTabId, setActiveTabId] = useState(data[0]?.id || "patient-care");

  // Get active tab content
  const activeTab = data.find((tab) => tab.id === activeTabId) || data[0];

  // Helper to map icon names to custom SVGs or images matching Figma
  const renderIcon = (iconName: string, itemTitle: string) => {
    const svgClasses = "w-[22px] h-[22px] stroke-white fill-none stroke-[2]";
    switch (iconName) {
      case "reporting":
        return (
          <Image
            src="/micrel/micrelcare1.png"
            alt={itemTitle}
            width={42}
            height={42}
            className="object-contain"
            unoptimized
          />
        );
      case "feedback":
        return (
          <Image
            src="/micrel/micrelcare2.png"
            alt={itemTitle}
            width={42}
            height={42}
            className="object-contain"
            unoptimized
          />
        );
      case "pressure":
        return (
          <Image
            src="/micrel/micrelcare3.png"
            alt={itemTitle}
            width={42}
            height={42}
            className="object-contain"
            unoptimized
          />
        );
      case "safety":
        return (
          <svg viewBox="0 0 24 24" className={svgClasses} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case "infusion monitoring":
        return (
          <Image
            src="/micrel/micrelcare4.png"
            alt={itemTitle}
            width={42}
            height={42}
            className="object-contain"
            unoptimized
          />
        );
      case "patient portal":
        return (
          <Image
            src="/micrel/micrelcare5.png"
            alt={itemTitle}
            width={42}
            height={42}
            className="object-contain"
            unoptimized
          />
        );
      case "alarm":
        return (
          <Image
            src="/micrel/micrelcare6.png"
            alt={itemTitle}
            width={42}
            height={42}
            className="object-contain"
            unoptimized
          />
        );
      case "fleet":
        return (
          <Image
            src="/micrel/micrelcare8.png"
            alt={itemTitle}
            width={42}
            height={42}
            className="object-contain"
            unoptimized
          />
        );
      case "documenting":
        return (
          <Image
            src="/micrel/micrelcare9.png"
            alt={itemTitle}
            width={42}
            height={42}
            className="object-contain"
            unoptimized
          />
        );
      default:
        return (
          <svg viewBox="0 0 24 24" className={svgClasses} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 12L16 8" />
          </svg>
        );
    }
  };

  return (
    <section id="connected-health" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
            {activeTab.title}
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left Column: Tab Pills & Action Button (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8" data-aos="fade-right">

            {/* Tab Buttons container */}
            <div className="flex flex-col gap-4">
              {data.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`relative w-full text-left py-5 px-8 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 ${isActive
                      ? "bg-[#96C9E75C] text-primary"
                      : "bg-[#96C9E75C] text-secondary"
                      }`}
                    style={{ minHeight: "64px" }}
                  >
                    {tab.label}

                    {isActive && (
                      <div
                        className="hidden lg:block absolute top-1/2 -right-5 -translate-y-1/2"
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: "18px solid transparent",
                          borderBottom: "18px solid transparent",
                          borderLeft: "20px solid rgba(150, 201, 231, 0.36)",
                        }}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* See Product In Action CTA */}
            <div className="pt-2 flex justify-start">
              <Link
                href={activeTab.buttonHref}
                className="btn-primary"
              >
                <span className="btn-primary-text">{activeTab.buttonText}</span>
                <span className="btn-primary-icon">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </div>

          </div>

          {/* Right Column: Active Content Card (7 cols) */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg space-y-8">



              {activeTab.items.map((item, idx) => (
                <div key={idx} className="flex gap-4 sm:gap-6 items-start">

                  {/* Icon Badge */}
                  <div className="w-16 h-16 rounded-full bg-[#2353a3] flex items-center justify-center flex-shrink-0 shadow-md">
                    {renderIcon(item.iconName, item.title)}
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1">
                    <h4 className="font-bold  leading-[150%] tracking-[0.5px] font-['Outfit'] text-black">
                      {item.title}
                    </h4>
                    <p className="font-normal leading-[150%] tracking-[0.5px] font-['Outfit'] text-black">
                      {item.description}
                    </p>
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
