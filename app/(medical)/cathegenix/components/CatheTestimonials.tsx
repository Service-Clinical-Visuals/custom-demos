"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "aos/dist/aos.css";

const testimonials = [
  {
    title: "Visit CatheGenix at WHX Dubai 2026 - Booth N23 E79",
    date: "February 9, 2026",
    content:
      "CatheGenix will be exhibiting at WHX Dubai 2026 held at the Dubai Exhibition Centre from February 9th to 12th, 2026. We cordially invite you to visit our booth N23 E79 for in-depth exchanges and further communication..",
    image: "/medical/cathegenix/cathe-testimonial-1.png",
  },
  {
    title: "CatheGenix at FIME 2025: Showcasing Innovative Urological Solutions",
    date: "June 16, 2025",
    content:
      "FIME 2025—the Florida International Medical Expo—took place from June 11 to 13, 2025, at the Miami Beach Convention Center. The CatheGenix team brought a variety of products to this exhibition. As the largest medical trade event in the Americas, it drew over 16,000 professionals...",
    image: "/medical/cathegenix/cathe-testimonial-2.png",
  },
  {
    title:
      "George's Story: The CatheGenix Commitment - Bridging the Gap for All Patients",
    date: "January 22, 2025",
    content:
      "In a bustling city, nestled among a network of renowned medical institutions, CatheGenix stands as a beacon of innovation and hope. Known for its advanced catheter solutions, it is not just a company focused on cutting-edge technology...",
    image: "/medical/cathegenix/cathe-testimonial-3.jpg",
  },
  {
    title:
      "Dr. James Tyler: Revolutionizing Kidney Stone Treatment with CatheGenix™ FlexUra™ Ureteral Stents",
    date: "January 22, 2025",
    content:
      "Kidney stones are a common yet excruciating condition. During an acute attack, the pain can be described as knife-like, ranking at level eleven on the medical pain scale—a level that is nearly unbearable for most patients...",
    image: "/medical/cathegenix/cathe-testimonial-4.jpg",
  },
  {
    title: "Join us at Arab Health 2025",
    date: "January 22, 2025",
    content:
      "CatheGenix will be present at Arab Health 2025 at the Dubai World Trade Center from Jan. 27 to Jan. 30, 2025. Our booth number is H8.A59. We look forward to seeing you there!",
    image: "/medical/cathegenix/cathe-testimonial-5.png",
  },
];

export default function CatheTestimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = (dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setVisible(false);

    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) =>
        dir === "right"
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length
      );
      setVisible(true);
      setAnimating(false);
    }, 320);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const item = testimonials[current];

  const slideClass = visible
    ? "opacity-100 translate-x-0"
    : direction === "right"
      ? "opacity-0 -translate-x-6"
      : "opacity-0 translate-x-6";

  return (
    <section className="overflow-hidden bg-[#F7F7F5] py-24 cathegenix-root">
      <div className="custom-container px-8 lg:px-14">
        {/* TOP SECTION */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT CONTENT */}
          <div className="max-w-[680px]">
            <div data-aos="fade-up">
              <h2 className="text-4xl font-semibold tracking-[-2px] text-[#2B2B2B]">
                News & Events
              </h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="150">
              <p className="mt-7 max-w-[620px] text-[16px] leading-[2] text-[#666666]">
                Stay connected with CatheGenix for the latest updates, global
                exhibitions, product innovations, and inspiring healthcare
                stories shaping the future of urological care.
              </p>
            </div>
          </div>

          {/* FILTER BUTTONS */}
          <div
            data-aos="fade-left"
            className="flex flex-col gap-4 lg:items-end"
          >
            <button className="cursor-pointer flex h-[52px] min-w-[220px] items-center justify-center rounded-full bg-[#0047A6] px-8 text-[16px] font-semibold text-white shadow-[0_10px_20px_rgba(0,71,166,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#003C92]">
              Patient Health
            </button>
            <button className="cursor-pointer flex h-[52px] min-w-[280px] items-center justify-center rounded-full bg-[#0047A6] px-8 text-[16px] font-semibold text-white shadow-[0_10px_20px_rgba(0,71,166,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#003C92]">
              Medical Professionals
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="mt-20 flex items-center gap-6">
          {/* LEFT NAV */}
          <button
            onClick={() => navigate("left")}
            disabled={animating}
            className="cursor-pointer hidden h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#0047A6] text-white shadow-[0_10px_20px_rgba(0,71,166,0.18)] transition-all duration-300 hover:scale-105 disabled:opacity-50 lg:flex"
          >
            <ArrowLeft size={20} strokeWidth={2.8} />
          </button>

          {/* CARD */}
          <div
            className={`group flex-1 overflow-hidden rounded-[28px] border border-[#ECECEC] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]`}
          >
            <div
              className={`grid items-center lg:grid-cols-[0.85fr_1.4fr] transition-all duration-300 ease-out ${slideClass}`}
            >
              {/* IMAGE */}
              <div className="p-5">
                <div className="relative overflow-hidden rounded-[22px]">
                  <div className="aspect-[1.15/0.65] w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/[0.03]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%)]" />
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-8 py-10 lg:px-10">
                <h3 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-1px] text-[#2B2B2B]">
                  {item.title}
                </h3>
                <p className="mt-5 text-[16px] font-medium text-[#888888]">
                  {item.date}
                </p>
                <p className="mt-6 max-w-[760px] text-[16px] leading-[2] text-[#666666]">
                  {item.content}
                </p>
                <button className="cursor-pointer group/link mt-8 inline-flex items-center gap-2 text-base font-semibold text-[#0047A6]">
                  Learn More
                  <ArrowRight
                    size={17}
                    strokeWidth={2.8}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT NAV */}
          <button
            onClick={() => navigate("right")}
            disabled={animating}
            className="cursor-pointer hidden h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#0047A6] text-white shadow-[0_10px_20px_rgba(0,71,166,0.18)] transition-all duration-300 hover:scale-105 disabled:opacity-50 lg:flex"
          >
            <ArrowRight size={20} strokeWidth={2.8} />
          </button>
        </div>

        {/* DOT INDICATORS */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (animating || i === current) return;
                setDirection(i > current ? "right" : "left");
                setAnimating(true);
                setVisible(false);
                timeoutRef.current = setTimeout(() => {
                  setCurrent(i);
                  setVisible(true);
                  setAnimating(false);
                }, 320);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-[#0047A6]"
                  : "w-2 bg-[#0047A6]/30 hover:bg-[#0047A6]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
