"use client";

import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="w-full flex justify-center">
      {/* OUTER CONTAINER - 95% width and almost full height */}
      <div className="w-[95%] rounded-[2rem] overflow-hidden relative h-[100vh]">
        {/* 🎥 Background Video - Reusing the DynamicVideoPlayer logic from Delphos */}
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover z-0 aspect-video"
        />

        {/* INNER CONTENT (constrained to container) */}
        <div className="relative z-20 container mx-auto h-full flex items-end pb-20 px-8 lg:px-12">
          <div className="max-w-3xl text-white">
            <h1
              className="text-[32px] lg:text-[42px] xl:text-[48px] font-bold leading-[1.1] mb-6 text-white text-shadow-xl"
            >
              Those Who Know <br className="hidden lg:block" />
              Quality, Know BM
            </h1>

            <p
              className="lg:text-[17px] text-[16px] text-white mb-4 max-w-2xl leading-relaxed text-shadow-md"
            >
              Europe's Leading Manufacturer Of Aftermarket Hot End Emissions Products
            </p>

            <Button
              href="#products"
              variant="white"
              size="md"
              rounded="full"
              hasArrow
              className="px-10 shadow-xl font-bold hover:bg-white/95"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-shadow-xl {
          text-shadow: 2px 4px 12px rgba(0, 0, 0, 0.6);
        }
        .text-shadow-md {
          text-shadow: 1px 2px 8px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}
