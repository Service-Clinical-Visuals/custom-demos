"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import Button from "./Button";

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "US CAR EVENT, GERA, GERMANY",
      date: "10. June 2026",
      image: "/moto/emka/news1.png"
    },
    {
      id: 2,
      title: "PRICE ADJUSTMENTS",
      date: "22. May 2026",
      image: "/moto/emka/news2.png"
    },
    {
      id: 3,
      title: "WERK 80 AND EMKA",
      date: "09. May 2026",
      image: "/moto/emka/news3.png"
    },
    {
      id: 4,
      title: "BESKO IN WUPPERTAL AND HERNE",
      date: "05. May 2026", // Assuming a date for formatting consistency
      image: "/moto/emka/news4.png"
    }
  ];

  return (
    <section id="news" className="relative w-full py-20 lg:py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <div className="flex flex-col max-w-5xl">
            <Typography variant="h2" color="dark" className="font-bebas tracking-wide uppercase mb-4">
              LATEST NEWS & UPDATES
            </Typography>
            <Typography variant="body" color="body" className="font-exo    leading-relaxed block text-sm">
              Discover the latest happenings at EMKA, from product launches and industry events to customer success stories and company milestones. Our news section keeps you informed about the people, partnerships, innovations, and achievements that continue to drive our growth and success.
            </Typography>
          </div>
          <div className="shrink-0">
            <Button text="LATEST UPDATES" variant="primary" showIcon={true} />
          </div>
        </div>

        <hr className="border-t border-gray-200 w-full mb-10" />

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col group cursor-pointer h-full">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark Gradient Overlay at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              </div>

              {/* Text Container */}
              <div className="p-5 flex flex-col flex-1">
                <Typography variant="h4" color="dark" weight="normal" className="font-bebas tracking-tight  uppercase font-bold mb-2 line-clamp-2">
                  {item.title}
                </Typography>
                <Typography variant="body" color="body" className="font-exo  opacity-70 mt-auto">
                  {item.date}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-1.5 bg-primary skew-x-[-25deg]"></div>
          <div className="w-8 h-1.5 bg-gray-300 skew-x-[-25deg]"></div>
          <div className="w-8 h-1.5 bg-gray-300 skew-x-[-25deg]"></div>
        </div>
      </Container>
    </section>
  );
}
