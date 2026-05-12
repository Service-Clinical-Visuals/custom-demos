"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const partners = ["/arnott/images/partner-1.png", "/arnott/images/partner-2.png", "/arnott/images/partner-3.png", "/arnott/images/partner-4.png", "/arnott/images/partner-5.png", "/arnott/images/partner-6.png", "/arnott/images/partner-7.png", "/arnott/images/partner-8.png", "/arnott/images/partner-9.jpeg", "/arnott/images/partner-10.png"];

export default function Partners() {
    return (
        <section className="py-20 bg-[#F9F9F9]">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Header Left */}
                    <div className="lg:col-span-4" data-aos="fade-right">
                        <span className="text-primary font-semibold text-base tracking-wider mb-1 block">Our Partners</span>
                        <h2 className="text-[28px] md:text-[32px] font-bold text-[#171717] mb-4">Trusted by Industry Leaders</h2>
                        
                        <div className="flex gap-2">
                            <button className="partners-prev w-10 h-10 flex items-center justify-center bg-[#4A4A4A] text-white hover:bg-primary transition-colors cursor-pointer z-10">
                                <ArrowLeft size={20} />
                            </button>
                            <button className="partners-next w-10 h-10 flex items-center justify-center bg-[#4A4A4A] text-white hover:bg-primary transition-colors cursor-pointer z-10">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Logos Right */}
                    <div className="lg:col-span-8 overflow-hidden" data-aos="fade-left">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={16}
                            slidesPerView={1}
                            navigation={{
                                prevEl: ".partners-prev",
                                nextEl: ".partners-next",
                            }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            loop={true}
                            className="w-full"
                        >
                            {partners.map((partner, i) => (
                                <SwiperSlide key={i}>
                                    <div className="bg-white border border-gray-100 p-8 h-32 flex items-center justify-center cursor-pointer">
                                        <img src={partner} alt="" className="h-full object-contain" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
