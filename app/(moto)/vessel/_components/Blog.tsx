"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Typography from "./Typography";

const posts = [
  {
    image: "/moto/vessel/news1.png",
    title: "Thank you for visiting the VESSEL booth at the BATIMAT 2024 show",
    body: "The VESSEL Extractor was a great success at the recent Batimat show. Thank you all for your many visits to our booth, your enthusiasm, and your interest, which deeply moved us. They can even be found on TikTok. We are delighted to see our product attracting so much attention on different platforms.",
    href: "#",
  },
  {
    image: "/moto/vessel/news2.png",
    title: "The VESSEL Group celebrates its 100th anniversary!",
    body: "At present, our goal is to turn to the challenges of tomorrow. Based on our experience and our high quality standards, we now wish to accelerate our presence on a global scale. Already present in Europe on the industrial sector, for many years.",
    href: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="w-full py-16 md:py-20 bg-white overflow-hidden relative">
      <div className="custom-container relative z-10 flex flex-col items-center gap-5 px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-y-2" data-aos="fade-up">
          <Typography variant="h6" color="primary" weight="bold" className="text-[#cc0000] text-sm">
            • Latest News & Insights
          </Typography>
          <Typography variant="h2" color="dark" weight="bold">
            Discover What's New at VESSEL
          </Typography>
        </div>

        {/* Sub-heading */}
        <Typography
          variant="p"
          color="muted"
          className="leading-relaxed xl:max-w-[70%] text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Explore the latest developments, product launches, industry events and company updates from VESSEL Europe. Stay informed about new tools, innovative solutions, upcoming exhibitions and the latest activities shaping VESSEL's presence across the European market.
        </Typography>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-4">
          {posts.map(({ image, title, body, href }, i) => (
            <div
              key={title}
              className="flex flex-col sm:flex-row bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Card Image — left portion */}
              <div className="w-full sm:w-[45%] lg:w-[45%] aspect-square sm:aspect-auto shrink-0 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card content — right portion */}
              <div className="flex flex-col w-full sm:w-[55%] lg:w-[55%] justify-center gap-4 p-6 sm:p-8 relative">
                <Typography variant="h3" color="dark" weight="bold" className="text-lg sm:text-xl leading-snug pr-4">
                  {title}
                </Typography>
                <Typography variant="p" color="muted" className="leading-relaxed text-sm">
                  {body}
                </Typography>
                <a
                  href={href}
                  className="inline-flex items-center gap-1.5 group mt-2 w-fit"
                >
                  <span className="text-[#cc0000] font-semibold text-sm group-hover:opacity-80 transition-opacity">
                    Read More
                  </span>
                  <ArrowRight
                    className="w-4 h-4 text-[#cc0000] group-hover:translate-x-1 transition-transform duration-200"
                    strokeWidth={2}
                  />
                </a>

                {/* Decorative Vertical Divider — sm+ only */}
                <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-6 w-1 h-20 bg-[#cc0000]" />
              </div>
            </div>
          ))}
        </div>

        {/* Dots (just decorative as in image) */}
        <div className="flex gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-[#cc0000]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>

      </div>
    </section>
  );
};

export default Blog;

