"use client";

import { FiArrowRight } from "react-icons/fi";

const articles = [
  {
    title: "Doppler Ultrasound: Vascular Examination In Medical Imaging",
    img : "/sono-scanner/sono-news-1.png",
    description:
      "Doppler ultrasound is a medical imaging examination that uses ultrasound waves to evaluate blood circulation and vascular conditions.",
  },
  {
    title: "Hypoechoic: Definition And Principle",
        img : "/sono-scanner/sono-news-2.png",

    description:
      "Each organ reflects ultrasound waves with varying intensity. This principle allows ultrasound imaging to create visible contrasts on the screen.",
  },
  {
    title:
      "Dr. Josh Guttman Reviews The U-Lite PRO Handheld Ultrasound!",
          img : "/sono-scanner/sono-news-3.png",

    description:
      "Discover the video review by Joshua Guttman from Peachtree POCUS, where he explores the capabilities of the U-Lite PRO.",
  },
];

export default function SonoNews() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6f8] py-24">
      {/* SOFT TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#14387F]" />

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,63,136,0.04),transparent_55%)]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-11">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* LEFT */}
          <div className="max-w-[760px]">
            <div data-aos="fade-up">
              <h2 className="text-[#14387F] text-3xl lg:text-4xl leading-none tracking-[-2px] font-semibold">
                Latest News & Blog
              </h2>
            </div>

            <div data-aos="fade-up" data-aos-delay="120">
              <p className="mt-6 text-[#6f6f6f] text-[16px] leading-[1.9] max-w-[820px]">
                Stay updated with our latest news, upcoming events,
                industry insights, and recent articles covering
                innovations, achievements, and advancements in medical
                imaging and healthcare technology.
              </p>
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <div
            className="pt-3"
            data-aos="fade-left"
          >
            <button className="group bg-[#14387F] hover:bg-[#0d326d] transition-all duration-300 text-white rounded-full h-[50px] px-10 flex items-center gap-5 shadow-lg">
              <span className="text-[16px] font-semibold">
                Explore Articles
              </span>

              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <FiArrowRight className="text-[18px]" />
              </div>
            </button>
          </div>
        </div>

        {/* BLOG GRID */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-stretch">
          {articles.map((article, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group h-full"
            >
              <div className="h-full flex flex-col bg-white rounded-[26px] border border-[#e7e7e7] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
                {/* IMAGE */}
                <div className="relative p-4">
                  <div className="relative overflow-hidden rounded-[18px]">
                   <img src={article.img} alt="" className="w-full" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 px-6 pb-6">
                  {/* TITLE */}
                  <h3 className="text-[#14387F] text-lg leading-[1.3] tracking-[-1px] font-semibold">
                    {article.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-5 mb-5 text-[#6f6f6f] text-[16px] leading-[1.9]">
                    {article.description}
                  </p>

                  {/* DIVIDER */}
                  <div className="w-full h-[1px] bg-[#e7e7e7] mt-auto  mb-5" />

                  {/* FOOTER */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#8a8a8a] text-[16px] font-medium">
                      Article
                    </span>

                    <button className="group/read flex items-center gap-3 text-[#14387F]">
                      <span className="text-[16px] font-semibold">
                        Read More
                      </span>

                      <div className="w-7 h-7 rounded-full bg-[#14387F] flex items-center justify-center transition-transform duration-300 group-hover/read:translate-x-1">
                        <FiArrowRight className="text-white text-[14px]" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}