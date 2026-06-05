"use client";

import React from "react";
import Image from "next/image";
import { therapiesContent } from "../data/content";
import { TherapiesData, TherapyItem } from "../types";
import { textStyles } from "./typography";

interface TherapiesProps {
  data?: TherapiesData;
}

export default function Therapies({ data = therapiesContent }: TherapiesProps) {
  return (
    <section id="therapies" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Header Block */}
        <div className="text-center max-w-5xl mx-auto mb-12 lg:mb-16 space-y-4" data-aos="fade-up">
          <h2 className={textStyles.heading}>
            {data.title}
          </h2>
          <p className={textStyles.body}>
            Delivering safe, precise, and reliable infusion therapy solutions for acute pain management, oncology, obstetrics, parenteral nutrition, palliative care, antibiotic infusion, hydration, and other specialized treatments supporting better care for every patient.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-6 items-stretch" data-aos="fade-up">
          <div className="flex flex-col justify-between gap-6 h-full">
            <TherapyCard item={data.items[0]} aspect="aspect-[1.86/1]" />
            <TherapyCard item={data.items[3]} aspect="aspect-[1.86/1]" />
          </div>
          <div className="h-full flex flex-col">
            <TherapyCard item={data.items[1]} aspect="aspect-[0.9/1]" className="flex-1 h-full" />
          </div>
          <div className="flex flex-col justify-between gap-6 h-full">
            <TherapyCard item={data.items[2]} aspect="aspect-[1.86/1]" />
            <TherapyCard item={data.items[4]} aspect="aspect-[1.86/1]" />
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden" data-aos="fade-up">
          <TherapyCard item={data.items[0]} aspect="aspect-[1.86/1]" />
          <TherapyCard item={data.items[1]} aspect="aspect-[1.5/1]" className="md:col-span-2 md:aspect-[2.2/1]" />
          <TherapyCard item={data.items[2]} aspect="aspect-[1.86/1]" />
          <TherapyCard item={data.items[3]} aspect="aspect-[1.86/1]" />
          <TherapyCard item={data.items[4]} aspect="aspect-[1.86/1]" />
        </div>

      </div>
    </section>
  );
}

interface TherapyCardProps {
  item: TherapyItem;
  aspect: string;
  className?: string;
}

function TherapyCard({ item, aspect, className = "" }: TherapyCardProps) {
  return (
    <div
      className={`relative rounded-[20px] overflow-hidden group shadow-[0px_3px_8px_0px_#0000003D] ${aspect} ${className}`}
      style={{ minHeight: "200px" }}
    >
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-slate-100 animate-pulse" />

      {/* Image */}
      <Image
        src={item.imageUrl}
        alt={item.imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
        unoptimized
      />

      {/* Gradient overlay */}


      {/* Title label */}
      <div className="absolute bottom-6 left-6 z-30">
        <span className={`${textStyles.boldTagline} !text-white inline-block px-4 py-1.5 rounded-md `}>
          {item.title}
        </span>
      </div>
    </div>
  );
}