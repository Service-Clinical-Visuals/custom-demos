"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { LuCalendarDays } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Typography from "./Typography";
import Button from "./Button";

const posts = [
  { title: "Daymark Victory™: BFW’s Brightest Portable Headlight Ever", date: "09/20/2024", image: "/medical/bfw/n1.webp", href: "#" },
  { title: "The Importance Of Precise Illumination In Surgery", date: "12/15/2022", image: "/medical/bfw/n2.webp", href: "#" },
  { title: "The Environmental Benefits Of Sustainable LED Lighting", date: "10/07/2022", image: "/medical/bfw/n3.webp", href: "#" },
  { title: "Why Surgeons Are Ditching Xenon For LED Headlights", date: "08/01/2022", image: "/medical/bfw/n4.webp", href: "#" },
  { title: "5 Reasons Every Operating Room Needs A Surgical Headlight", date: "10/07/2021", image: "/medical/bfw/n5.webp", href: "#" },
  { title: "Your Complete Guide To Surgical Lighting", date: "08/11/2021", image: "/medical/bfw/n6.webp", href: "#" },
];

const News = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="news" className="w-full py-12 md:py-16 lg:py-20 min-[2500px]:py-28 min-[3800px]:py-40 bg-white overflow-hidden">
      <div className="custom-container flex flex-col">

        {/* Header */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center w-full pb-6 md:pb-8 min-[2500px]:pb-12 min-[3800px]:pb-16 border-b border-[#CFCFCF] gap-6 md:gap-8 min-[2500px]:gap-12"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7 md:max-w-[65%] lg:max-w-[60%]">
            <Typography variant="h2" color="dark" className="leading-tight">
              Insights &amp; Resources
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Explore BFW&rsquo;s latest blogs and resources covering surgical lighting, LED technology, operating room illumination, surgical cameras, and innovations in healthcare. Stay informed with practical insights and industry knowledge.
            </Typography>
          </div>
          <div className="shrink-0">
            <Button text="Explore All Blogs" href="#news" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* Slider */}
        <div className="w-full mt-8 md:mt-10 min-[2500px]:mt-16 min-[3800px]:mt-20" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
              2500: { slidesPerView: 3, spaceBetween: 48 },
              3800: { slidesPerView: 3, spaceBetween: 64 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full news-swiper"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.title} className="!h-auto">
                <div className="news-card group flex flex-col w-full aspect-[533/537] bg-white p-[4%]">

                  {/* Image */}
                  <div className="news-card-image w-full aspect-[484/314] overflow-hidden border border-gray-300 bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Title, Date, Read More */}
                  <div className="flex flex-col flex-grow justify-between gap-4 min-[2500px]:gap-6 min-[3800px]:gap-10 mt-5 md:mt-6 min-[2500px]:mt-9 min-[3800px]:mt-12">
                    <div className="flex flex-col gap-2 md:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6">
                      <Typography variant="h3" color="dark" className="line-clamp-1">
                        {post.title}
                      </Typography>
                      <div className="flex items-center gap-2 min-[2500px]:gap-3 min-[3800px]:gap-4">
                        <LuCalendarDays className="shrink-0 text-[var(--color-primary)] w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10" aria-hidden="true" />
                        <Typography variant="p" color="muted">
                          <time>{post.date}</time>
                        </Typography>
                      </div>
                    </div>

                    <Link href={post.href} aria-label={`Read more: ${post.title}`} className="self-start">
                      <Typography variant="span" color="primary" className="underline underline-offset-4 decoration-1 hover:opacity-80 transition-opacity">
                        Read More &gt;
                      </Typography>
                    </Link>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="slider-pagination">
            {posts.map((post, idx) => (
              <button
                key={post.title}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => swiperRef.current?.slideToLoop(idx)}
                className={`slider-pagination-bullet ${activeIndex === idx ? "is-active" : ""}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default News;
