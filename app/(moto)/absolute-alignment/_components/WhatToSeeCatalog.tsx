"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function WhatToSeeCatalog() {
  const cards = [
    { id: "01", title: "Wheel Aligners", category: "Wheel Aligners", img: "see-1.png" },
    { id: "02", title: "OEM Aligners", category: "OEM Aligners", img: "see-2.png" },
    { id: "03", title: "ADAS", category: "ADAS", img: "see-3.png" },
    { id: "04", title: "2-Post Alignment", category: "2-POST ALIGNMENT", img: "see-4.png" },
    { id: "05", title: "Motorsport", category: "Motorsport", img: "see-5.png" },
    { id: "06", title: "Extras", category: "Extras", img: "see-6.png" },
  ];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4" data-aos="zoom-in">
        <div className="bg-primary rounded-tl-[50px] rounded-br-[50px] md:rounded-tl-[100px] md:rounded-br-[100px] py-12 md:py-20 px-6 md:px-12 flex flex-col items-center text-center">

          <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase text-white mb-4 tracking-tight">
            What would you like to see?
          </h2>

          <p className="text-white/90 mb-12 max-w-3xl">
            We've grouped our wheel alignment equipment into handy sections. Use the Quicklinks here or the "Catalogue" menu above to explore our products.
          </p>

          <div className="w-full lg:px-10">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
              }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="flex flex-col gap-4 text-left">
                    <div className="flex items-center gap-2 text-white font-bold uppercase text-xs">

                    </div>
                    <div className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer shadow-lg bg-gray-800">
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
                      <img
                        src={`/moto/absolute-alignment/home/${card.img}`}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-6 right-6 text-white text-3xl font-heading font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-[-10px] group-hover:translate-y-0 z-20">
                        {card.id}
                      </div>
                      <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-[10px] group-hover:translate-y-0 z-20">
                        <h3 className="text-xl font-bold font-heading uppercase tracking-wide">{card.title}</h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Pagination Design */}
          <div className="custom-pagination flex justify-center gap-3 mt-8"></div>

          <style jsx global>{`
            .custom-pagination .swiper-pagination-bullet {
              width: 32px !important;
              height: 6px !important;
              border-radius: 999px !important;
              background: white !important;
              opacity: 0.4 !important;
              transition: all 0.3s ease !important;
              margin: 0 4px !important;
            }
            .custom-pagination .swiper-pagination-bullet-active {
              opacity: 1 !important;
              width: 32px !important;
            }
          `}</style>

        </div>
      </div>
    </section>
  );
}
