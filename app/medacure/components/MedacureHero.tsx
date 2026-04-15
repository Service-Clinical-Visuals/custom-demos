"use client";

import "aos/dist/aos.css";
import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/vapotherm/landing_page/Vapotherm_1.webm",
  "https://cdn.clinicalvisuals.com/medical/vapotherm/landing_page/Vapotherm_2.webm",
  "https://cdn.clinicalvisuals.com/medical/vapotherm/landing_page/Vapotherm_3.webm",

];



export default function MedacureHero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* VIDEO (future ready) */}
      {/* Replace this with <video /> later */}
      <div className="absolute inset-0">
       
      <video
        key={currentVideoIndex}
        src={bannerVideos[currentVideoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover"
      />
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c3f]/90 to-[#0f1c3f]/40" /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full w-full">
        <div className="max-w-380 mx-auto px-6 w-full">
          <div
            data-aos="fade-up"
            className=" text-white mb-30"
          >
            <h1 className="text-3xl md:text-5xl leading-tight mb-6">
              Manufacturer of Durable
              <br />
              Medical Equipment & Supplies
            </h1>

            <button
              data-aos="zoom-in"
              className="border cursor-pointer border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}