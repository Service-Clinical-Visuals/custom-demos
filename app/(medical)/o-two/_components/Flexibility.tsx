"use client";

import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const accessories = [
  { label: "Ventilator Carrying Case", imageSrc: "/o-two/home/section-3-1.jpg" },
  { label: "Resuscitation Mask", imageSrc: "/o-two/home/section-3-2.jpg" },
  { label: "Ventilator Tubing Hose", imageSrc: "/o-two/home/section-3-3.png" },
  { label: "Oxygen Supply Connector", imageSrc: "/o-two/home/section-3-4.jpg" },
  { label: "Oxygen Supply Connector", imageSrc: "/o-two/home/section-3-5.jpg" },
  { label: "Oxygen Supply Connector", imageSrc: "/o-two/home/section-3-6.png" },
  { label: "Oxygen Supply Connector", imageSrc: "/o-two/home/section-3-7.jpg" },
  { label: "Oxygen Supply Connector", imageSrc: "/o-two/home/section-3-8.jpg" },
];

export default function Flexibility() {
  return (
    <section className="pb-12 md:py-16 lg:py-24 bg-white" id="products-detail">
      <style>{`
        .accessories-swiper .swiper-pagination {
          position: static;
          margin-top: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }
        .accessories-swiper .swiper-pagination-bullet {
          width: 48px;
          height: 6px;
          border-radius: 9999px;
          background: #e5e7eb;
          opacity: 1;
          transition: background 0.3s;
          cursor: pointer;
        }
        .accessories-swiper .swiper-pagination-bullet-active {
          background: #0091d5;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-10 md:mb-16">
          <div
            className="h-[240px] sm:h-[340px] md:h-[400px] lg:h-[420px] rounded-3xl md:rounded-4xl bg-black overflow-hidden relative shadow-lg"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
          </div>

          <div data-aos="fade-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4 md:mb-6 font-display">
              The <span className="text-[#0091d5]">e500 and e700 ventilators</span> provide flexibility in your choice of functionality and application.
            </h2>

            <div className="space-y-3 md:space-y-4 text-[14px] md:text-[15px] lg:text-[17px] text-gray-600 leading-relaxed mb-6 md:mb-8">
              <p>
                The e500 and e700 ventilators usher in a new era of controlled ventilation for resuscitation and patient transport.
                Designed with advanced electronic control and reliable pneumatic power, these innovative ventilators deliver precise,
                efficient, and adaptable respiratory support for a wide range of patient needs.
              </p>
              <p>
                Suitable for both pre-hospital emergency response and in-hospital critical care, they empower healthcare professionals
                at every level with dependable performance, user-friendly operation, and enhanced patient safety in demanding clinical environments.
              </p>
            </div>

            <div className="inline-block">
              <a
                href="#products"
                className="group inline-flex items-center bg-[#0091d5] text-white font-bold rounded-full py-2.5 pl-6 pr-10 transition-all duration-300 hover:bg-[#007bb8] hover:shadow-lg hover:scale-105 active:scale-100 relative"
              >
                <span className="text-[15px] tracking-wide mr-4">View Products</span>
                <span className="absolute right-0.5 flex items-center justify-center rounded-r-full w-10 h-[calc(100%-4px)] bg-white text-[#0091d5] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={18} strokeWidth={2.5} />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="accessories-swiper"
          >
            {accessories.map((accessory, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-gray-100 rounded-3xl md:rounded-4xl shadow-sm hover:shadow-md transition-all duration-300 aspect-square overflow-hidden relative group">
                  <img
                    src={accessory.imageSrc}
                    alt={accessory.label}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
