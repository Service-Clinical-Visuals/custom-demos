"use client";

import { Dot } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const values = [
  {
    tag: "Knowledge to succeed",
    text: "We give you the confidence to keep your business, and your customers' vehicles, performing at their best. From digital tools to technical training, we provide you with the right knowledge at the right time.",
    image: "/moto/comma/what_we_stand3.png",
  },
  {
    tag: "Part of your world",
    text: "We're not just part of industry communities, we're right in the heart of them. We work hand-in-hand with workshops to understand your challenges and needs to let us explore how we can help you do more.",
    image: "/moto/comma/what_we_stand4.png",
  },
  {
    tag: "Knowledge to succeed",
    text: "We give you the confidence to keep your business, and your customers' vehicles, performing at their best. From digital tools to technical training, we provide you with the right knowledge at the right time.",
    image: "/moto/comma/what_we_stand3.png",
  },
  {
    tag: "Part of your world",
    text: "We're not just part of industry communities, we're right in the heart of them. We work hand-in-hand with workshops to understand your challenges and needs to let us explore how we can help you do more.",
    image: "/moto/comma/what_we_stand4.png",
  },
];

const slides = [values.slice(0, 2), values.slice(2, 4)];

export default function CommaValues() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  function goTo(i: number) {
    if (i === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 200);
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[90%]!">

        <div className="text-center justify-center flex flex-col items-center" data-aos="fade-up">
          <span className="content flex max-w-[280px] justify-center font-semibold rounded-full border bg-[#FD423926] border-[#FF4A43] px-4 py-1 text-[black] tracking-wider">
            <><Dot /> Product Range</>
          </span>
          <h2 className="mt-4 text-[48px] font-normal leading-tight text-[#1A1A1A]">
            What we stand for
          </h2>
          <p className="mx-auto mt-3 font-medium text-[18px] leading-7 text-[#666]">
            Creating value through quality products, technical expertise, and customer-focused service.
          </p>
        </div>

        <div className={`mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 transition-opacity duration-200 ${fading ? "opacity-0" : "opacity-100"}`}>
          {slides[active].map((v, i) => (
            <div
              key={`${active}-${i}`}
              className="flex flex-col justify-center 2xl:flex-row overflow-hidden rounded-sm bg-[#F5F5F5]"
            >
              {/* Image left */}
              <div className="relative 2-[100%] 2xl:w-[55%] min-h-[315px] min-w-[400px]">
                <Image
                  src={v.image}
                  alt={v.tag}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text right */}
              <div className="flex flex-col justify-center p-6 items-center 2xl:items-start">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FD423926] border border-[#FF4A43] px-3 py-1.5 text-[12px] font-semibold text-[#000000] w-fit">
                  <span className="h-1.5 w-1.5 text-black! rounded-full bg-[#FF4A43]" />
                  {v.tag}
                </span>
                <p className="mt-3 content text-[13px] leading-7 text-[#555]">{v.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="mt-8 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-3 rounded-full transition-all duration-300 ${
                i === active ? "bg-[#FF4A43] w-8" : "bg-[#D9D9D9] w-8"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
