"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function JlmPremium() {
  return (
    <section className="bg-[#F4F4F4] py-20">
      <div className="mx-auto max-w-[1600px] px-6">
        {/* Heading */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mx-auto max-w-[900px]"
        >
          <h2
            className="
              text-4xl
              text-center
              font-bold
              leading-tight
              text-[#20252D]
            "
          >
            JLM 5W30 Premium Grade
            Performance Oil
          </h2>

          <p
            className="
              mx-auto
              mt-5
              text-[16px]
              leading-8
              text-[#5A5A5A]
              text-center
            "
          >
           Specially formulated for modern downsized petrol and diesel engines, JLM Premium Grade 5W30 Performance Oil combines superior protection, efficiency, and performance. Designed to meet the demanding requirements of today’s powerful yet compact engines, this fully synthetic oil delivers exceptional wear resistance and fuel economy.
          </p>
        </div>

        {/* Viewer */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mt-12 flex justify-center"
        >
          <div
            className="
              relative
              w-full
              h-[700px]
              overflow-hidden
              rounded-xl
              bg-[#ECECEC]
            "
          >
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}