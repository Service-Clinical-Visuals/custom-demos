"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);
  const productRef = useRef<HTMLImageElement>(null);
  const handRef = useRef<HTMLImageElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 1,
          // markers: true,
        },
      });

      // Phase 1 (0–3): product falls from above into center
      tl.fromTo(
        productRef.current,
        { yPercent: -160, scale: 1 },
        { yPercent: 0, scale: 1.2, ease: "power2.out", duration: 3 }
      );

      // Phase 2 (3–6): product scales up, hand exits downward
      tl.to(
        productRef.current,
        { scale: 1.6, ease: "none", duration: 3 },
        3
      );
      tl.to(
        handRef.current,
        { yPercent: 130, opacity: 0, ease: "power2.in", duration: 3 },
        3
      );

      // Features stagger in one by one
      tl.fromTo(
        featureRefs.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 1,
          stagger: { each: 1.5 },
        },
        0.1
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-[#dfe7e3] flex items-center overflow-hidden relative"
    >
      {/* Background watermark text */}
      <p
        aria-hidden
        className="pointer-events-none select-none absolute top-0 left-0 w-full text-center font-semibold leading-none whitespace-nowrap"
        style={{
          fontSize: "clamp(80px, 18vw, 260px)",
          color: "rgba(0,0,0,0.06)",
          letterSpacing: "-0.02em",
        }}
      >
        Deltasleep
      </p>

      <div className="w-full max-w-[1600px] mx-auto px-8 lg:px-16 flex items-center gap-8 lg:gap-16 relative z-10">

        {/* LEFT — hand + product */}
        <div className="relative w-1/2 h-screen flex items-center justify-center">
          <img
            ref={handRef}
            src="/delta/delta-product-scroll-hand.png"
            alt="Hand holding device"
            className="absolute bottom-0 w-full max-w-[600px] object-contain"
          />
          <img
            ref={productRef}
            src="/delta/delta-product-scroll.png"
            alt="CPAP Device"
            className="relative z-10 w-[260px] lg:w-[320px] object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.2)]"
            style={{ transformOrigin: "center center" }}
          />
        </div>

        {/* RIGHT — features appear one by one */}
        <div className="w-1/2 flex flex-col gap-10 lg:gap-14">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={(el) => { featureRefs.current[i] = el; }}
              style={{ opacity: 0, transform: "translateY(28px)" }}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#9eb2ac]">
                <h3 className="text-[#00695f] text-[18px] lg:text-[22px] font-semibold">
                  {feature.title}
                </h3>
                <span className="text-[#00695f] text-[28px] lg:text-[32px] font-semibold">
                  {feature.number}
                </span>
              </div>
              <p className="mt-4 text-[#2f2f2f] text-[15px] lg:text-[16px] leading-[1.75] max-w-[360px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
