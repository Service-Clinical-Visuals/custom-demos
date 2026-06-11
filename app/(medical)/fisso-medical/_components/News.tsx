"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";
import Typography from "./Typography";

export default function News() {
  const [email, setEmail] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with email: ${email}`);
      setEmail("");
    }
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm flex flex-col h-full group hover:shadow-md hover:-translate-y-1 transition-all duration-300"
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

        {/* Subscribe Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">

          {/* LEFT */}
          <div className="flex items-center gap-5 flex-1">

            {/* Icon */}
            <div className="w-12 h-12 xl:w-15 xl:h-15 flex items-center justify-center">
              <Mail size={22} className="text-gray-800 xl:h-10 xl:w-19" />
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-gray-300" />

            {/* Text */}
            <div className="flex flex-col">
              <Typography
                variant="h4"
                weight="semibold"
                className="text-gray-800 leading-tight"
              >
                Stay Updated with FISSO Innovations
              </Typography>

              <Typography
                variant="body"
                color="muted"
                className="text-[13px] mt-1 leading-relaxed"
              >
                Subscribe to receive the latest news, product updates, and
                industry insights from FISSO.
              </Typography>
            </div>

          </div>

          {/* RIGHT */}
          <form onSubmit={handleSubmit} className="w-full lg:w-auto">
            <div className="flex items-center w-full lg:w-[420px] bg-white border border-[#9C0B38] rounded-md overflow-hidden">

              {/* Input + icon */}
              <div className="flex items-center flex-grow px-3">
                <Mail size={20} className="text-gray-400 mr-2" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 text-sm text-gray-700 bg-transparent outline-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-[#9C0B38] text-white px-6 py-2.5 text-sm font-semibold hover:bg-[#85082e] transition"
              >
                Subscribe
              </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}