"use client";

import React from "react";
import { Check } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function PatientPositioning() {
  const features = [
    "Comfortable handling with a central clamping knob for fast, user friendly, and safe positioning of Arm and Body Supports",
    "Designed to provide maximum access to the surgical site while ensuring optimal positioning and support for smooth and efficient anesthetic administration during medical procedures.",
    "FISSO rail clamps are designed to fit seamlessly on standard side rails of operating tables, ensuring secure attachment, stability, and reliable support for various medical applications.",
    "The Ultra Line articulated arm is engineered with extra-strong construction to provide maximum stability and reliable performance in demanding industrial applications.",
  ];

  return (
    <section className="w-full flex justify-center px-3 sm:px-4 lg:px-6 2xl:px-8 py-4 sm:py-5 lg:py-6 2xl:py-8">
      <div
        className="relative w-full overflow-hidden max-w-full xl:max-w-[1380px] 2xl:max-w-[1760px] rounded-2xl sm:rounded-3xl 2xl:rounded-[28px] shadow-xl px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-14 lg:py-14 2xl:px-20 2xl:py-18"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/medical/fisso-medical/background1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#4E1E2D]/75" />
        </div>

        <div className="relative z-10 text-center max-w-3xl 2xl:max-w-[1200px] mx-auto mb-8 sm:mb-10 2xl:mb-14">
          <Typography
            variant="h2"
            color="white"
            weight="semibold"
            className="leading-tight tracking-tight mb-3 2xl:mb-4"
          >
            Robust Articulated Holders for an optimal Patient Positioning
          </Typography>

          <Typography
            variant="body"
            color="white"
            className="opacity-80 leading-relaxed"
          >
            Central clamping mechanism for easy, fast and secure positioning of
            the patient arms and body
          </Typography>

          <div className="w-full h-px bg-white/20 mx-auto mt-6 2xl:mt-8" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 2xl:gap-16 items-start lg:items-center">
          <div className="lg:col-span-5 flex flex-col">
            <Typography
              variant="h3"
              color="white"
              weight="bold"
              className="mb-5 2xl:mb-7 tracking-tight"
            >
              Our features
            </Typography>

            <ul className="space-y-4 2xl:space-y-5 mb-7 2xl:mb-9">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <span className="shrink-0 mt-0.5 w-5 h-5 2xl:w-6 2xl:h-6 rounded-full bg-white flex items-center justify-center text-[#9C0B38] shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Check
                      strokeWidth={3}
                      style={{
                        width: "clamp(9px, 0.75vw, 12px)",
                        height: "clamp(9px, 0.75vw, 12px)",
                      }}
                    />
                  </span>

                  <Typography
                    variant="body"
                    color="white"
                    className="opacity-90 leading-snug"
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>

            <div>
              <Button
                href="#products"
                variant="white"
                size="md"
                className="rounded-full text-sm 2xl:text-base px-5 py-2 2xl:px-7 2xl:py-2.5"
              >
                View Details
              </Button>
            </div>
          </div>

          <div
            className="lg:col-span-7 w-full relative aspect-video rounded-2xl 2xl:rounded-3xl overflow-hidden shadow-lg"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer type="short" />
          </div>
        </div>
      </div>
    </section>
  );
}
