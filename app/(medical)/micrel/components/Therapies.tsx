"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { therapiesContent } from "../data/content";
import { TherapiesData, TherapyItem } from "../types";
import { textStyles } from "./typography";

interface TherapiesProps {
  data?: TherapiesData;
}

export default function Therapies({ data = therapiesContent }: TherapiesProps) {
  const [page, setPage] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const [mobilePage, setMobilePage] = useState(0);
  const mobileSwiperRef = useRef<SwiperType | null>(null);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.items.length / itemsPerPage);
  const mobileTotalPages = data.items.length;

  // Group items into pages of size 5 for desktop
  const pages: TherapyItem[][] = [];
  for (let i = 0; i < data.items.length; i += itemsPerPage) {
    pages.push(data.items.slice(i, i + itemsPerPage));
  }

  const prev = () => swiperRef.current?.slidePrev();
  const next = () => swiperRef.current?.slideNext();

  const mobilePrev = () => mobileSwiperRef.current?.slidePrev();
  const mobileNext = () => mobileSwiperRef.current?.slideNext();

  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-28 3xl:py-36 4xl:py-48 bg-white">
      <div className="max-w-[1200px] xl:max-w-[1360px] 2xl:max-w-[1500px] 3xl:max-w-[1720px] 4xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className="text-center xl:max-w-[1200px] lg:max-w-[1000px] 3xl:max-w-[1400px] 4xl:max-w-[1600px] mx-auto mb-10 lg:mb-14 xl:mb-16 3xl:mb-20 4xl:mb-24 space-y-4 3xl:space-y-6"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h2 className={textStyles.heading}>{data.title}</h2>
          <p className={textStyles.body}>
            Delivering safe, precise, and reliable infusion therapy solutions
            for acute pain management, oncology, obstetrics, parenteral
            nutrition, palliative care, antibiotic infusion, hydration, and
            other specialized treatments supporting better care for every
            patient.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="w-full"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
        >
          {/* Desktop Version */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 3xl:gap-10 4xl:gap-12">
            {/* Desktop Left Arrow */}
            <button
              onClick={prev}
              disabled={page === 0}
              aria-label="Previous"
              className="
    hidden lg:inline-flex
    items-center justify-center
    flex-shrink-0

    w-10 h-10
    xl:w-12 xl:h-12
    2xl:w-14 2xl:h-14
    3xl:w-16 3xl:h-16
    4xl:w-20 4xl:h-20

    bg-[#3363AC]
    hover:bg-[#2a529a]
    disabled:opacity-30

    text-white
    rounded-md
    shadow-md
    transition-all duration-300
  "
            >
              <ChevronLeft
                className="
      w-4 h-4
      xl:w-5 xl:h-5
      2xl:w-6 2xl:h-6
      3xl:w-7 3xl:h-7
      4xl:w-8 4xl:h-8

      flex-shrink-0
    "
                strokeWidth={2.5}
              />
            </button>
            {/* Slider */}
            <div className="flex-1 min-w-0">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setPage(swiper.activeIndex);
                }}
                breakpoints={{
                  1024: { spaceBetween: 20 },
                  1280: { spaceBetween: 24 },
                  1920: { spaceBetween: 32 },
                  2560: { spaceBetween: 40 },
                }}
                speed={3000}
                className="w-full"
              >
                {pages.map((pageItems, pageIndex) => (
                  <SwiperSlide key={pageIndex}>
                    {pageIndex % 2 === 0 ? (
                      // First Layout
                      <div className="grid grid-cols-3 gap-5 xl:gap-6 3xl:gap-8 h-[420px] xl:h-[500px] 2xl:h-[560px] 3xl:h-[650px] 4xl:h-[760px]">
                        {/* Left */}
                        <div className="grid grid-rows-2 gap-5 xl:gap-6 3xl:gap-8">
                          {pageItems[0] && <TherapyCard item={pageItems[0]} className="h-full" />}
                          {pageItems[3] && <TherapyCard item={pageItems[3]} className="h-full" />}
                        </div>

                        {/* Center Tall */}
                        <div>
                          {pageItems[1] && <TherapyCard item={pageItems[1]} className="h-full" />}
                        </div>

                        {/* Right */}
                        <div className="grid grid-rows-2 gap-5 xl:gap-6 3xl:gap-8">
                          {pageItems[2] && <TherapyCard item={pageItems[2]} className="h-full" />}
                          {pageItems[4] && <TherapyCard item={pageItems[4]} className="h-full" />}
                        </div>
                      </div>
                    ) : (
                      // Second Layout
                      <div className="grid grid-cols-3 gap-5 xl:gap-6 3xl:gap-8 h-[420px] xl:h-[500px] 2xl:h-[560px] 3xl:h-[650px] 4xl:h-[760px]">
                        {/* Left Tall */}
                        <div>
                          {pageItems[0] && <TherapyCard item={pageItems[0]} className="h-full" />}
                        </div>

                        {/* Center */}
                        <div className="grid grid-rows-2 gap-5 xl:gap-6 3xl:gap-8">
                          {pageItems[1] && <TherapyCard item={pageItems[1]} className="h-full" />}
                          {pageItems[2] && <TherapyCard item={pageItems[2]} className="h-full" />}
                        </div>

                        {/* Right Tall */}
                        <div>
                          {pageItems[3] && <TherapyCard item={pageItems[3]} className="h-full" />}
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop Right Arrow */}
            <button
              onClick={next}
              disabled={page === totalPages - 1}
              aria-label="Next"
              className="
    hidden lg:inline-flex
    items-center justify-center
    flex-shrink-0
    w-10 h-10
    xl:w-12 xl:h-12
    2xl:w-14 2xl:h-14
    3xl:w-16 3xl:h-16
    4xl:w-20 4xl:h-20
    bg-[#3363AC]
    hover:bg-[#2a529a]
    disabled:opacity-30
    text-white
    rounded-md
    shadow-md
    transition-all duration-300
  "
            >
              <ChevronRight
                className="
      w-4 h-4
      xl:w-5 xl:h-5
      2xl:w-6 2xl:h-6
      3xl:w-7 3xl:h-7
      4xl:w-8 4xl:h-8
      flex-shrink-0
    "
                strokeWidth={2.5}
              />
            </button>
          </div>

          {/* Mobile Version (Only one card at a time) */}
          <div className="lg:hidden w-full">
              <Swiper
                onSwiper={(swiper) => {
                  mobileSwiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setMobilePage(swiper.activeIndex);
                }}
                spaceBetween={16}
                slidesPerView={1}
                className="w-full"
              >
                {data.items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <TherapyCard
                      item={item}
                      className="aspect-[4/3] sm:aspect-[1.5/1]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Mobile Navigation Arrows */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={mobilePrev}
                  disabled={mobilePage === 0}
                  className="w-10 h-10 bg-[#3363AC] hover:bg-[#2a529a] disabled:opacity-30 text-white flex items-center justify-center rounded-md transition-all duration-200 cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={mobileNext}
                  disabled={mobilePage === mobileTotalPages - 1}
                  className="w-10 h-10 bg-[#3363AC] hover:bg-[#2a529a] disabled:opacity-30 text-white flex items-center justify-center rounded-md transition-all duration-200 cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

        </div>
    </section>
  );
}

interface TherapyCardProps {
  item: TherapyItem;
  className?: string;
}

function TherapyCard({
  item,
  className = "",
}: TherapyCardProps) {
  return (
    <div
      className={`
        relative
        w-full
        h-full
        overflow-hidden
        rounded-[20px]
        xl:rounded-[24px]
        3xl:rounded-[32px]
        4xl:rounded-[40px]
        shadow-[0px_3px_8px_0px_#0000003D]
        group
        ${className}
      `}
    >
      <Image
        src={item.imageUrl}
        alt={item.imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        unoptimized
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10" />

      {/* Title */}
      <div className="absolute bottom-5 left-5 xl:bottom-6 xl:left-6 3xl:bottom-8 3xl:left-8 4xl:bottom-10 4xl:left-10 z-20">
        <span className={`${textStyles.boldTagline} !text-white`}>
          {item.title}
        </span>
      </div>
    </div>
  );
}