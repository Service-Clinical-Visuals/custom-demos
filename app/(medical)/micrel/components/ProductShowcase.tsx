"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, RotateCw, ArrowRight } from "lucide-react";
import { productShowcaseContent } from "../data/content";
import { ProductShowcaseData } from "../types";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { textStyles } from '../components/typography'
interface ProductShowcaseProps {
  data?: ProductShowcaseData;
}

export default function ProductShowcase({ data = productShowcaseContent }: ProductShowcaseProps) {
  return (
    <section className="py-12 md:py-16 bg-[#96C9E75C]">
      <div className="container mx-auto ">

        {/* Outermost Card Container with Light Blue Border */}
        <div
          className="rounded-[24px]  p-6 sm:p-8 md:p-10 lg:p-0 relative overflow-hidden"
          style={{ borderColor: "#96C9E75C" }}
          data-aos="fade-up"
        >
          {/* Top Half: Grid with Video & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">


            {/* Left: 360 Deg Video Placeholder */}
            <div className="lg:col-span-6 relative w-full aspect-[16/9] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-100 flex items-center justify-center shadow-sm">

              {/* Checkerboard Pattern Background */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: "#ffffff",
                  backgroundImage: `
                    linear-gradient(45deg, #f3f4f6 25%, transparent 25%), 
                    linear-gradient(-45deg, #f3f4f6 25%, transparent 25%), 
                    linear-gradient(45deg, transparent 75%, #f3f4f6 75%), 
                    linear-gradient(-45deg, transparent 75%, #f3f4f6 75%)
                  `,
                  backgroundSize: "24px 24px",
                  backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0px"
                }}
              />
              <DynamicVideoPlayer
                type="360"
              />

            </div>

            {/* Right: Serena Green Information */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-4">


              <h2 className={textStyles.heading}>
                New Rythmic<sup className="font-semibold" style={{ fontFamily: 'Outfit', fontSize: '22px' }}>™</sup> Serena Green
              </h2>

              <p className={textStyles.body}>
                Home parenteral nutrition can create significant emotional and physical challenges for both patients and caregivers. That is why dependable ambulatory infusion therapy solutions are essential — not only to ensure safe and effective treatment delivery, but also to provide confidence, comfort, and peace of mind throughout the care journey.
              </p>

              <p className={textStyles.body}>
                Designed with patient lifestyles in mind, these advanced solutions help make therapy more seamless, discreet, and convenient, enabling greater mobility, independence, and an improved quality of life during long-term treatment.
              </p>

              <p className={textStyles.boldTagline}>
                With Rythmic™ Serena, you can offer your patients the confidence, peace of mind and dignity they deserve.
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

          {/* Dividing Border Line */}
          <div
            className="-mx-6 sm:-mx-8 md:-mx-10 lg:-mx-12 border-t-[1.5px] my-8 lg:my-10"
            style={{ borderColor: "#00000042" }}
          />

          {/* Bottom Half: Center Callout Card */}
          <div className="mx-auto text-center space-y-4 flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold text-primary tracking- leading-tight">
              See how Rythmic {" "}
              <span className="text-secondary font-bold"> ™ </span>{" "}
              Serena empowers you to elevate parenteral nutrition
            </h3>
            <p className="text-sm sm:text-base text-secondary max-w-[75%] mx-auto leading-relaxed font-medium">
              Rythmic™ Serena provides the level of comfort, safety and efficiency that patients who require parenteral nutritional support, their caregivers and healthcare professionals deserve. Built for both homecare and clinical environments, Rythmic™ Serena simplifies daily treatment management for caregivers and healthcare professionals, improving overall patient experience and supporting high-quality nutritional care.
            </p>
            <div className="pt-2">
              <Link
                href="/learn-more"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-bold text-sm sm:text-base transition-colors duration-200 group"
              >
                <span>Learn More</span>
                <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
