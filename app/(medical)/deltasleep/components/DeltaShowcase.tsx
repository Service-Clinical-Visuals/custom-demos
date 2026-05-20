"use client";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import "aos/dist/aos.css";

export default function DeltaShowcase() {

  return (
    <section className="relative overflow-hidden bg-[#006d63] py-8 lg:py-10">
      <div className="">
        {/* Main Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr_320px] gap-5 items-start">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-5">
            {/* Top Image */}
            <div
              data-aos="fade-right"
              className="relative h-[360px] overflow-hidden bg-[#2d8b82]"
            >
              <img
                src="/delta/delta-front-mask.png"
                alt="Front Mask"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
            </div>

            {/* Bottom Image */}
            <div
              data-aos="fade-right"
              data-aos-delay="120"
              className="relative h-[360px] overflow-hidden bg-[#2d8b82]"
            >
              <img
                src="/delta/delta-side-mask.png"
                alt="Side Mask"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="flex flex-col items-center px-4">
            {/* Header */}
            <div
              className="text-center max-w-[760px]"
              data-aos="fade-up"
            >
              {/* Label */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-[8px] h-[8px] rounded-full bg-white" />

                <p className="text-white/85 text-[16px] font-medium tracking-[-0.3px]">
                  Our Product
                </p>
              </div>

              {/* Heading */}
              <h2 className="text-white text-4xl leading-[1.04] tracking-[-2.6px] font-semibold">
                Full Face Mask FM-1
              </h2>

              {/* Description */}
              <p className="mt-3 text-white/90 text-[15px] lg:text-[16px] leading-[1.9] max-w-[700px] mx-auto">
                The FM-1 Full Face Mask is designed to provide optimal sealing
                and comfort for patients who require bi-level therapy or who
                primarily breathe through their mouth. Engineered with patient
                freedom in mind, the mask features a unique forehead-brace-free
                design, ensuring an unblocked and clear field of vision.
              </p>
            </div>

            {/* VIDEO SECTION */}
            <div
              data-aos="zoom-in"
              className="relative mt-10 w-full  rounded-[22px] overflow-hidden h-[500px]"
            >

                <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />

            </div>

            {/* CTA */}
            <div
              className="mt-10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <button className="cursor-pointer h-[52px] px-10 rounded-[6px] bg-white text-[#006d63] text-[15px] font-medium tracking-[-0.2px] transition-all duration-300 hover:scale-[1.03] hover:bg-[#f2f2f2]">
                View Product
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-5">
            {/* Top Image */}
            <div
              data-aos="fade-left"
              className="relative h-[360px] overflow-hidden bg-[#2d8b82]"
            >
              <img
                src="/delta/delta-mask-angle.png"
                alt="Mask Angle"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
            </div>

            {/* Bottom Image */}
            <div
              data-aos="fade-left"
              data-aos-delay="120"
              className="relative h-[360px] overflow-hidden bg-[#2d8b82]"
            >
              <img
                src="/delta/delta-mask-cleanup.png"
                alt="Mask Closeup"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
