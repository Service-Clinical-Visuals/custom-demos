"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Hero() {
  return (
    <section className="w-full bg-[#FFFFFF] flex justify-center px-3 sm:px-4 lg:px-6 2xl:px-8 pt-2 pb-4 sm:pb-5 lg:pb-6 2xl:pb-8">
      <div
        className="relative w-full max-w-[1400px] 2xl:max-w-[1760px] mx-auto overflow-hidden bg-black rounded-2xl sm:rounded-3xl 2xl:rounded-[28px]"
        style={{ height: "calc(100vh - 80px)" }}
        data-aos="fade-up"
      >
        {/* Video — absolutely fills the card with no gaps */}
        <div className="absolute inset-0 w-full h-full">
          <DynamicVideoPlayer
            type="banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient overlay for text legibility */}


        {/* Text + CTA — bottom-left */}
        <div className="relative  xl:max-w-[800px] 2xl:max-w-[1000px] z-20 h-full flex flex-col justify-end p-5 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 max-w-[85%] sm:max-w-lg lg:max-w-xl 2xl:max-w-2xl">

          <Typography
            variant="h1"
            as="h1"
            color="white"
            weight="semibold"
            className="leading-tight tracking-tight select-text mb-1"
          >
            Articulated Arms and Holders
          </Typography>

          <Typography
            variant="h1"
            as="p"
            color="white"
            weight="semibold"
            className="leading-tight tracking-tight select-text mb-6 sm:mb-7 lg:mb-8 2xl:mb-10"
          >
            Simply the best fixation.
          </Typography>

          <div>
            <Button
              href="#products"
              variant="primary"
              size="md"
              className="rounded-full text-xs px-5 py-2 sm:text-sm sm:px-6 sm:py-2.5 2xl:text-base 2xl:px-8 2xl:py-3"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}