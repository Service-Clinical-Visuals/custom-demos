"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import Container from "./Container";

export default function About() {
  return (
    <section className="w-full py-10 mt-5 md:mt-15 md:py-15 bg-white" id="about">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-stretch">

          {/* Left Column: Henry Ford Graphic */}
          <div className="md:col-span-6 lg:col-span-7" data-aos="fade-right">
            <div className="w-full h-full overflow-hidden rounded-lg shadow-sm min-h-[300px]">
              <img
                src="/moto/veedol-moto/image1.jpg"
                alt="Veedol History with Henry Ford and Model T"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          {/* Right Column: Company Description */}
          <div
            className="md:col-span-6 lg:col-span-5 h-full max-w-[100%] flex flex-col justify-center space-y-6 md:space-y-8"
            data-aos="fade-left"
          >
            <div className="space-y-3">
              {/* Bold Heading */}
              <Typography
                variant="h2"
                color="dark"
                weight="bold"
                className="leading-tight font-bigshoulder tracking-tight"
              >
                About Our Company
              </Typography>
              {/* Red Accent Underline */}
              <div className="w-[52%] h-1 rounded-full bg-primary" />
            </div>

            {/* Description Paragraphs from the Screenshot */}
            <div className="space-y-5">
              <Typography
                variant="h6"
                weight="normal"
                className="text-gray-600 font-dm leading-relaxed font-normal"
              >
                With a legacy dating back to 1913, Veedol has been synonymous with superior quality, technical expertise, and unwavering reliability. Endorsed by leading automotive manufacturers worldwide, Veedol products are available in over 65 countries, including key markets across Europe, Asia, Africa, the Middle East, and the Americas.
              </Typography>
              <Typography
                variant="h6"
                weight="normal"
                className="text-gray-600 font-dm leading-relaxed font-normal"
              >
                As part of its global network, Veedol UK combines global expertise with local knowledge to deliver trusted products and tailored solutions for the British market. The Veedol range includes high-performance engine oils for passenger cars, motorbikes, three-wheelers, heavy goods vehicles, off-road machinery, buses, and tractors.
              </Typography>
            </div>

            {/* Action Button: Learn More (Red slanted button) */}
            <div className="inline-flex pt-2">
              <Button
                text="Learn More"
                variant="primary"
                href="#learn-more"
                className="font-bigshoulder"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
