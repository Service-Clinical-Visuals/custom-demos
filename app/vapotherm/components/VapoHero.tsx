"use client";

import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-1.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-2.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-3.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-4.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-5.webm",
];


export default function VapoHero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image (replace with video later) */}
      <img
        src="/hero.jpg"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Future Video Support */}

      <video
        key={currentVideoIndex}
        src={bannerVideos[currentVideoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover"
      />


      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" /> */}


      {/* <div
        data-aos="fade-right"
        className="relative z-10 h-full flex items-center px-10"
      >
        <div className="text-white max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
            High Velocity Therapy
          </h1>
          <p className="text-lg opacity-90">
            Delivering advanced respiratory care solutions.
          </p>
        </div>
      </div> */}
    </section>
  );
}