import React from 'react';
import Button from './Button';

export default function ProductCategories() {
  const categories = [
    {
      num: "/moto/german-adler/01.png",
      title: "TRUCK MOTOR OILS",
      subtitle: "GERMAN ADLERTX SYNT SAE 5W-30 HC-LS",
      desc: "High-performance synthetic motor oil with low SAPS, wear protection, fuel efficiency, and reliable engine performance.",
    },
    {
      num: "/moto/german-adler/02.png",
      title: "MOTORCYCLE OILS",
      subtitle: "GERMAN ADLER 2T-F",
      desc: "Fully synthetic racing oil with advanced low-ash technology for superior lubrication and cleaner combustion.",
    },
    {
      num: "/moto/german-adler/03.png",
      title: "GEAR OILS",
      subtitle: "GERMAN ADLERTX SYNT SAE 5W-30 HC-LS",
      desc: "High-performance gear oil for smooth shifting, superior protection, and extended service life.",
    },
    {
      num: "/moto/german-adler/04.png",
      title: "BREAK FLUID",
      subtitle: "GERMAN ADLER BRAKE FLUID DOT 4",
      desc: "Synthetic brake fluid with high performance and corrosion protection.",
    },
    {
      num: "/moto/german-adler/05.png",
      title: "CAR MOTOR OILS",
      subtitle: "GERMAN ADLER SYNT SAE 0W-12",
      desc: "Fully synthetic high-performance premium motor oil, for the latest petrol and hybrid petrol engines from BMW.",
    }
  ];

  return (
    <section className="w-full py-20  relative bg-white overflow-hidden">
      {/* Top Right Decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 md:w-64 md:h-64 border-t-[8px] md:border-t-[12px] border-r-[8px] md:border-r-[12px] border-[#fcc415] pointer-events-none z-0"></div>
      
      {/* Bottom Left Decoration */}
      <div className="absolute bottom-0 left-0 w-24 h-24 md:w-64 md:h-64 border-b-[8px] md:border-b-[12px] border-l-[8px] md:border-l-[12px] border-[#fcc415] pointer-events-none z-0"></div>

      <div className="custom-container relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16 max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black tracking-tight mb-3">
           
            <span className="uppercase !font-oxanium">GERM<span className="text-[#fcc415]">A</span>N ADLER</span> Product Categories
          </h2>
          <p className="text-[#333333] text-md md:text-[16px] leading-[1.8] ">
            Discover high-performance products engineered for superior protection, reliability, and lasting performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-12 gap-y-8 xl:gap-y-10">
          
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="group  pt-6  border-t-[4px] border-[#fcc415] flex flex-col self-start bg-white relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Very smooth background fade using hardware-accelerated opacity */}
              <div className="absolute inset-0 bg-[#fcc415] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0 pointer-events-none"></div>

              <div className="flex flex-col h-full relative z-10 transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:translate-x-2 group-hover:px-4">
                <div className="flex items-center gap-3 mb-5">
                  <img 
                    src={cat.num} 
                    alt="" 
                    className="w-6 h-6 md:w-7 md:h-7 object-contain transition-all duration-500 ease-out group-hover:brightness-0 group-hover:invert" 
                  />
                 
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black uppercase tracking-tight">
                    {cat.title}
                  </h3>
                </div>
                
                <h4 className="text-md md:text-md lg:text-lg font-semibold text-black uppercase mb-3 leading-snug">
                  {cat.subtitle}
                </h4>
                
                <p className="text-md md:text-[16px] leading-[1.8] text-[#333333]   group-hover:text-black leading-[1.8] flex-grow pr-4 transition-colors duration-500 ease-out">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div 
            className="bg p-6 md:p-8 shadow-lg border border-gray-200 flex flex-col items-center justify-center text-center h-full relative z-10 overflow-hidden "
            data-aos="zoom-in"
            data-aos-delay="500" 
          >
             
            <p className="text-[#333333] text-md md:text-[16px] leading-[1.8] mt-2 mb-4 lg:mt-4 max-w-[400px] relative z-10">
              Explore our complete range of premium products designed to deliver performance, protection, and reliability for every drive.
            </p>
            <div className="relative z-10">
              <Button text="Shop Now" href="#" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
