"use client";

import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const blogs = [
  {
    title: "Nitrous Oxide Shows Fast-Acting Potential For Depression Relief",
    description: "A new meta-analysis from the University of Birmingham reports...",
    imageSrc: "/medical/o-two/home/news-1.png",
    imageAlt: "Depression Relief News",
  },
  {
    title: "Mechanical Ventilation For Trauma Patients",
    description: "When seconds matter, the role of prehospital mechanical",
    imageSrc: "/medical/o-two/home/news-2.jpg",
    imageAlt: "Mechanical Ventilation for Trauma",
  },
  {
    title: "CPAP Therapy In Respiratory Care",
    description: "Continuous Positive Airway Pressure (CPAP) therapy is a fundamental non...",
    imageSrc: "/medical/o-two/home/news-3.jpg",
    imageAlt: "CPAP Therapy",
  },
  {
    title: "The Essential Role Of Nitrous Oxide In Modern Dentistry",
    description: "Nitrous oxide (N2O), or \"laughing gas,\" has revolutionized modern dentistry...",
    imageSrc: "/medical/o-two/home/news-4.jpg",
    imageAlt: "Nitrous Oxide in Dentistry",
  },
  {
    title: "Nitrous Oxide In Labor Pain Management",
    description: "Nitrous oxide is an inhaled analgesic widely used in labor pain management...",
    imageSrc: "/medical/o-two/home/news-5.jpg",
    imageAlt: "Nitrous Oxide in Labor Pain Management",
  },
  {
    title: "Why Transport Ventilators Matter In EMS?",
    description: "In emergency medical services (EMS), transport mechanical ventilators are...",
    imageSrc: "/medical/o-two/home/news-6.png",
    imageAlt: "Transport Ventilators in EMS",
  },
  {
    title: "How The SMART Bag® MO Enhances Airway Management?",
    description: "Manual ventilation using a bag-valve mask (BVM) is a standard practice...",
    imageSrc: "/medical/o-two/home/news-7.jpg",
    imageAlt: "SMART Bag MO Airway Management",
  },
];

export default function LatestNews() {
  return (
    <section className="py-16 md:py-24 bg-white" id="blog">
      <style>{`
        .news-swiper .swiper-pagination {
          position: static;
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }
        .news-swiper .swiper-pagination-bullet {
          width: 48px;
          height: 6px;
          border-radius: 9999px;
          background: #e5e7eb;
          opacity: 1;
          transition: background 0.3s;
          cursor: pointer;
        }
        .news-swiper .swiper-pagination-bullet-active {
          background: #0091d5;
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            className="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-6 font-display"
            data-aos="fade-up"
          >
            Latest <span className="text-[#0091d5]">News</span>, <span className="text-[#0091d5]">Blogs</span> and <span className="text-[#0091d5]">Articles</span>
          </h2>
          <p
            className="text-[14px] md:text-[17px] text-gray-600 leading-relaxed max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore the latest insights, industry updates, and expert articles on respiratory care, ventilation technology, emergency
            medical solutions, pain management, and advanced healthcare innovations designed to support better patient outcomes and clinical excellence.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            className="news-swiper"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.title}>
                <div className="bg-white border border-gray-100 rounded-4xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between group h-full">
                  <div>
                    <div className="aspect-4/3 w-full rounded-3xl overflow-hidden mb-5">
                      <img
                        src={blog.imageSrc}
                        alt={blog.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <h3 className="text-[22px] font-bold leading-snug tracking-tight mb-2 text-[#0091d5] transition-colors duration-300 font-display line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-[17px] text-gray-500 leading-relaxed font-sans line-clamp-2 mb-4">
                      {blog.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#blog"
                      className="inline-flex items-center text-[13px] font-bold text-gray-800 hover:text-[#0091d5] transition-colors duration-300 gap-1.5 group/link"
                    >
                      <span>Read More</span>
                      <span className="flex items-center justify-center rounded-full w-5 h-5 bg-[#0091d5]/10 text-[#0091d5] transition-all duration-300 group-hover/link:bg-[#0091d5] group-hover/link:text-white">
                        <ArrowUpRight size={12} strokeWidth={2.5} />
                      </span>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
