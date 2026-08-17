import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function About() {
  return (
    <section className="w-full bg-[#FCF3EF] py-20 lg:py-32">
      <div className="custom-container px-4  text-center">
        
        {/* Top Header & Text */}
        <div className="max-w-7xl mx-auto mb-12" data-aos="fade-up">
          <h2 className="section-title text-[#121f38] font-heading font-semibold mb-6">
            About <span className="text-secondary">Tuning</span> Element
          </h2>
          <p className="section-text text-[#546476] manrope leading-relaxed ">
            From his time as a young child, Sean Martinez, founder of Tuning Element, was fascinated when watching his father work with precious stones. He was intrigued, learning by his father how gemstones were made through tremendous heat and pressure deep inside the earth. His father sold these stones, as well as many other items at gem and jewelry trade shows across the United States. Sean learned early on how to use his passion for sales so he joined his father for a time on the trade-show circuit.
          </p>
        </div>

        {/* Center Image */}
        <div className="relative w-full max-w-7xl mx-auto  overflow-hidden  mb-12" data-aos="zoom-in">
          <img 
            src="/medical/tunning-element/landingpage/Image 1.webp" 
            alt="Proven Through Science - Experienced Through Better Living" 
            className="object-cover"
          />
        
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center" data-aos="fade-up">
          <Button href="#">Know About Us</Button>
        </div>

      </div>
    </section>
  );
}
