import React from 'react';
import Button from './Button';

export default function LatestNews() {
  const newsItems = [
    {
      artNo: "Art.-No. M008",
      title: "GERMAN ADLER MOTOR OIL SYNT SAE 0W-8",
      desc: "Fully synthetic high-performance motor oil delivering excellent lubrication, engine protection, smooth cold starts, and improved fuel efficiency.",
      image: "/moto/german-adler/news1.png"
    },
    {
      artNo: "Art.-No. M166",
      title: "GERMAN ADLER SYNT SAE 0W-30 S",
      desc: "Advanced formulation delivering excellent wear protection, smooth performance at low temperatures, improved efficiency, and reduced emissions.",
      image: "/moto/german-adler/news2.png"
    }
  ];

  return (
    <section className="w-full py-20 lg:py-24 bg-white">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 xl:grid-cols-[6fr_2px_6fr] gap-6 xl:gap-8 relative items-center">
          
          {/* Left Column */}
          <div data-aos="fade-right">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black tracking-tight mb-6">
              
              Latest News
            </h2>
            <div className="space-y-6 text-[#333333] text-md md:text-[16px] leading-[1.8] mb-8">
              <p>
                Stay informed with the latest innovations, product developments, industry insights, and company updates from German Adler. Discover what drives performance and keeps industries moving.
              </p>
              <p>
                Stay connected with industry trends, performance insights, and innovations engineered for reliability and long-term protection.
              </p>
            </div>
            <div>
              <Button text="Read More" href="#" />
            </div>
          </div>

          {/* Divider Column */}
          <div className="hidden xl:block w-full h-[100%] self-center bg-[#080808]/10 rounded-full"></div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {newsItems.map((item, idx) => (
              <div 
                key={idx} 
                className="border-[1.5px] border-[#fcc415]/80 rounded-[12px] p-6 flex flex-col xl:flex-row items-center gap-6 bg-white relative hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-left"
                data-aos-delay={idx * 150}
              >
                {/* Image */}
                <div className="w-44 xl:w-56 shrink-0 flex justify-center">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto object-contain drop-shadow-md mix-blend-multiply" 
                  />
                </div>
                
                {/* Content */}
                <div className="flex-grow flex flex-col justify-center text-center xl:text-left">
                  <span className="font-normal text-[#333333] text-md md:text-[16px] leading-[1.8] xl:pr-12 !font-oxanium"> {item.artNo}</span>
                 
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black uppercase tracking-tight mb-2">
                    {item.title}
                  </h3>
                  
                  <span className="font-normal text-[#333333] text-md md:text-[16px] leading-[1.8] xl:pr-12 !font-oxanium"> {item.desc}</span>
                </div>

                {/* Arrow Button */}
                <div className="absolute right-6 top-6 xl:static shrink-0">
                  <button className="w-[60px] h-[60px] rounded-full bg-[#fcc415] flex items-center justify-center hover:bg-[#eab30d] hover:scale-105 transition-all shadow-sm">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H9M17 7V15" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
}
