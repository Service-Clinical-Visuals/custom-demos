"use client";
import React from "react";
import { Wrench, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

const newsArticles = [
  {
    title: "Max Verstappen wins his 4th World Championship",
    desc: "As Mobil 1 celebrates 50 years of excellence in motorsport, Max Verstappen becomes a four-time Formula 1 World Champion. Together, we've made history.",
    buttonText: "Celebrate with Us",
    imgSrc: "/moto/moove/home/news-1.png",
  },
  {
    title: "Greggs and MyComma Team Up for Tasty Rewards",
    desc: "We're excited to announce a brand new collaboration between MyComma and Greggs! This means that workshop owners using MyComma can now unlock exclusive Greggs treats as part of their rewards, bringing one of the UK's favorite brands straight to our hardworking workshop owners and mechanic teams.",
    buttonText: "Sign up to MyCommand",
    imgSrc: "/moto/moove/home/news-2.png",
  },
  {
    title: "Moove by Moovers",
    desc: "Who better to talk about Moove than our Moovers? Moove is a global lubricant solutions company. We continuously evolve. Our high-performance global team drives consistent growth in a unique environment that brings out the best in each other. To tell this story, we've invited our Moovers to share.",
    buttonText: "See them on LinkedIn Page",
    imgSrc: "/moto/moove/home/news-3.png",
  }
];

export default function LatestNews() {
  return (
    <section className="w-full bg-[var(--moove-bg-grey)] py-16 md:py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">

        {/* Title / Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-4 text-[var(--moove-text-dark)]">
            <Wrench className="w-5 h-5" />
            <h6 className="text-[15px]! font-bold tracking-wider text-gray-600">
              Latest News
            </h6>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--moove-text-dark)]">
            Catch up on our latest customer achievements.
          </h2>
        </div>

        {/* Swiper Carousel Block (Image 2) */}
        <div className="relative w-full mb-16">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-news-next",
              prevEl: ".swiper-news-prev",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="rounded-sm shadow-sm border border-gray-100 overflow-hidden"
          >
            {newsArticles.map((article, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white grid grid-cols-1 md:grid-cols-2 min-h-[380px] text-left">
                  {/* Left side: Image */}
                  <div className="relative aspect-[16/10] md:aspect-auto min-h-[250px] md:min-h-full">
                    <img
                      src={article.imgSrc}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Right side: Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-xl md:text-[24px]! font-bold text-[var(--moove-text-dark)] mb-4">
                      {article.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-8">
                      {article.desc}
                    </p>

                    <div>
                      <button className="flex items-center bg-[#001C46] hover:bg-[#002D72] text-white transition-colors">
                        <span className="px-6 py-2.5 text-sm font-bold">
                          {article.buttonText === "Celebrate with Us" ? "Explore products" : article.buttonText}
                        </span>
                        <div className="bg-white text-[#001C46] px-3 py-2.5 border border-[#001C46]">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <button
            className="swiper-news-prev absolute left-0 md:left-[-30px] top-1/2 -translate-y-1/2 bg-[#102A43] hover:bg-[#002D72] text-white p-3 shadow-md hover:scale-105 transition-transform z-10 rounded-none cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="swiper-news-next absolute right-0 md:right-[-30px] top-1/2 -translate-y-1/2 bg-[#102A43] hover:bg-[#002D72] text-white p-3 shadow-md hover:scale-105 transition-transform z-10 rounded-none cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>



      </div>
    </section>
  );
}
