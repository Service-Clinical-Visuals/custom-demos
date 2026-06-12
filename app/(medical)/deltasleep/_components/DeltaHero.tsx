"use client";

import "aos/dist/aos.css";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function DeltaHero() {


  return (
    <section className=" min-h-screen bg-[#dfe7e3] px-8 pt-5 pb-8">
      <div className="relative overflow-hidden rounded-[24px] w-full h-screen">
        {/* Future Video Support */}
        {/* Replace image with video anytime */}
        <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top Space */}
          <div />

          {/* Bottom Content */}
          <div className="flex justify-between items-end w-full px-12 pb-14">
            {/* Left Content */}
            <div
              data-aos="fade-up"
              className="max-w-[550px]"
            >
              <h1 className="text-white text-5xl font-semibold">
                Sleep Therapy.
                Simplified.
                Canadian
              </h1>

              <button className="cursor-pointer mt-8 bg-white text-[#00695f] px-7 py-4 rounded-xl text-[15px] font-bold hover:scale-105 transition duration-300">
                Explore Products
              </button>
            </div>

            {/* Right Content */}
            <div
              data-aos="fade-left"
              className="max-w-[280px] pb-4"
            >
              <p className="text-white text-[17px] leading-[1.6] font-light">
                Health Canada Licensed CPAP & AP AP technology engineered for
                silence, reliability, and real life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}