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
        Clean Room Packaging &amp; Sterilisation
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
        Surface Treatment &amp; Coating
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
      if (w < 768) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(4);
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
    <section className="w-full bg-[#E4FFFD] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center" data-aos="fade-up" data-aos-duration="600">
          <Typography variant="h1" weight="bold" className="text-[#099F94]">
            Our Services
          </Typography>
          <Typography
            variant="h4"
            weight="normal"
            className="mt-4 max-w-[960px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto text-[#555555] leading-relaxed"
          >
            In orthopaedic implants, technology alone isn&apos;t enough — trust, responsibility, and
            uncompromising precision make the difference. At OHST Medizintechnik AG, we partner with
            you from the first concept to the finished Class I–III medical device, ready for use in
            the operating room.
          </Typography>
        </div>

        {/* Divider */}
        <hr className="border-gray-500/20 my-8" data-aos="fade-up" data-aos-delay="50" data-aos-duration="400" />

        {/* Cards Grid */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7 justify-center">
          {visibleServices.map((service, i) => (
            <div
              key={`${activeIndex}-${i}`}
              data-aos="zoom-in-up"
              data-aos-duration="600"
              data-aos-delay={i * 120}
              data-aos-once="true"
              data-aos-easing="ease-out-cubic"
              className="relative bg-white flex p-3 xl:p-4 flex-col border border-gray-100/40 w-full max-w-[370px] mx-auto overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.24)]"
              style={{ borderRadius: "100px 0px 100px 0px" }}
            >
              {/* Image */}
              <div
                className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0"
                style={{ borderRadius: "100px 0px 0px 0px" }}
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

              {/* Text body */}
              <div className="px-5 pt-4 pb-14 flex flex-col flex-grow">
                {/* Title */}
                <div className=" min-h-[50px] xl:h-[52px]  2xl:h-[52px] xl:w-[900px] 2xl:w-[1000px] overflow-hidden flex-shrink-0">
                  <Typography variant="h4" weight="bold" className="text-[#222222] leading-snug ">
                    {service.title}
                  </Typography>
                </div>

                {/* Divider */}
                <hr className="border-gray-400/40 mt-3 mb-3 flex-shrink-0" />

                {/* Description */}
                <div className="h-[66px] overflow-hidden flex-shrink-0">
                  <Typography variant="h6" className="text-[#666666] leading-[22px] line-clamp-3">
                    {service.description}
                  </Typography>
                </div>

                {/* Learn More */}
                <div className="mt-3">
                  <a href="#" className="text-[#099F94]  font-bold text-md hover:underline transition-colors duration-150">
                    Learn More &gt;&gt;
                  </a>
                </div>
              </div>

              {/* View Testimonial button */}
              <button
                className="absolute bottom-0 left-0 h-[42px] w-[273px] bg-[#099F94] hover:bg-[#07877e] text-white text-sm font-bold text-left pl-6 transition-colors duration-200 cursor-pointer flex items-center"
                style={{ borderBottomRightRadius: "57px" }}
                onClick={() => { }}
              >
                View Testimonial
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex items-center justify-center gap-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="400">
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-[#099F94] text-[#099F94] disabled:opacity-30 hover:bg-[#099F94] hover:text-white transition-all duration-200 cursor-pointer"
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
          </button>

          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-200 cursor-pointer ${i === activeIndex
                ? "w-3 h-3 bg-[#099F94] scale-110"
                : "w-2.5 h-2.5 bg-[#099F94]/30 hover:bg-[#099F94]/60"
                }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}

          <button
            onClick={next}
            disabled={activeIndex === maxIndex}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-[#099F94] text-[#099F94] disabled:opacity-30 hover:bg-[#099F94] hover:text-white transition-all duration-200 cursor-pointer"
            aria-label="Next page"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
