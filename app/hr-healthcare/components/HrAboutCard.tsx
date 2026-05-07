// components/HrAboutCard.tsx

"use client";

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

const infoCards = [
  {
    id: 1,
    title: "Corporate Functions",
    img: "/hr-healthcare/hr-card-3.png",
    description:
      "The corporate functions group provides centralized, shared services in Human Resources, IT, Business Intelligence, and Accounting across the company, playing vital role in supporting operational performance and strategic initiatives.",
  },
  {
    id: 2,
    title: "Manufacturing and Operations",
    img: "/hr-healthcare/hr-card-4.png",
    description:
      "Our 100,000 square foot Concord facility, located in York, Pennsylvania, is home to our manufacturing and operations. The facility supports compounding, production, quality and regulatory, engineering, warehouse distribution, and supply chain.",
  },
];

export default function HrAboutCard() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F4F4F4] py-16 lg:py-20">
      {/* MAIN CONTAINER */}
      <div className="mx-auto max-w-380 px-6">
        <div className="grid items-start gap-6 lg:grid-cols-[380px_295px_1fr] xl:gap-5">
          {/* LEFT LARGE IMAGE */}
          <div
            data-aos="fade-right"
            className="relative h-[485px] overflow-hidden rounded-[6px]"
          >
            <img
              src="/hr-healthcare/hr-card-1.png"
              alt="building"
              className="h-full w-full object-cover"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-[#08264B]/35" />
          </div>

          {/* CENTER IMAGE */}
          <div
            data-aos="fade-up"
            data-aos-delay="120"
            className="relative mt-4 h-full overflow-hidden rounded-[6px] lg:mt-4"
          >
            <img
              src="/hr-healthcare/hr-card-2.png"
              alt="worker"
              className="h-full w-full object-cover"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-[#041C3A]/22" />
          </div>

          {/* RIGHT CONTENT */}
          <div
            data-aos="fade-left"
            data-aos-delay="180"
            className="pt-1"
          >
            {/* TITLE */}
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-1.6px] text-[#0D1B2D]">
              About HR Healthcare
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-[560px] text-base leading-[2] text-[#6B6B6B]">
              HR HealthCare is a professionally managed, family-owned company
              headquartered in York, PA, that specializes in the development,
              manufacture, and supply of healthcare products with integrated
              technology and support services to meet diverse healthcare needs.
            </p>

            {/* INFO CARDS */}
            <div className="mt-6 space-y-4">
              {infoCards.map((card, index) => (
                <div
                  key={card.id}
                  data-aos="fade-up"
                  data-aos-delay={250 + index * 100}
                  className="group flex rounded-[8px] bg-[#ECECEC] p-[10px] transition-all duration-300 hover:bg-[#E6E6E6]"
                >
                  {/* SMALL IMAGE */}
                  <div className="relative w-[92px] flex-shrink-0 self-stretch overflow-hidden rounded-[8px]">
                    <img
                      src={card.img}
                      alt="small"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-[#08264B]/10" />
                  </div>

                  {/* TEXT */}
                  <div className="flex flex-1 flex-col pl-4 pt-[2px]">
                    <h3 className="text-[17px] font-medium leading-[1.3] text-[#17212F]">
                      {card.title}
                    </h3>

                    <p className="mt-[6px] text-base leading-[1.6] text-[#6D6D6D]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div
              data-aos="fade-up"
              data-aos-delay="450"
              className="mt-8"
            >
              <button className="flex h-[46px] w-[142px] items-center justify-center rounded-full bg-[#041A34] text-[14px] font-medium text-white transition-all duration-300 hover:translate-y-[-2px] hover:bg-[#062448]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}