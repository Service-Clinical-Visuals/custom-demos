"use client";

import "aos/dist/aos.css";

export default function SharkAbout() {

  return (
    <section className="w-full bg-[#f3f3f3] py-24 overflow-hidden">
      <div className="max-w-380 mx-auto ">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div data-aos="fade-right" className="pt-2">
            <h2 className="text-[42px] leading-none font-black text-[#242424] tracking-[-1px]">
              About Us
            </h2>

            <div className="mt-8 space-y-7 font-body">
              <p className="text-[15px] leading-[1.95] text-[#666666] font-medium">
                <span className="font-bold text-[#2a2a2a]">
                  SharkEye Wheel Aligners UK Ltd
                </span>{" "}
                is the UK's leading supplier of wheel alignment equipment for
                cars, vans and trucks. We also export our products around the
                world, from Myanmar to Argentina and just about everywhere in
                between. Our laser-based wheel aligners are a standard in the UK
                automotive industry. Exceptionally high quality at affordable
                prices.
              </p>

              <p className="text-[15px] leading-[1.95] text-[#666666] font-medium">
                Misaligned wheels are a common problem often overlooked by
                motorists. Keeping your vehicle's wheels aligned can cut your
                fuel consumption by up to 8%, increase your tyres' longevity by
                up to 25% and cut greenhouse emissions. The SharkEye team prides
                itself on offering first-class customer care, support,
                trouble-shooting and training both direct to our customers and
                to our sales reps around the UK and the world.
              </p>
            </div>

            {/* BUTTON */}
            <button className="cursor-pointer group relative mt-10 h-[52px] px-9 bg-[#f0df32] text-black font-bold text-[14px] tracking-wide transition-all duration-300 hover:translate-x-1">
              Explore Products

              {/* ANGLED EDGE */}
              <span className="absolute top-0 right-[-18px] border-t-[26px] border-b-[26px] border-l-[18px] border-t-transparent border-b-transparent border-l-[#f0df32]" />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-aos="fade-left"
            className="relative w-full h-[520px] overflow-hidden"
          >
            <img src="/moto/shark/shark-about-1.png" alt="about1" className="absolute inset-0 w-full h-full object-cover" />

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-[#d9d9d9] my-20" />

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1fr] gap-16 items-center ">
          {/* LEFT BANNER */}
          <div
            data-aos="fade-up"
            className="relative h-[170px] overflow-hidden bg-[#ececec] border border-black/5"
          >
            <img src="/moto/shark/shark-about-2.png" alt="about1" className="absolute inset-0 w-full h-full object-cover" />

          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left">
            <p className="text-[16px] leading-[2] text-[#707070] font-medium max-w-[520px]">
              We understand the importance of staying up-to-date with the latest
              trends and technologies. That's why we are continually investing
              in research and development to ensure our products remain the very
              best on the market.
            </p>

            {/* BUTTON */}
            <button className="cursor-pointer group relative mt-10 h-[52px] px-10 bg-[#f0df32] text-black font-bold text-[14px] tracking-wide transition-all duration-300 hover:translate-x-1">
              Get in touch

              <span className="absolute top-0 right-[-18px] border-t-[26px] border-b-[26px] border-l-[18px] border-t-transparent border-b-transparent border-l-[#f0df32]" />
            </button>
          </div>
        </div>
    </section>
  );
}