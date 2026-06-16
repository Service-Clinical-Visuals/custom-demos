"use client";
import React from 'react';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BexenButton from "./BexenButton";

export default function SocialInitiatives() {
  const initiatives = [
    { title: "Pausoka", image: "/medical/bexen-medical/home/social-1.png" },
    { title: "Hernaniko Arraun", image: "/medical/bexen-medical/home/social-2.png" },
    { title: "Batzen Emaktiva", image: "/medical/bexen-medical/home/social-3.png" },
    { title: "Colegio Oficial de Enfermería de Gipuzkoa", image: "/medical/bexen-medical/home/social-4.png" },
    { title: "CDIA", image: "/medical/bexen-medical/home/social-5.png" }
  ];

  return (
    <section className="medas-root py-20 bg-white">
      <div className="custom-container px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2
            data-aos="fade-up"
            className="text-[32px] md:text-[40px] font-semibold text-[#333333] mb-6"
          >
            Social Initiatives
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[15px] md:text-[16px] text-gray-500 leading-relaxed max-w-4xl mx-auto"
          >
            The healthcare sector is our environment, our field of activity, where we manufacture devices for healthcare professionals that directly contribute to social well-being and generate cardio protected environments for the prevention and safety of people.
          </p>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
            }}
            className="social-swiper"
          >
            {initiatives.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center group cursor-pointer h-full">
                  <div className="w-full aspect-[16/10] rounded-[24px] overflow-hidden mb-6 relative transition-transform duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#14387F] group-hover:text-[#0ea5e9] transition-colors text-center px-4 leading-tight">
                    {item.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="border-t border-gray-200 pt-10 mt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[14px] text-gray-500 leading-relaxed md:w-2/3" data-aos="fade-up">
            Bexen is committed to creating a positive social impact by building strong relationships with local organizations and communities. The company actively supports initiatives in healthcare, welfare, education, employment, cooperation, and social development. Through these efforts, Bexen works to promote inclusion, improve community well-being, and contribute to sustainable social integration.
          </p>
          <div data-aos="fade-up" data-aos-delay="100">
            <BexenButton>
              Explore Solutions
            </BexenButton>
          </div>
        </div>
      </div>
    </section>
  );
}
