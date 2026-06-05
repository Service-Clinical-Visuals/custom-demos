"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { parenteralNutritionContent } from "../data/content";
import { ParenteralNutritionData } from "../types";
import { textStyles } from "./typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
interface ParenteralNutritionProps {
  data?: ParenteralNutritionData;
}

export default function ParenteralNutrition({ data = parenteralNutritionContent }: ParenteralNutritionProps) {
  return (
    <section className="w-full h-[698px] bg-[#3363AC] text-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-12">

          {/* Left Column: Text */}
          <div className="flex-1 space-y-5 flex flex-col items-start" data-aos="fade-right">
            <h2 className={`${textStyles.heading} !text-white`}>
              {data.title}
            </h2>
            <div className="space-y-4">
              {data.paragraphs.map((para, i) => (
                <p key={i} className={`${textStyles.body} !text-white/90`}>
                  {para}
                </p>
              ))}
            </div>
            <div className="pt-2">
              <Link href={data.buttonHref} className="btn-secondary">
                <span className="btn-secondary-text">{data.buttonText}</span>
                <span className="btn-secondary-icon">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Video */}
          <div className="w-[820px] h-[520px] flex-shrink-0" data-aos="fade-left">
            <div className="relative w-full h-full rounded-[30px] overflow-hidden flex items-center justify-center shadow-md">
              <div
                className="absolute inset-0"
                style={{
                  // backgroundColor: "#ffffff",
                  // backgroundImage: `
                  //   linear-gradient(45deg, #f3f4f6 25%, transparent 25%), 
                  //   linear-gradient(-45deg, #f3f4f6 25%, transparent 25%), 
                  //   linear-gradient(45deg, transparent 75%, #f3f4f6 75%), 
                  //   linear-gradient(-45deg, transparent 75%, #f3f4f6 75%)
                  // `,
                  backgroundSize: "24px 24px",
                  backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0px"
                }}
              />
              <DynamicVideoPlayer
                type="short-1"
                className="absolute inset-0 object-fill w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}