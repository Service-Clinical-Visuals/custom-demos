"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";

export default function HeroBanner() {
  return (
    <section className="relative h-screen min-h-[650px] overflow-hidden font-outfit">

      {/* Video Background */}
      <div className="absolute inset-0 bg-black">
        <DynamicVideoPlayer type="banner" className="object-cover w-full h-full opacity-80" />
      </div>

      {/* Modern Overlay Gradient */}


      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-32 2xl:pb-48">
        <div className="max-w-[1360px] 2xl:max-w-[2200px] mx-auto w-full px-6 2xl:px-16">
          <div
            className="max-w-[900px] 2xl:max-w-[1300px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Typography
              variant="h2"

              weight="bold"
              className="mb-8 text-white leading-[1.15]"
            >
              OHST Medizintechnik AG is a medical devices company based in Rathenow, Germany.
            </Typography>

            <Button
              variant="primary"
              size="lg"
              href="#"
            >
              Discover Innovation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}