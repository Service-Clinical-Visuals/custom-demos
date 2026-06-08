"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";
import { Check } from "lucide-react";

const features = [
  "Manufactured from high-quality implant steel (ISO 5832-1) for durability and reliability.",
  "Specifically designed for the treatment of femoral neck fractures.",
  "Bipolar design with dual centers of rotation supports smooth and natural movement.",
  "Self-centering mechanism helps improve implant stability and performance.",
  "Large contact area and polished metal surface help protect acetabular cartilage.",
];

export default function AboutSection() {
  return (
    <section
      className="w-full relative"
      style={{
        // Mobile: fully teal (card is on top, no overlap needed)
        // sm+: teal on top, white strip at bottom grows as card gets taller
        background: [
          // default (mobile): all teal
          "#11A39A",
        ].join(""),
      }}
    >
      <div
        className="
          hidden lg:block
          absolute bottom-0 left-0 right-0
          bg-white
          h-[100px]
          xl:h-[160px]
          2xl:h-[290px]
          3xl:h-[400px]
          z-0
        "
        aria-hidden="true"
      />

      {/* ── Foreground ── */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">

        {/* ── Header ── */}
        <div className="pt-10 sm:pt-12 md:pt-14 lg:pt-16 xl:pt-20 2xl:pt-24 text-center">
          <Typography
            variant="h2"
            weight="bold"
            className="text-white mb-3 lg:mb-4"
          >
            Bipolar Head
          </Typography>

          <Typography
            variant="body"
            className="
              text-white/90 mx-auto leading-relaxed
              text-sm sm:text-[15px] lg:text-base 2xl:text-lg
              max-w-[90%] sm:max-w-[580px] md:max-w-[680px]
              lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1260px]
            "
          >
            The Bipolar head is particularly suitable for the treatment of
            femoral neck fractures and functions as a direct sliding partner
            with the acetabulum. The principle of the bipolar head with
            different centers of rotation for the head and the outer shell has
            been established for years as the standard in the treatment of
            femoral neck fractures.
          </Typography>

          {/* Divider */}
          <div className="h-px bg-white/25 mt-6 sm:mt-7 lg:mt-8 xl:mt-10" />
        </div>

        {/* ── Two-column grid ── */}
        <div
          className="
            mt-6 sm:mt-8 lg:mt-10 xl:mt-12
            grid grid-cols-1
            lg:grid-cols-[300px_1fr]
            xl:grid-cols-[320px_1fr]
            2xl:grid-cols-[440px_1fr]
            gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-20
            items-start
          "
        >

          {/* ── Left: Features ── */}
          <div
            className="
              order-2 lg:order-1
              pb-10 sm:pb-12
              lg:pb-[120px] xl:pb-[150px] 2xl:pb-[260px]
            "
          >
            <ul className="space-y-4 sm:space-y-5 xl:space-y-6 2xl:space-y-7">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <span
                    className="
                      flex-shrink-0 mt-0.5
                      w-5 h-5 2xl:w-6 2xl:h-6
                      rounded-full bg-white
                      flex items-center justify-center
                      transition-transform duration-200 group-hover:scale-110
                    "
                  >
                    <Check className="w-3 h-3 2xl:w-3.5 2xl:h-3.5 text-[#11A39A]" />
                  </span>
                  <Typography
                    variant="body-sm"
                    className="text-white text-sm xl:text-[15px] 2xl:text-base leading-relaxed"
                  >
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>

            <div className="mt-7 sm:mt-8 xl:mt-9 2xl:mt-10">
              <Button
                variant="secondary"
                size="md"
                className="transition-transform duration-200 hover:scale-[1.03]"
              >
                Explore Features
              </Button>
            </div>
          </div>

          {/* ── Right: Video Card ── */}
          <div
            className="
              order-1 lg:order-2
              relative z-10
              pb-6 sm:pb-8
              lg:pb-[100px] xl:pb-[130px] 2xl:pb-[240px]
            "
          >
            <div
              className="
                bg-white
                rounded-[20px] sm:rounded-[24px]
                lg:rounded-[36px] xl:rounded-[40px] 2xl:rounded-[48px]
                p-2 sm:p-3 lg:p-3 xl:p-4 2xl:p-5
                transition-shadow duration-300
              "
            >
              <div
                className="
                  relative overflow-hidden
                  rounded-[14px] sm:rounded-[18px]
                  lg:rounded-[28px] xl:rounded-[32px] 2xl:rounded-[40px]
                  w-full aspect-video
                "
              >
                <DynamicVideoPlayer
                  type="360"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}