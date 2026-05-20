"use client";

import "aos/dist/aos.css";

const features = [
  {
    number: "01",
    title: "Patient Adherence",
    description:
      "Optimized comfort profiles to increase long-term therapy compliance.",
  },
  {
    number: "02",
    title: "Operational Efficiency",
    description:
      "Streamlined integration for clinicians and home-care providers.",
  },
  {
    number: "03",
    title: "Engineered Durability",
    description:
      "Utilization of medical-grade materials designed for longevity and consistent output.",
  },
];

export default function DeltaScrollStrip() {

  return (
    <section className="relative overflow-hidden bg-[#dfe7e3] py-10 lg:py-12">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* Main Layout */}
        <div className="relative min-h-[260px] flex flex-col xl:flex-row justify-between">
          {/* LEFT CONTENT */}
          <div id="delta-strip-features" className="relative z-20 w-full xl:max-w-[760px]">
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="relative"
                >
                  {/* Top Row */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#9eb2ac]">
                    <h3 className="text-[#00695f] text-[18px] lg:text-[20px] font-semibold tracking-[-0.4px]">
                      {feature.title}
                    </h3>

                    <span className="text-[#00695f] text-[30px] font-semibold tracking-[-1px]">
                      {feature.number}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-[#2f2f2f] text-[16px] leading-[1.75] max-w-[220px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="mt-14"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button className="cursor-pointer h-[62px] px-10 rounded-[4px] bg-[#00695f] text-white text-[20px] font-semibold tracking-[-0.5px] transition-all duration-300 hover:scale-[1.02] hover:bg-[#00544c]">
                Learn More About Company
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div
            id="delta-strip-hand"
            className="absolute right-0 bottom-[-10px] w-[520px] lg:w-[620px] pointer-events-none"
          >
            {/* Hand Image */}
            <img
              src="/delta/delta-product-scroll-hand.png"
              alt="Hand"
              className="relative z-10 w-full object-contain"
            />

            {/* Floating Device — revealed by GSAP crossfade from animated clone */}
            {/* <div id="delta-strip-device" className="absolute top-[-10px] left-[80px] lg:left-[100px] z-20" style={{ opacity: 0 }}>
              <img
                src="/delta/delta-product-scroll.png"
                alt="CPAP Device"
                className="w-[240px] lg:w-[300px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
              />
            </div> */}

            {/* Ambient Glow */}
            <div className="absolute top-[40px] left-[120px] w-[240px] h-[120px] bg-white/20 blur-[60px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
