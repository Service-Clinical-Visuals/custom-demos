"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import "aos/dist/aos.css";
import SergBullet from "./SergBullet";


export default function SergAbout() {


  return (
    <section className="max-w-[1750px] mx-auto px-5 py-[70px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT IMAGE */}
        <div
          data-aos="fade-right"
          className="relative overflow-hidden rounded-[28px] h-full shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        >
          <div className="absolute inset-0 bg-neutral-200">
            {/* Replace with real image later */}

            <Image
              src="/sergtech/serg-about-1.jpg"
              alt="meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          data-aos="fade-left"
          className="pt-3 pr-4"
        >
          <h2 className="text-[#25338f] text-4xl leading-[1.2] font-bold tracking-[-1px] max-w-[620px]">
            Advancing Personalized Parkinson’s Care Through Digital Innovation
          </h2>

          <div className="mt-8 space-y-6">
            <p className="text-[16px] leading-[2] text-[#707070] font-medium">
             SERG Technologies is a digital health solutions provider focused on improving care for people living with neurodegenerative movement disorders. By combining expertise in bio-mechatronics, clinical neurology, AI, and wearable sensing technologies, we develop innovative solutions that help monitor and manage Parkinson’s symptoms more effectively.
            </p>

            <p className="text-[16px] leading-[2] text-[#707070] font-medium">
              Our cutting-edge technology not only supports symptom tracking and therapy optimization but also tailors personalized treatment plans for each individual. This comprehensive approach empowers patients to manage their health more effectively, ultimately enhancing their quality of life while preserving their dignity and instilling confidence in their journey.
            </p>
          </div>
        </div>
      </div>

      {/* SECOND GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-16">
        {/* LEFT CONTENT */}
        <div
          data-aos="fade-up"
          className="pr-5"
        >
          <h2 className="text-[#25338f] text-4xl leading-[1.25] font-bold tracking-[-1px] max-w-[650px]">
            Smarter Parkinson’s Care with AI & Wearable Technology
          </h2>

          <p className="mt-7 text-[16px] leading-[2] text-[#707070] font-medium">
            SERG Technologies is dedicated to transforming Parkinson’s care
            through innovative digital health solutions.
          </p>

          <div className="mt-8 space-y-6">
            <SergBullet text="Advanced wearable sensing systems and AI-powered technologies designed to deliver smarter, data-driven Parkinson’s care solutions." />

            <SergBullet text="Strong expertise in bio-mechatronics and clinical neurology, combining innovation with real-world healthcare experience." />

            <SergBullet text="Supports continuous symptom tracking, DBS programming, medication management, and therapy optimization for improved patient outcomes." />
          </div>

          {/* BUTTON */}
          <button className="cursor-pointer group mt-10 h-[54px] rounded-full bg-[#2d3693] hover:bg-[#3845b4] transition-all duration-300 flex items-center pl-8 pr-3 shadow-[0_10px_25px_rgba(45,54,147,0.2)]">
            <span className="text-white text-[16px] font-semibold tracking-wide">
              Discover More
            </span>

            <div className="ml-7 w-[34px] h-[34px] rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight
                size={16}
                className="text-white"
              />
            </div>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="zoom-in"
          className="relative overflow-hidden rounded-[28px] h-full shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        >
          <div className="absolute inset-0 bg-neutral-200">
            {/* Replace with actual image later */}

            <Image
              src="/sergtech/serg-about-2.jpg"
              alt="team meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}