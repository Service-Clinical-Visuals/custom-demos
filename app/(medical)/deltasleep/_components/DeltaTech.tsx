"use client";

import "aos/dist/aos.css";

const features = [
  "Smart Start/Stop",
  "Heated Tubing Support",
  "Water Level Monitoring",
  "Auto-Off Screen",
  "Auto Leak Compensation",
  "QR Code Data Scan",
  "Exhale Sensitivity",
  "Auto Leak Compensation",
  "Smart Start/Stop",
  "Heated Tubing Support",
  "Water Level Monitoring",
  "Auto-Off Screen",
];

export default function DeltaTech() {
  return (
    <section className="relative overflow-hidden bg-[#dfe7e3] py-24 lg:py-28">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 35s linear infinite;
          width: max-content;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* Top Header */}
        <div className="text-center max-w-[900px] mx-auto" data-aos="fade-up">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-[8px] h-[8px] rounded-full bg-[#00695f]" />
            <p className="text-[16px] font-medium text-[#8c8c8c]  ">
              Next-Gen Solutions
            </p>
          </div>
          <h2 className="text-[#232323] text-4xl font-semibold leading-[1.08]">
            Next-Generation Sleep Therapy System
          </h2>
        </div>

        {/* Main Grid: Left stats | Center+Right 2-col subgrid */}
        <div className="mt-20 grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-5 items-start">
          {/* LEFT COLUMN — stat cards only */}
          <div className="flex flex-col gap-5">
            {/* Noise Card */}
            <div
              data-aos="fade-right"
              className="bg-[#d3e1dd] rounded-[18px] p-8 min-h-[290px] flex flex-col justify-between"
            >
              <h3 className="text-[#00695f] text-[24px] font-semibold   leading-none">
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
              <h3 className="text-[24px] font-semibold   leading-none">
                1.65kg
              </h3>
              <p className="text-[16px] leading-[1.9] text-white/95 max-w-[300px]">
                Licensed by Health Canada. Assembled in Ontario. We combined
                hospital-grade precision with a direct-to-you model that
                respects your time, your wallet, and your health
              </p>
            </div>
          </div>

          {/* CENTER + RIGHT: 2-col subgrid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Center: Hero Card */}
            <div
              data-aos="zoom-in"
              className="bg-[#006f67] rounded-[20px] px-10 pt-10 relative overflow-hidden flex flex-col min-h-[540px]"
            >
              <h3 className="text-white text-center text-3xl font-semibold leading-[1.08]">
                NOTTE Series Technical Performance Overview
              </h3>

              <div className="relative flex-1 flex items-end justify-center">
                <img
                  src="/delta/delta-tech-2.png"
                  alt="NOTTE Device"
                  className="w-[80%] max-w-[500px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)]"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
            </div>

            {/* Right: Adaptive Airway Card */}
            <div
              data-aos="fade-left"
              className="bg-[#d3e1dd] rounded-[18px] p-8 flex flex-col justify-between min-h-[540px]"
            >
              <h3 className="text-[#232323] text-[28px] font-semibold   leading-[1.05]">
                Adaptive Airway Algorithms.
              </h3>

              <div className="space-y-5">
                {[
                  { stat: "AutoRamp™", desc: "Starts at a low pressure and gradually increases to prescribed level as you fall asleep." },
                  { stat: "SmartStart™", desc: "Therapy begins automatically when you breathe into the mask — no buttons needed." },
                  { stat: "EPR™", desc: "Exhale Pressure Relief drops pressure during exhalation for a natural breathing feel." },
                ].map(({ stat, desc }) => (
                  <div key={stat} className="border-t border-[#b5cec8] pt-5">
                    <p className="text-[#00695f] text-[15px] font-semibold">{stat}</p>
                    <p className="mt-1 text-[#3d3d3d] text-[14px] leading-[1.75]">{desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#3d3d3d] text-[14px] leading-[1.85] border-t border-[#b5cec8] pt-5">
                Automatically maintain constant warmth and moisture to prevent
                dry throat and congestion, without you touching a setting.
              </p>
            </div>
          </div>
        </div>

        {/* Split Images Row */}
        <div className="mt-5 grid grid-cols-2 gap-5">
          <div
            data-aos="fade-up"
            className="relative overflow-hidden rounded-[18px] h-[280px]"
          >
            <img
              src="/delta/delta-tech-1.png"
              alt="Comfort Device"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-white text-[18px] font-medium">
                Engineered for comfort.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="relative overflow-hidden rounded-[18px] h-[280px] bg-[#efefef] flex items-center justify-center"
          >
            <img
              src="/delta/delta-tech-3.png"
              alt="Mask Device"
              className="w-[30%] object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Feature Pills — full-width marquee, outside container */}
      <div className="mt-5 overflow-hidden" data-aos="fade-up">
        <div className="bg-[#dce7e3] py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
          <div className="marquee-track px-3">
            {features.concat(features).map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-[#006f67] h-[58px] rounded-[6px] flex items-center justify-center px-7 min-w-[200px]"
              >
                <p className="text-white text-[14px] lg:text-[15px] font-semibold   leading-snug whitespace-nowrap">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
