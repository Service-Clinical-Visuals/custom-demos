"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Typography } from "./ui/Typography";

interface ServiceItem {
  image: string;
  title: React.ReactNode;
  description: string;
}

const services: ServiceItem[] = [
  {
    image: "/medical/ohst/services/services1.png",
    title: (
      <>
        Precision Investment Casting for
        <br />
        Implants
      </>
    ),
    description: "We produce high-quality implant components using investment...",
  },
  {
    image: "/medical/ohst/services/services2.png",
    title: (
      <>
        Contract Manufacturing for Implants
        <br />
        and Instruments
      </>
    ),
    description: "Precision, quality, and innovation define our contract manufacturing for...",
  },
  {
    image: "/medical/ohst/services/services3.png",
    title: (
      <>
        Clean Room Packaging & Sterilisation
        <br />
        to the Highest Standards
      </>
    ),
    description: "Beyond manufacturing your medical devices, we provide validated...",
  },
  {
    image: "/medical/ohst/services/services4.png",
    title: <>Design and Development</>,
    description: "For more than three decades, we have been developing implants...",
  },
  {
    image: "/medical/ohst/services/services5.png",
    title: (
      <>
        Surface Treatment &
        <br />
        Coating
      </>
    ),
    description: "We apply advanced surface treatments and coatings to enhance implant performance...",
  },
];

export default function QualityAssuranceSection() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setVisibleCount(1);
      } else if (w < 1024) {
        setVisibleCount(2);
      } else if (w < 1600) {
        setVisibleCount(4);
      } else if (w < 2560) {
        setVisibleCount(4);
      } else {
        setVisibleCount(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, services.length - visibleCount);
  const activeIndex = Math.min(current, maxIndex);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  const visibleServices = services.slice(activeIndex, activeIndex + visibleCount);

  return (
    <section className="w-full bg-[#E4FFFD] py-24 font-outfit">
      {/* Container (prevents ultrawide stretching) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center" data-aos="fade-up">
          <Typography
            variant="h2"
            as="h2"
            color="text-[#099F94]"
            weight="bold"
            className="text-[26px] sm:text-[34px] md:text-[38px] 2xl:text-[44px] leading-tight"
          >
            Our Services
          </Typography>
          <Typography
            variant="body"
            color="text-[#555555]"
            className="mt-4 max-w-[1240px] mx-auto leading-[28px] text-[14px] sm:text-[15px] lg:text-base 2xl:text-[17px]"
          >
            In orthopaedic implants, technology alone isn't enough — trust, responsibility, and
            uncompromising precision make the difference. At OHST Medizintechnik AG, we partner with
            you from the first concept to the finished Class I–III medical device, ready for use in
            the operating room.
          </Typography>
        </div>

        {/* Divider */}
        <hr className="border-gray-200/40 my-8" />


        {/* Cards Grid */}
        <div className="mt-14 grid gap-6 xl:gap-7 2k:gap-8 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2k:grid-cols-4 3xl:grid-cols-4">
          {visibleServices.map((service, i) => (
            <div
              key={`${activeIndex}-${i}`}
              data-aos="zoom-in-up"
              data-aos-duration="600"
              data-aos-delay={i * 120}
              data-aos-once="true"
              data-aos-easing="ease-out-cubic"
              className="bg-white flex flex-col border border-gray-100/40 w-full max-w-[370px] 2xl:max-w-[420px] h-auto xl:h-[500px] 2xl:h-[600px] max-2xl:h-auto px-[25px] 2xl:px-[30px] pt-[24px] 2xl:pt-[30px] pb-[56px] 2xl:pb-[64px] max-xl:pb-[70px] transition-all duration-300 hover:scale-[1.02] relative mx-auto"
              style={{
                borderRadius: "100px 0px 100px 0px",
                boxShadow: "0px 3px 8px 0px rgba(0, 0, 0, 0.24)", // #0000003D
              }}
            >
              {/* Image Container with precise width/height from requirement */}
              <div
                className="relative w-full max-w-[320px] aspect-[320/270] border border-[#00000024] overflow-hidden bg-white flex-shrink-0 mx-auto"
                style={{
                  borderRadius: "70px 0px 70px 0px",
                }}
              >
                <Image
                  src={service.image}
                  alt="Service Image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority={activeIndex + i < 2}
                />
              </div>

              {/* Text content area */}
              <div className="pt-5 flex flex-col flex-grow justify-between overflow-hidden">
                <div>
                  <Typography
                    variant="h4"
                    weight="bold"
                    color="text-[#222222]"
                    className="font-outfit text-[15px] sm:text-[16px] xl:text-[17px] 2xl:text-[18px] leading-[1.3] h-[2.6em] overflow-hidden line-clamp-2"
                  >
                    {service.title}
                  </Typography>

                  <hr className="border-gray-200 my-2.5" />

                  <Typography
                    variant="h5"
                   
                    color="text-[#666666]"
                    className="mt-1 text-[10px] sm:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[1.3] h-[2.6em] overflow-hidden line-clamp-2"
                  >
                    {service.description}
                  </Typography>
                </div>

                {/* Learn More link in dark blue (#133167) */}
                <div className="mt-1">
                  <a
                    href="#"
                    className="text-[#133167] font-bold text-[14px] hover:underline"
                  >
                    Learn More &gt;&gt;
                  </a>
                </div>
              </div>

              {/* View Testimonial bottom-left aligned button */}
              <button
                className="absolute bottom-0 left-0 bg-[#099F94] hover:bg-[#07877e] text-white text-sm font-semibold flex items-center justify-start transition-colors duration-200 cursor-pointer"
                style={{
                  width: "273px",
                  height: "39px",
                  opacity: 1,
                  borderBottomRightRadius: "57px",
                  borderBottomLeftRadius: "0px",
                }}
                onClick={() => { }}
              >
                <span className="pl-6 w-full text-left font-bold">
                  View Testimonial
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-[#099F94] text-[#099F94] disabled:opacity-30 hover:bg-[#099F94] hover:text-white transition-all cursor-pointer"
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
          </button>

          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${i === activeIndex ? "bg-[#099F94] scale-125" : "bg-[#099F94]/30"
                }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}

          <button
            onClick={next}
            disabled={activeIndex === maxIndex}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-[#099F94] text-[#099F94] disabled:opacity-30 hover:bg-[#099F94] hover:text-white transition-all cursor-pointer"
            aria-label="Next page"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div >
    </section >
  );
}