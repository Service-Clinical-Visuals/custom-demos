"use client";

import React from "react";
import Button from "./Button";

export default function GrowWithUs() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden bg-[url(/vascular-flow/grow-bg.png)] text-white">

      {/* Content Container */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div 
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16 w-full"
          data-aos="fade-up"
        >
          {/* Slogan */}
          <h2 className="text-[26px] md:text-[30px] lg:text-[34px] font-extrabold tracking-wide max-w-2xl leading-wide text-left text-white!">
            Grow with us through innovation <br className="hidden md:block" />
            and dedicated service.
          </h2>
        </div>
      </div>
    </section>
  );
}
