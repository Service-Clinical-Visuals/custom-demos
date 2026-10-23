"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

// Bump the version when an image is replaced, so browsers skip their cached copy
const updated = [2];
const img = (n: number) => `/moto/syprin/p${n}.webp${updated.includes(n) ? "?v=2" : ""}`;

const tabs = [
  { key: "oil", label: "Oil", images: [3, 2, 1] },
  { key: "lead", label: "Lead substitute", images: [5, 6] },
  { key: "diesel", label: "Diesel", images: [9, 15, 16] },
  { key: "gasoline", label: "Gasoline", images: [17, 11, 18] },
  { key: "all", label: "View All", images: [3, 2, 1, 4, 5, 6, 9, 15, 16, 8, 7, 10, 17, 11, 18, 13, 14, 12] },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function ProductCategories() {
  const [active, setActive] = useState<TabKey>("oil");
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);

  const images = tabs.find((t) => t.key === active)!.images;

  // Pages = how many "screens" of cards there are; works out cards-per-view from the first card's width
  const measure = useCallback(() => {
    const el = trackRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const perView = Math.max(1, Math.round((el.clientWidth + gap) / (card.offsetWidth + gap)));
    const pages = Math.max(1, Math.ceil(el.children.length / perView));
    const maxScroll = el.scrollWidth - el.clientWidth;
    const atEnd = maxScroll > 0 && el.scrollLeft >= maxScroll - 4;
    setPageCount(pages);
    setPage(atEnd ? pages - 1 : Math.min(pages - 1, Math.round(el.scrollLeft / el.clientWidth)));
  }, []);

  // Re-measure when the track resizes and whenever the tab (and so the card count) changes.
  // ResizeObserver calls back once right after observe(), so this also covers the first render.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [active, measure]);

  const selectTab = (key: TabKey) => {
    trackRef.current?.scrollTo({ left: 0 });
    setActive(key);
    setPage(0);
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (el) el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="categories" className="py-14 md:py-20 desk:py-24 min-[2500px]:py-36 min-[3800px]:py-48">
      <div className="custom-container">
        {/* Heading + tabs */}
        <div className="flex flex-col desk:flex-row desk:items-end desk:justify-between gap-6 desk:gap-10">
          <div className="max-w-[560px] min-[2500px]:max-w-[900px] min-[3800px]:max-w-[1200px]">
            <div className="flex items-center gap-2.5 min-[2500px]:gap-4">
              <span className="w-5 min-[2500px]:w-8 h-[3px] min-[2500px]:h-[5px] rounded-full bg-accent" />
              <span className="tag-label text-[#F6F6F6]">Product Categories</span>
            </div>
            <h2 className="text-[#F6F6F6] mt-3 md:mt-4 min-[2500px]:mt-6">Innovative Solutions for Every Journey</h2>
            <p className="text-[#CACACA] mt-3 md:mt-4 min-[2500px]:mt-6">
              Explore our range of automotive care products designed for reliable performance, protection, and lasting engine efficiency.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Product categories"
            className="no-scrollbar self-start desk:self-auto desk:mb-6 max-w-full overflow-x-auto bg-[#F6F6F6] rounded-[10px] min-[3800px]:rounded-[20px] flex items-center gap-1 sm:gap-2 min-[2500px]:gap-4 px-2 sm:px-3 min-[2500px]:px-6"
          >
            {tabs.map((tab) => {
              const isActive = tab.key === active;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectTab(tab.key)}
                  className={`tab-label relative whitespace-nowrap px-3 sm:px-4 py-2.5 md:py-3 min-[2500px]:px-7 min-[2500px]:py-5 transition-colors ${
                    isActive ? "text-accent font-semibold" : "text-[#7A7A7A] hover:text-[#353535]"
                  }`}
                >
                  {tab.label}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] min-[2500px]:h-1 bg-accent rounded-full transition-all duration-300 ${
                      isActive ? "w-[calc(100%-1rem)]" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel: 1 card per view on phones, 2 on tablet, 3 on desktop */}
        <div
          ref={trackRef}
          onScroll={measure}
          role="tabpanel"
          className="no-scrollbar mt-8 md:mt-10 min-[2500px]:mt-16 flex gap-4 md:gap-5 xl:gap-6 min-[2500px]:gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth"
        >
          {images.map((n, i) => (
            <Link
              key={`${active}-${n}-${i}`}
              href="/syprin/products"
              aria-label={`View ${tabs.find((t) => t.key === active)!.label} products`}
              className="snap-start shrink-0 basis-full sm:basis-[calc((100%-1rem)/2)] md:basis-[calc((100%-1.25rem)/2)] desk:basis-[calc((100%-2.5rem)/3)] xl:basis-[calc((100%-3rem)/3)] min-[2500px]:basis-[calc((100%-5rem)/3)] group overflow-hidden rounded-[4px] min-[3800px]:rounded-[8px] aspect-[533/401] bg-[#0f1a2e]"
            >
              <img
                src={img(n)}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover  "
              />
            </Link>
          ))}
        </div>

        {/* Pager */}
        {pageCount > 1 && (
          <div className="flex items-center justify-center gap-1.5 min-[2500px]:gap-3 mt-8 md:mt-10 min-[2500px]:mt-16">
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={page === i}
                className={`h-[3px] min-[2500px]:h-[5px] rounded-full transition-all duration-300 ${
                  page === i ? "w-5 min-[2500px]:w-9 bg-accent" : "w-3 min-[2500px]:w-6 bg-white/80 hover:bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
