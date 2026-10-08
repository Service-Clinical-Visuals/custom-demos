"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Typography from "./Typography";
import ArrowIcon from "./ArrowIcon";

const solutions = [
  { title: "Uniform Lighting Across The Surgeon’s Field of View", img: "/medical/bfw/a1.webp", href: "#" },
  { title: "You Deserve Cutting-Edge Technology", img: "/medical/bfw/a2.webp", href: "#" },
  { title: "Easy Maintenance, Cleaning & Disinfection", img: "/medical/bfw/a3.webp", href: "#" },
  { title: "Lower Cost of Ownership", img: "/medical/bfw/a4.webp", href: "#" },
  { title: "Make Long-Term Comfort a Priority", img: "/medical/bfw/a5.webp", href: "#" },
];

// Swiper loop needs at least 2x slidesPerView slides, so the list is duplicated
const loopSlides = [...solutions, ...solutions];

export default function Diagnostic() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="diagnostic" className="w-full py-12 md:py-16 lg:py-20 min-[2500px]:py-28 min-[3800px]:py-40 bg-[#F5F5F5] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 md:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-24">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 lg:max-w-[80%] xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="leading-tight">
            Advanced Headlight Solutions
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            BFW&rsquo;s surgical headlight solutions combine uniform illumination, advanced technology, easy maintenance, cost efficiency, practical organization, and long-term comfort. Designed for reliable performance during demanding procedures, they support clear visibility and efficient surgical workflows.
          </Typography>
        </div>

        {/* Slider */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 2, spaceBetween: 28 },
              1280: { slidesPerView: 2, spaceBetween: 32 },
              2500: { slidesPerView: 2, spaceBetween: 48 },
              3800: { slidesPerView: 2, spaceBetween: 64 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % solutions.length)}
            className="w-full solutions-swiper"
          >
            {loopSlides.map((item, idx) => (
              <SwiperSlide key={`${item.title}-${idx}`}>
                <div className="solution-card group relative w-full aspect-[820/548] overflow-hidden bg-[#252525]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="solution-card-overlay absolute inset-0" aria-hidden="true" />

                  {/* Title + Action (revealed on hover) */}
                  <div className="solution-card-content absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 min-[3800px]:gap-8 p-5 md:p-6 lg:p-8 min-[2500px]:p-12 min-[3800px]:p-16">
                    <Typography variant="h3" color="white" className="leading-snug max-w-[75%] lg:max-w-[60%]">
                      {item.title}
                    </Typography>
                    <Link
                      href={item.href}
                      aria-label={`Learn more: ${item.title}`}
                      className="shrink-0 flex items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-md w-10 h-10 lg:w-11 lg:h-11 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 transition-transform duration-300 hover:rotate-45"
                    >
                      <ArrowIcon className="w-4 h-[14px] lg:w-5 lg:h-[17px] min-[2500px]:w-7 min-[2500px]:h-6 min-[3800px]:w-10 min-[3800px]:h-9" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="slider-pagination">
            {solutions.map((item, idx) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => swiperRef.current?.slideToLoop(idx)}
                className={`slider-pagination-bullet ${activeIndex === idx ? "is-active" : ""}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
