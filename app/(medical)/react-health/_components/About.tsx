"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const partners = [
  "/medical/react-health/Silver_CP_Badge.png",
  "/medical/react-health/Mames.png",
  "/medical/react-health/Sleep_tech_talk_logo.png",
  "/medical/react-health/HomeCareHeros.png",
  "/medical/react-health/aasmf_corporate_emblem.png",
];

export default function AboutReactHealth() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20">
  <div className="container mx-auto px-6">
    
    {/* Main Grid */}
    <div className="grid lg:grid-cols-2 gap-14 items-center">
      
      {/* LEFT SIDE */}
      <div className="grid gap-8">
        
        {/* Heading Content */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-[700] leading-[1.05] tracking-[-1px] text-[#2d2d2d]">
            About React Health
          </h2>

          <p className="mt-6 text-[16px] leading-[24px] text-[#6b6b6b] ">
            React Health is a leading U.S. sleep and respiratory device
            manufacturer and distributor based in the United States.
            React Health is focused on delivering comprehensive and
            integrated solutions to improve outcomes and the lives of
            patients with highly correlated sleep and respiratory
            conditions.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="
              bg-white
              rounded-[24px]
              p-4
              border border-[#ebebeb]
              shadow-[0_4px_14px_rgba(0,0,0,0.08)]
            "
          >
            <h3 className="text-xl font-[700] text-[#2d2d2d]">
              React Health Mission
            </h3>

            <p className="mt-5 text-[16px] leading-[24px] text-[#6b6b6b]">
              React Health enhances lives through innovative sleep and
              respiratory care solutions that help people breathe
              easier, sleep better, and live healthier every day.
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="
              bg-white
              rounded-[24px]
              p-4
              border border-[#ebebeb]
              shadow-[0_4px_14px_rgba(0,0,0,0.08)]
            "
          >
            <h3 className="text-xl font-[700] text-[#2d2d2d]">
              React Health Vision
            </h3>

            <p className="mt-5 text-[16px] leading-[24px] text-[#6b6b6b]">
              React Health’s vision is to make sleep and respiratory
              care simpler, more accessible, and seamlessly integrated
              to empower individuals of all ages to thrive.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div data-aos="zoom-in">
          <button
            className="
              flex items-center
              bg-[#6F3298]
              rounded-full
              h-[50px]
              pl-7
              pr-2
              text-white
              font-[600]
              shadow-md
              transition-all duration-300
              hover:scale-[1.02]
            "
          >
            <span className="pr-5">Discover Our Story</span>

          <span
            className="
                w-[46px]
                h-[46px]
                rounded-full
                border border-white/60
                flex items-center justify-center
            "
            >
            <ArrowRight size={18} />
            </span>
          </button>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div
        data-aos="fade-left"
        className="
          relative
          w-full
          h-[450px]
          rounded-[34px]
          overflow-hidden
        "
      >
        <img
          src="/medical/react-health/about.jpg"
          alt="React Health"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f5f5]/70 via-transparent to-transparent" />
      </div>
    </div>

    {/* LOGO GRID */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-20">
      
      {partners.map((logo, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="
            bg-white
            rounded-[24px]
            h-[210px]
            flex items-center justify-center
            border border-[#ebebeb]
            shadow-[0_4px_14px_rgba(0,0,0,0.08)]
            transition-all duration-300
            hover:-translate-y-1
          "
        >
          <img
            src={logo}
            alt="logo"
            className="max-w-[150px] max-h-[90px] object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</section>
  );
}