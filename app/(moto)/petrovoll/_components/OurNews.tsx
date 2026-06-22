"use client";

import React from "react";
import { Calendar, MapPin } from "lucide-react";
import Button from "./Button";

export default function OurNews() {
  const newsItems = [
    {
      title: "Petrovoll Racing Team Abu Dhabi Car Show 2019",
      image: "/moto/petrovoll/news1.png",
      date: "2019",
      location: "Abu Dhabi",
      href: "#news-1",
    },
    {
      title: "Petrovoll Racing Team RAK Motor Show",
      image: "/moto/petrovoll/new2.png",
      date: "2019",
      location: "UAE",
      href: "#news-2",
    },
    {
      title: "Mexico Automechanika 2019",
      image: "/moto/petrovoll/new3.png",
      date: "2019",
      location: "UAE",
      href: "#news-3",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-16 text-center" data-aos="fade-up">
          <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-dark tracking-wide leading-none">
            Our News and Events
          </h1>
          <div className="w-30 sm:w-45 md:w-55 lg:w-70 h-[3px] bg-secondary mx-auto" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 w-full">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full  object-cover  transform hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Content Box */}
              <div className="flex flex-col items-center">
                {/* Title */}
                <h3 className="text-md sm:text-md md:text-lg lg:text-xl font-sans font-medium text-dark leading-snug line-clamp-2  hover:text-secondary transition-colors cursor-pointer">
                  {item.title}
                </h3>

                {/* Meta Details */}
                <div className="flex items-center gap-6 text-sm text-gray-500 my-4 font-sans font-medium">
                  <div className="flex items-center gap-1.5 flex-row">
                    <Calendar size={16} className="text-secondary shrink-0" />
                      <p className="text-[#484848] text-[14px] sm:text-xs md:text-sm lg:text-base leading-relaxed ">{item.date}</p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-row">
                    <MapPin size={16} className="text-secondary shrink-0" />
                    <p className="text-[#484848] text-[14px] sm:text-xs md:text-sm lg:text-base leading-relaxed ">{item.location}</p>
                  </div>
                </div>

                {/* View More Button */}
                <div className="mt-2">
                  <Button
                    text="View More"
                    variant="primary-slanted"
                    href={item.href}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
