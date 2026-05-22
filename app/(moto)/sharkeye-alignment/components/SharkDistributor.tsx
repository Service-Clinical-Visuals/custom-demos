"use client";

import "aos/dist/aos.css";

const products = [1, 2, 3];

export default function SharkDistributor() {

  return (
    <section className="w-full overflow-hidden bg-[#f5f5f5]">
      {/* TOP DISTRIBUTOR BANNER */}
      <div
        data-aos="fade-down"
        className="relative w-full h-[160px] bg-white overflow-hidden border-b border-black/5"
      >
        <img src="/moto/shark/shark-distributor.png" alt="distributor" className="w-full h-full object-cover" />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-full mx-auto px-6 lg:px-14 py-24">
        {/* TITLE */}
        <div
          data-aos="fade-up"
          className="text-center"
        >
          <h2 className="text-[46px] leading-none tracking-[-1px] font-black text-[#1f1f1f]">
            Trusted Products in Countries Worldwide
          </h2>
        </div>

        {/* PRODUCT GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.map((item, index) => (
            <div
              key={item}
              data-aos="fade-up"
              data-aos-delay={index * 140}
              className="group"
            >
              {/* IMAGE STAGE */}
              <div className="relative h-[420px] bg-[#e6e6e6] overflow-hidden">
                {/* CENTER PRODUCT CARD */}
                <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-[58%] h-[62%] bg-[#f3f3f3] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                  {/* LOGO */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-black text-[#f0df32] text-[14px] font-black px-3 py-1 rounded-full tracking-tight">
                      EAGLE
                    </div>
                  </div>

                  {/* MACHINE */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative scale-[0.82]">
                      {/* MAIN BODY */}
                      <div className="relative w-[120px] h-[250px] bg-[#1f2937] shadow-2xl">
                        {/* TOP BAR */}
                        <div className="absolute top-[85px] left-[-55px] w-[230px] h-[14px] bg-[#ff4b2b]" />

                        {/* LOWER BAR */}
                        <div className="absolute bottom-[55px] left-[-65px] w-[250px] h-[16px] bg-[#ff4b2b]" />

                        {/* CENTER */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[30px] w-[38px] h-[180px] bg-black border border-yellow-400" />

                        {/* WHEELS */}
                        <div className="absolute bottom-[-10px] left-[12px] w-[14px] h-[14px] rounded-full bg-neutral-500" />
                        <div className="absolute bottom-[-10px] right-[12px] w-[14px] h-[14px] rounded-full bg-neutral-500" />
                      </div>

                      {/* SIDE PANEL */}
                      <div className="absolute right-[-55px] bottom-0 w-[26px] h-[110px] bg-[#181818] rounded-sm">
                        <div className="absolute inset-x-0 top-2 flex flex-col items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-black/[0.03]" />
                </div>
              </div>

              {/* PRODUCT INFO */}
              <div className="pt-6">
                <h3 className="text-[21px] leading-[1.35] tracking-[-0.4px] font-black text-[#1f1f1f] max-w-[340px]">
                  SharkEye BigEye 4 Wheel Laser Aligner - BE4WLA
                </h3>

                <p className="mt-5 text-[20px] font-black text-[#8a8a8a]">
                  ₹31,875.20
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SLIDER INDICATOR */}
        <div
          data-aos="fade-up"
          className="mt-16 flex items-center justify-center gap-3"
        >
          <div className="w-[38px] h-[6px] bg-black" />

          <div className="w-[38px] h-[6px] bg-[#d7d7d7]" />
        </div>
      </div>

      {/* CUSTOM CLIP STYLE */}
      <style jsx>{`
        .clip-banner {
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
}