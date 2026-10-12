"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const slides = [
  { src: "/moto/syprin/p9.webp", alt: "ORIGINAL SYPRIN Diesel Additiv" },
  { src: "/moto/syprin/p17.webp", alt: "ORIGINAL SYPRIN Benzin Rescue Box" },
  { src: "/moto/syprin/p16.webp", alt: "ORIGINAL SYPRIN Diesel Rescue Box" },
];

const HOVER_INTERVAL_MS = 1600;

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  // Cycle through the slides while the pointer is over the gallery
  useEffect(() => {
    if (!hovered) return;
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), HOVER_INTERVAL_MS);
    return () => clearInterval(id);
  }, [hovered]);

  const n = slides.length;
  // Position of each slide relative to the active one: 0 = front, -1 = left, 1 = right
  const offsetOf = (i: number) => {
    const d = (i - active + n) % n;
    return d === 0 ? 0 : d === 1 ? 1 : -1;
  };

  return (
    <section id="gallery" className="py-14 md:py-20 desk:py-24 min-[2500px]:py-36 min-[3800px]:py-48 overflow-hidden">
      <div className="custom-container">
        {/* Heading */}
        <div className="flex flex-col items-center text-center max-w-[640px] min-[2500px]:max-w-[1000px] min-[3800px]:max-w-[1350px] mx-auto">
          <div className="flex items-center gap-2.5 min-[2500px]:gap-4">
            <span className="w-5 min-[2500px]:w-8 h-[3px] min-[2500px]:h-[5px] rounded-full bg-accent" />
            <span className="tag-label text-[#F6F6F6]">Gallery</span>
          </div>
          <h2 className="text-[#F6F6F6] mt-3 md:mt-4 min-[2500px]:mt-6">Explore the Original Syprin World</h2>
          <p className="text-[#CACACA] mt-3 md:mt-4 min-[2500px]:mt-6">
            Discover Original Syprin through product visuals, applications, and innovative solutions built for reliable and efficient diesel care.
          </p>
        </div>

        {/* Stacked cards */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative mx-auto mt-10 md:mt-12 min-[2500px]:mt-20 w-[76%] sm:w-[64%] md:w-[56%] desk:w-[44%] aspect-[378/200]"
        >
          {slides.map((slide, i) => {
            const offset = offsetOf(i);
            const isFront = offset === 0;
            return (
              <button
                key={slide.src}
                type="button"
                onClick={() => (isFront ? router.push("/syprin/products") : setActive(i))}
                aria-label={isFront ? `${slide.alt} – view products` : `Show ${slide.alt}`}
                aria-current={isFront}
                className={`absolute inset-0 overflow-hidden rounded-[14px] min-[3800px]:rounded-[28px] bg-[#0f1a2e] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isFront
                    ? "z-20 border border-white/90 min-[2500px]:border-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-pointer"
                    : "z-10 border border-transparent opacity-70 hover:opacity-90 cursor-pointer"
                }`}
                style={{ transform: `translateX(${offset * 25}%) scale(${isFront ? 1 : 0.84})` }}
              >
                {/* Source photos are square; crop slightly below centre so the label stays in view */}
                <img src={slide.src} alt={slide.alt} loading="lazy" className="w-full h-full object-cover object-[center_60%]" draggable={false} />
              </button>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 min-[2500px]:gap-4 mt-8 md:mt-10 min-[2500px]:mt-16">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={active === i}
              className={`rounded-full transition-all duration-300 ${
                active === i
                  ? "w-2.5 h-2.5 min-[2500px]:w-4 min-[2500px]:h-4 bg-accent"
                  : "w-1.5 h-1.5 min-[2500px]:w-2.5 min-[2500px]:h-2.5 bg-white/90 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
