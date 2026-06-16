"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function HeroBanner() {
  return (
    <section className="relative h-[calc(100vh-80px)] mt-[80px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full custom-container mx-auto px-6 lg:px-16 flex items-end pb-28 x-nov-root">
        <div data-aos="fade-up" className="max-w-[620px]">
          <h1 className="text-white text-[40px] leading-tight font-semibold">
            Our Technical Skills
          </h1>

          <p className="mt-5 text-white! text-[18px] leading-[1.8]">
            Associated with a creative and efficient multidisciplinary team,
            the three founders of X.NOV have over 60 years of experience in
            the field of medical device research and development (R&D).
          </p>

          <Button variant="outline" size="xl" rounded="xl" className="mt-10" arrowIcon="arrow">
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
}