"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";

export default function OurProducts() {
  const products = [
    {
      title: "Gasoline Engine Oils",
      image: "/moto/petrovoll/pro1.png",
      href: "#gasoline",
    },
    {
      title: "Diesel Engine Oils",
      image: "/moto/petrovoll/pro2.png",
      href: "#diesel",
    },
    {
      title: "Motorcycle Oils",
      image: "/moto/petrovoll/pro3.png",
      href: "#motorcycle",
    },
    {
      title: "Motorcycle oil",
      image: "/moto/petrovoll/pro4.png",
      href: "#motorcycle",
    },
    {
      title: "Motorcycle type",
      image: "/moto/petrovoll/pro5.png",
      href: "#motorcycle",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(3);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : products.length - visibleItems));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < products.length - visibleItems ? prev + 1 : 0));
  };

  const getTranslateX = () => {
    if (visibleItems === 3) {
      return `-${currentIndex * 33.333333}%`;
    } else if (visibleItems === 2) {
      return `-${currentIndex * 50}%`;
    } else {
      return `-${currentIndex * 100}%`;
    }
  };

  return (
    <section className="relative w-full bg-white pb-12">
      {/* Dark Card Container with Rounded Bottom Corners */}
      <div className="w-full bg-dark rounded-b-[150px] md:rounded-b-[150px] px-6 pb-20 pt-16 text-white relative overflow-hidden">
        
        {/* Decorative subtle glows */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="custom-container relative z-10">
          
          {/* Header */}
          <div className="flex flex-col items-center gap-3 mb-6 text-center" data-aos="fade-up">
        
            <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-white tracking-wide leading-none">
              Our Products
            </h1>
           <div className="w-15 md:w-25 lg:w-35 h-[3px] bg-secondary mx-auto" />
          </div>

          {/* Description Subtitle */}
          <div className="max-w-[800px] mx-auto text-center mb-16" data-aos="fade-up" data-aos-delay="100">
            <p className="text-[#ffffff] text-[14px] sm:text-xs md:text-sm lg:text-base leading-relaxed">
              Petrovöll GmbH specializes in the development, production and distribution of advanced high performance lubricants for automotive, industrial and marine applications. It was established in 1999 in Bochum, Germany and is a wholly owned subsidiary of the Haliburg Group of Companies.
            </p>
          </div>

          {/* Slider Content Wrapper */}
          <div className="relative w-full" data-aos="fade-up" data-aos-delay="200">
            
            {/* Left Nav Button */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-8 h-12 bg-primary hover:bg-white text-dark hover:text-secondary flex items-center justify-center transition-all duration-300 rounded-none shadow-md cursor-pointer select-none active:scale-95"
              aria-label="Previous product"
            >
              <ChevronLeft size={20} strokeWidth={3} />
            </button>

            {/* Carousel Viewport */}
            <div className="overflow-hidden w-full px-2 sm:px-0">
              <div 
                className="flex transition-transform duration-500 ease-in-out -mx-3"
                style={{
                  transform: `translateX(${getTranslateX()})`,
                }}
              >
                {products.map((product, index) => (
                  <div 
                    key={index} 
                    className="px-3 flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                  >
                    <a 
                      href={product.href}
                      className="relative block group p-[2px] bg-white transition-all duration-500 [clip-path:polygon(0_0,_100%_0,_100%_calc(100%-40px),_calc(100%-40px)_100%,_0_100%)] cursor-pointer"
                    >
                      {/* Clipped Inner Box */}
                      <div className="relative w-full h-[280px] sm:h-[340px] bg-dark overflow-hidden [clip-path:polygon(0_0,_100%_0,_100%_calc(100%-39.5px),_calc(100%-39.5px)_100%,_0_100%)]">
                        {/* Background Image */}
                        <img 
                          src={product.image} 
                          alt={product.title} 
                          className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        {/* Dark gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />

                        {/* Bottom-left Product Name */}
                        <div className="absolute bottom-0 left-0 p-6 z-20">
                          <h3 className="text-md sm:text-xl md:text-xl lg:text-2xl font-heading font-medium text-white tracking-wide uppercase leading-none">
                            {product.title}
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Nav Button */}
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-30 w-8 h-12 bg-primary hover:bg-white text-dark hover:text-secondary flex items-center justify-center transition-all duration-300 rounded-none shadow-md cursor-pointer select-none active:scale-95"
              aria-label="Next product"
            >
              <ChevronRight size={20} strokeWidth={3} />
            </button>

          </div>

          {/* Bottom Button */}
          <div className="flex justify-center mt-16" data-aos="fade-up" data-aos-delay="300">
            <Button
              text="View All Products"
              variant="primary-slanted"
              href="#products"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
