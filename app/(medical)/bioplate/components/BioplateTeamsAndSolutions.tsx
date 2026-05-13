"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Check, CornerUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const teamMembers = [
  {
    name: "Thomas Hopson",
    role: "President",
    image: "/bioplate/bioplate-teams-1.png",
  },
  {
    name: "Erin Hickey",
    role: "Business Operations",
    image: "/bioplate/bioplate-teams-2.png",
  },
  {
    name: "Jamie Press",
    role: "Human Resources",
    image: "/bioplate/bioplate-teams-3.png",
  },
    {
    name: "Alan Zhu",
    role: "Global Sales",
    image: "/bioplate/bioplate-teams-4.png",
  },
  {
    name: "Yoon Choi",
    role: "Quality & Regulations",
    image: "/bioplate/bioplate-teams-5.png",
  },
];

const screwItems = [
  "1.2mm, 1.5mm, and 2.0mm diameter self tapping screws",
  "1.5mm and 1.9mm diameter self drilling screws",
];

const plateItems = [
  "1.2mm, 1.5mm, and 2.0mm diameter self tapping screws",
  "1.5mm and 1.9mm diameter self drilling screws",
];

export default function BioplateTeamAndSolutions() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(true);

  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
    requestAnimationFrame(updateScrollState);
  }, []);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanGoBack(el.scrollLeft > 1);
    setCanGoForward(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  const getScrollAmount = () => {
    const container = scrollRef.current;
    if (!container) return 0;
    const firstCard = container.firstElementChild as HTMLElement;
    return firstCard ? firstCard.offsetWidth + 32 : container.clientWidth / 3;
  };

  const handlePrev = () => {
    scrollRef.current?.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  };

  const handleNext = () => {
    scrollRef.current?.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-[#f6f6f4]">
      {/* ===================================================== */}
      {/* TEAM SECTION */}
      {/* ===================================================== */}

      <div className="mx-auto max-w-[1600px] px-8 py-24 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[320px_1fr]">
          {/* LEFT CONTENT */}
          <div className="pt-10">
            <div data-aos="fade-up">
              <h2 className="text-4xl font-semibold tracking-[-1.8px] text-[#232323]">
                Meet Our Team
              </h2>
            </div>

            <div data-aos="fade-up" data-aos-delay="150">
              <p className="mt-8  text-[16px] leading-[2] text-[#5d5d5d]">
                For Over Two Decades, The Bioplate Team Has Helped To Set The
                Standard Of Care For Cranial And Maxillofacial Fixation With
                Excellent Products And Superior Service.
              </p>
            </div>

            {/* NAVIGATION */}
            <div
              data-aos="fade-up"
              data-aos-delay="250"
              className="mt-12 flex items-center gap-3"
            >
              <button
                onClick={handlePrev}
                disabled={!canGoBack}
                className="cursor-pointer flex h-[62px] w-[62px] items-center justify-center rounded-[10px] bg-[#006D53] text-white transition-all duration-300 hover:bg-[#005844] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ArrowLeft size={20} strokeWidth={2.5} />
              </button>

              <button
                onClick={handleNext}
                disabled={!canGoForward}
                className="cursor-pointer flex h-[62px] w-[62px] items-center justify-center rounded-[10px] bg-[#006D53] text-white transition-all duration-300 hover:bg-[#005844] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* TEAM CARDS */}
          <div className="overflow-hidden">
            <div
              ref={scrollRef}
              onScroll={updateScrollState}
              className="flex gap-8 overflow-x-auto [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none" }}
            >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="flex-none w-full md:w-[calc((100%-2rem)/2)] xl:w-[calc((100%-4rem)/3)] group overflow-hidden rounded-[18px] border border-[#E6E6E6] bg-[#f8f8f8] shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2"
              >
                {/* IMAGE */}
                <div className="overflow-hidden p-3">
                  <div className="overflow-hidden rounded-[16px]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="px-6 pb-7 pt-2 text-center">
                  <h3 className="text-xl font-semibold tracking-[-1px] text-[#1f1f1f]">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-base font-medium text-[#0A8A74]">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* SOLUTIONS SECTION */}
      {/* ===================================================== */}

      <div className="relative overflow-hidden bg-[#006D53] py-24">
        {/* SUBTLE DEPTH */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_40%)]" />

        <div className="relative z-10 mx-auto grid max-w-[1600px] items-stretch gap-10 px-8 lg:grid-cols-[1.1fr_1fr] lg:px-16">
          {/* LEFT VIDEO AREA */}
          <div
            data-aos="fade-right"
            className="relative h-full overflow-hidden rounded-[24px]"
          >
            <div className="h-full min-h-[320px] w-full rounded-[24px] overflow-hidden">
              <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* TITLE */}
            <div data-aos="fade-up">
              <h2 className="text-4xl font-semibold tracking-[-1.5px] text-white">
                Our Solutions
              </h2>

              <p className="mt-3 max-w-[620px] text-[16px] leading-[1.95] text-white/80">
                Explore Our Advanced Range Of Screws, Plates, Drills, Trays, And
                Instruments Built For Modern Healthcare Solutions.
              </p>
            </div>

            {/* CARDS */}
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              {/* SCREWS */}
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="rounded-[20px] bg-[#F5F5F5] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-center text-xl font-semibold text-[#0B7A63]">
                  Screws
                </h3>

                <div className="mt-4 space-y-5">
                  {screwItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="mt-[2px] flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#2E8B73]">
                        <Check
                          size={18}
                          strokeWidth={2.8}
                          className="text-white"
                        />
                      </div>

                      <p className="text-base leading-[1.8] text-[#303030]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PLATES */}
              <div
                data-aos="fade-up"
                data-aos-delay="250"
                className="rounded-[20px] bg-[#F5F5F5] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-center text-xl font-semibold text-[#0B7A63]">
                  Plates
                </h3>

                <div className="mt-4 space-y-5">
                  {plateItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="mt-[2px] flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#2E8B73]">
                        <Check
                          size={18}
                          strokeWidth={2.8}
                          className="text-white"
                        />
                      </div>

                      <p className="text-base leading-[1.8] text-[#303030]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <div data-aos="fade-up" data-aos-delay="350" className="mt-5">
              <button className="cursor-pointer group flex h-[58px] items-center gap-5 rounded-[10px] bg-white px-8 text-base font-bold text-[#1e1e1e] transition-all duration-300 hover:scale-[1.03]">
                Explore Products

                <span className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]">
                  <CornerUpRight size={18} strokeWidth={2.4} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}