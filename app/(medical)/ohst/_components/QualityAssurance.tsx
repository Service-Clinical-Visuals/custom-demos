"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    image: "/medical/ohst/services/services1.png",
    title: "Precision Investment Casting for Implants",
    description:
      "We produce high quality implant components using investment casting. Our facilities ensure dimensional accuracy and material integrity for every component.",
  },
  {
    image: "/medical/ohst/services/services2.png",
    title: "Contract Manufacturing for Implants and Instruments",
    description:
      "Precision, quality, and innovation define our contract manufacturing. We deliver custom implant and instrument solutions to medical device companies worldwide.",
  },
  {
    image: "/medical/ohst/services/services3.png",
    title: "Clean-Room Packaging & Sterilization to the Highest Standards",
    description:
      "Beyond manufacturing your medical devices, we provide complete clean-room packaging and sterilization services meeting the most stringent regulatory requirements.",
  },
  {
    image: "/medical/ohst/services/services4.png",
    title: "Design and Development",
    description:
      "For more than three decades, we have focused on the design and development of orthopedic solutions that improve patient outcomes and surgical efficiency.",
  },
  {
    image: "/medical/ohst/services/services5.png",
    title: "Surface Treatment & Coating",
    description:
      "We apply advanced surface treatments and coatings to enhance implant performance, biocompatibility, and longevity in demanding clinical environments.",
  },
];

export default function QualityAssuranceSection() {
  const [current, setCurrent] = useState(0);
  const visibleCount = 4;
  const maxIndex = services.length - visibleCount;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  const visibleServices = services.slice(current, current + visibleCount);

  return (
    <section className="py-24 bg-[#E0F5F4]">
      <div className="max-w-[1560px] 2xl:max-w-[80%] mx-auto px-6">

        {/* Header */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-[38px] font-bold text-[#099F94]">
            Our Services
          </h2>
          <p className="mt-4 text-[16px] leading-[28px] text-[#555555] max-w-[760px] mx-auto">
            It is at Rathenow's medical technology campus in Rathenow — trust, responsibility, and
            uncompromising precision make the difference. At OHST Medizintechnik AG, we partner with
            you from the first concept to the finished Class III medical device, ready for use in the
            operating room.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleServices.map((service, i) => (
            <div
              key={current + i}
              data-aos="zoom-in-up"
              data-aos-delay={i * 80}
              className="bg-white rounded-[20px] overflow-hidden shadow-md flex flex-col"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[16px] font-bold text-[#222222] leading-[22px]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[14px] text-[#666666] leading-[22px] flex-1">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <button className="h-[40px] px-5 rounded-full border border-[#099F94] text-[#099F94] font-semibold text-[14px] flex items-center gap-2 hover:bg-[#099F94] hover:text-white transition-all">
                    Learn More <ArrowRight size={15} />
                  </button>
                  <button className="h-[40px] px-5 rounded-full bg-[#099F94] text-white font-semibold text-[14px] flex items-center gap-2 hover:bg-[#07877e] transition-all">
                    View Testimonial <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots / Navigation */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-[#099F94] text-[#099F94] disabled:opacity-30 hover:bg-[#099F94] hover:text-white transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-[#099F94] scale-125" : "bg-[#099F94]/30"
              }`}
            />
          ))}
          <button
            onClick={next}
            disabled={current === maxIndex}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-[#099F94] text-[#099F94] disabled:opacity-30 hover:bg-[#099F94] hover:text-white transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
