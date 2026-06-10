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
      <div className="w-full max-w-[1400px] 2xl:max-w-[1760px] flex flex-col">
        <FeaturesGrid />

        <div className="w-full border-t border-gray-200 mt-12 mb-10 sm:mt-16 sm:mb-12 lg:mt-20 lg:mb-14 2xl:mt-24 2xl:mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-14 2xl:gap-20 items-center">
          <div
            className="lg:col-span-5 w-full relative aspect-[4/3] rounded-2xl 2xl:rounded-3xl overflow-hidden border border-gray-200 bg-gray-100 shadow-sm hover:shadow-md transition-all duration-500 group"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-3" />
          </div>

          <div
            className="lg:col-span-7 flex flex-col justify-center text-left"
            data-aos="fade-left"
          >
            <Typography
              variant="h2"
              color="dark"
              weight="semibold"
              className="leading-tight tracking-tight text-[#1a1a1a] mb-5 sm:mb-6 2xl:mb-8"
            >
              Welcome to Baitella AG, the worldwide leading manufacturer of
              articulated arms with central locking knob.
            </Typography>

            <div className="flex flex-col gap-3 sm:gap-4 2xl:gap-5 mb-7 sm:mb-8 2xl:mb-10">
              <Typography
                variant="body"
                color="body"
                className="leading-relaxed text-[#555555]"
              >
                Our easy-to-use and customized holding arm systems are used
                successfully worldwide as a quality product for medical and
                industrial applications.
              </Typography>

              <Typography
                variant="body"
                color="body"
                className="leading-relaxed text-[#555555]"
              >
                For over 40 years, the Swiss Made FISSO articulated arm has been
                considered the undisputed original and stands for quality,
                functional design and reliability. The FISSO articulated arm can
                be quickly deployed in any desired position while the central
                clamping knob ensures that all three joints are precisely fixed
                and held securely.
              </Typography>

              <Typography
                variant="body"
                color="body"
                className="leading-relaxed text-[#555555]"
              >
                With extensive OEM experience and a wide model range, FISSO
                delivers reliable articulated arms with exceptional performance
                for every application.
              </Typography>
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
