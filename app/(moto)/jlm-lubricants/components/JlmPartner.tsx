"use client";

import { ArrowUpRight } from "lucide-react";

export default function JlmPartner() {
  return (
    <section className="bg-[#F4F4F4] py-20">
      <div className="mx-auto max-w-[1600px] px-6">

        {/* BLOCK 01 */}

        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-[52fr_48fr]
          "
        >
          {/* TEXT */}

          <div
            data-aos="fade-right"
            className=""
          >
            <h2
              className="
                text-4xl
                font-bold
                text-[#20252D]
              "
            >
              Partnerships
            </h2>

            <p
              className="
                mt-5
                text-[16px]
                leading-8
                text-[#555]
              "
            >
              JLM Premium Grade Performance Oil adheres to moving parts with a stable, high-viscosity film that minimises wear and prevents direct metal-to-metal contact. This protective layer not only enhances durability but also helps the engine run more efficiently, even under extreme conditions.
            </p>

            <p
              className="
                mt-5
                text-[16px]
                leading-8
                text-[#555]
              "
            >
              At JLM Lubricants, we believe that strong partnerships drive success. We collaborate with our partners to showcase the beauty of roaring engines, share our passion for automotive excellence, and enrich the world with the power of Liquid Tools.
            </p>

            <button
              className="
                cursor-pointer
                mt-8
                flex
                items-center
                gap-3
                rounded-full
                bg-[#F4B400]
                px-5
                py-2.5
                text-[16px]
                text-white
                transition-all
                duration-300
                hover:scale-105
                font-medium
              "
            >
             Read More
              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                "
              >
                <ArrowUpRight
                  size={20 }
                  className="text-black"
                />
              </span>
            </button>
          </div>

          {/* IMAGE */}

          <div
            data-aos="fade-left"
            className="overflow-hidden"
          >
            <img
              src="/jlm/jlm-partner-1.png"
              alt=""
              className="
                h-full
                w-full
                object-cover
                transition-all
                duration-700
                hover:scale-105
              "
            />
          </div>
        </div>

        {/* DIVIDER */}

        <div className="my-14 h-px bg-[#D9D9D9]" />

        {/* BLOCK 02 */}

        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-[48fr_52fr]
          "
        >
          {/* IMAGE */}

          <div
            data-aos="fade-right"
            className="overflow-hidden"
          >
            <img
              src="/jlm/jlm-partner-2.png"
              alt=""
              className="
                h-full
                w-full
                object-cover
                transition-all
                duration-700
                hover:scale-105
              "
            />
          </div>

          {/* TEXT */}

          <div
            data-aos="fade-left"
            className=""
          >
            <h2
              className="
                text-4xl
                font-bold
                text-[#20252D]
              "
            >
              Premium Products
            </h2>

            <p
              className="
                mt-5
                text-[16px]
                leading-8
                text-[#555]
              "
            >
              At JLM Lubricants, we craft innovative, premium lubricants and fuel additives in the Netherlands. Our trade-trusted products are built on three core principles:
            </p>

            <div className="mt-6 space-y-6">
              <div className="flex gap-4">

                <img
                  src="/jlm/jlm-wheel.png"
                  alt="wheel-icon"
                  className="h-8 w-8 shrink-0 object-contain"
                />

                <div>
                  <h4 className="font-semibold text-black">
                    Optimal Performance and Reliability
                  </h4>

                  <p className="mt-2 text-[16px] leading-7 text-[#555]">
                    From high-quality lubricants to advanced fuel additives, JLM products are designed to maximise car performance and prolong the lifespan of vital components. Our solutions ensure reliable results for professional mechanics and vehicle owners alike.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <img
                  src="/jlm/jlm-wheel.png"
                  alt="wheel-icon"
                  className="h-8 w-8 shrink-0 object-contain"
                />

                <div>
                  <h4 className="font-semibold text-black">
                    Customer Satisfaction and Trust
                  </h4>

                  <p className="mt-2 text-[16px] leading-7 text-[#555]">
                    As a trade-trusted brand, JLM incorporates customer feedback to create products that meet the highest standards. Mechanics rely on our premium lubricants and fuel additives to deliver outstanding service, ensuring happier, more loyal customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}