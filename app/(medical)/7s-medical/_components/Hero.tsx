"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { useVideo } from "../../../_context/VideoContext";

export default function Hero() {


  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="top" className="relative w-full h-screen overflow-hidden bg-white flex items-end">
      {/* Background Video */}
      <DynamicVideoPlayer type="banner" />

      {/* Content Container (Tailwind standard container - no max-width hardcoded) */}
      <div className="relative z-20 container w-full mx-auto px-6 md:px-12 pb-24 md:pb-32 flex flex-col items-start">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-[30px] md:text-[36px] lg:text-[40px] font-bold text-white! tracking-tight leading-tight max-w-3xl mb-8"
        >
          Your Swiss Partner in Osteosynthesis
        </h1>

        <button
          onClick={handleScrollDown}
          data-aos="fade-up"
          data-aos-delay="400"
          className="inline-flex items-center justify-center px-8 h-[48px] bg-[#CE112D] hover:bg-[#A70F25] text-white text-[14px] font-semibold tracking-wider rounded-[3px] uppercase transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_15px_rgba(193,2,48,0.3)]"
        >
          Explore Portfolio
        </button>
      </div>
    </section>
  );
}
