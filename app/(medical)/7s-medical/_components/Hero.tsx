"use client";

import { useVideo } from "../../../_context/VideoContext";

export default function Hero() {
  const { videos } = useVideo();

  // Retrieve the banner video from context, fallback if not loaded
  const videoSrc =
    videos?.banner && videos.banner.length > 0
      ? videos.banner[0]
      : "https://cdn.clinicalvisuals.com/medical/advanced_instrumentations/landing_page/adavnced_esu_400_01.webm";

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="top" className="relative w-full h-screen overflow-hidden bg-black flex items-end">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoSrc}
      />

      {/* Elegant Dark Overlay to guarantee white text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10" />

      {/* Content Container (Tailwind standard container - no max-width hardcoded) */}
      <div className="relative z-20 container w-full mx-auto px-6 md:px-12 pb-24 md:pb-32 flex flex-col items-start">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white! tracking-tight leading-tight max-w-3xl mb-8"
        >
          Your Swiss Partner in Osteosynthesis
        </h1>

        <button
          onClick={handleScrollDown}
          data-aos="fade-up"
          data-aos-delay="400"
          className="inline-flex items-center justify-center px-8 h-[48px] bg-[#C10230] hover:bg-[#9B0124] text-white text-[14px] font-semibold tracking-wider rounded-[3px] uppercase transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_15px_rgba(193,2,48,0.3)]"
        >
          Explore Portfolio
        </button>
      </div>
    </section>
  );
}
