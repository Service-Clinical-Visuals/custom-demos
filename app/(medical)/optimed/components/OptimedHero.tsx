"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import "aos/dist/aos.css";
export default function OptimedHero() {


  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Future Video Support */}
      {/* Replace image with video later */}

      <div className="absolute inset-0">
          <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-end">
        <div className="max-w-[1600px] mx-auto w-full px-10 pb-24">
          <div className="max-w-[520px]">
            
            <h1
              data-aos="fade-up"
              className="text-white text-4xl leading-[1.08] font-bold"
            >
              High Quality Products Driven By German Technology
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-white/90 text-[20px] mt-5"
            >
              Made for Quality of Life.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-8"
            >
              <button className="cursor-pointer group flex items-center overflow-hidden rounded-full bg-white hover:bg-[#f8f8f8] transition-all shadow-2xl">
                
                <span className="px-8 py-4 text-[15px] font-semibold text-black">
                  Explore More
                </span>

                <span className="w-[60px] h-[60px] bg-[#F59B52] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={2.2}
                    className="group-hover:translate-x-1 transition"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-6-6 6 6-6 6"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}