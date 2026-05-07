// components/TestimonialSection.tsx

"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AOS from "aos";

import "aos/dist/aos.css";

const testimonials = [
    {
        img : "/hr-healthcare/hr-testimonial-1.png",
        quote: `"The company's strong investment in employee development enabled me to earn my Project Management Professional (PMP) certification, fostering both my personal and professional growth. This culture of support motivates me and others to continuously advance our expertise and contribute to the organization's success."`,
        name: "Corey Righter",
        title: "Director, Project Management"
    },
    {
        img : "/hr-healthcare/hr-testimonial-2.png",
        quote: `"Having spent more than three decades in specialty urology and witnessing considerable change, I appreciate working for an organization adept at navigating shifts with an unwavering focus on customers. Leaderships accessibility and understanding of these evolving needs create an empowering and supportive work environment."`,
        name: "Randy Golden",
        title: "Regional Sales Director, Specialty Urology"
    },
    {
        img: "/hr-healthcare/hr-testimonial-3.png",
        quote: `"Our passion for an exceptional employee experience is reflected in our innovative programs and practical tools, such as the Blue Book and the Impact Operating Model. These frameworks promote clarity, purposeful growth, and new opportunities, while unifying teams and empowering individuals to advance their own goals alongside organizational objectives."`,
        name: "Stephanie Kennedy",
        title: "Chief People Officer"
    },
    {
        img: "/hr-healthcare/hr-testimonial-4.png",
        quote: `"As a purpose-fide organization—a concept we developed to reflect our unified commitment to growth and positive impact—we bring together personal values and shared purpose. By bringing out the best in our people, we provide quality general medical and urological solutions that support healthcare professionals and people throughout their healthcare journey."`,
        name: "Colby Weisman",
        title: "Chief Executive Officer"
    }
]

export default function HrTestimonial() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  function handlePrev() {
    if (animating) return;
    setAnimating(true);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setAnimating(false), 500);
  }

  function handleNext() {
    if (animating) return;
    setAnimating(true);
    setCurrent((c) => (c + 1) % testimonials.length);
    setTimeout(() => setAnimating(false), 500);
  }

  return (
    <section className="relative overflow-hidden bg-[#F3F3F3] py-20">
      {/* CONTAINER */}
      <div className="mx-auto max-w-350 px-6">
        {/* TITLE */}
        <div
          data-aos="fade-up"
          className="flex justify-center"
        >
          <h2 className="text-center text-[46px] font-semibold tracking-[-1.5px] text-[#111111]">
            Hear From Our Happy Clients
          </h2>
        </div>

        {/* TESTIMONIAL WRAPPER */}
        <div className="relative mt-10">
          {/* LEFT ARROW */}
          <button
            onClick={handlePrev}
            data-aos="fade-right"
            data-aos-delay="120"
            className="absolute cursor-pointer -left-7 top-1/2 z-30 flex h-13 w-13 -translate-y-1/2 items-center justify-center rounded-full bg-[#F8F8F8] shadow-[0_6px_14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft
              size={24}
              strokeWidth={1.8}
              className="text-[#111111]"
            />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={handleNext}
            data-aos="fade-left"
            data-aos-delay="120"
            className="absolute cursor-pointer -right-7 top-1/2 z-30 flex h-13 w-13 -translate-y-1/2 items-center justify-center rounded-full bg-[#F8F8F8] shadow-[0_6px_14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:scale-105"
          >
            <ArrowRight
              size={24}
              strokeWidth={1.8}
              className="text-[#111111]"
            />
          </button>

          {/* CARD TRACK */}
          <div
            data-aos="zoom-in"
            data-aos-delay="180"
            className="overflow-hidden rounded-[22px]"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="min-w-full grid min-h-105 lg:grid-cols-[340px_1fr]"
                >
                  {/* LEFT IMAGE */}
                  <div className="relative overflow-hidden">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#041B35]/8" />
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="flex flex-col justify-between bg-[#041A34] px-10 py-12 lg:px-14">
                    {/* QUOTE */}
                    <div>
                      <p className="text-base italic leading-[2.1] text-white/88">
                        {t.quote}
                      </p>
                      <div className="mt-12 h-px w-full bg-white/20" />
                    </div>

                    {/* USER INFO */}
                    <div className="pt-10">
                      <h3 className="text-[38px] font-semibold tracking-[-1px] text-white">
                        {t.name}
                      </h3>
                      <p className="mt-2 text-[16px] text-white/80">
                        {t.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
