"use client";

import { ArrowUpRight } from "lucide-react";

export default function JlmAbout() {
  return (
    <section className="bg-[#ffff] py-20">
      <div
        className="
          mx-auto
          grid
          max-w-[1600px]
          grid-cols-1
          gap-10
          px-6
          lg:grid-cols-[55fr_45fr]
          lg:items-center
        "
      >
        {/* Image */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="overflow-hidden"
          style={{
            clipPath:
              "polygon(12% 0%,100% 0%,100% 100%,0% 100%,0% 14%)",
          }}
        >
          <img
            src="/jlm/jlm-about.png"
            alt=""
            className="
              h-auto
              w-full
              object-cover
            "
          />
        </div>

        {/* Content */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className=""
        >
          <h2
            className="
              text-4xl
              font-bold
              leading-tight
              text-[#2B2B2B]
            "
          >
            About Our Company
          </h2>

          <p
            className="
              mt-4
              text-[16px]
              leading-8
              text-[#5B5B5B]
            "
          >
            JLM Lubricants designs and crafts premium fuel
            additives and technical lubricants. Through our
            innovative Liquid Tools, we are dedicated to
            enhancing vehicle performance and pushing the
            boundaries of automotive care.
          </p>

          <div className="my-6 h-px bg-[#D8D8D8]" />

          <div>
            <h3
              className="
                text-xl
                font-semibold
                text-[#F4B400]
              "
            >
              Driven by passion and powered by progress
            </h3>

            <p
              className="
                mt-3
                text-[16px]
                leading-8
                text-[#5B5B5B]
              "
            >
             At JLM Lubricants, we live and breathe cars. Our passion fuels our relentless pursuit to keep them performing at their best, ensuring tomorrow outpaces today. 
            </p>
          </div>

          <div className="mt-8">
            <h3
              className="
                text-xl
                font-semibold
                text-[#F4B400]
              "
            >
              Made In The Netherlands
            </h3>

            <p
              className="
                mt-3
                text-[16px]
                leading-8
                text-[#5B5B5B]
              "
            >
              Rooted in Dutch values—honesty, precision, and reliability—our products reflect a tradition of excellence, blending cutting-edge technology with meticulous craftsmanship. We don’t settle for less; we raise the bar.
            </p>
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
            More About Us
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
                size={20}
                className="text-black"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}