"use client";

import { useEffect, useRef, ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DeltaScrollRevealTextProps {
  text: string;
  className?: string;
  as?: ElementType;
  dimOpacity?: number;
  brightOpacity?: number;
}

export default function DeltaScrollRevealText({
  text,
  className = "",
  as: Tag = "h2",
  dimOpacity = 0.2,
  brightOpacity = 1,
}: DeltaScrollRevealTextProps) {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      const chars = gsap.utils.toArray<HTMLSpanElement>(
        containerRef.current.querySelectorAll(".delta-char")
      );

      gsap.to(chars, {
        opacity: brightOpacity,
        duration: 0.4,
        stagger: { each: 0.012 },
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 30%",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [brightOpacity]);

  return (
    <Tag ref={containerRef} className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="delta-char"
          style={{
            opacity: dimOpacity,
            whiteSpace: char === " " ? "pre" : undefined,
          }}
        >
          {char}
        </span>
      ))}
    </Tag>
  );
}
