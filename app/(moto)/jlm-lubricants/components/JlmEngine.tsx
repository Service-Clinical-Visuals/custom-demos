"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowUpRight, LifeBuoy } from "lucide-react";

export default function JlmEngine() {
  return (
    <>
      <section className="bg-[#F4F4F4] py-20">
        <div
          className="
            mx-auto
            grid
            max-w-[1600px]
            items-center
            gap-10
            px-6
            lg:grid-cols-[55fr_45fr]
          "
        >
          {/* VIDEO */}
          <div
            data-aos="fade-right"
            className="
              relative
              aspect-video
              overflow-hidden
              bg-[#ECECEC]
              rounded-xl
            "
          >
            <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
          </div>

          {/* CONTENT */}
          <div
            data-aos="fade-left"
            className=""
          >
            <h2
              className="
                text-4xl
                font-bold
                leading-tight
                text-[#20252D]
              "
            >
              Exceptional Engine Protection
            </h2>

            <p
              className="
                mt-4
                text-[16px]
                leading-8
                text-[#555]
              "
            >
             JLM Premium Grade Performance Oil adheres to moving parts with a stable, high-viscosity film that minimises wear and prevents direct metal-to-metal contact. This protective layer not only enhances durability but also helps the engine run more efficiently, even under extreme conditions.
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3 items-start">
               <span>
                <img
                  src="/jlm/jlm-wheel.png"
                  alt="wheel-icon"
                  className="h-auto w-8 shrink-0"
                />
               </span>

                <p className="text-[16px] leading-7 text-black">
                  <strong>Low Fuel Consumption:</strong>
                  Enhanced lubrication reduces internal friction, ensuring smoother operation and better fuel efficiency.
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span>
                  <img
                    src="/jlm/jlm-wheel.png"
                    alt="bolt-icon"
                    className="h-auto w-10 shrink-0"
                  />
                </span>

                <p className="text-[16px] leading-7 text-black">
                  <strong>Low Ash Content:</strong>
                   Suitable for vehicles with Diesel Particulate Filters (DPFs), reducing emissions and improving compliance with environmental standards.
                </p>
              </div>
            </div>

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
                text-base
                text-white
                transition-all
                duration-300
                hover:scale-105
                font-medium
              "
            >
              View Product

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
                  size={15}
                  className="text-black"
                />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* BLACK CTA SECTION */}

      <section className="border-y border-white bg-black py-20">
        <div
          data-aos="fade-up"
          className="
            mx-auto
            max-w-[1100px]
            px-6
            text-center
          "
        >
          <h3
            className="
              text-[30px]
              font-semibold
              leading-relaxed
              text-white
            "
          >
            The oil’s superior thermal stability and cooling properties ensure the engine operates optimally at high temperatures, while its moisture and foam-resistant additives maintain reliability in all climates.
          </h3>

          <button
            className="
              cursor-pointer
              mx-auto
              mt-8
              flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-5
              py-2.5
              text-base
              text-black
              transition-all
              duration-300
              hover:scale-105
              font-medium
            "
          >
            Get Quote

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#F4B400]
              "
            >
              <ArrowUpRight
                size={20}
                className="text-white"
              />
            </span>
          </button>
        </div>
      </section>
    </>
  );
}