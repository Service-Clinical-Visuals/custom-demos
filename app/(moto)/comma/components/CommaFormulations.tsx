"use client";

import { ArrowLeft, ArrowRight, Dot } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const products = [
  {
    title: "Engine Oils",
    text: "Engine oils are the life blood of any vehicle and play a vital role in keeping things running smoothly. Every engine is different, that's why our extensive range features different formulations.",
    image: "/moto/comma/what_we_stand1.png",
  },
  {
    title: "Gear and Transmission Oils",
    text: "Formulated to keep vehicles in great shape, our gear and transmission oils seamlessly power transmissions and help your equipment last longer.",
    image: "/moto/comma/what_we_stand2.png",
  },
  {
    title: "Brake Fluids",
    text: "Precision-engineered brake fluids that meet and exceed OEM specifications, ensuring reliable stopping power in all conditions for both passenger and commercial vehicles.",
    image: "/moto/comma/aboutus_carpart.png",
  },
  {
    title: "Coolants & Antifreeze",
    text: "Our advanced coolant formulations protect engines against overheating, corrosion, and frost — keeping vehicles running at optimal temperature year-round.",
    image: "/moto/comma/aboutus_comp.png",
  },
];

const slideVariants: import("framer-motion").Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.32, 0.72, 0, 1] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.45, ease: [0.32, 0.72, 0, 1] },
  }),
};

export default function CommaFormulations() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 2 + products.length) % products.length);
  };

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 2) % products.length);
  };

  const visible = [products[index], products[(index + 1) % products.length]];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1550px] px-10">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[25fr_75fr] items-center">
          <div>
            <div data-aos="fade-right">
            <span className="content flex max-w-[220px] justify-center items-center rounded-full border bg-[#FD423926] border-[#FF4A43] px-4 py-1 text-[black] uppercase tracking-wider">
              <><Dot /> Product Range</>
            </span>
              <h2 className="mt-4 text-[38px] font-bold leading-tight text-[#1A1A1A]">
                Our Formulations
              </h2>
            </div>

            <div data-aos="fade-left" className="flex flex-col gap-6 lg:pb-2">
              <p className="text-[14px] leading-7 text-[#555]">
                Knowing which products are right for different vehicles, keeping the right products stocked, and having confidence in the products you use can be time consuming and complicated.
                <br /><br />
                From engine and gear oils to brake fluids, to maintenance products and so much more, our products have been precision crafted alongside partner workshops to make sure they're just what you need to get the job done right.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center bg-[#FD4239] text-white hover:brightness-110 transition-all"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center bg-[#FD4239] text-white hover:brightness-110 transition-all"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {visible.map((p) => (
                  <div key={p.title} className="group relative overflow-hidden">
                    <div className="relative aspect-16/10 w-full overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/55" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-[22px] font-bold text-white">{p.title}</h3>
                        <p className="mt-2 text-[13px] leading-6 text-white/80">{p.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
