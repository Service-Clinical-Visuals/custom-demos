"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Typography from "./Typography";

const products = [
  {
    image: "/moto/vessel/d1.png",
    name: "Screwdriving Bits",
  },
  {
    image: "/moto/vessel/d2.png",
    name: "Hand Tools",
  },
  {
    image: "/moto/vessel/d3.png",
    name: "Air Impact Wrenches",
  },
  {
    image: "/moto/vessel/d4.png",
    name: "Oil Xtra Air Screwdrivers",
  },
  {
    image: "/moto/vessel/d5.png",
    name: "Air Micro Grinders",
  },
  {
    image: "/moto/vessel/d6.png",
    name: "Air Dusters",
  },
  {
    image: "/moto/vessel/d7.png",
    name: "Air Nippers",
  },
  {
    image: "/moto/vessel/d8.png",
    name: "Anti-static Solution Device",
  },
  {
    image: "/moto/vessel/d9.png",
    name: "Gasoline Engine Impact Wrench",
  },
  {
    image: "/moto/vessel/d10.png",
    name: "SP AIR",
  },
];

const Portfolio = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-5 px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-y-2" data-aos="fade-up">
          <Typography variant="h6" color="primary" weight="bold" className="text-[#cc0000] text-sm">
            • Our Product Portfolio
          </Typography>
          <Typography variant="h2" color="dark" weight="bold">
            Tools for Every Professional Application
          </Typography>
        </div>

        {/* Sub-heading */}
        <Typography
          variant="p"
          color="muted"
          className="leading-relaxed xl:max-w-[75%] text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Explore the VESSEL range of precision-engineered tools, meticulously crafted to deliver reliable performance across various fastening, assembly, maintenance, and industrial applications. These tools are built to withstand rigorous use, ensuring that every task is completed with utmost efficiency and precision.
        </Typography>

        {/* Swiper Slider */}
        <div className="w-full mt-10" data-aos="fade-up" data-aos-delay="200">
          <style dangerouslySetInnerHTML={{
            __html: `
            .portfolio-pagination .swiper-pagination-bullet {
              background-color: #d1d5db;
              opacity: 1;
              width: 8px;
              height: 8px;
              margin: 0 4px !important;
            }
            .portfolio-pagination .swiper-pagination-bullet-active {
              background-color: #cc0000;
            }
            .portfolio-swiper {
              padding-bottom: 50px !important;
              padding-left: 20px !important;
              padding-right: 20px !important;
              margin-left: -20px !important;
              margin-right: -20px !important;
            }
            .portfolio-swiper .swiper-slide {
              height: auto;
            }
          `}} />
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
              el: '.portfolio-pagination',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="portfolio-swiper"
          >
            {products.map((product, i) => (
              <SwiperSlide key={i} className="h-full pt-2 pb-10">
                <div className="h-full relative flex flex-col mx-2 transition-transform hover:-translate-y-1">

                  {/* Main Card */}
                  <div className="bg-white rounded-[12px] border border-gray-200 shadow-[0_4px_25px_rgba(0,0,0,0.1)] flex flex-col h-full relative z-10">
                    {/* Image Section */}
                    <div className="w-full aspect-[390/335] bg-white rounded-t-[12px] rounded-b-[16px] border-b-[3.5px] border-[#bd1a22] flex items-center justify-center  overflow-hidden shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover  mix-blend-multiply"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col items-center justify-start flex-1 px-4 pt-6 pb-12 bg-white rounded-b-[12px]">
                      <Typography
                        variant="h3"
                        color="dark"
                        weight="bold"
                        className="text-[20px] text-center leading-tight"
                      >
                        {product.name}
                      </Typography>
                    </div>
                  </div>

                  {/* Overlapping Button Wrapper */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 z-20 w-[85%] max-w-[180px]">
                    <div className="bg-white rounded-[8px] p-[6px]  shadow-[0_-1px_10px_rgba(2,2,2,0.20)] flex items-center justify-center">
                      <button className="bg-[#bd1a22] hover:bg-[#9a151b] text-white text-[14.5px] font-semibold py-[9px] px-2 rounded-[5px] transition-colors w-full tracking-wide">
                        View Product
                      </button>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="portfolio-pagination flex justify-center w-full mt-2"></div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
