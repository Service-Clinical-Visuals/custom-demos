"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";

export default function Reviews() {
  const testimonials = [
    {
      name: "Steve Silver",
      text: "We have the Bluetooth pro Set up cracking bit of kit would recommend to anyone also, the after service is very good 5 star cheers guys"
    },
    {
      name: "Ben Bateman",
      text: "We had been setting my car up unknowingly miles out due to poor equipment until absolute alignment transformed my racecar with state of the art knowledge and equipment. Highly recommend! Thanks Chris & Team"
    },
    {
      name: "Richard Young",
      text: "Great service with very knowledgeable staff."
    },
    {
      name: "Chris Glasson",
      text: "Couldn't recommend a better company to deal with. Their product is fantastic, as are the people. Chris and Pete are incredibly helpful and knowledgeable. A lot of other companies could learn a lot from their aftersales support"
    },
    {
      name: "Mike Jones",
      text: "I've used Absolute Alignment on numerous occasions and I cannot recommend them highly enough. Always available for advice on Alignment or anything related to garage equipment. Look forward to using your services again in the future"
    },
    {
      name: "Martin Broadhurst",
      text: "The support provided by Chris and the team has been absolutely second to none, and we're looking forward to many years working together"
    }
  ];

  return (
    <section className="w-full py-9 md:py-12">
      <div className="container mx-auto px-4" data-aos="zoom-in">
        <div className="bg-primary rounded-tl-[50px] rounded-br-[50px] md:rounded-tl-[100px] md:rounded-br-[100px] py-16 md:py-24 px-6 md:px-16 flex flex-col items-center text-center">

          <h2 className="text-2xl md:text-4xl font-bold font-heading uppercase text-white mb-4 tracking-tight">
            What our customers say
          </h2>

          <p className="text-white/90 mb-20 max-w-3xl">
            Don't just take our word for it — hear from the businesses and engineers who trust Absolute Alignment to keep their workshops running at peak performance.
          </p>

          <div className="w-full lg:px-10 overflow-hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={48}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: ".review-pagination",
              }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="overflow-visible! pb-4 review-swiper"
              style={{ paddingTop: "3rem" }}
            >
              {testimonials.map((item, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="relative bg-white rounded-[30px] md:rounded-[40px] rounded-bl-none p-6 md:p-8 pt-12 md:pt-16 flex flex-col items-center h-full min-h-[280px]">
                    <div className="absolute -top-8 md:-top-12 w-16 h-16 md:w-24 md:h-24 bg-[#1a1a1a] rounded-full border-4 border-primary flex items-center justify-center shadow-xl">
                      <FaQuoteLeft className="text-white text-xl md:text-3xl" />
                    </div>

                    <p className="text-gray-600 text-[15px] leading-relaxed text-center mb-8 flex-1 font-medium px-4">
                      {item.text}
                    </p>

                    <div className="mt-auto flex flex-col items-center">
                      <h4 className="text-primary font-bold font-heading text-xl text-center">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Pagination Design */}
          <div className="review-pagination flex justify-center gap-3 mt-8"></div>

          <style jsx global>{`
            .review-pagination .swiper-pagination-bullet {
              width: 32px !important;
              height: 4px !important;
              border-radius: 0px !important;
              background: white !important;
              opacity: 0.3 !important;
              transition: all 0.3s ease !important;
              margin: 0 4px !important;
            }
            .review-pagination .swiper-pagination-bullet-active {
              opacity: 1 !important;
            }
            .review-swiper .swiper-wrapper {
              align-items: stretch !important;
            }
            .review-swiper .swiper-slide {
              height: auto !important;
            }
          `}</style>

        </div>
      </div>
    </section>
  );
}
