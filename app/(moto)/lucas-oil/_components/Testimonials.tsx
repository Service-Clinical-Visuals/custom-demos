import React from 'react';
import Link from 'next/link';
import Button from './Button';

const testimonials = [
  {
    text: "It's great to be riding on Lucas brand name because it's works!",
    author: "Mike",
    location: "Ventura, CA"
  },
  {
    text: "I always put one qt of Lucas oil treatment in my truck",
    author: "Larry, S",
    location: "Mt Juliet, TN"
  },
  {
    text: "I use Lucas Fuel Injector Cleaner upon every fuel fill up",
    author: "Garry, R",
    location: "Hamilton, OH"
  },
  {
    text: "After a week it has stopped dripping!",
    author: "Dave G",
    location: "Dale City, FL"
  }
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#0c2342] py-16 md:py-24">
      <div className="custom-container">
        
        {/* Header */}
        <div className="flex justify-center items-center space-x-3 mb-12 lg:mb-16" data-aos="fade-up">
          <img 
            src="/moto/lucas-oil/setting.png" 
            alt="Setting icon" 
            className="w-5 h-5 md:w-6 md:h-6 object-contain"
          />
          <h2 className="!text-white text-3xl md:text-4xl font-semibold tracking-wide">
            Our Testimonials
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 mb-16 lg:mb-20  ">
          {testimonials.map((item, idx) => (
            <div key={idx} className="relative bg-white rounded-tl-[2rem] rounded-tr-[0.5rem] rounded-bl-[0.5rem]  p-6 lg:p-8 flex flex-col justify-between shadow-xl min-h-[240px] mt-4 not-[]:md:mt-0" data-aos="zoom-in" data-aos-delay={idx * 100}>
              
              {/* Content */}
              <div>
                <img 
                  src="/moto/lucas-oil/valve.png" 
                  alt="Engine" 
                  className="w-8 h-8 mb-4 object-contain opacity-80" 
                
                />
                <p className="!text-[#052C65] text-[16px] md:text-[18px] !font-bold leading-8 mb-4 !font-[family-name:var(--font-orbitron)] tracking-wide ">
                  {item.text}
                </p>
              </div>
              
              {/* Footer */}
              <div className="flex justify-between items-end ">
                <div>
                  <p className="text-[#000000] text-sm md:text-[16px] font-medium">
                    {item.author}</p>
                    <p className="text-[#000000] text-sm md:text-[16px] leading-[1.8] font-medium mt-1">
                    {item.location}</p>
                </div>
                <div className="w-10 h-10 rounded-full !bg-[#052C65] flex items-center justify-center text-white transition-transform hover:scale-110 cursor-pointer shadow-md flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Speech bubble pointer */}
              {/* A solid downward triangle attached to the bottom */}
              <div className="absolute -bottom-[24px] right-15 w-0 h-0 border-r-[32px] border-l-transparent border-t-[24px] border-t-white border-r-[0px] border-r-transparent filter drop-shadow-md"></div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center" data-aos="fade-up">
          <Button href="#" variant="ternary">
            View Feedback
          </Button>
        </div>

      </div>
    </section>
  );
}
