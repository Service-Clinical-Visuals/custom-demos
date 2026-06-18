"use client";

import React from "react";
import Button from "./Button";
import Container from "./Container";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const specs = [
  {
    label: "SAE 0W-16 Viscosity Grade:",
    description:
      "Ultra-low viscosity formulation designed to improve fuel economy and engine efficiency.",
  },
  {
    label: "100% Fully Synthetic Formula:",
    description:
      "Delivers superior lubrication, wear protection, and long-lasting performance.",
  },
];

export default function ProductDetail() {
  return (
    <section className="w-full bg-white py-12 md:py-18 mb-5 md:mb-10" id="product-detail">
      <Container>
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10 2xl:gap-16 items-center">

          {/* ── Left: Video box ── */}
          <div
            className="relative w-full aspect-video bg-[#e8e8e8] overflow-hidden order-last 2xl:order-first"
            data-aos="fade-right"
          >
            {/* Checkerboard fallback pattern visible behind video */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Actual video player on top */}
            <DynamicVideoPlayer
              type="short"
              className="absolute inset-0 w-full h-full object-cover z-20"
            />
          </div>

          {/* ── Right: Specs content ── */}
          <div className="space-y-5" data-aos="fade-left">
            {/* Heading */}
            <Typography as="h2" variant="h2" color="dark" weight="bold">
              Engineered for Efficiency and Reliability
            </Typography>

            {/* Red underline accent */}
            <div className="w-[83%] h-1 rounded-full bg-primary" />

            {/* Intro paragraph */}
            <Typography as="p" variant="h6" color="body" weight="normal" className=" font-dm leading-relaxed">
              Veedol SINTRON J 0W-16 is a premium fully synthetic motor oil specifically
              formulated for modern gasoline and hybrid engines. Its ultra-low viscosity
              technology is designed to maximize fuel efficiency while providing outstanding
              engine protection in demanding driving conditions, including frequent start-stop
              operation.
            </Typography>

            {/* Key Specifications heading */}
            <Typography as="h3" variant="h4" color="dark" weight="bold" className="pt-1">
              Key Specifications
            </Typography>

            {/* Spec bullets */}
            <ul className="space-y-4">
              {specs.map((spec) => (
                <li key={spec.label} className="flex items-start gap-3">
                  <img src="/moto/veedol-moto/Vector.png" alt="Icon" className="w-5 h-5 mt-1 object-contain" />
                  <p className="text-sm sm:text-[15px] text-[#555] leading-relaxed">
                    <span className="font-bold text-dark ">
                      <Typography as="span" variant="h5" color="dark" weight="bold">
                        {spec.label}
                      </Typography>
                    </span>{" "}
                    <Typography variant="h5" color="body" className="font-dm" weight="normal">
                      {spec.description}
                    </Typography>
                  </p>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-2">
              <Button text="View Product" variant="primary" href="#products" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
