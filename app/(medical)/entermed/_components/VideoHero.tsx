"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function VideoHero() {
  return (
    <section className="relative w-full h-screen lg:h-auto lg:aspect-video overflow-hidden flex flex-col justify-end bg-black">
      {/* Background Video / Image Placement */}
      <div className="absolute inset-0 z-0 select-none">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>


      {/* Bottom Left Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pb-20 md:pb-28">
        <div className="max-w-xl text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-[30px] md:text-[34px] lg:text-[38px] font-medium text-white! mb-6 leading-[1.15] drop-shadow-md">
            Leading Global Provider
          </h1>
          <p className="text-white! text-base md:!text-[20px] mb-8 leading-[1.7] drop-shadow-sm max-w-lg">
            The company concentrates its resources on acquiring, developing and inventing quality equipment hospitals and private clinics alike.
          </p>

          <Button variant="hero">Explore More</Button>
        </div>
      </div>
    </section>
  );
}
