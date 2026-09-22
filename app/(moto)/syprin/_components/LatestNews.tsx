"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionBadge from "./SectionBadge";
import Button from "./Button";

export default function LatestNews() {
  const [activeId, setActiveId] = useState(1);

  const articles = [
    {
      id: 1,
      image: "/moto/syprin/n1.png",
      featuredDate: "28 July 2026",
      listDate: "28 July 2026",
      comments: "24 Comments",
      featuredText:
        "We're exhibiting! Win 1 of 10 full-week passes to Automechanika 2026 From 8 to 12 September 2026, Automechanika Frankfurt opens its doors as the world's largest trade fair for the automotive industry. This year, we're exhibiting with our own stand for the very first time, in Hall 12.0, Stand Y26. And we want to celebrate [...]",
      shortText:
        "We're exhibiting at Automechanika Frankfurt 2026 — visit us in Hall 12.0, Stand Y26, and enter for a chance to win 1 of 10 full-week passes!",
    },
    {
      id: 2,
      image: "/moto/syprin/n3.png",
      featuredDate: "16 July 2026",
      listDate: "16 July 2025",
      comments: "18 Comments",
      featuredText:
        "Modern diesel engines are powerful, efficient, and durable—but they are also sensitive to contamination and fuel quality. Over time, residues, soot particles, moisture, and impurities accumulate in the fuel system. This leads to a loss of performance, increased fuel consumption, and damage to the injection system.",
      shortText:
        "Modern diesel engines are powerful, efficient, and durable—but they are also sensitive to contamination and fuel quality. Over time, residues, soot particles, moisture, [...]",
    },
    {
      id: 3,
      image: "/moto/syprin/n4.png",
      featuredDate: "25 May 2026",
      listDate: "25 May 2023",
      comments: "12 Comments",
      featuredText:
        "Imagine you go to your trusted hairdresser, take a seat in the chair, are offered a drink of your choice, and your hairdresser asks you, as always, how you would like your hair cut today. And then it happens: your hairdresser starts cutting your hair and wants to trim your sideburns with clippers. Out of the corner of your eye, [...]",
      shortText:
        "Syprin – The right shaving head oil if you want to treat your hair clippers to something special! Imagine you go to your trusted hairdresser, take a seat in the chair, [...]",
    },
  ];

  const featured = articles.find((a) => a.id === activeId) || articles[0];

  return (
    <section id="news" className="w-full bg-[#0D0D0D] py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44">
      <div className="custom-container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[90%] xl:max-w-[70%] mx-auto mb-10 xl:mb-12 min-[3800px]:mb-18" data-aos="fade-up">
          <SectionBadge text="News" center className="mb-3 min-[3800px]:mb-6" />
          <h2 className="text-[#F6F6F6] mb-4 min-[3800px]:mb-6">
            Latest Insights &amp; News
          </h2>
          <p className="text-[#CACACA] text-center leading-relaxed">
            Stay up to date with the latest SYPRIN news, product insights, automotive care tips, and upcoming events. Discover useful
            information, expert recommendations, and stories from the world of automotive and technical care.
          </p>
        </div>

        {/* 2-Column Grid (Left Card & Right Column) */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-10 min-[3800px]:gap-16 w-full">
          {/* Left Column: Big Featured Article Card */}
          <div
            className="w-full xl:w-1/2 flex flex-col"
            data-aos="fade-right"
          >
            <div className="bg-[#141414] border border-[#666666]/30 rounded-[8px] min-[3800px]:rounded-[16px] p-5 sm:p-6 min-[3800px]:p-10 flex flex-col justify-between h-full transition-all duration-300 hover:border-white/20 group">
              <div>
                {/* Banner Image (aspect-[780/394]) */}
                <div className="w-full aspect-[780/394] overflow-hidden rounded-[8px] min-[3800px]:rounded-[14px] mb-5 min-[3800px]:mb-8 bg-black">
                  <img
                    src={featured.image}
                    alt="Featured Article"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Meta Row: White Date, Divider, White Comments */}
                <div className="flex items-center gap-4 mb-4 min-[3800px]:mb-6">
                  <div className="flex items-center gap-2 font-bold text-[#F6F6F6]">
                    <img
                      src="/moto/syprin/cal.png"
                      alt="Date"
                      className="w-[18px] h-[18px] min-[3800px]:w-[26px] min-[3800px]:h-[26px] object-contain shrink-0"
                    />
                    <span className="navbar font-bold text-[#F6F6F6]">{featured.featuredDate}</span>
                  </div>

                  {/* Vertical Divider line */}
                  <div className="w-[2px] h-[20px] min-[3800px]:h-[30px] bg-[#F6F6F6] rounded-[10px]" />

                  <div className="flex items-center gap-2 font-bold text-[#F6F6F6]">
                    <img
                      src="/moto/syprin/msg.png"
                      alt="Comments"
                      className="w-[18px] h-[18px] min-[3800px]:w-[26px] min-[3800px]:h-[26px] object-contain shrink-0"
                    />
                    <span className="navbar font-bold text-[#F6F6F6]">{featured.comments}</span>
                  </div>
                </div>

                {/* Excerpt */}
                <p className="text-[#CACACA] mb-6 min-[3800px]:mb-8 leading-relaxed">
                  {featured.featuredText}
                </p>
              </div>

              {/* Action Link: White "Continue Reading" with white arrow */}
              <Link
                href="#"
                className="inline-flex items-center gap-2 button text-[#F6F6F6] hover:text-[#A12624] transition-colors mt-auto group/link pt-2"
              >
                <span className="text-[#F6F6F6] group-hover/link:text-[#A12624] transition-colors">Continue Reading</span>
                <ArrowRight
                  size={20}
                  strokeWidth={2.5}
                  className="transition-transform duration-200 group-hover/link:translate-x-1 text-[#F6F6F6] group-hover/link:text-[#A12624] min-[3800px]:w-7 min-[3800px]:h-7"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Side Articles vertically centered relative to left card + View All Button */}
          <div
            className="w-full xl:w-1/2 flex flex-col justify-center my-auto gap-4 sm:gap-5 min-[3800px]:gap-6"
            data-aos="fade-left"
          >
            <div className="flex flex-col gap-3.5 sm:gap-4 min-[3800px]:gap-5">
              {articles.map((article) => {
                const isSelected = article.id === activeId;
                return (
                  <div
                    key={article.id}
                    onClick={() => setActiveId(article.id)}
                    className={`bg-[#141414] rounded-[8px] min-[3800px]:rounded-[16px] p-4 sm:p-5 min-[3800px]:p-7 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 transition-all duration-300 group cursor-pointer select-none ${
                      isSelected
                        ? "border-2 border-[#A12624]"
                        : "border border-[#666666]/30 hover:border-white/30"
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="w-full sm:w-[190px] xl:w-[220px] min-[3800px]:w-[300px] h-[130px] sm:h-[110px] min-[3800px]:h-[160px] shrink-0 overflow-hidden rounded-[8px] min-[3800px]:rounded-[12px] bg-black">
                      <img
                        src={article.image}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-white font-bold mb-1.5">
                        <img
                          src="/moto/syprin/cal.png"
                          alt="Date"
                          className="w-[16px] h-[16px] min-[3800px]:w-[24px] min-[3800px]:h-[24px] object-contain shrink-0"
                        />
                        <span className="navbar font-bold text-white">{article.listDate}</span>
                      </div>
                      <p className="text-[#CACACA] line-clamp-3 leading-relaxed">
                        {article.shortText}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* View All Button */}
            <div className="pt-2">
              <Button
                text="View All"
                href="#news"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
