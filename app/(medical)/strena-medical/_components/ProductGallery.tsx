"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "/strena/images/product-1.png",
  "/strena/images/product-2.png",
  "/strena/images/product-3.png",
  "/strena/images/product-4.png",
  "/strena/images/product-5.png",
  "/strena/images/product-6.png",
  "/strena/images/product-7.png",
  "/strena/images/product-8.png",
  "/strena/images/product-9.png",
];

export default function ProductGallery() {
  return (
    <section className="pb-16 lg:pb-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#00AEEF] text-2xl lg:text-3xl font-bold mb-4">
            Product <span className="text-[#00427C]">Gallery</span>
          </h2>
        </div>

        <div className="product-gallery-container relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              el: ".custom-gallery-pagination",
              bulletClass: "gallery-bullet",
              bulletActiveClass: "gallery-bullet-active",
              renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
              },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-[16/10] rounded-[20px] overflow-hidden border border-gray-100 shadow-md bg-black">
                  <img 
                    src={img} 
                    alt={`Diagnostic Scan ${index + 1}`} 
                    className="w-full h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Carousel Indicators */}
          <div className="custom-gallery-pagination flex justify-center gap-3 lg:mt-10 mt-6"></div>
        </div>
      </div>

      <style jsx global>{`
        .gallery-bullet {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background-color: #333333;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .gallery-bullet-active {
          width: 40px;
          background-color: #00427C;
        }
      `}</style>
    </section>
  );
}
