"use client";

import React from "react";
import Button from "./Button";
import Container from "./Container";
import Typography from "./Typography";

const newsItems = [
  {
    id: 1,
    date: "Monday, 18th August 2025",
    title:
      "Adrenalin Motorsport Team Mainhattan Wheels defends the lead with victory",
    image: "/moto/veedol-moto/Rectangle 31.jpg",
    href: "#news",
  },
  {
    id: 2,
    date: "Friday, 25th July 2025",
    title: "Innovative milestone: VEEDOL launches high-performance",
    image: "/moto/veedol-moto/Rectangle 32 (1).jpg",
    href: "#news",
  },
  {
    id: 3,
    date: "Monday, 21st July 2025",
    title: "A Close Call",
    image: "/moto/veedol-moto/Rectangle 33.jpg",
    href: "#news",
  },
];

export default function News() {
  return (
    <section className="w-full py-14 md:py-20 bg-[#f5f5f5]" id="news">
      <Container>

        {/* ── Section Header ── */}
        <div className="text-center mb-10 md:mb-14 space-y-3" data-aos="fade-up">
          {/* Heading — matches screenshot: mixed weight, italic serif feel */}
          <Typography as="h2" variant="h2" color="dark" weight="bold">
            Our Latest Insights &amp; News
          </Typography>
          {/* Red underline — short, centered */}
          <div className="w-[30%] h-[3px] bg-primary mx-auto" />
          {/* Sub-copy — two lines, centered, lighter weight */}
          <Typography as="p" variant="h6" color="body" weight="normal" align="center" className="max-w-[90%] font-dm mx-auto">
            Discover fresh insights, thought leadership, and key developments from our team.
            <br className="hidden sm:block" />
            Keep up with the latest news and trends driving change across the industry.
          </Typography>
        </div>

        {/* ── News Cards Grid ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5 space-y-3">
                {/* Date */}
                <Typography as="p" variant="h7" color="muted" className="font-dm leading-none">
                  {item.date}
                </Typography>

                {/* Title */}
                <Typography as="h4" variant="h4" color="dark" weight="bold" className="leading-snug flex-1">
                  {item.title}
                </Typography>

                {/* CTA */}
                <div className="pt-1">
                  <Button text="Read More" variant="primary" href={item.href} />
                </div>
              </div>
            </article>
          ))}
        </div>

      </Container>
    </section>
  );
}
