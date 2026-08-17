import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Free Level 4 Sample Patches",
      price: "$20.00",
      image: "/medical/tunning-element/landingpage/Product img 1.webp", // Closest match available in the directory
    },
    {
      id: 2,
      name: "Five Minute Relief Patch (10 patches)",
      price: "$20.00",
      image: "/medical/tunning-element/products/Five Minute Relief Patch (10 patches).webp",
    },
    {
      id: 3,
      name: "Level 3 Aqua Tune Water 14oz Bottle",
      price: "$395.00",
      image: "/medical/tunning-element/products/Level 3 Aqua Tune Water 14oz Bottle.webp",
    }
  ];

  return (
    <section className="w-full bg-section-gradient py-10 lg:py-15">
      <div className="custom-container px-4 xl:px-0">
        
        {/* Header Section */}
        <div className="text-center max-w-6xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="section-title text-[#121f38] font-heading font-semibold mb-6">
            Unlock Your <span className="text-secondary">Body's True</span> Potential
          </h2>
          <p className="section-text text-[#546476] manrope leading-relaxed">
            From his time as a young child, Sean Martinez, founder of Tuning Element, was fascinated when watching his father work with precious stones. He was intrigued, learning by his father how gemstones were made through tremendous heat
          </p>
        </div>

        {/* Product Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-16 max-w-5xl lg:max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.67rem)]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Product Image Container */}
              <div className="relative w-full aspect-[4/3] bg-white mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Product Details */}
              <div className="flex justify-between items-start pt-2 px-1">
                <h3 className="section-text font-heading font-semibold text-[#1c2331] leading-tight text-left pr-4">
                  {product.name}
                </h3>
                <span className="section-text font-body font-bold text-[#1c2331] shrink-0">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="flex justify-center" data-aos="fade-up">
          <Button href="/tunning-element/products">View All Products</Button>
        </div>

      </div>
    </section>
  );
}
