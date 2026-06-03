"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import PrimaryButton from "./Button";

export default function Banner() {

  return (
    <section className="w-full flex justify-center mt-10 mb-10">
      {/* OUTER */}
      <div className="w-[95%] rounded-3xl overflow-hidden relative h-screen">
        {/* 🎥 Background Video */}
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* INNER CONTENT (constrained) */}
        <div className="relative z-10 container mx-auto h-full hidden sm:flex items-end pb-35  ">
          <div className="max-w-3xl text-white">
            <h1
              data-aos="fade-up"
              className="text-[32px] font-semibold! leading-snug mb-6 font-sora">
              Effective post-exercise
              <br />
              regeneration
            </h1>

            <PrimaryButton text="Discover Innovation" />

            {/* <Button
              href="#"
              variant="white"
              size="md"
              rounded="lg"
              className="mt-4"
            >
              Discover Innovation ->
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
