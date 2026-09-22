"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Content */}
        <div
          className="flex flex-col gap-6 order-1 lg:col-span-6 w-full pr-0 lg:pr-8"
          data-aos="fade-right"
        >
          <div className="flex flex-col gap-2">
            <Typography variant="h6" color="primary">
              • About VESSEL Europe
            </Typography>
            <Typography variant="h2" color="dark">
              Japanese Heritage. European Expertise.
            </Typography>
          </div>

          <Typography variant="p" color="muted" className="leading-relaxed">
            VESSEL Europe is part of the VESSEL Japan Group and was established in 2010 to serve the evolving needs of the European market. Located near Paris, VESSEL Europe combines Japanese manufacturing expertise with European industry requirements, delivering professional tools developed through both proven craftsmanship and advanced manufacturing technologies.
          </Typography>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-2 border-y border-gray-100 py-6">
            <div className="flex items-start gap-4">
              <img src="/moto/vessel/icon1.png" alt="100+ Years" className="w-12 h-12 min-[3800px]:w-16 min-[3800px]:h-16 object-contain" />
              <div className="flex flex-col">
                <Typography variant="h4" color="dark" className="font-semibold">
                  100+ Years
                </Typography>
                <Typography variant="span" color="muted">
                  In The Field of Toolmaking
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img src="/moto/vessel/icon2.png" alt="Japanese Craftsmanship" className="w-12 h-12 min-[3800px]:w-16 min-[3800px]:h-16 object-contain" />
              <div className="flex flex-col">
                <Typography variant="h4" color="dark" className="font-semibold">
                  Japanese Craftsmanship
                </Typography>
                <Typography variant="span" color="muted">
                  Meets European Standards
                </Typography>
              </div>
            </div>
          </div>

          <Typography variant="p" color="muted" className="leading-relaxed">
            Starting from its origins in Japan and expanding its reach throughout Europe, VESSEL is dedicated to establishing enduring partnerships while also creating dependable tool solutions tailored for professional applications.
          </Typography>

          <div className="pt-2" data-aos="fade-up" data-aos-delay="100">
            <Button text="Discover Our Story" href="#story" />
          </div>
        </div>

        {/* Image */}
        <div
          className="w-full order-2 lg:col-span-6 relative"
          data-aos="fade-left"
        >

          <div className="relative z-10 w-full rounded-xl overflow-visible filter drop-shadow-xl">
            <img
              src="/moto/vessel/section2.png"
              alt="VESSEL Europe Facility"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
