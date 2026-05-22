"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DeltaScrollStrip from "./DeltaScrollStrip";

gsap.registerPlugin(ScrollTrigger);

const HEADING_TEXT =
  "Our Products are designed to help patients with sleep-related breathing disorders achieve consistent, restful sleep through safe, reliable, and user-friendly technology.";

const DIM = "rgb(180,180,180)";
const BRIGHT = "rgb(35,35,35)";

export default function DeltaProductScroll() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray<HTMLSpanElement>(
        headingRef.current!.querySelectorAll(".delta-char")
      );

      gsap.to(chars, {
        color: BRIGHT,
        duration: 0.4,
        stagger: { each: 0.012 },
        ease: "none",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          end: "bottom 30%",
          scrub: 1,
          // markers: true
        },
      });
    }, headingRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="relative bg-[#dfe7e3] flex flex-col justify-center">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-12 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full">
            <div className="flex items-center gap-2" data-aos="fade-up">
              <span className="w-[8px] h-[8px] rounded-full bg-[#00695f]" />
              <p className="text-[18px] font-semibold text-[#00695f]">
                Delta Products
              </p>
            </div>

            <h1
              ref={headingRef}
              id="delta-heading"
              className="mt-6 text-4xl lg:text-7xl font-semibold leading-[1.25]"
            >
              {HEADING_TEXT.split("").map((char, i) => (
                <span
                  key={i}
                  className="delta-char"
                  style={{
                    color: DIM,
                    whiteSpace: char === " " ? "pre" : undefined,
                  }}
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </section>

      <DeltaScrollStrip />
    </>
  );
}
