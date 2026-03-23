"use client";

import Image from "next/image";



export default function CompanySection() {
  const cards = [
    {
      title: "Group of Companies",
      img: "/assets/location_atmos.jpg",
    },
    {
      title: "Mission",
      img: "/assets/doctor_atmos.jpg",
    },
    {
      title: "History",
      img: "/assets/product_atmos.jpg",
    },
    {
      title: "Careers",
      img: "/assets/careers_atmos.jpg",
    },
  ];

  return (
    <section className="bg-[#F9F9F9] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT IMAGE */}
          <div
            className="relative"
            data-aos="fade-right"
          >
            <img
              src={`/atmosmed/assets/atmos_factory.png`}
              alt="doctor"
              className="w-full h-64 sm:h-80 lg:h-[350px] object-cover rounded-lg"
            />

            {/* Floating Badge */}
            <div className="absolute -top-6 -left-3 lg:-left-6 bg-[#16679b] text-white px-6 py-6 rounded-tr-4xl rounded-b-4xl shadow-lg text-sm font-semibold leading-tight">
              Together ahead.
              <br />
              Since 1888.
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left">

            <p className="text-lg font-medium text-black mb-2">
              Company
            </p>

            <h2 className="text-2xl md:text-[32px] font-semibold text-[#16679b] mb-4">
              ATMOS MedizinTechnik
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-4">
              ATMOS offers medical professionals all over the world not only
              first-class medical technology devices and products, but also
              complete service relating to procurement, modernization, and
              maintenance.
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              The ATMOS Group employs over 300 people worldwide. Internationally
              positioned, it has 15 subsidiaries and representative offices in
              India and Colombia as well as approximately 70 national agencies.
            </p>

            <button className="bg-[#16679b] text-white px-6 py-2.5 rounded-md font-bold text-base hover:bg-[#145a87] transition cursor-pointer">
              Learn More About Us
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-lg shadow-sm border p-3 hover:shadow-md transition"
            >

              {/* Image */}
              <img
                src={`/atmosmed${item.img}`}
                alt={item.title}
                className="w-full h-36 object-cover rounded-md mb-3"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {item.title}
              </h3>

              {/* Link */}
              <button className="text-[#16679b] text-sm font-medium underline text-center w-full cursor-pointer">
                Learn More
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}