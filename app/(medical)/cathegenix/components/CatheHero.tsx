import React from 'react'

import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer';

const navLinks = [
  "Home",
  "About",
  "Sleep",
  "Oxygen",
  "Ventilation",
  "Resources",
];

export default function CatheHero() {
  return (
    <div>
              {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative px-8 pb-10 pt-8 lg:px-8">
        <div className="relative overflow-hidden rounded-[26px] bg-black shadow-[0_15px_50px_rgba(0,0,0,0.18)]">
          {/* ================================================= */}
          {/* VIDEO / IMAGE BACKGROUND */}
          {/* ================================================= */}

          <div className="absolute inset-0">
            {/* FUTURE VIDEO */}

            <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />

          </div>

          {/* ================================================= */}
          {/* HERO CONTENT */}
          {/* ================================================= */}

          <div className="relative z-10 flex min-h-[780px] max-w-[1600px] mx-auto items-end">
            <div className="w-full px-8 pb-24 lg:px-14">
              <div className="max-w-[620px]">
                {/* HEADING */}
                <div data-aos="fade-up">
                  <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-3px] text-white">
                    Investing in Science
                    <br />
                    Innovating For Patients
                  </h2>
                </div>

                {/* CTA */}
                <div data-aos="fade-up" data-aos-delay="200" className="mt-10">
                    <button className="cursor-pointer relative group flex h-[46px] items-center bg-white overflow-hidden">
                    <span className="px-6 text-base font-semibold text-[#05429B] transition-all duration-300 group-hover:pr-12">
                        Explore Products
                    </span>

                    <span className="absolute right-0 flex h-full items-center justify-center text-white transition-all duration-300 translate-x-full group-hover:-translate-x-1">
                        <div className="bg-[#05429B] p-2.5">
                        <ArrowRight size={18} strokeWidth={2.8} />
                        </div>
                    </span>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
