"use client";

import { ArrowRight } from "lucide-react";

import "aos/dist/aos.css";


export default function TimescoAbout() {


  return (
    <section className="w-full bg-[#f4f4f4] py-24">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2 ">
        
        {/* LEFT CONTENT */}
        <div
          data-aos="fade-right"
          className=""
        >
          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-[#004510]">
            Learn About Us
          </h2>

          <div className="mt-4 space-y-3 text-[#36454F] text-[16px]">
            <p className="leading-[2]">
              Since 1964, Timesco™ has been a trusted manufacturer and
              distributor of high quality medical supplies for healthcare
              professionals around the globe. With over 50 years of
              experience, we have established ourselves as a leading supplier
              to the NHS and private sectors.
            </p>

            <p className="leading-[2]">
              At Timesco™, we take pride in our dedication to providing
              exceptional quality instruments and services to our customers.
              Our commitment to quality and service is unparalleled,
              ensuring that our customers receive the best possible
              experience from start to finish.
            </p>

            <p className="leading-[2]">
              We control every aspect of our product and service offering,
              from manufacturing to delivery, to ensure that our customers
              receive the highest quality products and support.
            </p>
          </div>

          <button
            className="
              cursor-pointer
              group
              mt-5
              inline-flex
              items-center
              gap-3
              rounded-md
              bg-[#008c3a]
              px-7
              py-4
              text-[15px]
              font-medium
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#007732]
            "
          >
            Inside Our Company

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="fade-left"
          className="relative"
        >
          <div
            className="
              overflow-hidden
              rounded-[26px]
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            "
          >
            <img
              src="/timesco/timesco-about.png"
              alt="Warehouse"
              className="
                h-auto
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}