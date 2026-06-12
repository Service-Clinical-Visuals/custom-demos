"use client";

import React from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ProductRange() {

  const products = [
    { name: "Cineos®", image: "/medical/x-nov/product-1.png" },
    { name: "Naos®", image: "/medical/x-nov/product-2.png" },
    { name: "P130®", image: "/medical/x-nov/product-3.png" },
    { name: "Xcup®", image: "/medical/x-nov/product-4.png" },
    { name: "novium®", image: "/medical/x-nov/product-5.png" },
    { name: "MERCURY®", image: "/medical/x-nov/product-6.png" },
    { name: "MERCURY® PRESS-FIT", image: "/medical/x-nov/product-7.png" },
    { name: "mobility®", image: "/medical/x-nov/product-8.png" },
  ];

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="custom-container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl" data-aos="fade-right">
            {/* Subhead label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#EC4899] font-semibold text-sm md:text-[15px] xl:text-[17px] tracking-wider">
                Products
              </span>
              <span className="h-[2px] w-12 bg-[#EC4899] rounded-full"></span>
            </div>

            {/* Main Title */}
            <h2 className="text-[26px] md:text-[28px] lg:text-[32px] font-semibold text-[#212121] mb-6 leading-tight tracking-tight">
              Our Product Range
            </h2>

            {/* Description */}
            <p className="text-[#6D6B6B] font-light leading-relaxed text-[15px] md:text-[16px]">
              We strongly encourage surgeons to carefully read the instructions for use and thoroughly review the surgical techniques supplied with the implants before any procedure.
            </p>
          </div>

          {/* Button aligned to right */}
          <div data-aos="fade-left" className="pb-2">
            <Button className="whitespace-nowrap">
              Product Overview
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div data-aos="fade-up">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full pb-8"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center group cursor-pointer">
                  {/* Image Placeholder Card */}
                  <div className="w-full aspect-[4/4.5] rounded-[24px] border border-gray-100 bg-[#f4f6f9] flex items-center justify-center mb-6 overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex flex-col items-center text-gray-400">
                        <svg className="w-10 h-10 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">Image Placeholder</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Product Title */}
                  <h3 className="text-[#212121] font-bold text-[18px]">
                    {product.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination Container */}
          <div className="flex justify-center mt-12">
            <div className="custom-swiper-pagination flex gap-2 justify-center items-center"></div>
          </div>
        </div>
      </div>
      
      {/* Global overrides for the custom swiper pagination */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 32px;
          height: 6px;
          border-radius: 4px;
          background-color: #E5E7EB;
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0 4px;
          cursor: pointer;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #EC4899;
          width: 40px;
        }
      `}} />
    </section>
  );
}
