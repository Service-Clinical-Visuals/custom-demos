// app/components/OEMFluidTechnology.tsx

"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

const cards = [
  {
    title: "Custom Fluid Manifolds",
    desc: "Our OEM Fluid Technology Division delivers custom fluid manifold solutions tailored to your specific needs.",
    image: "/ae/ae-tech-1.png",
    content: "Custom Manifolds"
  },
  {
    title: "Chassis Plates",
    desc: "AEG specialise in designing and manufacturing pneumatic and fluid control chassis assemblies that are fully integrated into your device.",
    image: "/ae/ae-tech-2.png",
    content: "Chassis Assembly"
  },
  {
    title: "Fluid Control Panels",
    desc: "Expertise in designing and manufacturing pneumatic and fluid control panels tailored to meet the unique needs of OEMs.",
    image: "/ae/ae-tech-3.png",
    content: "Fluid Control Panels"
  },
  {
    title: "Additive Manufacturing",
    desc: "Advanced additive manufacturing technologies, including FDM and SLA, to create high-precision, scalable solutions for OEMs.",
    image: "/ae/ae-tech-4.png",
    content: "Additive Solutions"
  },
  {
    title: "Subtractive Manufacturing",
    desc: "Our subtractive manufacturing services deliver precision-engineered custom components using advanced CNC machining techniques.",
    image: "/ae/ae-tech-5.png",
    content: "Subtractive Solutions"
  },
  {
    title : "Injection Moulding",
    desc: "Precision injection moulding services for custom components, supporting both low and high-volume production with quality results.",
    image: "/ae/ae-tech-6.png",
    content: "Moulding Solutions"
  }
];

export default function AirTechnology() {
  const [activeDot, setActiveDot] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goToPage = (page: number) => {
    if (!trackRef.current) return;
    setActiveDot(page);
    const track = trackRef.current;
    track.scrollTo({
      left: page === 0 ? 0 : track.scrollWidth - track.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#02A6DC]
        to-[#005E82]
        py-[90px]
      "
    >
      {/* =====================================
          BACKGROUND OVERLAY
      ===================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* =====================================
          CONTENT CONTAINER
      ===================================== */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-6">
        {/* =====================================
            TOP CONTENT
        ===================================== */}

        <div
          data-aos="fade-up"
          className="mx-auto max-w-[860px] text-center"
        >
          <span
            className="
              text-[16px]
              font-semibold
              tracking-[0.2px]
              text-white
            "
          >
            OEM Fluid Technology Division
          </span>

          <h2
            className="
              mt-5
              text-[36px]
              font-bold
              leading-[1.35]
              tracking-[-0.6px]
              text-white
              md:text-[36px]
            "
          >
            In AEG, You Have a True End-To-End fluid
            technology Partner
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-[860px]
              text-[16px]
              leading-[2]
              text-white/90
            "
          >
            Our OEM Fluid Technology Division specialises in providing
            innovative, custom fluid manifold solutions tailored to meet your
            specific needs. Whether you require precision for medical devices,
            reliability in analytical equipment, or durability in automotive
            vehicles, our custom fluid manifolds deliver seamless integration
            and superior performance.
          </p>
        </div>

        {/* =====================================
            CARDS GRID
        ===================================== */}

        <div
          ref={trackRef}
          className="
            mt-[70px]
            flex
            gap-6
            overflow-x-auto
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {cards.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="
                flex-shrink-0
                w-[280px]
                md:w-[calc(50%-12px)]
                xl:w-[calc(25%-18px)]
                cursor-pointer
                group
                overflow-hidden
                bg-[#f5f5f5]
                shadow-[0_8px_24px_rgba(0,0,0,0.12)]
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >
              {/* IMAGE */}
              <div className="relative h-[230px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    grayscale
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col px-6 py-5">
                <h3
                  className="
                    text-xl
                    font-bold
                    leading-tight
                    text-[#2a2a2a]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    min-h-[96px]
                    text-[16px]
                    leading-[1.9]
                    text-[#707070]
                  "
                >
                  {item.desc}
                </p>

                {/* DIVIDER */}
                <div className="mt-6 h-[1px] w-full bg-[#d7d7d7]" />

                {/* CTA */}
                <div className="mt-5 flex items-center justify-between">
                  <button
                    className="
                      cursor-pointer
                      text-[16px]
                      font-semibold
                      text-[#222]
                      transition
                      hover:text-[#00A7DE]
                    "
                  >
                   {item.content}
                  </button>

                  <button
                    className="
                      cursor-pointer
                      flex
                      h-[34px]
                      w-[34px]
                      items-center
                      justify-center
                      bg-[#EF3B2D]
                      text-white
                      transition-all
                      duration-300
                      hover:scale-110
                      hover:bg-[#d92f22]
                    "
                  >
                    <ArrowRight size={17} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================
            SLIDER INDICATOR
        ===================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="450"
          className="mt-[60px] flex justify-center gap-2"
        >
          <div
            onClick={() => goToPage(0)}
            className={`h-[8px] w-[70px] skew-x-[-35deg] cursor-pointer transition-colors duration-300 ${activeDot === 0 ? "bg-[#9CCB3B]" : "bg-[#d9d9d9]"}`}
          />

          <div
            onClick={() => goToPage(1)}
            className={`h-[8px] w-[70px] skew-x-[-35deg] cursor-pointer transition-colors duration-300 ${activeDot === 1 ? "bg-[#9CCB3B]" : "bg-[#d9d9d9]"}`}
          />
        </div>
      </div>
    </section>
  );
}