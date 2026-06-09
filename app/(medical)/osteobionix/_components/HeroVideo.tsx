"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-end pb-20 md:pb-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for video / image. User will update later. */}
        <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover " />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 w-full container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-white font-heading text-4xl md:text-4xl lg:text-5xl font-medium leading-[1.1] mb-6">
            Advancing the standards<br />of care for people
          </h1>
          <div className="flex flex-wrap items-center gap-6">
            <Button variant="primary" className="hover:scale-105">
              Explore Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
