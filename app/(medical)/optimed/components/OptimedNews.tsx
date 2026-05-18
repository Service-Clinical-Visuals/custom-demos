"use client";

import "aos/dist/aos.css";

import { FiArrowRight } from "react-icons/fi";

const news = [
  {
    title: "Event 2024",
    date: "19.08.2024",
    description:
      "Where to find us : Explore Our Upcoming Events and Exhibitions",
    image: "/optimed/optimed-news-1.png",
  },
  {
    title: "Optimed & Rocamed enter into partnership",
    date: "22.09.2023",
    description:
      "optimed Partners with Rocamed to Enhance High-Quality Urology...",
    image: "/optimed/optimed-news-2.png",
  },
];

export default function OptimedNews() {


  return (
    <section className="w-full bg-[#FFF1E6] py-20 overflow-hidden">
      
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between gap-6 flex-wrap">
          
          <h2
            data-aos="fade-right"
            className="text-3xl sm:text-4xl font-black tracking-[-1px] text-black"
          >
            News at Optimed
          </h2>

          {/* CTA */}
          <button
            data-aos="fade-left"
            className="cursor-pointer group flex items-center overflow-hidden rounded-full bg-white border border-[#e0d2c8] shadow-md hover:scale-[1.02] transition-all duration-300"
          >
            
            <span className="px-7 py-4 text-[15px] font-semibold text-black whitespace-nowrap">
              View Article
            </span>

            <span className="w-[56px] h-[56px] rounded-full bg-[#f29b58] flex items-center justify-center">
              <FiArrowRight className="text-white text-[18px] group-hover:translate-x-1 transition" />
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#d8cbc0] mt-6"></div>

        {/* News Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
          
          {news.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-[#f5f5f5] rounded-[24px] overflow-hidden border border-[#e1d7ce] shadow-md"
            >
              
              {/* Image */}
              <div className="relative h-[220px] sm:h-[300px] md:h-[390px] overflow-hidden rounded-[20px] m-3">
                
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-700 hover:scale-105"
                />

                {/* Soft Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="px-6 pb-7 pt-2">
                
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
                  
                  <div>
                    
                    <h3 className="text-xl sm:text-2xl md:text-[28px]  font-black tracking-[-0.5px] text-[#7b7b7b] leading-[1.1]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[#8f8f8f] text-[16px] font-medium">
                      {item.date}
                    </p>

                    <p className="mt-2 text-[#8a8a8a] text-[16px] leading-[1.9] max-w-[90%]">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <button className="cursor-pointer group shrink-0 w-[54px] h-[54px] rounded-full bg-[#f29b58] flex items-center justify-center shadow-md hover:scale-105 transition">
                    <FiArrowRight className="text-white text-[18px] group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}