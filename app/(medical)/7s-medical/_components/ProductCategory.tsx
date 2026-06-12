"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import Button from "./Button";

export default function ProductCategory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const products = [
    {
      title: "Clavicula & Humerus",
      image: "7s-medical/product-1.png",
      link: "#clavicula-humerus",
    },
    {
      title: "Radius & Ulna",
      image: "7s-medical/product-2.png",
      link: "#radius-ulna",
    },
    {
      title: "Femur",
      image: "7s-medical/product-3.png",
      link: "#femur",
    },
    {
      title: "Femur",
      image: "7s-medical/product-4.png",
      link: "#femur",
    },
    {
      title: "Femur",
      image: "7s-medical/product-5.png",
      link: "#femur",
    },
    {
      title: "Femur",
      image: "7s-medical/product-6.png",
      link: "#femur",
    },
  ];

  return (
    <section 
      className="relative w-full py-16 lg:py-20 bg-[url('/7s-medical/product-bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center shadow-inner"
      data-aos="fade-up"
    >
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[28px] md:text-[30px] lg:text-[32px] font-bold mb-4 text-white!">
            Our Product Category
          </h2>
        </div>

        {/* Swiper Slider Wrapper */}
        <div data-aos="fade-up" data-aos-delay="200" className="relative w-full">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="product-swiper !pb-8"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group bg-white rounded-2xl p-6 border border-gray-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex flex-col justify-between h-full hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)] transition-all duration-300 transform hover:-translate-y-1">
                  
                  <div>
                    {/* Top: Light Gray-Blue Image Container */}
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 flex items-center justify-center p-6 group-hover:scale-[1.01] transition-transform duration-500">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-contain transform transition-transform duration-700 group-hover:rotate-1 rounded-lg"
                      />
                    </div>

                    {/* Middle: Title */}
                    <h3 className="text-center text-lg font-bold text-gray-900 tracking-tight mb-6">
                      {product.title}
                    </h3>
                  </div>

                  {/* Bottom: Action Button */}
                  <Button href={product.link} fullWidth>
                    View Products
                  </Button>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom 2-Button Pagination */}
          <div className="flex justify-center items-center gap-3 mt-8 relative z-20">
            <button 
              onClick={() => swiperRef.current?.slideToLoop(0)}
              className={`w-9 h-1 rounded-sm transition-all duration-300 cursor-pointer ${
                activeIndex < 3 ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label="View first 3 products"
            />
            <button 
              onClick={() => swiperRef.current?.slideToLoop(3)}
              className={`w-9 h-1 rounded-sm transition-all duration-300 cursor-pointer ${
                activeIndex >= 3 ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label="View next 3 products"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
