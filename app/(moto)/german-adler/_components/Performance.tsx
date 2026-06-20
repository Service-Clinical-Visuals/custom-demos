import React from 'react';
import Button from './Button';
import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer';

export default function Performance() {
  const points = [
    "Protects the engine from all types of contamination and combats sludge formation efficiently for constant engine performance over its entire service life.",
    "Improved fuel economy.",
    "State-of-the-art additive technology for maximum cleaning effect.",
    "Extremely high oxidation stability.",
    "Enables one safe cold start with minimal wear on moving components thanks to its exceptional fluidity at low temperatures."
  ];

  return (
    <section className="w-full py-20 lg:py-24 bg-white">
      {/* Dark Banner Wrapper */}
      <div className="relative w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/moto/german-adler/performancebg.png" 
            alt="Performance Background" 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="custom-container relative z-10 w-full h-full">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-6 xl:gap-8 ">
            
            {/* Left Card */}
            <div className="flex justify-center xl:justify-start pb-15 xl:pb-25 items-start" data-aos="fade-down">
              {/* Main Translucent Card with Left/Right Borders */}
              <div 
                className="relative bg-white/30  w-full border-l-[2px] border-r-[2px] border-white p-8 md:p-12 pt-16 md:pt-20 pb-32 md:pb-40 flex flex-col"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 60px), 0 100%)' }}
              >
                {/* Bottom V-Border Hack - draws a 2px strip that perfectly traces the bottom edge */}
                <div 
                  className="absolute inset-0 w-full h-full bg-white pointer-events-none"
                  style={{ clipPath: 'polygon(0 calc(100% - 2px), 50% calc(100% - 62px), 100% calc(100% - 2px), 100% 100%, 0 100%)' }}
                />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col flex-grow">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold  text-white leading-[1.3] tracking-tight mb-8">
                
                    Engineered for Superior<br/>Performance and Protection
                  </h2>
                  
                  <ul className="space-y-6 mb-12 flex-grow">
                    {points.map((text, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <img 
                      src="/moto/german-adler/customer_setting.png" 
                      alt="bullet icon" 
                      className="w-[25px] h-[25px] object-contain" 
                    />
                        <span className="text-md md:text-[16px] leading-[1.8] text-white/95 leading-relaxed font-normal">
                        
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <Button text="Discover More" href="#" variant="white" />
                  </div>
                </div>
              </div>
            </div>

          {/* Right Video */}
          <div className="w-full flex items-center pb-10 xl:pb-20 " data-aos="zoom-in" data-aos-delay="200">
             <div className="w-full rounded-[24px] overflow-hidden relative aspect-video bg-black shadow-2xl">
               <DynamicVideoPlayer 
                 type="short-1" 
                 className="absolute inset-0 w-full h-full object-cover " 
               />
              
             </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
