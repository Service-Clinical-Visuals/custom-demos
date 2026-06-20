"use client";

import React, { useState, useRef } from "react";
import Typography from "./Typography";
import Container from "./Container";
import Button from "./Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Products() {
  const [activePage, setActivePage] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const products = [
    { src: "/moto/german-gold/products/product1.jpg", title: "Motor Oil For Hybrid Cars" },
    { src: "/moto/german-gold/products/product2.jpg", title: "Motor Oil For Cars" },
    { src: "/moto/german-gold/products/product3.jpg", title: "Motor Oil For Trucks" },
    { src: "/moto/german-gold/products/product4.jpg", title: "Motor Oil For Two Wheelers" },
    { src: "/moto/german-gold/products/product5.jpg", title: "Gear Oil (MTF)" },
    { src: "/moto/german-gold/products/product6.jpg", title: "Industrial & Hydraulic Oil" },
    { src: "/moto/german-gold/products/product66.jpg", title: "Agriculture Oil" },
    { src: "/moto/german-gold/products/product7.jpg", title: "Brake Fluid" },
    { src: "/moto/german-gold/products/product8.jpg", title: "Coolants" }
  ];

  return (
    <section id="products" className="relative w-full py-10 lg:py-10 bg-white overflow-hidden">
      <Container>
        <div className="bg-[#181715] rounded-[2rem] lg:rounded-[3rem] px-6 lg:px-12 py-12 lg:py-16 ">

          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6" data-aos="fade-up">
            <div className="max-w-6xl">
              <Typography variant="h2" color="primary" className="font-teko leading-tight tracking-wider uppercase mb-4">
                OUR PRODUCTS
                <div className="w-[20%] h-px bg-primary"></div>
              </Typography>

              <Typography variant="body" className="font-exo text-sm sm:text-base text-[#d1d5db] leading-relaxed">
                German Gold offers a complete range of premium lubricants and specialty fluids for automotive, industrial, agricultural, and marine applications. Engineered with advanced technology, our products deliver reliable protection, enhanced performance, and long-lasting efficiency across a wide range of operating conditions.
              </Typography>
            </div>
            <div className="shrink-0 mt-4 lg:mt-0 lg:self-start lg:pt-2">
              <Button text="View All Products" variant="primary" showIcon={true} href="#products" />
            </div>
          </div>

          {/* Slider Grid */}
          <div className="w-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              slidesPerGroup={3}
              breakpoints={{
                640: { slidesPerView: 2, slidesPerGroup: 3 },
                1024: { slidesPerView: 3, slidesPerGroup: 3 },
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setActivePage(Math.floor(swiper.activeIndex / 3))}
              className="w-full"
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="w-full aspect-[4/3] mt-4 rounded overflow-hidden relative group cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={(index % 3) * 100}
                  >
                    <img src={product.src} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="font-teko text-white text-2xl sm:text-3xl tracking-wide px-6 py-4 w-full">
                        {product.title}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Carousel Indicators */}
            <div className="flex justify-center items-center gap-2 mt-10">
              {[0, 1, 2].map((pageIndex) => (
                <div
                  key={pageIndex}
                  onClick={() => swiperRef.current?.slideTo(pageIndex * 3)}
                  className={`w-12 h-1.5 skew-x-[-20deg] cursor-pointer transition-colors duration-300 ${activePage === pageIndex ? "bg-primary" : "bg-gray-300"
                    }`}
                ></div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
