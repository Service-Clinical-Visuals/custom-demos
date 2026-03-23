"use client";

import React, { useState } from 'react';

export default function Hero() {
  const bannerVideos = [
    "https://cdn.clinicalvisuals.com/medical/sleepnet/landingpage/sleepnet_01.webm",
    "https://cdn.clinicalvisuals.com/medical/sleepnet/landingpage/sleepnet_02.webm",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
  };

  return (
    <section className="relative w-full h-screen bg-slate-800 flex items-end justify-center overflow-hidden pb-16">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder styling to show where video will go before user replaces URL */}
        <div className="absolute inset-0 flex items-center justify-center z-[-1]">
          Video Space
        </div>
        <video
          key={currentVideoIndex}
          src={bannerVideos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        ></video>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="heading text-white mb-4 drop-shadow-md" data-aos="fade-up">
          Welcome to <span className="text-primary">FutureMed </span>Global
        </h1>
        <p className="para text-white drop-shadow-md" data-aos="fade-up" data-aos-delay="200">
          We specialise in next generation medical equipment for<br className="hidden md:block" /> hospitals and treatment facilities.
        </p>
      </div>
    </section>
  );
}
