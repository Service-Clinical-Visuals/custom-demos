"use client";

import React, { useState } from "react";
import Container from "./Container";
import Typography from "./Typography";
const slides = [
  {
    year: "1930",
    title: "First Airship",
    body:
      'It was also the lubricant of choice for the first airship to circumnavigate the globe, the Graf Zeppelin, as well as the first flight across the Pacific Ocean, in 1931 in a plane named "Miss Veedol".',
    image: "/moto/veedol-moto/Group3.png",
    alt: "Graf Zeppelin and Miss Veedol plane",
  },
  {
    year: "1978",
    title: "Achieves a Record",
    body:
      "A Mercedes-Benz CIII-III wins nine world records in the diesel engine category, using Veedol motor oil and achieves a record speed over 325 kph in 1978.",
    image: "/moto/veedol-moto/Group2.png",
    alt: "Mercedes-Benz CIII-III record car",
  },
  {
    year: "1979",
    title: "Veedol Synthetic Oils",
    body:
      "Veedol synthetic oils are used for the flight of the Space Shuttle Columbia, USA in 1979.",
    image: "/moto/veedol-moto/Group1.png",
    alt: "Space Shuttle Columbia",
  },
];

export default function History() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const next = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className="overflow-hidden bg-white py-16 md:py-20 xl:py-24">
      {/* ---------------- Header ---------------- */}

      <Container>
        <div
          className="mx-auto mb-14 flex max-w-6xl flex-col items-center text-center md:mb-20"
          data-aos="fade-up"
        >
          <Typography
            as="h2"
            variant="h2"
            weight="bold"
            color="dark"
            className="font-bigshoulder"
          >
            Our History
          </Typography>

          <div className="mt-4 h-1 rounded-full w-[19%] bg-primary" />

          <Typography
            as="h6"
            variant="h5"
            weight="normal"
            className="mt-6 font-dm max-w-full leading-7 text-[#666666]"
          >
            The Veedol oil brand has a long history of excellence since its
            inception in 1913. Millions of motorists around the world have at
            some point had the opportunity to use Veedol lubricants for their
            cars, tractors, trucks and motorcycles.
          </Typography>
        </div>
      </Container>

      {/* ---------------- Main Card ---------------- */}

      <Container className="relative" data-aos="fade-up" data-aos-delay="100">

        {/* Red background */}

        <div className="absolute bottom-0 top-1 left-0 right-0 hidden h-[100%] md:h-[600px]  mt-5 md:mt-10 bg-primary 2xl:block" />

        {/* Mobile background */}

        <div className="absolute inset-0 bg-primary 2xl:hidden" />

        <div className="relative grid items-start overflow-visible 2xl:grid-cols-[37%_63%]">

          {/* ================= LEFT ================= */}

          <div className="relative z-40 flex h-full flex-col justify-start px-8 sm:px-10 md:px-12 xl:px-16 pt-16 xl:pt-10 2xl:pt-24 pb-12 xl:pb-6 2xl:pb-12">

            <Typography
              as="h3"
              variant="h2"
              weight="bold"
              className="font-bigshoulder leading-tight"
              color="white"
            >
              {slide.year}: {slide.title}
            </Typography>

            <div className="my-5 h-1 rounded-full w-[60%] 2xl:w-[60%] bg-white" />

            <div className="min-h-[120px] max-w-7xl mt-2">
              <Typography
                variant="h4"
                weight="normal"
                className="font-bigshoulder  line-spacing:1px  tracking-normal text-white"
                color="none"
              >
                {slide.body}
              </Typography>
            </div>

            <div className="mt-auto flex items-center gap-3 pt-6 xl:pt-2 2xl:pt-10">

              <button
                onClick={prev}
                aria-label="Previous"
                className="flex h-12 w-12 items-center justify-center bg-white transition-all duration-300 hover:scale-95"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6 text-primary"
                >
                  <path
                    d="M19 12H5m0 0l7-7m-7 7l7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={next}
                aria-label="Next"
                className="flex h-12 w-12 items-center justify-center bg-white transition-all duration-300 hover:scale-95"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6 text-primary"
                >
                  <path
                    d="M5 12h14m0 0l-7-7m7 7l-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="relative z-30 flex items-end 2xl:-translate-y-10">

            <div className="relative h-[220px] w-full sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[320px] 2xl:h-[470px] mt-4 xl:-mt-16 2xl:mt-0">

              {/* Image */}

              <img
                key={current}
                src={slide.image}
                alt={slide.alt}
                className="absolute inset-0 h-full w-[100%] object-contain animate-historyFade"
              />





            </div>
          </div>

        </div>

      </Container>
    </section>);
} 