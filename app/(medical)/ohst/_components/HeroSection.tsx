
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
     <div className="relative z-10 h-full flex items-end pb-24 sm:pb-28 lg:pb-32 xl:pb-36">
        <div className="container mx-auto">
          <div
            className="max-w-[800px] sm:max-w-[820px] lg:max-w-[960px] xl:max-w-[1260px]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <Typography
              variant="h2"
              weight="bold"
              className="text-white leading-snug mb-6"
            >
              OHST Medizintechnik AG is a medical devices company based in
              Rathenow, Germany.
            </Typography>

            <Button variant="primary" size="lg" href="#">
              Discover Innovation
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}

