"use client";

import { useState } from "react";
import Button from "./Button";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/advanced_instrumentations/landing_page/adavnced_esu_400_01.webm",
  "https://cdn.clinicalvisuals.com/medical/advanced_instrumentations/landing_page/adavnced_esu_400_02.webm"
];

export default function Banner() {



  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
  };
  return (
    <section className="w-full flex justify-center">
      {/* OUTER */}
      <div className="w-[95%] rounded-3xl overflow-hidden relative h-screen">
        {/* 🎥 Background Video */}
        <video
          key={currentVideoIndex}
          src={bannerVideos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* INNER CONTENT (constrained) */}
        <div className="relative z-10 container mx-auto h-full hidden sm:flex items-end pb-35 px-6 ">
          <div className="max-w-3xl text-white">
            <h1
              data-aos="fade-up"
              className="text-[32px] font-semibold! leading-snug mb-6 font-sora">
              To restore people's quality of life
              <br />
              through cutting-edge technologies.
            </h1>

            <Button
              href="#"
              variant="white"
              size="md"
              rounded="lg"
              className="mt-4"
            >
              Who We Are
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
