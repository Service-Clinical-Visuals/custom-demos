"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Hybrid() {
  return (
    <section id="hybrid" className="relative w-full py-10 min-[1641px]:py-10 bg-white overflow-hidden">
      <Container>
        <div className="bg-[#181715] rounded-[2rem] min-[1641px]:rounded-[3rem] px-6 min-[1641px]:px-10  py-10 min-[1641px]:py-10 ">
          <div className="grid grid-cols-1 min-[1641px]:grid-cols-2 gap-8 min-[1641px]:gap-8 items-center">

            {/* Left Content - 360 Video Placeholder */}
            <div className="w-full aspect-video rounded-xl flex items-center justify-center overflow-hidden relative order-2 min-[1641px]:order-none" data-aos="fade-right">
              <div className="absolute inset-0 flex items-center justify-center">
                <DynamicVideoPlayer type="360" />
              </div>

            </div>

            {/* Right Content */}
            <div className="contents min-[1641px]:flex min-[1641px]:flex-col min-[1641px]:space-y-8">

              <div className="order-1 min-[1641px]:order-none w-full" data-aos="fade-left">
                <Typography variant="h2" color="primary" className="font-teko leading-tight tracking-wide">
                  Hybrid Excellence
                </Typography>
                <div className="w-[32%] h-[1.5px] rounded bg-[#E4C012] mb-5"></div>
              </div>

              <div className="space-y-6 text-[#d1d5db] order-3 min-[1641px]:order-none w-full mt-2 min-[1641px]:mt-0" data-aos="fade-left" data-aos-delay="100">
                <Typography variant="body" className="font-exo text-sm sm:text-base leading-relaxed">
                  German Gold Hybrid Excellence 0W-20 has been specially developed for the latest generation of downsized engines. The unique combination of base oils and additives helps to significantly reduce so-called LSPI (Low Speed Pre-Ignition).
                </Typography>
                <Typography variant="body" className="font-exo  sm:text-base">
                  LSPI occurs when the air-fuel mixture in the combustion chamber ignites spontaneously before the spark plug fires, which can lead to engine knocking and, in severe cases, serious engine damage. Internal engine contamination as well as poor fuel quality also play a role in this phenomenon.
                </Typography>
              </div>

              {/* Highlights */}
              <div className="space-y-[14px] pt-2 order-2 min-[1641px]:order-none">
                {[
                  {
                    num: "01",
                    text: "Engineered Specifically for the Unique Demands of Modern Hybrid Vehicle Technology",
                  },
                  {
                    num: "02",
                    text: "Precision-Engineered Performance for Today's Advanced Hybrid Vehicles",
                  },
                  {
                    num: "03",
                    text: "Advanced Lubrication Technology Designed for Next-Generation Hybrid Powertrains",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex min-h-[64px] sm:min-h-[76px] bg-[#F3F3F3] shadow-md rounded-tr-3xl rounded-br-none overflow-hidden items-stretch"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Text */}
                    <div className="flex flex-1 items-center px-6 py-3">
                      <Typography variant="body" className="font-exo  font-normal leading-[1.6] text-[#6E777D]">
                        {item.text}
                      </Typography>
                    </div>

                    {/* Number capsule */}
                    <div className="flex w-[120px] shrink-0 items-center justify-center bg-[url('/moto/german-gold/vector.png')] bg-[length:112%_102%] bg-no-repeat ">
                      <span className="font-teko text-[46px] font-bold leading-none text-white mt-1">
                        {item.num}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>


          {/* Bottom Section */}
          <div className="mt-5  pt-4 flex flex-col items-center text-center space-y-6">
            {/* Separator */}
            <div className="w-full h-px bg-white/40 mb-5"></div>
            <Typography variant="body" color="white" className="font-exo text-lg sm:text-xl font-medium tracking-wide">
              German Engineering. Global Performance. Trusted Quality.
            </Typography>
            <Button text="ABOUT GERMAN GOLD" variant="primary" showIcon={true} href="#about" />
          </div>
        </div>
      </Container>
    </section>
  );
}
