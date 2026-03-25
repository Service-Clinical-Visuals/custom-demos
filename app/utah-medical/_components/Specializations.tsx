"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import AOS from "aos";

const items = [
  {
    img : "/utah-medical/assets/utah-critical.png",
    title: "Critical Care",
    desc: "UTMD's specialized critical care devices are used for arterial blood collection and invasive blood pressure monitoring.",
  },
  {
    img : "/utah-medical/assets/utah-gynec.png",
    title: "Gynecology",
    desc: "UTMD's specialized gynecology devices are used for endometrial sampling, hysterosalpingography & saline infusion sonography, loop excision of the transformation zone, pelvic floor stimulation therapy and uterine laparoscopy.",
  },
  {
    img : "/utah-medical/assets/utah-neon.jpg",
    title: "Neonatology/Pediatrics",
    desc: "UTMD's specialized gynecology devices are used for endometrial sampling, hysterosalpingography & saline infusion sonography, loop excision of the transformation zone, pelvic floor stimulation therapy and uterine laparoscopy.",
  },
    {
    img : "/utah-medical/assets/utah-critical.png",
    title: "Critical Care",
    desc: "UTMD's specialized critical care devices are used for arterial blood collection and invasive blood pressure monitoring.",
  },
  {
    img : "/utah-medical/assets/utah-gynec.png",
    title: "Gynecology",
    desc: "UTMD's specialized gynecology devices are used for endometrial sampling, hysterosalpingography & saline infusion sonography, loop excision of the transformation zone, pelvic floor stimulation therapy and uterine laparoscopy.",
  },
  {
    img : "/utah-medical/assets/utah-neon.jpg",
    title: "Neonatology/Pediatrics",
    desc: "UTMD's specialized gynecology devices are used for endometrial sampling, hysterosalpingography & saline infusion sonography, loop excision of the transformation zone, pelvic floor stimulation therapy and uterine laparoscopy.",
  },
];

const PAGE_SIZE = 3;
const totalPages = Math.ceil(items.length / PAGE_SIZE);

export default function Specializations() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const visible = items.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="py-10 md:py-16 px-4 md:px-10 lg:px-4 bg-[linear-gradient(90deg,#336699_0%,#336699_24.52%,#007FFF_100%)] text-white">
      <div className="max-w-400 mx-auto relative">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="text-2xl md:text-3xl lg:text-[30px] font-semibold"
            data-aos="fade-up"
          >
            Specializations
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl text-white/80 mt-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Comprehensive medical solutions across multiple specialties
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {visible.map((item, i) => (
            <div
              key={page * PAGE_SIZE + i}
              className="rounded-xl overflow-hidden bg-white/10"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="h-48 md:h-52 lg:h-72">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-semibold text-base md:text-lg mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 md:mt-10 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-8 h-2 rounded-br-full transition-all cursor-pointer ${i === page ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
        <div className="hidden lg:block">

        {/* Prev arrow */}
        {page > 0 && (
          <button
            onClick={() => setPage((p) => p - 1)}
            className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
          >
            <ChevronLeft size={20} className="text-gray-600 cursor-pointer" />
          </button>
        )}

        {/* Next arrow */}
        {page < totalPages - 1 && (
          <button
            onClick={() => setPage((p) => p + 1)}
            className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
          >
            <ChevronRight size={20} className="text-gray-600 cursor-pointer" />
          </button>
        )}
        </div>


      </div>
    </section>
  );
}