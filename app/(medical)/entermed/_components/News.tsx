"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function News() {
  const newsItems = [
    {
      title: "The Flexible Video Rhinolaryngoscope",
      path: "/entermed/news-1.png",
      description: "The Flexible Video Rhinolaryngoscope features a tiny image sensor and four LEDs integrated into its distal end with a diameter of 3.4mm, offering high-quality imaging."
    },
    {
      title: "EROC GLOBAL FORUM- WTC Dubai",
      path: "/entermed/news-2.png",
      description: "The annual EROC conference continues to be a transformative event for otorhinolaryngology and audiology professionals. This year's programme features a wide..."
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24" id="news">
      <div className="container mx-auto px-4 md:px-8 w-full">

        {/* Header */}
        <div className="text-center max-w-8xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[34px] font-bold !text-primary mb-6 flex items-center justify-center gap-3">
            <span className="!text-primary text-2xl leading-none pb-1">&bull;</span> Latest News
          </h2>
          <p className="text-gray-500 text-[15px] leading-[1.8]">
            Explore our latest news, updates, and achievements as we continue to innovate and deliver excellence across every project.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {newsItems.map((item, idx) => (
            <div key={idx} className="bg-[#F5333F0D] rounded-[24px] p-6 flex flex-col sm:flex-row gap-6 items-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              {/* Image */}
              <div className="w-full sm:w-[260px] md:w-[280px] h-[180px] flex-shrink-0 bg-white rounded-[16px] shadow-sm border border-gray-200 flex items-center justify-center overflow-hidden relative">
                <img src={item.path} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow py-2">
                <h3 className="text-gray-900 font-bold text-[18px] mb-3 leading-snug">{item.title}</h3>
                <p className="text-gray-500 text-[14.5px] leading-[1.7] mb-6 flex-grow">
                  {item.description}
                </p>

                {/* <Button variant="primary-outline" size="sm">Read More</Button> */}
                <Button
                  variant="primary-outline"
                  size="sm"
                  className="!bg-secondary! hover:!bg-secondary"
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
