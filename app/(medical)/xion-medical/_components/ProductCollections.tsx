"use client";

import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Button from "./Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState, useMemo } from "react";
import type { Swiper as SwiperType } from "swiper";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ProductItem {
  name: string;
  image: string;
}

interface Subcategory {
  name: string;
  items: ProductItem[];
}

interface ProductCategory {
  name: string;
  subcategories: Subcategory[] | null;
  items?: ProductItem[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const productCategories: ProductCategory[] = [
  {
    name: "Camera Processors",
    subcategories: [
      {
        name: "Laryngo-Stroboscopy",
        items: [
          { name: "EndoSTROBE PL Spectar", image: "/xion/images/products/laryngo-stroboscopy-1.png" },
          { name: "EndoSTROBE EL Spectar", image: "/xion/images/products/laryngo-stroboscopy-2.png" },
          { name: "EndoSTROBE E Spectar",  image: "/xion/images/products/laryngo-stroboscopy-3.png" },
        ],
      },
      {
        name: "Surgery",
        items: [
          { name: "MATRIX PL Spectar",  image: "/xion/images/products/surgery-1.png" },
          { name: "MATRIX P Spectar",   image: "/xion/images/products/surgery-2.png" },
          { name: "MATRIX EL Spectar",  image: "/xion/images/products/surgery-3.png" },
          { name: "MATRIX E Spectar",   image: "/xion/images/products/surgery-4.png" },
        ],
      },
      {
        name: "Office and Mobile Applications",
        items: [
          { name: "EndoCOMPACT Veezar",  image: "/xion/images/products/mobile-application-1.png" },
          { name: "EndoPORTABLE Veezar", image: "/xion/images/products/mobile-application-2.png" },
        ],
      },
    ],
  },
  {
    name: "Camera Heads",
    subcategories: null,
    items: [
      { name: "Spectar Camera Head 4K/UHD and 4K/UHD Zoom", image: "/xion/images/products/camera-heads-1.png" },
      { name: "Spectar Camera Head HD and HD Zoom",          image: "/xion/images/products/camera-heads-2.png" },
      { name: "Spectar Camera Head HD with microphone",      image: "/xion/images/products/camera-heads-3.png" },
      { name: "Spectar Camera Head C-Mount",                 image: "/xion/images/products/camera-heads-4.png" },
      { name: "Spectar Camera Head 3D HD",                   image: "/xion/images/products/camera-heads-5.png" },
      { name: "Spectar Microscope Camera 3D 4K/UHD",         image: "/xion/images/products/camera-heads-6.png" },
    ],
  },
  {
    name: "Compact Cameras",
    subcategories: null,
    items: [
      { name: "Veezar Compact Camera",      image: "/xion/images/products/compact-cameras-1.png" },
      { name: "Veezar Compact Camera CF10", image: "/xion/images/products/compact-cameras-2.png" },
    ],
  },
  {
    name: "Illumination",
    subcategories: null,
    items: [
      { name: "Stationary MATRIX LED duo light source", image: "/xion/images/products/illumination-1.png" },
      { name: "Fibre-optic cable",                      image: "/xion/images/products/illumination-2.png" },
      { name: "Veezar Illumination Head IH10",          image: "/xion/images/products/illumination-3.png" },
      { name: "Veezar Illumination Head IH20",          image: "/xion/images/products/illumination-4.png" },
    ],
  },
  {
    name: "Flexible Endoscopes",
    subcategories: null,
    items: [
      { name: "Flexible video endoscopes",       image: "/xion/images/products/flexible-endoscopes-1.png" },
      { name: "Flexible fibre-optic endoscopes", image: "/xion/images/products/flexible-endoscopes-2.png" },
    ],
  },
  {
    name: "Rigid Endoscopes",
    subcategories: null,
    items: [
      { name: "Otoscopes",                image: "/xion/images/products/rigid-endoscopes-1.png" },
      { name: "Sinuscopes",               image: "/xion/images/products/rigid-endoscopes-2.png" },
      { name: "Laryngoscopes",            image: "/xion/images/products/rigid-endoscopes-3.png" },
      { name: "Laparoscopes",             image: "/xion/images/products/rigid-endoscopes-4.png" },
      { name: "Hysteroscopes",            image: "/xion/images/products/rigid-endoscopes-5.png" },
      { name: "3D Endoscope Attachments", image: "/xion/images/products/rigid-endoscopes-6.png" },
    ],
  },
];

// ─── Flatten to slides ────────────────────────────────────────────────────────
// Each slide carries the product item + breadcrumb labels for the card.

interface Slide {
  name: string;
  image: string;
  categoryName: string;        // e.g. "Camera Process"
  subcategoryName: string | null; // e.g. "Surgery"  — null if no subcategory
}

function buildSlides(categories: ProductCategory[]): Slide[] {
  return categories.flatMap((cat): Slide[] => {
    if (cat.subcategories) {
      return cat.subcategories.flatMap((sub) =>
        sub.items.map((item): Slide => ({
          name: item.name,
          image: item.image,
          categoryName: cat.name,
          subcategoryName: sub.name,
        }))
      );
    }
    return (cat.items ?? []).map((item): Slide => ({
      name: item.name,
      image: item.image,
      categoryName: cat.name,
      subcategoryName: null,
    }));
  });
}

// For each category, record the swiper index of its FIRST slide.
interface CategoryIndex {
  name: string;
  firstSlideIndex: number;
}

function buildCategoryIndices(categories: ProductCategory[]): CategoryIndex[] {
  let idx = 0;
  return categories.map((cat) => {
    const entry: CategoryIndex = {
      name: cat.name,
      firstSlideIndex: idx,
    };
    if (cat.subcategories) {
      idx += cat.subcategories.reduce((acc, s) => acc + s.items.length, 0);
    } else {
      idx += (cat.items ?? []).length;
    }
    return entry;
  });
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function ProductCollections() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = useMemo(() => buildSlides(productCategories), []);
  const categoryIndices = useMemo(() => buildCategoryIndices(productCategories), []);

  // Which top-level category does the active slide belong to?
  const activeCategoryName = slides[activeIndex]?.categoryName ?? "";

  const goToCategory = (firstSlideIndex: number) => {
    swiper?.slideToLoop(firstSlideIndex);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* ── Product Swiper ── */}
          <div className="lg:col-span-8 flex flex-col">
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end mb-16 gap-4">
              <div>
                <span className="text-[#00AFAF] font-bold text-[16px] mb-3 block">Our Products</span>
                <h2 className="text-[26px] lg:text-[34px] font-extrabold leading-tight">
                  Our Products Collections
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3 hidden lg:grid">
                <button className="prev-product w-10 h-10 rounded-full bg-[#00AFAF] text-white grid items-center justify-center hover:bg-[#009a9a] transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button className="next-product w-10 h-10 rounded-full bg-[#00AFAF] text-white grid items-center justify-center hover:bg-[#009a9a] transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1 w-full min-w-0">
              <Swiper
                modules={[Autoplay, Navigation]}
                onSwiper={setSwiper}
                onSlideChange={(s) => setActiveIndex(s.realIndex)}
                autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                navigation={{ prevEl: ".prev-product", nextEl: ".next-product" }}
                spaceBetween={32}
                slidesPerView={1}
                loop={true}
                breakpoints={{ 768: { slidesPerView: 2 } }}
                className="w-full h-full pb-4"
              >
                {slides.map((slide, i) => (
                  <SwiperSlide key={i} className="h-auto">
                    <div
                      className={`rounded-[32px] p-6 lg:p-8 flex flex-col items-center text-center transition-all duration-500 border h-full group ${
                        activeIndex === i
                          ? "bg-[#F8F9FA] border-[#00AFAF] shadow-2xl shadow-gray-200"
                          : "bg-[#F8F9FA] border-gray-100 border border-gray-200"
                      }`}
                    >
                      {/* Image */}
                      <div className="w-full aspect-[1.6/1] bg-[#ffffff] rounded-[24px] mb-6 flex items-center justify-center overflow-hidden">
                        <img
                          src={slide.image}
                          alt={slide.name}
                          className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col items-center">
                        <h3
                          className={`text-[18px] lg:text-[22px] font-bold transition-colors mb-1.5 leading-tight ${
                            activeIndex === i ? "text-[#00AFAF]" : "text-gray-900"
                          }`}
                        >
                          {slide.name}
                        </h3>

                        {/* Breadcrumb: Category › Subcategory */}
                        <p className="text-[13px] lg:text-[14px] text-gray-400 font-medium mb-6">
                          {slide.subcategoryName ? (
                            <>
                              <span className="text-gray-500">{slide.categoryName}</span>
                              <span className="mx-1.5 text-gray-300">›</span>
                              <span className="text-[#00AFAF] font-semibold">{slide.subcategoryName}</span>
                            </>
                          ) : (
                            <span className="text-gray-500">{slide.categoryName}</span>
                          )}
                        </p>
                      </div>

                      <Button href="#" variant="primary" size="md" className="justify-center">
                        View Product
                      </Button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* ── Sidebar: Our Categories ── */}
          <div data-aos="fade-left" className="lg:col-span-4 flex flex-col h-full">
            <div className="flex-1 bg-[#00AFAF] rounded-[24px] p-10 text-white grid content-between shadow-xl shadow-[#00AFAF]/20">
              <div>
                <h3 className="text-[24px] font-bold mb-10 tracking-tight">Our Categories</h3>
                <ul className="grid">
                  {categoryIndices.map((cat, i) => {
                    const isActive = activeCategoryName === cat.name;
                    return (
                      <li
                        key={i}
                        className="group cursor-pointer"
                        onClick={() => goToCategory(cat.firstSlideIndex)}
                      >
                        <div
                          className={`grid grid-cols-[auto_1fr] items-center gap-4 py-4 border-b border-white/20 transition-all hover:pl-2 ${
                            isActive ? "pl-2 bg-white/10" : ""
                          }`}
                        >
                          <div className="w-5 h-5 grid items-center justify-center">
                            <Play
                              size={14}
                              className={`fill-white text-white transition-transform ${
                                isActive ? "scale-110" : "opacity-70"
                              }`}
                            />
                          </div>

                          <span
                            className={`text-[16px] font-bold transition-opacity ${
                              isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                            }`}
                          >
                            {cat.name}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-12 flex justify-center">
                <Button
                  href="#"
                  variant="primary"
                  className="!bg-white !text-gray-900"
                >
                  View All Product
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}