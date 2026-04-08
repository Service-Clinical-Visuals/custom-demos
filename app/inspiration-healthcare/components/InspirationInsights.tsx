"use client";

import "aos/dist/aos.css";
import { img } from "framer-motion/client";

export default function InspirationInsights() {

  return (
    <section className="bg-[#f5f6f7] py-24 px-6 lg:px-20">
      <div className="max-w-380 mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-xs text-gray-500 mb-3">Insights & Updates</p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
            Stay Informed with Our Latest Updates and Insights
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Explore our latest news, reports, events, and clinical insights—all in one place. From corporate announcements and investor updates to educational resources and healthcare advancements, stay connected with everything shaping our journey and impact.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT FEATURE CARD */}
          <div data-aos="fade-right">
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
              <div className="h-[320px] bg-gray-200">
                <img
                  src="/inspiration-healthcare/assets/inspiration-insight.png"
                  alt="Featured Insight"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-gray-600">Regulatory News</p>

              <button className="bg-gray-700 text-white text-sm px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
                View All Updates
                <span>→</span>
              </button>
            </div>
          </div>

          {/* RIGHT LIST */}
          <div className="space-y-6" data-aos="fade-left">
            {updates.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-xl bg-gray-200 flex-shrink-0" >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    </div>

                {/* Content */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 leading-snug mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 mb-2">{item.date}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const updates = [
  {
    title: "Empowering Our Distribution Partners",
    img: "/inspiration-healthcare/assets/inspiration-insight1.png",
    date: "7 Jul 2025",
    desc: "How the Online Learning Academy Drives Success in Product Knowledge and Customer Support",
  },
  {
    title: "Why Evidence-Based Learning Matters in Device Training",
    img: "/inspiration-healthcare/assets/inspiration-insight2.png",
    date: "12 Jun 2025",
    desc: "Every decision matters. Inspiration Academy provides trusted, evidence-based learning for better outcomes.",
  },
  {
    title: "The Impact of Accurate Measurements in Neonatal Care",
    img: "/inspiration-healthcare/assets/inspiration-insight3.png",
    date: "25 Nov 2024",
    desc: "In neonatal care, where every detail matters, an accurate measurement with a fixation tape can make a significant difference.",
  },
  {
    title: "Innovating Neonatal Care",
    img: "/inspiration-healthcare/assets/inspiration-insight4.png",
    date: "29 Aug 2024",
    desc: "Neonatal care is a field where precision and innovation are paramount. Every advancement can significantly impact outcomes.",
  },
];
