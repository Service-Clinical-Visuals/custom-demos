"use client";
import React from 'react';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { ArrowRight, ArrowLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function OurCategory() {
  const categories = [
    { name: "Parenteral", image: "/medical/bexen-medical/home/category-1.jpg" },
    { name: "Enteral", image: "/medical/bexen-medical/home/category-2.jpg" },
    { name: "Infusion And Transfusion", image: "/medical/bexen-medical/home/category-3.jpg" },
    { name: "Urology", image: "/medical/bexen-medical/home/category-4.jpg" },
    { name: "Gynaecology", image: "/medical/bexen-medical/home/category-5.jpg" },
    { name: "Ophthalmology", image: "/medical/bexen-medical/home/category-6.jpg" },
    { name: "Masks", image: "/medical/bexen-medical/home/category-7.jpg" },
    { name: "Ozonotherapy", image: "/medical/bexen-medical/home/category-8.jpg" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="custom-container px-4">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 data-aos="fade-up" className="text-[32px] font-semibold text-[#333333] mb-4">Our Category</h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-[14px] text-gray-500 max-w-xl leading-relaxed">
              The Foley 3-way urinary catheter is 100% silicone, with radiopaque line and latex-free balloon with non-return valve, and it is colour-coded.
            </p>
          </div>

          {/* Custom Navigation */}
          <div className="flex gap-3" data-aos="fade-up">
            <button className="cat-prev w-10 h-10 rounded-full bg-[#14387F] text-white flex items-center justify-center hover:bg-[#0ea5e9] transition-colors shadow-md">
              <ArrowLeft size={18} />
            </button>
            <button className="cat-next w-10 h-10 rounded-full bg-[#14387F] text-white flex items-center justify-center hover:bg-[#0ea5e9] transition-colors shadow-md">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".cat-prev",
              nextEl: ".cat-next",
            }}
            className="category-swiper !pb-12"
          >
            {categories.map((cat, idx) => (
              <SwiperSlide key={idx}>
                <div className="group cursor-pointer h-full flex flex-col justify-between">
                  <div>
                    <div className="w-full aspect-[4/5] overflow-hidden mb-4 relative bg-gray-100 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl rounded-tl-4xl rounded-br-4xl">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[24px] font-semibold text-[#14387F] whitespace-pre-line group-hover:text-[#0ea5e9] transition-colors">{cat.name}</h3>
                      <div className="w-7 h-7 rounded-full bg-[#14387F] text-white flex items-center justify-center shrink-0 group-hover:bg-[#0ea5e9] transition-colors">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
