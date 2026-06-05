"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { newsInsightsContent } from "../data/content";
import { NewsInsightsData } from "../types";

interface NewsInsightsProps {
  data?: NewsInsightsData;
}

export default function NewsInsights({ data = newsInsightsContent }: NewsInsightsProps) {
  return (
    <section id="news" className="py-16 md:py-24 lg:mt-20 lg:py-32" style={{ backgroundColor: "#96C9E75C" }}>
      <div className="container mx-auto px-4">

        {/* Header Block: Title, Subtitle & CTA on the right */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 sm:mb-16" data-aos="fade-up">
          <div className="max-w-5xl space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary tracking-normal">
              {data.title}
            </h2>
            <p className="text-sm sm:text-base text-secondary tracking-wide leading-relaxed font-medium">
              {data.description}
            </p>
          </div>
          <div className="flex-shrink-0 pt-2 lg:pt-0">
            <Link
              href={data.buttonHref}
              className="inline-flex items-stretch bg-primary hover:bg-primary-hover text-white text-sm font-bold  overflow-hidden transition-all duration-300 group shadow-sm border-2 border-primary"
              style={{ minHeight: "44px" }}
            >
              <span className="flex items-center px-5 py-2.5">{data.buttonText}</span>
              <span className="w-11 flex items-center justify-center bg-white border-l-2 border-primary group-hover:bg-slate-50 transition-colors">
                <ArrowUpRight size={16} className="text-primary" />
              </span>
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {data.cards.map((card, index) => (
            <div
              key={card.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-[24px] border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="p-5 pb-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-5 pt-4 pb-5 flex flex-col h-full">
                <div className="space-y-2">
                  <h3
                    className="text-[20px] font-bold text-[#2F3A45] leading-[1.45] min-h-[84px]"
                  >
                    {card.title}
                  </h3>

                  <p className="text-[10px] text-[#8C8C8C]">
                    {card.date}
                  </p>
                </div>

                <div className="w-full h-px bg-[#D9D9D9] my-4" />

                <Link
                  href={card.linkHref}
                  className="inline-flex items-center gap-2 text-[#3568B8] font-bold text-[18px] hover:gap-3 transition-all"
                >
                  {card.linkText}

                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Slide Pagination Indicator at Bottom */}
        <div className="flex justify-center items-center gap-3 mt-12 sm:mt-16" data-aos="fade-up">
          <span
            className="w-12 h-1 bg-primary rounded-full"
            aria-label="Active page 1 indicator"
          />
          <span
            className="w-12 h-1 bg-primary/20 rounded-full"
            aria-label="Inactive page 2 indicator"
          />
        </div>

      </div>
    </section>
  );
}
