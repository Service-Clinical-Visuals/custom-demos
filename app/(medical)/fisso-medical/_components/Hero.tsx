"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Hero() {
  return (
    /*
      Section wrapper — horizontal padding gives the card its inset look.
      Matches the screenshot: small gap on left/right, tight gap above/below.
      Scales gracefully from 320 px phones → 2560 px 2 K monitors.
    */
    <section
      className="
        w-full
        /* horizontal inset — card never touches viewport edge */
        px-3 sm:px-4 md:px-4 lg:px-6 2xl:px-8
        /* vertical gap — tight above (navbar already has bottom padding) */
        pt-2.5 pb-4
        sm:pt-3 sm:pb-5
        lg:pt-3 lg:pb-6
        2xl:pt-4 2xl:pb-8
      "
    >
      {/* ─── Hero Card ──────────────────────────────────────────────── */}
      <div
        className="
          relative w-full overflow-hidden bg-black
          rounded-2xl sm:rounded-2xl md:rounded-3xl 2xl:rounded-[28px]
          shadow-xl
          h-screen
        "
        data-aos="fade-up"
      >
        {/* ── Background video / image (fills the card) ── */}
        <DynamicVideoPlayer type="banner" className=" " />

        {/* ── Gradient overlay — heavy at bottom for text legibility ── */}
        <div
          className="
            absolute inset-0 z-10 pointer-events-none
            
          "
        />

        {/* ── Text + CTA block — anchored bottom-left ── */}
        <div
          className="
            relative z-20 h-full
            flex flex-col justify-end
            /* padding scales with viewport so text never hugs the edge */
            p-5
            sm:p-8
            md:p-12
            lg:p-14
            xl:p-16
            2xl:p-20
            /* cap width on ultrawide so lines don't run too long */
            max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-2xl 2xl:max-w-3xl
          "
        >
          {/* ── Headline line 1 ── */}
          <Typography
            variant="h2"
            color="white"
            weight="semibold"
            className="
              leading-tight tracking-tight select-text
              /* fluid type scale: small phone → 2 K */
              text-xl
              sm:text-2xl
              md:text-[26px]
              lg:text-[20px]
              xl:text-[22px]
              2xl:text-[26px]
              /* tight gap between the two headline lines */
              mb-0.5 2xl:mb-1 
            "
          >
            Articulated Arms and Holders
          </Typography>

          {/* ── Headline line 2 ── */}
          <Typography
            variant="h2"
            color="white"
            weight="semibold"
            className="
              leading-tight tracking-tight select-text
              text-xl
              sm:text-2xl
              md:text-[26px]
              lg:text-[28px]
              xl:text-[30px]
              2xl:text-[38px]
              max-w-[500px]
              /* space before the CTA button */
              mb-5 sm:mb-6 lg:mb-7 2xl:mb-10
            "
          >
            Simply the best fixation.
          </Typography>

          {/* ── CTA button ── */}
          <div>
            <Button
              href="#products"
              variant="primary"
              size="md"
              className="
                rounded-full
                /* compact pill matching the screenshot */
                text-xs    px-5   py-2
                sm:text-sm sm:px-6 sbg-gradient-to-t from-black/90 via-black/30 to-transparentm:py-2.5
                2xl:text-base 2xl:px-8 2xl:py-3
              "
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}