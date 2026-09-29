"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Typography from "./Typography";
import ArrowIcon from "./ArrowIcon";

const products = [
  { name: "Pharos HD™", description: "Fiber optic headlight & coaxial HD camera system.", image: "/medical/bfw/p1.png", href: "#" },
  { name: "Daymark Victory™", description: "Our Brightest Portable Headlight Ever", image: "/medical/bfw/p2.png", href: "#" },
  { name: "Daymark™", description: "High-intensity portable LED surgical headlight system", image: "/medical/bfw/p3.png", href: "#" },
  { name: "Bristol-Plus™", description: "Medium-intensity portable LED surgical headlight", image: "/medical/bfw/p4.png", href: "#" },
  { name: "Dover™", description: "Lightweight, portable LED exam headlight with adjustable spot size", image: "/medical/bfw/p5.png", href: "#" },
  { name: "Maui Bristol-Plus™", description: "Medium-intensity cordless LED surgical headlight", image: "/medical/bfw/p6.png", href: "#" },
  { name: "Maui Dover™", description: "Lightweight, portable LED exam headlight with fixed spot size", image: "/medical/bfw/p7.png", href: "#" },
  { name: "AtoN™", description: "High-intensity fiber optic headlight", image: "/medical/bfw/p8.png", href: "#" },
  { name: "Kitsilano™", description: "Ultra-lightweight, portable LED headlight", image: "/medical/bfw/p9.png", href: "#" },
  { name: "High Bright Hatteras™", description: "High-intensity LED light source", image: "/medical/bfw/p10.png", href: "#" },
];

const Products = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="products" className="w-full py-12 md:py-16 lg:py-20 min-[2500px]:py-28 min-[3800px]:py-40 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 md:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-24">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 lg:max-w-[80%] xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="leading-tight">
            BFW Surgical Headlights
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            For over 50 years, BFW has developed surgical headlights designed to provide clear, focused illumination for healthcare professionals. Combining proven expertise with advanced lighting technology, BFW solutions help surgeons see better and see farther with confidence during surgical procedures.
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
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
              2500: { slidesPerView: 4, spaceBetween: 48 },
              3800: { slidesPerView: 4, spaceBetween: 64 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full products-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.name} className="!h-auto">
                <div className="product-card group relative flex flex-col h-full w-full bg-white overflow-hidden p-5 min-[2500px]:p-7 min-[3800px]:p-10">

                  {/* Top-right corner shape */}
                  <div className="product-card-corner absolute top-0 right-0" aria-hidden="true" />

                  {/* Image */}
                  <div className="product-card-image relative z-10 w-full aspect-[282/276] border border-gray-300 bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-[88%] h-[88%] object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Title + Description + Action */}
                  <div className="mt-5 min-[2500px]:mt-7 min-[3800px]:mt-10 flex items-center justify-between gap-4 min-[3800px]:gap-8 flex-grow">
                    <div className="flex flex-col gap-2 min-[2500px]:gap-3 min-[3800px]:gap-5 min-w-0">
                      <Typography variant="h3" color="dark" className="line-clamp-1">
                        {product.name}
                      </Typography>
                      <Typography variant="p" color="muted" className="leading-relaxed line-clamp-2 min-h-[3.25em]">
                        {product.description}
                      </Typography>
                    </div>
                    <Link
                      href={product.href}
                      aria-label={`View ${product.name}`}
                      className="product-card-arrow shrink-0 flex items-center justify-center rounded-full bg-[var(--color-primary)] text-white w-11 h-11 xl:w-12 xl:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 transition-transform duration-300 group-hover:rotate-45"
                    >
                      <ArrowIcon className="w-5 h-[17px] min-[2500px]:w-7 min-[2500px]:h-6 min-[3800px]:w-10 min-[3800px]:h-9" />
                    </Link>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="slider-pagination">
            {products.map((product, idx) => (
              <button
                key={product.name}
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
};

export default Products;
