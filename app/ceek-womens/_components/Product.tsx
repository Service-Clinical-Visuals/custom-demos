"use client";

import { CornerUpRight } from "lucide-react";
import Image from "next/image";

const products = [
  {
    title: "Nella KIND (REUSABLE)",
    image: "/ceek/product1.png",
  },
  {
    title: "Nella KIND (SINGLE-USE)",
    image: "/ceek/product2.png",
  },
  {
    title: "Nella NEXT (SINGLE-USE)",
    image: "/ceek/product3.png",
  },
];

export default function Product() {
  return (
    <section className="bg-[#F5F5F7] py-20 px-6">
      <div className="container mx-auto text-center">
        {/* Top Label */}
        <p
          data-aos="fade-up"
          className="text-base text-[#26505E] font-medium mb-2">
          Innovative Women’s Health Solutions
        </p>

        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-3xl lg:text-[44px] font-semibold text-[#26505E] mb-4">
          Revolutionizing the Gynecological Exam Experience
        </h2>

        {/* Description */}
        <p
          data-aos="fade-up"
          className="text-[#484848] text-base max-w-7xl mx-auto mb-14 leading-relaxed">
          Ceek Women’s Health is on a mission to transform the gynecological
          exam with innovative, patient-centered solutions that redefine comfort
          and care. Our products are thoughtfully designed to reduce discomfort,
          improve accessibility, and streamline clinical workflows, ensuring a
          more efficient and positive experience for both patients and
          healthcare providers. By combining modern technology with
          human-centered design, we create advanced solutions that enhance
          comfort, safety, and ease of use.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="relative flex flex-col items-center">
              {/* Card */}
              <div className="rounded-xl w-full h-85 relative shadow-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Button */}
              <button
                className="absolute cursor-pointer w-[65%] -bottom-4 left-1/2 -translate-x-1/2 
              bg-[#6F6685] text-white px-4 py-3 
              rounded-2xl text-base border-4 border-white/40 shadow-lg 
              hover:scale-105 transition font-bold 
              flex items-center justify-center gap-2">
                {item.title}
                <CornerUpRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
