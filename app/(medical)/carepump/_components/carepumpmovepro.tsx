"use client";

import Image from "next/image";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import PrimaryButton from "./Button";

const heroImages = [
  "/medical/carepump/images/carepumpmove1.jpg",
  "/medical/carepump/images/carepumpmove2.jpg",
  "/medical/carepump/images/carepumpmove3.jpg",
  "/medical/carepump/images/carepumpmove4.jpg",
  "/medical/carepump/images/carepumpmove5.jpg",
  "/medical/carepump/images/carepumpmove6.jpg",
];

export default function CarePumpMovePro() {
  return (
    <section className="relative overflow-hidden w-full py-12 md:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-100">
        <Image
          src="/medical/carepump/images/carepumpmove-bg.png"
          alt="CarePump background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-0 relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div data-aos="fade-right" className="order-1 lg:order-1 lg:col-span-7 flex flex-col gap-8">
            <div className="max-w-4xl">
              <h2 className="
                text-[24px]
                sm:text-[28px]
                md:text-[30px]
                lg:text-[32px]
                font-bold
                text-[#333]
                leading-[1.2]
                mb-4 lg:mb-6
                ">
                CarePump Move8PRO - 8 chamber device for lymphatic drainage (pressotherapy)
              </h2>
              <p className="
                text-[#777]
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[17px]
                leading-7
                lg:leading-8
                ">
                CarePump Move8PRO is the only pressotherapy device on the market that combines the functionality of stationary devices with a compact design and battery power supply characteristic of mobile devices. Move8PRO is the equivalent of the CarePump Expert8 from the Advanced series in a small housing. Thanks to the battery power supply, it is the first choice device for mobile physiotherapists. Polish production, CarePump brand.
              </p>

            </div>

            <div className="relative overflow-hidden rounded-4xl border border-white/75 bg-slate-950/10 shadow-[0_30px_80px_rgba(0,0,0,0.1)]">
              <div className="aspect-16/9 relative">
                <DynamicVideoPlayer
                  type="360"
                  className="absolute inset-0 object-cover"
                />
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="order-2 lg:order-2 lg:col-span-4 lg:col-start-9 flex flex-col gap-6 lg:gap-4 mt-5">

            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {heroImages.map((src, idx) => (
                <div
                  key={idx}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                  className="relative overflow-hidden rounded-xl shadow-lg bg-[#f4f4f4]"
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={src}
                      alt={`CarePump product snapshot ${idx + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 mb-3 shadow-md">
              <img
                src="/carepump/images/medal 1.png"
                alt="Certification Badge"
                className="h-6 w-6"
              />
              <span className="text-sm font-medium text-slate-900">
                Certified By Polish Lymphological Society
              </span>
            </div>
            <PrimaryButton
              text="Explore Specifications"
              className="w-fit"
            />
          </div>

        </div>

      </div>
    </section>
  );
}


