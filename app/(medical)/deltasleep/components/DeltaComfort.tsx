"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    badge: "ISO 13485:2016",
    title: "ISO Certified",
    description:
      "Our devices meet the rigorous ISO 13485:2016 standards for medical device quality. We maintain MDSAP certification to ensure global regulatory excellence.",
  },
  {
    badge: "Comfort",
    title: "The Technology",
    description:
      "Automatically maintain constant warmth and moisture to prevent dry throat and congestion, without you touching a settings.",
  },
  {
    badge: "Proudly Canadian",
    title: "The Origin",
    description:
      "Licensed by Health Canada. Assembled in Ontario. We combined hospital-grade precision with a direct-to-you model that respects your time, your wallet, and your health",
  },
];

export default function DeltaComfort() {

  return (
    <section className="relative overflow-hidden bg-[#dfe7e3] py-24 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* Top Content */}
        <div
          className="text-center max-w-[900px] mx-auto"
          data-aos="fade-up"
        >
          {/* Small Label */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-[8px] h-[8px] rounded-full bg-[#00695f]" />

            <p className="text-[16px] text-[#8a8a8a] font-medium tracking-[-0.3px]">
              Comfort solutions
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-[#232323] text-4xl  leading-[1.08] tracking-[-2.5px] font-semibold">
            Your Journey to Restful Nights Begins Here.
          </h2>
        </div>

        {/* Main Layout */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-start">
          {/* Left Content */}
          <div data-aos="fade-right">
            {/* Intro Paragraph */}
            <p className="text-[#4b4b4b] text-[16px] leading-[1.9]">
              Designed to deliver trusted sleep therapy solutions with comfort,
              safety, and advanced performance. Engineered with precision
              technology to support better sleep and improved respiratory care.
            </p>

            {/* Feature List */}
            <div className="mt-5 flex flex-col">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="py-3 border-b border-[#b8c0bc]"
                >
                  {/* Badge */}
                  <div className="inline-flex items-center justify-center px-5 h-[34px] rounded-[3px] bg-[#00695f]">
                    <span className="text-white text-[14px] font-medium tracking-[-0.2px]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 text-[#2a2a2a] text-[36px] lg:text-[34px] font-semibold tracking-[-1.4px] leading-none">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[#444444] text-[16px] leading-[1.9] ">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div
            className="relative rounded-[26px] overflow-hidden h-[620px] bg-[#cfd8d4]"
            data-aos="fade-left"
          >
            {/* Future Image */}
            <img
              src="/cpap-device.png"
              alt="CPAP Device"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Future-ready image/video support */}
            {/*
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/device-video.mp4" type="video/mp4" />
            </video>
            */}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5" />

            {/* Decorative Glow */}
            <div className="absolute bottom-5 right-5">
              <div className="relative w-10 h-10">
                <span className="absolute inset-0 bg-white/70 blur-xl rounded-full" />

                <svg
                  viewBox="0 0 100 100"
                  className="relative w-full h-full"
                  fill="white"
                >
                  <path d="M50 0C55 30 70 45 100 50C70 55 55 70 50 100C45 70 30 55 0 50C30 45 45 30 50 0Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}