"use client";

import React from "react";
import Button from "./Button";
import SectionBadge from "./SectionBadge";

export default function ExpertSolutions() {
  return (
    <section className="w-full bg-[#0D0D0D] py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44">
      <div className="custom-container">
        <div className="flex flex-col items-center text-center max-w-[1106px] xl:max-w-[70%] min-[3800px]:max-w-[60%] mx-auto" data-aos="fade-up">
          <SectionBadge text="Original Syprin" center className="mb-4 min-[3800px]:mb-8" />

          <h2 className="text-[#F6F6F6] mb-6 min-[3800px]:mb-10">
            Expert Solutions for Optimal Performance
          </h2>

          <p className="text-[#CACACA] mb-9 min-[3800px]:mb-14">
            Discover professional solutions designed to protect your engine, improve
            performance, and support reliable operation. Our SYPRIN products are
            developed for different applications and vehicle requirements. Have
            questions about our products or need help choosing the right solution? Get in
            touch with our team for expert assistance and detailed product information.
          </p>

          <Button
            text="Get In Touch"
            href="#contact"
          />
        </div>
      </div>
    </section>
  );
}
