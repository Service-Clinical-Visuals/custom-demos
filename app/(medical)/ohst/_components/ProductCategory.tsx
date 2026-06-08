import Image from "next/image";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    image: "/medical/ohst/portfolio1.png",
    label: "Implants",
  },
  {
    image: "/medical/ohst/portfolio2.png",
    label: "Instruments",
  },
];

export default function ProductCategorySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1560px] 2xl:max-w-[80%] mx-auto px-6">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div>
            <h2 className="text-[38px] font-bold text-[#222222] leading-[1.2]">
              Enhance Your Portfolio
            </h2>
            <p className="mt-2 text-[16px] leading-[26px] text-[#555555] max-w-[560px]">
              Discover our OEM-compatible implants and instruments — designed so that our partners
              can complement and elevate your product range with quality, precision, and reliable performance.
            </p>
          </div>
          <button className="flex-shrink-0 h-[44px] px-6 rounded-full border border-[#099F94] text-[#099F94] font-semibold text-[14px] flex items-center gap-2 hover:bg-[#099F94] hover:text-white transition-all">
            Inspire Collections <ArrowRight size={16} />
          </button>
        </div>

        {/* Portfolio cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="relative overflow-hidden rounded-[20px] group cursor-pointer"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
              {/* Label button */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center">
                <button className="h-[52px] px-12 rounded-full bg-[#099F94] text-white font-bold text-[18px] flex items-center gap-2 hover:bg-[#07877e] transition-all shadow-lg">
                  {item.label}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
