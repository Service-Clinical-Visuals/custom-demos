"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Link from "next/link";



import Container from "./Container";

export default function Banner() {
  return (
    <section className="relative w-full bg-black h-screen overflow-hidden">
      {/* 🎥 Background Video */}
      <DynamicVideoPlayer
        type="banner"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* 📝 Content */}
      <div className="relative z-10 flex flex-col justify-end pb-24 md:pb-32 lg:pb-40 h-full">
        <Container data-aos="fade-up" className="px-6">
          <h1 className="text-[#FFFFFF] text-[32px] md:text-[38px] font-semibold max-w-3xl leading-relaxed ">
            Innovative Technology For Respiratory Diagnostics
          </h1>
          <div className="">
            <Link
              href="#"
              className="border border-[#fff] text-[#fff] font-medium text-base px-10 py-3 rounded-md mt-6 inline-flex items-center justify-center w-fit cursor-pointer hover:bg-white hover:text-[#3DAA4A] transition-all duration-300"
            >
              Explore Our Products
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
