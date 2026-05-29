"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function HybridMeeting() {
  const videos = [
    {
      title: "The Tibial Plateau Fracture",
      image: "/medical/7s-medical/meet-1.png",
      youtubeLink: "#",
    },
    {
      title: "The Proximal Femur Fracture",
      image: "/medical/7s-medical/meet-2.png",
      youtubeLink: "#",
    },
    {
      title: "The Locking Compression Technique",
      image: "/medical/7s-medical/meet-3.png",
      youtubeLink: "#",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Content */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          <h2 className="text-[28px] md:text-[30px] lg:text-[32px] font-bold mb-4">
            Hybrid Meeting
          </h2>
          <p className="md: leading-relaxed font-light">
            Discuss and share experiences with international faculty and colleagues. In the age of digital presence, we at 7S have seized the opportunity to develop a new concept of continuing education for surgeons. With our hybrid meetings, we strive to grant them access to a broad collection of custom-recorded state-of-the-art lectures, interviews, workshops, or surgical videos from leading-edge luminaries of their field.
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative w-full group">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".hybrid-prev",
              nextEl: ".hybrid-next",
            }}
            className="hybrid-swiper rounded-2xl overflow-hidden shadow-2xl"
          >
            {videos.map((video, idx) => (
              <SwiperSlide key={idx}>
                <a 
                  href={video.youtubeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative w-full aspect-[16/10] overflow-hidden group/slide cursor-pointer"
                >
                  <img
                    src={video.image}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover/slide:scale-105"
                  />
                  
                  {/* Play Button Indicator (Appears on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300 transform group-hover/slide:scale-110">
                     <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 shadow-lg">
                       <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                     </div>
                  </div>

                  {/* Title overlay at the bottom left */}
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <h3 className="text-white! text-lg md:text-xl font-bold tracking-tight shadow-sm drop-shadow-md px-4 rounded-xl">
                      {video.title}
                    </h3>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="hybrid-prev absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10 w-12 h-12 bg-[#CE112D] text-white flex items-center justify-center shadow-xl hover:bg-[#A70F25] transition-colors rounded-sm opacity-0 group-hover:opacity-100 duration-300">
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
          
          <button className="hybrid-next absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10 w-12 h-12 bg-[#CE112D] text-white flex items-center justify-center shadow-xl hover:bg-[#A70F25] transition-colors rounded-sm opacity-0 group-hover:opacity-100 duration-300">
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
}
