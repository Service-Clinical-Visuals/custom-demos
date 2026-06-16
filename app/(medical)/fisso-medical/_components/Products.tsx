"use client";

import React, { useState, useEffect, useRef } from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Product {
  id: number;
  image: string;
  title: string;
  badge: string;
}

export default function Products() {
  const [activeTab, setActiveTab] = useState<"medical" | "industrial">("medical");
  const [activeDot, setActiveDot] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const getItemsPerPage = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  const itemsPerPage = getItemsPerPage();

  const medicalProducts: Product[] = [
    {
      id: 1,
      image: "/medical/fisso-medical/products/product1.png",
      title: "Medical Articulated Arms",
      badge: "OEM Components",
    },
    {
      id: 2,
      image: "/medical/fisso-medical/products/product2.png",
      title: "OEM Rail Clamps, Columns and Quick Release Holders",
      badge: "OEM Components",
    },
    {
      id: 3,
      image: "/medical/fisso-medical/products/product3.png",
      title: "FISSO Endoscope Holder",
      badge: "FISSO Medical Sets",
    },
    {
      id: 6,
      image: "/medical/fisso-medical/products/product17.png",
      title: "FISSO Instrument Holder",
      badge: "FISSO Medical Sets",
    },
    {
      id: 7,
      image: "/medical/fisso-medical/products/product4.png",
      title: "Arm Support and Body Support",
      badge: "FISSO Medical Sets",
    },
    {
      id: 8,
      image: "/medical/fisso-medical/products/product13.png",
      title: "FISSO Respiratory Circuit holder",
      badge: "FISSO Medical Sets",
    },
    {
      id: 4,
      image: "/medical/fisso-medical/products/product5.png",
      title: "Anaesthetic Tube holder",
      badge: "FISSO Medical Sets",
    },
    {
      id: 5,
      image: "/medical/fisso-medical/products/product6.png",
      title: "FISSO Pressure Transducer Plate Holder",
      badge: "FISSO Medical Sets",
    },
  ];

  const industrialProducts: Product[] = [
    {
      id: 101,
      image: "/medical/fisso-medical/products/product7.png",
      title: "Industrial Articulated Arms",
      badge: "OEM Components",
    },
    {
      id: 102,
      image: "/medical/fisso-medical/products/product8.png",
      title: "Industrial Bases and Clamps",
      badge: "OEM Components",
    },
    {
      id: 103,
      image: "/medical/fisso-medical/products/product14.png",
      title: "FISSO Dial Indicator Holders, Magnetic Bases & Stands",
      badge: "FISSO Industrial Sets",
    },
    {
      id: 104,
      image: "/medical/fisso-medical/products/product9.png",
      title: "Holders and Mounts for Machine Vision and Automation",
      badge: "FISSO Industrial Sets",
    },
    {
      id: 105,
      image: "/medical/fisso-medical/products/product15.png",
      title: "Photo Holders and Magic Arms for Photography and Film",
      badge: "FISSO Industrial Sets",
    },
    {
      id: 106,
      image: "/medical/fisso-medical/products/product11.png",
      title: "Industrial Holders",
      badge: "FISSO Industrial Sets",
    },
    {
      id: 107,
      image: "/medical/fisso-medical/products/product12.png",
      title: "Precision Run-Out Testing and Balancing for Industrial Applications",
      badge: "FISSO Industrial Sets",
    },
  ];

  const currentProducts = activeTab === "medical" ? medicalProducts : industrialProducts;
  const totalDots = Math.ceil(currentProducts.length / itemsPerPage);

  const handleTabChange = (tab: "medical" | "industrial") => {
    setActiveTab(tab);
    setActiveDot(0);
    swiperRef.current?.slideTo(0, 0);
  };

  const handleSlideChange = (swiper: any) => {
    const page = Math.floor(swiper.realIndex / itemsPerPage);
    setActiveDot(page);
  };

  const handleDotClick = (d: number) => {
    setActiveDot(d);
    swiperRef.current?.slideToLoop(d * itemsPerPage);
  };

  return (
    <section
      id="products"
      className="w-full flex justify-center bg-white px-4 sm:px-6 lg:px-8 2xl:px-10 pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16 2xl:pt-16 2xl:pb-20 overflow-x-hidden"
    >
      <div className="w-full max-w-[1400px] 2xl:max-w-[1760px] mx-auto min-w-0">

        {/* Header row */}
        <div
          className="flex flex-col md:flex-row md:items-start justify-between gap-4 sm:gap-5 md:gap-8 mb-8 sm:mb-10 lg:mb-12 2xl:mb-14"
          data-aos="fade-up"
        >
          <div className="min-w-0 text-left">
            <Typography
              variant="h2"
              color="dark"
              weight="semibold"
              className="mb-2 2xl:mb-3 leading-[150%] tracking-[0.005em]"
            >
              Our Products
            </Typography>
            <Typography
              variant="body"
              color="muted"
              className="leading-relaxed text-[#666666] max-w-[90%] sm:max-w-md md:max-w-xl lg:max-w-2xl 2xl:max-w-2xl"
            >
              The FISSO-Articulated Arm is successfully used as a quality product for medical
              and industrial applications worldwide. It is considered the original and is Swiss Made.
            </Typography>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto shrink-0 mt-1">
            {[
              { key: "medical", label: "Medical Products" },
              { key: "industrial", label: "Industrial Products" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => handleTabChange(key as "medical" | "industrial")}
                className={`
                  flex-1 md:flex-none
                  px-4 sm:px-5 lg:px-6 2xl:px-7
                  py-2.5 2xl:py-3
                  rounded-xl
                  2xl:h-[60px] 2xl:w-[300px]
                  text-[12px] sm:text-[13px] lg:text-sm 2xl:text-base
                  font-semibold tracking-wide whitespace-nowrap
                  transition-all duration-300 cursor-pointer
                  ${activeTab === key
                    ? "bg-[#9C0B38] text-white shadow-sm"
                    : "bg-white text-[#333333] border border-[#9C0B38]/40 hover:bg-gray-50"
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Carousel Wrapper */}
        <div className="w-full overflow-hidden py-10 -my-10 px-4 -mx-4">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={handleSlideChange}
            loop={currentProducts.length > itemsPerPage}
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="w-full !overflow-visible"
          >
            {currentProducts.map((product, idx) => (
              <SwiperSlide key={product.id} className="!h-auto flex">
                <div
                  className="w-full h-full  min-w-0 bg-white flex flex-col group overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full p-3 sm:p-4 md:p-5 2xl:p-6 rounded-[25px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  {/* Image area — inset box with soft pink/burgundy border */}
                  <div className="w-full p-3 z-20 bg-white flex items-center justify-center overflow-hidden rounded-[18px]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-[100%] h-[100%] object-contain select-none"
                    />
                  </div>

                  {/* Card footer — left column with Title & Badge, right column with Arrow button */}
                  <div className="flex items-end justify-between gap-4 mt-4 pt-1 flex-1 ">
                    <div className="flex flex-col gap-2 min-w-0 flex-1">
                      <Typography
                        variant="h4"
                        color="dark"
                        weight="semibold"
                        className="leading-snug line-clamp-2 text-[13px] sm:text-[14px] lg:text-[15px] 2xl:text-[16px] "
                      >
                        {product.title}
                      </Typography>
                      <div className="flex">
                        <Typography
                          variant="h6"
                          color="none"
                          className="text-[11px] 2xl:text-[12px] font-medium text-[#4E1E2D] border border-[#4E1E2D]/30 bg-white px-3 py-1 rounded-full select-none whitespace-nowrap"
                        >
                          {product.badge}
                        </Typography>
                      </div>
                    </div>

                    {/* Arrow button — #4E1E2D bg, vector PNG icon */}
                    <button
                      aria-label={`View ${product.title}`}
                      className="shrink-0 flex items-center justify-center hover:opacity-90 active:scale-95 transition-all duration-300 cursor-pointer w-9 h-9 sm:w-10 sm:h-10 xl:w-15 xl:h-15 2xl:w-11 2xl:h-11 bg-[#4E1E2D] rounded-full"
                    >
                      <img
                        src="/medical/fisso-medical/Vector.png"
                        alt="View"
                        className="w-4 h-4 sm:w-5 sm:h-5  xl:h-7 xl:w-7  object-contain"
                      />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pagination dots */}
        {totalDots > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8 sm:mt-10 2xl:mt-12">
            {Array.from({ length: totalDots }).map((_, d) => {
              const isActive = activeDot === d;
              return (
                <button
                  key={d}
                  onClick={() => handleDotClick(d)}
                  aria-label={`Go to slide page ${d + 1}`}
                  className={`w-7 sm:w-8 2xl:w-10 h-2 rounded-full transition-all duration-300 cursor-pointer ${isActive ? "bg-[#9C0B38]" : "bg-gray-200 hover:bg-gray-300"
                    }`}
                />
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}