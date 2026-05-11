"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ProductCategory() {
  const [activeCategory, setActiveCategory] = useState("Wheel Aligners");

  const allProducts = [
    {
      name: "WALL MOUNT PRO WHEEL ALIGNER",
      price: "£7,995.00+ VAT",
      imageSpace: "/moto/absolute-alignment/home/product-1.png",
      categories: ["Wheel Aligners", "OEM Aligners", "2-Post Alignments"]
    },
    {
      name: "CV ALIGNER",
      price: "£11775.00+ VAT",
      imageSpace: "/moto/absolute-alignment/home/product-2.png",
      categories: ["Wheel Aligners"]
    },
    {
      name: "BLUETOOTH 3D WHEEL ALIGNER",
      price: "£14,650.00+ VAT",
      imageSpace: "/moto/absolute-alignment/home/product-3.png",
      categories: ["Wheel Aligners", "OEM Aligners"]
    },
    {
      name: "BLUETOOTH PRO EVO WHEEL ALIGNER",
      price: "£7,995.00+ VAT",
      imageSpace: "/moto/absolute-alignment/home/product-4.png",
      categories: ["Wheel Aligners", "OEM Aligners", "2-Post Alignments"]
    },
    {
      name: "BLUETOOTH LITE WHEEL ALIGNER",
      price: "£7,350.00+ VAT",
      imageSpace: "/moto/absolute-alignment/home/product-5.png",
      categories: ["Wheel Aligners", "2-Post Alignments"]
    },
    {
      name: "DROP BRACKET WHEEL ALIGNMENT ADAPTOR",
      price: "£495.00+ VAT",
      imageSpace: "/moto/absolute-alignment/home/product-6.png",
      categories: ["2-Post Alignments"]
    }
  ];

  const filteredProducts = allProducts.filter(p => p.categories.includes(activeCategory));
  const categories = ["Wheel Aligners", "OEM Aligners", "2-Post Alignments"];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="bg-[#f8f9fa] rounded-[30px] md:rounded-[40px] p-6 md:p-16">

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold font-heading uppercase text-gray-900 mb-4 tracking-tight">
                Our Products and Category
              </h2>
              <p className="text-gray-600 text-[16px]">
                Absolute Alignment is market leader in the supply of wheel aligners to the motor trade. We supply wheel alignment equipment that represents a perfect blend of quality and value, leaving the days of the tracking gauge and laser alignment far behind.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`${activeCategory === cat ? "bg-primary" : "bg-black"
                    } hover:opacity-90 text-white text-[11px] font-bold uppercase tracking-wider py-3 px-6 rounded transition-all`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Swiper */}
          <div className="w-full">
            <Swiper
              key={activeCategory} // Force re-render on category change for smooth reset
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: ".product-pagination",
              }}
              autoplay={{ delay: 4000 }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-16"
            >
              {filteredProducts.map((product, idx) => (
                <SwiperSlide key={`${activeCategory}-${idx}`}>
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col h-full border border-gray-100">
                    <div className="w-full aspect-[4/3] bg-gray-200 flex items-center justify-center">
                      <img src={product.imageSpace} alt="Product Image" className="aspect-[4/3] w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex flex-col items-center text-center border-t border-gray-100 flex-1">
                      <h3 className="text-primary font-bold font-heading uppercase tracking-wide mb-2">
                        {product.name}
                      </h3>
                      <p className="text-black font-bold mb-6">
                        {product.price}
                      </p>
                      <button className="mt-auto bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase py-2 px-6 rounded-full transition-colors">
                        Enquire About Product
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Pagination */}
          <div className="product-pagination flex justify-center gap-3 mt-4"></div>

          <style jsx global>{`
            .product-pagination .swiper-pagination-bullet {
              width: 32px !important;
              height: 6px !important;
              border-radius: 999px !important;
              background: #ff9800 !important;
              opacity: 0.3 !important;
              transition: all 0.3s ease !important;
              margin: 0 4px !important;
            }
            .product-pagination .swiper-pagination-bullet-active {
              opacity: 1 !important;
              width: 32px !important;
            }
          `}</style>

        </div>
      </div>
    </section>
  );
}
