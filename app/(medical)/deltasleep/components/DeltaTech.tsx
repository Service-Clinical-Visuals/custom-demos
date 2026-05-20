"use client";

import "aos/dist/aos.css";

const features = [
  "Smart Start/Stop",
  "Heated Tubing Support",
  "Water Level Monitoring",
  "Auto-Off Screen",
  "Auto Leak Compensation",
  "QR Code Data Scan",
  "Heated Tubing Support",
  "Exhale Sensitivity",
];

export default function DeltaTech() {

  return (
    <section className="relative overflow-hidden bg-[#dfe7e3] py-24 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* Top Header */}
        <div
          className="text-center max-w-[900px] mx-auto"
          data-aos="fade-up"
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-[8px] h-[8px] rounded-full bg-[#00695f]" />

            <p className="text-[16px] font-medium text-[#8c8c8c] tracking-[-0.2px]">
              Next-Gen Solutions
            </p>
          </div>

          {/* Title */}
          <h2 className="text-[#232323] text-4xl font-semibold leading-[1.08] tracking-[-2.6px]">
            Next-Generation Sleep Therapy System
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="mt-20 grid grid-cols-1 xl:grid-cols-[360px_1fr_360px] gap-5 items-start">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">
            {/* Noise Card */}
            <div
              data-aos="fade-right"
              className="bg-[#d3e1dd] rounded-[18px] p-8 min-h-[290px] flex flex-col justify-between"
            >
              <h3 className="text-[#00695f] text-[24px] font-semibold tracking-[-2px] leading-none">
                ≤26.0db
              </h3>

              <p className="text-[#303030] text-[16px] leading-[1.85] max-w-[290px]">
                Operating noise level at 10 hPa. Engineered with
                high-performance fans to be quieter than a whisper, minimizing
                disturbance for you and your bed partner.
              </p>
            </div>

            {/* Weight Card */}
            <div
              data-aos="fade-right"
              data-aos-delay="120"
              className="bg-[#006f67] rounded-[18px] p-8 min-h-[220px] text-white flex flex-col justify-between"
            >
              <h3 className="text-[24px] font-semibold tracking-[-2px] leading-none">
                1.65kg
              </h3>

              <p className="text-[16px] leading-[1.9] text-white/95 max-w-[300px]">
                Licensed by Health Canada. Assembled in Ontario. We combined
                hospital-grade precision with a direct-to-you model that
                respects your time, your wallet, and your health
              </p>
            </div>

            {/* Bottom Image Card */}
            <div
              data-aos="fade-up"
              className="relative overflow-hidden rounded-[18px] h-[230px]"
            >
              <img
                src="/delta/delta-tech-1.png"
                alt="Comfort Device"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-5 left-5">
                <p className="text-white text-[18px] font-medium tracking-[-0.4px]">
                  Engineered for comfort.
                </p>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="flex flex-col gap-5">
            {/* Main Hero Card */}
            <div
              data-aos="zoom-in"
              className="bg-[#006f67] rounded-[20px] px-10 pt-10 relative overflow-hidden flex flex-col"
            >
              {/* Heading */}
              <h3 className="text-white text-center text-3xl font-semibold tracking-[-2.8px] leading-[1.08] max-w-[700px] mx-auto">
                NOTTE Series Technical Performance Overview
              </h3>

              {/* Device Image */}
              <div className="relative flex-1 flex items-center justify-center">
                <img
                  src="/delta/delta-tech-2.png"
                  alt="NOTTE Device"
                  className="w-[80%] max-w-[660px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)]"
                />
              </div>

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
            </div>

            {/* Bottom Feature Pills */}
            <div
              data-aos="fade-up"
              className="bg-[#dce7e3] rounded-[16px] p-4 shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#006f67] h-[58px] rounded-[4px] flex items-center justify-center px-4 text-center"
                  >
                    <p className="text-white text-[14px] lg:text-[15px] font-semibold tracking-[-0.2px] leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            data-aos="fade-left"
            className="bg-[#d3e1dd] rounded-[18px] p-7 min-h-[640px] flex flex-col"
          >
            {/* Heading */}
            <h3 className="text-[#232323] text-[24px] font-semibold tracking-[-2px] leading-[1.05]">
              Adaptive Airway Algorithms.
            </h3>

            {/* Image Container */}
            <div className="relative mt-7 rounded-[14px] overflow-hidden bg-[#efefef] h-[380px] flex items-center justify-center">
              <img
                src="/delta/delta-tech-3.png"
                alt="Mask Device"
                className="w-[78%] object-contain"
              />

              {/* Soft Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
            </div>

            {/* Description */}
            <p className="mt-6 text-[#3d3d3d] text-[15px] leading-[1.85]">
              Automatically maintain constant warmth and moisture to prevent
              dry throat and congestion, without you touching a settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}