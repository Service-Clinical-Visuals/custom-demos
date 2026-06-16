"use client";
import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import FeaturesGrid from "./FeaturesGrid";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function About() {
  return (
    <section
      id="company"
      className="w-full flex justify-center bg-white px-4 sm:px-6 lg:px-8 2xl:px-10 pt-14 pb-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14 2xl:pt-24 2xl:pb-16"
    >
      <div className="w-full max-w-[1400px] 2xl:max-w-[1760px] mx-auto flex flex-col">
        <FeaturesGrid />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-14 2xl:gap-20 items-center">

          {/* Video — spec: 699×474, border-radius 30px */}
          <div
            className="lg:col-span-5 w-full relative overflow-hidden border border-gray-200 bg-gray-100 shadow-sm hover:shadow-md transition-all duration-500 group"
            style={{ borderRadius: "30px", aspectRatio: "699/474" }}
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-2" className="object-cover  aspect-[4/3]" />
          </div>

          {/* Text content */}
          <div
            className="lg:col-span-7 flex flex-col justify-center text-left"
            data-aos="fade-left"
          >
            {/* Heading — Outfit SemiBold 34px, line-height 150%, letter-spacing 0.5% */}
            <Typography
              variant="h2"
              color="dark"
              weight="semibold"
              className="mb-5 sm:mb-6 2xl:mb-8 leading-[150%] tracking-[0.005em]"
            >
              Welcome to Baitella AG, the worldwide leading manufacturer of
              articulated arms with central locking knob.
            </Typography>

            {/* Paragraphs — Outfit Regular 18px, line-height 150%, letter-spacing 0 */}
            <div className="flex flex-col gap-3 sm:gap-4 2xl:gap-5 mb-7 sm:mb-8 2xl:mb-10">
              {[
                "Our easy-to-use and customized holding arm systems are used successfully worldwide as a quality product for medical and industrial applications.",
                "For over 40 years, the Swiss Made FISSO articulated arm has been considered the undisputed original and stands for quality, functional design and reliability. The FISSO articulated arm can be quickly deployed in any desired position while the central clamping knob ensures that all three joints are precisely fixed and held securely.",
                "With extensive OEM experience and a wide model range, FISSO delivers reliable articulated arms with exceptional performance for every application.",
              ].map((text, i) => (
                <Typography
                  key={i}
                  variant="h5"
                  weight="normal"
                  color="none"
                  className="text-[#555555] leading-[150%] tracking-[0px] text-[14px] sm:text-[15px] lg:text-[16px] 2xl:text-[18px]"
                >
                  {text}
                </Typography>
              ))}
            </div>

            <div>
              <Button
                href="#products"
                variant="primary"
                size="md"
                className="rounded-full text-sm 2xl:text-base px-6 py-2.5 2xl:px-8 2xl:py-3"
              >
                Discover More
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}