"use client";

import { ArrowUpRight, Dot } from "lucide-react";
import CommaTrustBadges from "./CommaTrustBadges";

export default function CommaAbout() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto grid max-w-[1550px] grid-cols-1 gap-2 lg:grid-cols-[40fr_60fr] lg:items-center">

        {/* Text Content */}
        <div data-aos="fade-right" data-aos-duration="1000">
          <span className="content flex max-w-[160px] justify-center items-center rounded-full border bg-[#FD423926] border-[#FF4A43] px-4 py-1 text-[black] uppercase tracking-wider">
            <><Dot /> About us</>
          </span>

          <h2 className="mt-4 font-bold leading-tight heading text-[#1A1A1A]">
            The Brand Behind Every Journey
          </h2>

          <p className="content mt-2 leading-8 text-[#555]">
            At Comma, we understand that workshops have it tough. Any make and model of vehicle, any day of the week, plus constantly changing regulations and emerging technologies continue to make the job more complicated. For over half a century, we've been supporting mechanics with quality engine oils, lubricants and chemicals for passenger and commercial vehicles. We've made it our mission to help workshops run smoother. We do it by providing dependable products, tools and training that help them get the job done right — first time, every time.
          </p>

          <p className="mt-2 leading-8 text-[#555]">
            We work side by side with workshops to produce high-quality engine oils, lubricants and chemicals for passenger cars and commercial vehicles. Our solutions are OEM approved and specially formulated to help workshops run smoother and your business achieve its full potential.
          </p>

          <button
            className="
              mt-6
              bg-[#FF4A43]
              px-12
              py-2
              text-[22px]
              font-semibold
              uppercase
              text-white
              transition-all
              duration-300
              hover:brightness-110
            "
            style={{
              clipPath: "polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%)",
              letterSpacing: "0.5px",
            }}
          >
            Learn More About Us
          </button>
        </div>

        {/* Image placeholder */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="relative aspect-[4/3] w-full overflow-hidden flex items-center justify-center"
        >

                <img
                  src="/comma/about_us.png"
                  alt="wheel-icon"
                  className="w-auto object-cover"
                />

        </div>
      </div>

      <CommaTrustBadges />
      
    </section>
  );
}
