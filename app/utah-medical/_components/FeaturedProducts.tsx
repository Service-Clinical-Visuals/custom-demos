"use client";

import { Check, CheckCircle, Circle } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";

export default function FeaturedProducts() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const points = [
    "A microprocessor and specialized electronics continuously monitor the output, adjusting it to remain at the ideal level for smooth, char-free cutting.",
    "The microprocessor compares the output to mathematically-defined reference curves, and further adjusts the output as necessary to ensure that safe output levels are maintained.",
    "In the event that output cannot be adjusted to satisfy the reference curves, output is disabled and an error is indicated.",
  ];

  return (
    <section className="bg-[#f9f9f9] py-10 md:py-20 px-4 md:px-10 lg:px-4">
      <div className="max-w-400 mx-auto">

        {/* TITLE */}
        {/* <h2
          className="text-center text-[30px] md:text-[24px] font-semibold text-gray-800 mb-12"
          data-aos="fade-up"
        >
          Featured Products
        </h2> */}

        <h2 className="text-[20px] md:text-[30px] text-center font-semibold text-gray-800 mb-20">
                      Featured Products
        </h2>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Finesse®+ Electrosurgical Generators
            </h3>

            <p className="text-base text-gray-600 mb-4 leading-relaxed">
              Finesse®+ Electrosurgical Generators are the only systems with integrated smoke evacuation. Their unique electronic design improves results for office-based procedures of gynecologists and other medical specialties.
            </p>

            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              The Finesse+ and Finesse II+ Electrosurgical Generator and Smoke Evacuation Systems are designed to meet the highest performance and safety standards currently required for electrosurgery.
            </p>

            {/* BULLETS */}
            <div className="space-y-3 mb-6">
              {points.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#336699] flex items-center justify-center mt-1 px-1">
                    <Check size={12} className="text-white" />
                  </div>
                  <p className="text-base text-gray-600">{item}</p>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <button className="bg-[#2F6A9F] text-white px-5 py-2 rounded-md text-sm hover:bg-[#2F6A9F] transition">
              View Details
            </button>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative w-full h-72 sm:h-96 md:h-120" data-aos="fade-left">

            {/* BLUE PANEL — behind, offset bottom-right */}
            <div className="absolute right-0 bottom-0 w-[42%] h-full rounded-2xl bg-[#3366a0]" />

            {/* VIDEO BOX — on top, offset top-left */}
            <div className="absolute right-8 top-6.5 w-[86%] h-[89%] rounded-xl z-10 overflow-hidden flex items-center justify-center bg-[repeating-conic-gradient(#d1d5db_0%_25%,#f3f4f6_0%_50%)] bg-[length:24px_24px]">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/utah-medical/assets/utah-360.mp4" type="video/mp4" />
              </video>
              <span className="relative z-10 text-gray-600 font-medium pointer-events-none select-none mix-blend-multiply">
                360 deg Video
              </span>
            </div>

          </div>

        </div>

        {/* BOTTOM CALLOUT */}
        <div
          className="mt-10 md:mt-16 flex justify-center"
          data-aos="fade-up"
        >
          <div className="bg-[#F1F1F1] rounded-2xl md:rounded-full px-6 md:px-10 py-3 text-sm text-gray-600 text-center">
            For more information, please contact us by{" "}
            <span className="text-[#2F6A9F] underline cursor-pointer">
              email
            </span>{" "}
            or call{" "}
            <span className="text-[#2F6A9F] underline">
              1-800-533-4984
            </span>{" "}
            |{" "}
            <span className="text-[#2F6A9F] underline">
              1-801-566-1200
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}