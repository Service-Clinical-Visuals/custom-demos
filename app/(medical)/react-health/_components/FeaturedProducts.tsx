"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ReactHealthButton from "./ReactHealthButton";
import { ArrowLeft, ArrowRight } from "lucide-react";

const products = [
  {
    title: "G3 X APAP",
    description: "The G3 X APAP is the first standard size Form-Free PAP available in the...",
    image: "/react-health/product-1.jpg",
  },
  {
    title: "HomeFill Oxygen System",
    description: "HomeFill Home Fill Self Filling Oxygen HomeFill System Invacare HomeFill...",
    image: "/react-health/product-2.jpg",
  },
  {
    title: "PHOENIX™ 5L Oxygen Concentrator",
    description: "PHOENIX™ 5L Compact, lightweight, and quiet design for discreet...",
    image: "/react-health/product-3.jpg",
  },
  {
    title: "Rio II Full Face Mask",
    description: "The React Health Rio II Full Face Mask is a minimal contact mask that...",
    image: "/react-health/product-4.jpg",
  },
  {
    title: "Rio II Nasal Mask",
    description: "Easy-to-identify labeling for convenient troubleshooting and resupply...",
    image: "/react-health/product-5.png",
  },
  {
    title: "Siesta 2 Full Face Mask",
    description: "The new and improved Siesta 2 Full Face Mask optimizes air flow and offers...",
    image: "/react-health/product-6.jpg",
  },
  {
    title: "TravelPAP",
    description: "The NEW TravelPAP is a small and lightweight PAP device that offers you the...",
    image: "/react-health/product-7.jpg",
  },
  {
    title: "TravelPAP Battery",
    description: "The TravelPAP Battery (Pilot-24 Lite) is a portable battery and backup power...",
    image: "/react-health/product-8.png",
  },
];


export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="react-container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-react-text-dark mb-4">
            Featured Products
          </h2>
          <p className="text-react-text-gray max-w-4xl mx-auto">
            Discover innovative respiratory and sleep therapy solutions engineered for comfort, convenience, and dependable everyday care. Our advanced range includes portable therapy systems, ventilation support, and oxygen care solutions designed to enhance patient comfort, mobility, and overall quality of life.
          </p>
        </div>

        <div className="mb-6" data-aos="fade-up">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="pb-8"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index} className="pb-10">
                <div
                  className="bg-white rounded-[2rem] overflow-hidden p-8 flex flex-col gap-5 shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100/50 h-full"
                >
                  <div className="aspect-square bg-white rounded-2xl flex items-center justify-center p-4 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-react-text-dark text-base leading-tight min-h-[3rem] flex items-center">{product.title}</h3>
                    <p className="text-[16px] text-react-text-gray leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    <ReactHealthButton text="View More" size="sm" className="mt-2" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-200 pt-12" data-aos="fade-up">
          <p className="text-[16px] text-react-text-gray max-w-md">
            Discover a wide range of innovative healthcare and respiratory care solutions thoughtfully designed to enhance patient comfort, support better breathing, and deliver dependable performance in everyday clinical and homecare environments.
          </p>
          <div className="flex gap-4">
            <button className="prev-btn w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-react-purple hover:border-react-purple hover:text-white transition-all">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="next-btn w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-react-purple hover:border-react-purple hover:text-white transition-all">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

