"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DeltaScrollStrip from "./DeltaScrollStrip";

export default function DeltaProductScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const floatingImgRef = useRef<HTMLDivElement>(null);
  const animImgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hide strip elements initially; GSAP reveals them during scroll
      gsap.set("#delta-strip-hand", { opacity: 0 });
      gsap.set("#delta-strip-features", { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
        },
      });

      // Swap: hide static image, show GSAP-driven clone
      tl.call(() => {
        gsap.set(floatingImgRef.current, { opacity: 0 });
        gsap.set(animImgRef.current, { opacity: 1 });
      });

      // Heading: gray → black as scroll begins
      tl.to("#delta-heading", { color: "#000000", duration: 1, ease: "none" }, 0);

      // Phase 1: top-right → center-left, slips behind heading text
      tl.to(animImgRef.current, {
        x: "-62vw",
        y: "18vh",
        width: "340px",
        zIndex: 5,
        ease: "none",
        duration: 1,
      }, 0);

      // Phase 2: center-left → hand landing zone in DeltaScrollStrip
      tl.to(animImgRef.current, {
        x: "-12vw",
        y: "65vh",
        width: "300px",
        zIndex: 15,
        ease: "none",
        duration: 1,
      });

      // Features section reveals first, after device starts phase 2
      tl.to("#delta-strip-features", { opacity: 1, duration: 0.5, ease: "power2.out" }, "<0.2");

      // Hand image reveals last, after features are visible
      tl.to("#delta-strip-hand", { opacity: 1, duration: 0.4, ease: "power2.out" }, ">0.2");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#dfe7e3] min-h-screen">
      {/* GSAP-driven animated clone — starts hidden, GSAP controls it */}
      <img
        ref={animImgRef}
        src="/delta/delta-product-scroll.png"
        alt="CPAP Device"
        className="absolute pointer-events-none object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.12)]"
        style={{ width: "420px", top: "24px", right: "216px", zIndex: 30, opacity: 0 }}
      />

      <div className="max-w-[1600px] mx-auto px-8 lg:px-10 py-10 lg:py-14">
        {/* Static floating image — hidden once GSAP clone takes over */}
        <div
          ref={floatingImgRef}
          className="absolute top-6 right-8 lg:right-24 z-10"
        >
          <img
            src="/delta/delta-product-scroll.png"
            alt="CPAP Device"
            className="w-[320px] lg:w-[420px] object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.12)]"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative pt-24 lg:pt-28">
          {/* Label */}
          <div
            className="flex items-center gap-2"
            data-aos="fade-up"
          >
            <span className="w-[8px] h-[8px] rounded-full bg-[#00695f]" />
            <p className="text-[18px] font-medium text-[#9b9b9b] tracking-[-0.3px]">
              Delta Products
            </p>
          </div>

          {/* Main Heading */}
          <div
            className="mt-8 max-w-[1450px] relative z-20"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <h1 id="delta-heading" className="text-[74px] leading-[1.02] tracking-[-4px] font-semibold" style={{ color: "#9b9b9b" }}>
              Our Products are designed to help patients with sleep-related
              breathing disorders achieve consistent, restful sleep through
              safe, reliable, and user-friendly technology.
            </h1>
          </div>
        </div>
      </div>

      <DeltaScrollStrip />

      {/* Ambient Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
