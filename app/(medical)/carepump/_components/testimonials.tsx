"use client";

import PrimaryButton from "./Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from "next/image";

// @ts-ignore: side-effect CSS import without type declarations
import 'swiper/css';
// @ts-ignore: side-effect CSS import without type declarations
import 'swiper/css/pagination';
import { useState } from "react";

const testimonialsData = [
  {
    name: "Paweł Murawski @ninja_witcher",
    role: "European record holder OCR 100 m Polish OCR Champion 2020.",
    image: "img1.jpg",
    text: "Every day during training, my muscles have to deal with great overloads, and recently I have also suffered an injury. Fortunately, CarePump came with help. The MOVE6 lymphatic..."
  },
  {
    name: "Paulina Węgrzyn Gębuś",
    role: "Physiotherapist, PZN",
    image: "img2.jpg",
    text: "The CarePump MOVE4 worked very well for the players of the Polish Team in ski jumping. It was a perfect complement to regeneration, accelerating and improving the flow of blood and...See More >>"
  },
  {
    name: "Marcin Konieczny (MKON)",
    role: "World Champion (cat.45-49) in the IRONMAN distance triathlon",
    image: "img3.jpg",
    text: "My name is Marcin Konieczny and I am the World Champion (cat. 45-49) in the Triathlon on the Ironman distance. I was really interested in lymphatic drainage equipment at the moment...See More >>"
  },
  {
    name: "Adam Czerwiński",
    role: "Athlete, running coach",
    image: "img4.jpg",
    text: "Almost two months of using the 4-chamber CarePump Move4 lymphatic drainage device allowed me to learn about its advantages and disadvantages. I especially appreciated...See More >>"
  },
  {
    name: "Sebastian Kasprzyk",
    role: "2019 European Champion in OCR (categories 18-24) 5km",
    image: "img5.jpg",
    text: "My adventure with lymphatic drainage began a few years ago when I was testing the 6-chamber WIC 2008MS. The effects after the first use were unbelievable, when after removing the...See More >>"
  },
  {
    name: "Justyna Święty-Ersetic",
    role: "European Champion in the 400 m run (2018)",
    image: "img6.jpg",
    text: "The device for lymphatic drainage with a battery charging function is a great help and convenience for me. Often, after competitions or training, I can't wait to come back home, and do...See More >>"
  },
  {
    name: "Lech Jaroniec",
    role: "An amatour triathlete (IronWay - droga do Ironmena)",
    image: "img7.jpg",
    text: "I have been using the CarePump legs for several months and I must admit that I did not expect it to regenerate so much. When heavy legs after stronger tasks or competitions noticeably...See More >>"
  }
];

export default function TestimonialSection() {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-16 md:py-18 lg:py-20">
      <div className="container mx-auto">
        <div
          className="relative overflow-hidden rounded-[24px] px-8 py-14 lg:px-14 lg:py-16"
          style={{
            backgroundImage: "url('/carepump/images/testimonialBG.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          {/* Custom Pagination Tab on the Right Edge */}
          <div
            className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            z-20
            bg-white
            w-[40px]
            h-[110px]
            rounded-l-[18px]
            flex
            items-center
            justify-center
            shadow-[0_4px_12px_rgba(0,0,0,0.08)]
          "
          >
            <div className="flex flex-col items-center gap-3">
              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  className={`
          rounded-full transition-all duration-300
          ${activeIndex % 3 === dot
                      ? "bg-[#00C4FF] w-[12px] h-[12px]"
                      : "bg-[#005A7A] w-[12px] h-[12px]"
                    }
        `}
                />
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[50%_50%] gap-10 lg:gap-14 items-center">

            {/* Left Content */}
            <div data-aos="fade-right" className="text-center lg:text-left">
              <p className="text-[#005a7a] font-semibold underline mb-4">
                Testimonials
              </p>

              <h2 className="
                text-[24px]
                sm:text-[28px]
                md:text-[30px]
                lg:text-[32px]
                font-bold
                text-[#333]
                leading-[1.2]
                mb-4 lg:mb-6
                ">
                Trusted by Champions & Professional Athletes
              </h2>

              <p className="
                text-[#777]
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[17px]
                leading-7
                lg:leading-8
                ">
                Athletes and physiotherapists trust CarePump for faster
                recovery, reduced muscle fatigue, and improved performance.
                MOVE4 and MOVE6 devices support effective regeneration after
                intense training, competitions and injuries.
              </p>

              <div className="flex justify-center lg:justify-start">
                <PrimaryButton
                  text="Patient Experiences"
                  className="mt-8"
                />
              </div>
            </div>

            {/* Testimonial Card */}
            <div data-aos="fade-left" className="relative flex justify-center w-full min-w-0 pb-10 lg:pb-0 lg:pr-6">
              <div className="relative w-full max-w-[520px]">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{
                    clickable: true,
                    // dynamicBullets: true,
                    // dynamicMainBullets: 3,
                    el: ".custom-swiper-pagination",
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={30}
                  slidesPerView={1}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  loop={true}
                  className="w-full"
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className={`block w-3 h-3 rounded-full my-2 ${activeIndex % 3 === dot
                          ? "bg-sky-400"
                          : "bg-[#005a7a]"
                          }`}
                      />
                    ))}
                  </div>
                  {testimonialsData.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-white rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] w-full p-8 text-center h-full">
                        <img
                          src={`/carepump/images/${item.image}`}
                          alt={item.name}
                          className="w-20 h-20 rounded-full object-cover mx-auto mb-6"
                        />

                        <p className="
                        text-[#777]
                        text-[14px]
                        sm:text-[15px]
                        md:text-[16px]
                        lg:text-[17px]
                        leading-7
                        lg:leading-8
                        max-w-[450px] mx-auto
                        ">
                          {item.text.includes("See More >>") ? (
                            <>
                              {item.text.split("See More >>")[0]}
                              <span className="text-[#0077cc] font-medium hover:underline cursor-pointer">
                                See More &gt;&gt;
                              </span>
                            </>
                          ) : (
                            item.text
                          )}
                        </p>

                        <h4 className="mt-8 text-[22px] md:text-[24px] font-bold text-[#333]">
                          {item.name}
                        </h4>

                        <p className="mt-2 text-[#0077cc] font-medium text-sm md:text-base">
                          {item.role}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
       .custom-swiper-pagination {
  display: flex !important;
  flex-direction: column !important;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.custom-swiper-pagination .swiper-pagination-bullet {
  width: 12px !important;
  height: 12px !important;
  margin: 0 !important;
  background: #005a7a !important;
  opacity: 1 !important;
  border-radius: 50%;
}

.custom-swiper-pagination .swiper-pagination-bullet-active {
  background: #00bfff !important;
}
      `
      }} />
    </section>
  );
}