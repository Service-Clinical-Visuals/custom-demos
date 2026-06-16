import React from 'react';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import BexenButton from "./BexenButton";

export default function Divisions() {
  const divisions = [
    {
      title: "Bexen Medical",
      desc: "Manufacturer of healthcare material since 1978 with 3 domestic production plants.",
      image: "/medical/bexen-medical/home/blog-1.png"
    },
    {
      title: "Bexen Bioservices",
      desc: "Manufacturer of heSpecialists in the Biotechnology sector with 3 private biorepository branches",
      image: "/medical/bexen-medical/home/blog-2.png"
    },
    {
      title: "Bexen Cardio",
      desc: "Domestic manufacturers of defibrillators with a wide international market.",
      image: "/medical/bexen-medical/home/blog-3.png"
    }
  ];

  return (
    <section className="py-20 bg-[#81CFF45C]">
      <div className="custom-container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="max-w-4xl" data-aos="fade-right">
            <h3 className="text-[#14387F] font-semibold text-[16px] mb-2">We Are Bexen</h3>
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#14387F] leading-[1.2] mb-4 uppercase">
              45 YEARS OF EXPERIENCE GENERATING COMPREHENSIVE SOLUTIONS FOR THE HEALTH SECTOR.
            </h2>
            <p className="text-[14px] text-gray-600">
              We are the sum of two cooperatives. We are Manufacturers and Distributors of solutions for improving people's quality of life.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end text-left md:text-right max-w-sm" data-aos="fade-left">
            <h2 className="text-[28px] font-semibold text-[#14387F] uppercase mb-2">DIVISIONS</h2>
            <p className="text-[14px] text-gray-600 mb-4">
              The divisions that form part of Bexen
            </p>
            <BexenButton>
              Discover Our Story
            </BexenButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {divisions.map((item, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={100 * (idx + 1)} className="flex flex-col group">
              <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-6 relative bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[20px] font-semibold text-[#14387F] mb-2">{item.title}</h3>
              <p className="text-[13px] text-gray-600 mb-4 leading-relaxed line-clamp-2 min-h-[40px]">{item.desc}</p>
              <a href="#" className="text-[#14387F] text-[13px] font-semibold hover:text-[#0ea5e9] transition-colors underline decoration-2 underline-offset-4">Read More&gt;&gt;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
