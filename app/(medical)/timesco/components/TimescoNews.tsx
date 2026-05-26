"use client";

import { useRef, useState, useEffect } from "react";
import "aos/dist/aos.css";

const news = [
  {
    title:
      "The Evolution of Medical Instruments: From Tradition to Innovation",
    date: "October 16, 2024",
    image: "/timesco/news-1.png",
  },
  {
    title:
      "The Importance of Eco-friendly Medical Devices in Modern Healthcare",
    date: "October 14, 2024",
    image: "/timesco/news-2.png",
  },
  {                 
    title:
      "Innovations in Anaesthesia Tools: A Look at the Callisto and Sirius XL Laryngoscope Ranges",
    date: "October 14, 2024",
    image: "/timesco/news-3.png",
  }, 
  {
    title:
      "How to Choose the Right Laryngoscope for Your Practice",
    date: "October 9, 2024",
    image: "/timesco/news-4.png",
  },
];

export default function TimescoNews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToPage = (page: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const target = page === 0 ? 0 : container.scrollWidth - container.clientWidth;
    container.scrollTo({ left: target, behavior: "smooth" });
    setActiveIndex(page);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const onScroll = () => {
      const mid = (container.scrollWidth - container.clientWidth) / 2;
      setActiveIndex(container.scrollLeft > mid ? 1 : 0);
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="w-full bg-[#f4f4f4] py-24">
      <div className="mx-auto max-w-[1600px] px-8">
        
        {/* HEADER */}
        <div
          data-aos="fade-up"
          className="text-center"
        >
          <h2
            className="
              text-4xl
              font-semibold
              tracking-[-0.03em]
              text-[#0d4f20]
            "
          >
            News and Events
          </h2>

          <p
            className="
              mt-3
              text-[16px]
              text-[#6a6a6a]
            "
          >
            See our Latest News
          </p>
        </div>

        {/* NEWS CAROUSEL */}
        <div
          ref={scrollRef}
          className="
            mt-16
            flex
            flex-col
            gap-8
            md:flex-row
            md:overflow-x-auto
            md:scroll-smooth
            md:snap-x
            md:snap-mandatory
            md:[scrollbar-width:none]
            md:[&::-webkit-scrollbar]:hidden
          "
        >
          {news.map((item, index) => (
            <article
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="
                w-full
                md:flex-none
                md:w-[calc(50%-16px)]
                md:snap-start
                xl:w-[calc(25%-24px)]
                overflow-hidden
                rounded-[24px]
                bg-white
                transition-all
                duration-300
                cursor-pointer
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-[240px]
                    w-full
                    object-cover
                    transition-transform
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="px-6 py-6">
                
                <h3
                  className="
                    line-clamp-3
                    text-lg
                    font-medium
                    leading-[1.4]
                    text-black
                  "
                >
                  {item.title}
                </h3>

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                  "
                >
                  <p
                    className="
                      text-[16px]
                      text-[#6a6a6a]
                    "
                  >
                    {item.date}
                  </p>

                  <button
                    className="
                      cursor-pointer
                      text-[16px]
                      font-medium
                      text-[#0a8d34]
                      transition-all
                      duration-300
                      hover:text-[#08752b]
                    "
                  >
                    Read More...
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* PAGINATION INDICATOR */}
        <div
          data-aos="fade-up"
          className="
            hidden
            md:flex
            mt-16
            items-center
            justify-center
            gap-2
          "
        >
          {[0, 1].map((page) => (
            <button
              key={page}
              onClick={() => scrollToPage(page)}
              aria-label={`Go to page ${page + 1}`}
              className={`
                rounded-full
                transition-all
                duration-300
                cursor-pointer
                ${activeIndex === page
                  ? "h-[8px] w-[80px] bg-[#0a8d34]"
                  : "h-[8px] w-[28px] bg-[#9c9c9c] hover:bg-[#0a8d34]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}