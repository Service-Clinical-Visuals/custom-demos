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
      snippet: "Discover the new products in the patient positioning category",
    },
    {
      id: 2,
      image: "/medical/fisso-medical/news2.png",
      date: "28. February 2025",
      title: "Interview with our CEO about AI",
      snippet:
        "In which areas are you planning to integrate automation or AI tools?....",
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
        "This year's fall event took us to the Zwicky-Areal in Wallisellen....",
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
      className="w-full flex justify-center px-3 sm:px-4 lg:px-6 2xl:px-8 py-16 bg-white border-t border-gray-50"
    >
      <div className="w-full max-w-[1400px] 2xl:max-w-[1760px] flex flex-col gap-12 sm:gap-16">
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <Typography
            variant="h2"
            color="dark"
            weight="semibold"
            className="mb-4"
          >
            Our News
          </Typography>
          <Typography variant="body" color="muted" className="leading-relaxed">
            Stay updated with the latest news, innovations, events, and
            milestones from FISSO as we continue to advance precision
            engineering and medical support solutions worldwide.
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-col hover:shadow-[0_12px_40px_rgb(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 group text-left"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50 border-b border-gray-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <Typography
                  variant="h3"
                  color="dark"
                  weight="bold"
                  className="mb-1 line-clamp-2 leading-snug min-h-[48px] group-hover:text-[#9C0B38] transition-colors"
                >
                  {item.title}
                </Typography>

                <span className="text-[11px] font-semibold text-gray-400 mb-3 block">
                  {item.date}
                </span>

                <Typography
                  variant="body"
                  color="muted"
                  className="leading-relaxed mb-5 line-clamp-3"
                >
                  {item.snippet}
                </Typography>

                <a
                  href={`#news-${item.id}`}
                  className="text-xs sm:text-sm font-semibold text-[#9C0B38] hover:underline flex items-center gap-1 mt-auto"
                >
                  Read More &gt;&gt;
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          className="bg-gray-50/50 border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-left"
          data-aos="fade-up"
        >
          <div className="flex gap-4 items-center flex-grow">
            <div className="w-14 h-14 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-700 bg-white shrink-0 shadow-sm">
              <Mail size={22} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-1">
              <Typography
                variant="h3"
                color="dark"
                weight="semibold"
                className="leading-tight"
              >
                Stay Updated with FISSO Innovations
              </Typography>
              <Typography
                variant="body"
                color="muted"
                className="leading-relaxed"
              >
                Subscribe to receive the latest news, product updates, and
                industry insights from FISSO.
              </Typography>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full lg:w-auto shrink-0">
            <div className="flex items-center bg-white border border-gray-200 rounded-xl p-1.5 w-full lg:w-[420px] shadow-sm focus-within:border-gray-300 transition-colors">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 text-sm text-gray-700 bg-transparent placeholder-gray-400 outline-none flex-grow"
              />
              <button
                type="submit"
                className="bg-[#9C0B38] text-white hover:bg-[#85082e] px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shrink-0 cursor-pointer shadow-sm active:scale-98"
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
