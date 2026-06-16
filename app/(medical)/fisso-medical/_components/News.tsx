"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";
import Typography from "./Typography";

export default function News() {


  const newsItems = [
    {
      id: 1,
      image: "/medical/fisso-medical/news1.png",
      date: "30. March 2026",
      title: "The New FISSO Patient Positioning System",
      snippet:
        "Discover the new products in the patient positioning category",
    },
    {
      id: 2,
      image: "/medical/fisso-medical/news2.png",
      date: "28. February 2025",
      title: "Interview with our CEO about AI",
      snippet:
        "In which areas are you planning to integrate automation or AI tools?...",
    },
    {
      id: 3,
      image: "/medical/fisso-medical/news3.png",
      date: "9. December 2024",
      title: "New Subsidiary in the USA",
      snippet:
        "We are pleased to share exciting news that marks an important...",
    },
    {
      id: 4,
      image: "/medical/fisso-medical/news4.png",
      date: "14. November 2023",
      title: "Fall Company Event",
      snippet:
        "This year's fall event took us to the Zwicky-Areal in Wallisellen...",
    },
  ];




  return (
    <section
      id="news"
      className="w-full flex justify-center px-3 sm:px-4 lg:px-6 pt-16 bg-white"
    >
      <div className="w-full max-w-[1400px] 2xl:max-w-[1760px] mx-auto flex flex-col gap-14">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Typography variant="h2" weight="semibold" className="mb-4">
            Our News
          </Typography>
          <Typography variant="body" color="muted">
            Stay updated with the latest news, innovations, events, and
            milestones from FISSO as we continue to advance precision
            engineering and medical support solutions worldwide.
          </Typography>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 p-2 xl:p-3 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border  border-gray-100 rounded-3xl overflow-hidden shadow-sm flex flex-col h-full group hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="p-4">
                <div className="w-full h-[180px] sm:h-[200px] lg:h-[240px] xl:h-[270px] rounded-xl overflow-hidden ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover shadow-[0_6px_16px_rgba(156,163,175,0.25)]  object-center scale-[1.08]"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">

                {/* Title */}
                <Typography
                  variant="h4"
                  weight="bold"
                  className="text-[15px] leading-snug min-h-[44px] group-hover:text-[#9C0B38] transition-colors"
                >
                  {item.title}
                </Typography>

                {/* Date */}
                <Typography
                  variant="h6"
                  color="none"
                  className="text-[13px] text-gray-400 mt-2 mb-3 block"
                >
                  {item.date}
                </Typography>
                <hr className="h-px w-full border-gray-200 mb-2" />

                {/* Description */}
                <Typography
                  variant="body"
                  color="muted"
                  className="text-[13px] leading-relaxed line-clamp-3 flex-grow"
                >
                  {item.snippet}
                </Typography>

                {/* Read More */}
                <Typography
                  as="a"
                  variant="body"
                  color="primary"
                  href={`#news-${item.id}`}
                  className="font-semibold text-[18px] mt-4 hover:underline block"
                >
                  Read More &gt;&gt;
                </Typography>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}