"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function ProductCategory() {
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
      className="relative w-full py-24 bg-[url('/7s-medical/product-bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center shadow-inner"
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
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !mx-1.5",
            }}
            className="product-swiper !pb-16"
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
                        className="absolute inset-0 w-full h-full object-contain p-4 transform transition-transform duration-700 group-hover:rotate-1 rounded-lg"
                      />
                    </div>

                    {/* Middle: Title */}
                    <h3 className="text-center text-lg font-bold text-gray-900 tracking-tight mb-6">
                      {product.title}
                    </h3>
                  </div>

                  {/* Bottom: Action Button */}
                  <Link
                    href={product.link}
                    className="w-full text-center inline-flex items-center justify-center bg-[#CE112D] hover:bg-[#A70F25] text-white text-[13px] font-semibold tracking-wider rounded-[3px] py-3 uppercase transition-colors duration-300 shadow-[0_2px_8px_rgba(193,2,48,0.2)]"
                  >
                    View Products
                  </Link>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Custom Styles for swiper dots to look like horizontal slider segments */}
      <style jsx global>{`
        .product-swiper .swiper-pagination {
          bottom: 0px !important;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .product-swiper .swiper-pagination-bullet {
          width: 36px !important;
          height: 4px !important;
          border-radius: 2px !important;
          background: rgba(255, 255, 255, 0.4) !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
          cursor: pointer;
        }
        .product-swiper .swiper-pagination-bullet-active {
          background: #ffffff !important;
          width: 36px !important;
        }
      `}</style>
    </section>
  );
}
