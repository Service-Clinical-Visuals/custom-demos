"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import DeltaScrollRevealText from "./DeltaScrollRevealText";

gsap.registerPlugin(ScrollTrigger);

const LEFT_IMAGES = [
  { src: "/delta/delta-mask-cleanup.png", alt: "Mask Closeup" },
  { src: "/delta/delta-front-mask.png", alt: "Front Mask" },
  { src: "/delta/delta-side-mask.png", alt: "Side Mask" },
  { src: "/delta/delta-mask-angle.png", alt: "Mask Angle" },
];

const RIGHT_IMAGES = [
  { src: "/delta/delta-side-mask.png", alt: "Side Mask" },
  { src: "/delta/delta-mask-angle.png", alt: "Mask Angle" },
  { src: "/delta/delta-mask-cleanup.png", alt: "Mask Closeup" },
  { src: "/delta/delta-front-mask.png", alt: "Front Mask" },
];

export default function DeltaShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current!;

      // Initial static setup that doesn't change on scroll
      gsap.set([videoWrapRef.current, bottomRef.current], {
        position: "absolute",
        zIndex: (i, target) => (target === videoWrapRef.current ? 34 : 20),
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // Helper to compute responsive dimensions dynamically
      const getVideoMetrics = () => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const isMobile = vw < 640;
        const isTablet = vw >= 640 && vw < 1536;

        // Read actual strip width from the rendered element (0 on mobile where strips are hidden)
        const stripW = leftRef.current?.offsetWidth ?? 0;
        const gap = isMobile ? 16 : isTablet ? 24 : 40;
        const inset = isMobile ? 0 : isTablet ? 20 : 50;

        const left = stripW + gap + inset;
        const width = vw - stripW * 2 - gap * 2 - inset * 2;
        const top = Math.round(vh * (isMobile ? 0.35 : 0.27));
        const radius = isMobile ? 14 : 22;
        const height = width * (9 / 16);

        return { left, width, top, height, radius, vw, vh, isMobile, isTablet };
      };

      // Strips — we animate them even on mobile (hidden via CSS) to prevent undefined errors
      tl.fromTo(
        leftRef.current,
        { y: "-38vh", xPercent: 0, scale: 1 },
        {
          y: "-75vh",
          xPercent: () => (window.innerWidth < 1536 ? -130 : -215),
          scale: 1.4,
          ease: "power2.in",
          duration: 3,
        }
      );
      tl.fromTo(
        rightRef.current,
        { y: "-38vh", xPercent: 0, scale: 1 },
        {
          y: "10vh",
          xPercent: () => (window.innerWidth < 1536 ? 130 : 215),
          scale: 1.4,
          ease: "power2.in",
          duration: 3,
        },
        0
      );

      // Header slides up and fades out
      tl.to(
        headerRef.current,
        {
          y: () => (window.innerWidth < 640 ? -120 : -180),
          opacity: 0,
          ease: "power2.in",
          duration: 2.6,
        },
        0
      );

      // Bottom tracks video width/left while sliding down
      tl.fromTo(
        bottomRef.current,
        {
          left: () => getVideoMetrics().left,
          width: () => getVideoMetrics().width,
        },
        {
          y: () => (window.innerWidth < 640 ? 140 : 200),
          opacity: 0,
          left: 0,
          width: () => window.innerWidth,
          ease: "power2.in",
          duration: 2.6,
        },
        0
      );

      // Dark overlay fades in at 75%
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 0.65, ease: "power1.in", duration: 1 },
        1.65
      );

      // Video expands to fill entire screen
      tl.fromTo(
        videoWrapRef.current,
        {
          left: () => getVideoMetrics().left,
          top: () => getVideoMetrics().top,
          width: () => getVideoMetrics().width,
          height: () => getVideoMetrics().height,
          borderRadius: () => getVideoMetrics().radius,
        },
        {
          left: 0,
          top: 0,
          width: () => window.innerWidth,
          height: () => window.innerHeight,
          borderRadius: 0,
          ease: "power1.inOut",
          duration: 4,
        },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden h-screen bg-[#006d63]"
    >
      {/* HEADER */}
      <div
        ref={headerRef}
        className="absolute z-20 top-[8%] sm:top-[10%] left-1/2 -translate-x-1/2 text-center w-full px-4 sm:px-6 max-w-[92vw] sm:max-w-[680px]"
      >
        <div className="flex items-center justify-center gap-2 mb-1 sm:mb-2">
         <div className="flex items-center gap-3 pl-6" data-aos="fade-up">
              <span className="w-[8px] h-[8px] rounded-full bg-[#ffffff]" />
              <p className="text-[22px] font-semibold text-[#faffff]">
              Our Products
              </p>
            </div>
        </div>
        <DeltaScrollRevealText
          text="Full Face Mask FM-1"
          className="text-white text-2xl sm:text-3xl lg:text-4xl leading-[1.1] font-semibold"
        />
        <p className="mt-2 sm:mt-3 text-white/90 text-[13px] sm:text-[15px] lg:text-[16px] leading-[1.8] max-w-[480px] mx-auto">
          The FM-1 Full Face Mask is designed to provide optimal sealing and comfort.
        </p>
      </div>

      {/* Dark overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: 0, zIndex: 31 }}
      />

      {/* VIDEO */}
      <div ref={videoWrapRef} className="overflow-hidden aspect-video" style={{ zIndex: 34 }}>
        <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
      </div>

      {/* BOTTOM image — only top portion visible */}
      <div
        ref={bottomRef}
        className="absolute z-20 overflow-hidden rounded-[14px] sm:rounded-[16px]"
        style={{ bottom: "-10%", height: "16vh" }}
      >
        <img
          src="/delta/mid.png"
          alt="Product detail"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* LEFT STRIP — hidden on mobile and tablet, full on desktop */}
      <div
        ref={leftRef}
        className="absolute top-0 left-0 z-30 flex-col gap-12 hidden xl:flex xl:w-[200px] 2xl:w-[360px]"
      >
        {LEFT_IMAGES.map((img, i) => (
          <div
            key={i}
            className="relative rounded-r-[16px] sm:rounded-r-[22px] overflow-hidden bg-[#2d8b82]"
            style={{ height: "40vh" }}
          >
            <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* RIGHT STRIP — hidden on mobile and tablet, full on desktop */}
      <div
        ref={rightRef}
        className="absolute top-0 right-0 z-30 flex-col gap-12 hidden xl:flex xl:w-[200px] 2xl:w-[360px]"
      >
        {RIGHT_IMAGES.map((img, i) => (
          <div
            key={i}
            className="relative rounded-l-[16px] sm:rounded-l-[22px] overflow-hidden bg-[#2d8b82]"
            style={{ height: "40vh" }}
          >
            <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
