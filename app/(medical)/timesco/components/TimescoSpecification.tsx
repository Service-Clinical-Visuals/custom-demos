"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

import "aos/dist/aos.css";

import { ArrowRight,  ChevronsRight } from "lucide-react";


const specifications = [
  "Convenient rechargeable battery to allow ongoing use, lasting for over 2 hours",
  "Crystal clear colour correct image quality with a 3.75” LCD high resolution screen. Resolution ratio: 800 x 480RGB",
  // "The screen rotates 180° from left to right and tilts 110° up and down. It also has a view angle of 160° making it convenient for teaching with multiple viewers",
];

export default function TimescoSpecification() {

  return (
    <section className="w-full bg-[#EDFFF1] py-24">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 px-8 lg:grid-cols-[1fr_1fr]">
        
        {/* LEFT VIDEO */}
        <div
          data-aos="fade-right"
          className="relative"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              bg-[#dedede]
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            "
          >
            {/* Future Video */}
            <div className="relative aspect-video w-full">
                <DynamicVideoPlayer 
                type="short-2"
                className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          data-aos="fade-left"
          className=""
        >
          <h2
            className="
              text-4xl
              font-semibold
              leading-[1.15]
              tracking-[-0.03em]
              text-[#0d4f20]
            "
          >
            Optima View Video Laryngoscope specifications
          </h2>

          <p
            className="
              mt-3
              text-[16px]
              leading-[2]
              text-[#5d5d5d]
            "
          >
            We believe that patient care is of the utmost importance,
            which is why we never compromise on quality, service,
            or specification. Our long-standing commitment to the
            medical community and our work to supply the NHS reflects
            our unwavering dedication to supporting healthcare
            professionals and patient care.
          </p>

          {/* SPEC LIST */}
          <div className="mt-4 space-y-3">
            {specifications.map((item, index) => (
              <div
                key={index}
                className="flex gap-2 items-start"
              >
                <ChevronsRight size={18} className="text-[#0a8d34] shrink-0 mt-2" />
                <p
                  className="
                    text-[16px]
                    leading-[2]
                    text-[#5a5a5a]
                  "
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            className="
              group
              mt-4
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-[#0a8d34]
              px-7
              py-4
              text-[15px]
              font-medium
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#08752b]
              cursor-pointer
            "
          >
            Browse Products

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
}