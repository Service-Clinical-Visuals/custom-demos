import React from 'react';
import Link from 'next/link';
import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer';
import Button from './Button';

const features = [
  {
    id: '/moto/lucas-oil/01.png',
    text: 'Mid-SAPS formulation protects petrol, diesel, and LPG engines, ensuring compatibility with DPFs and catalytic converters.'
  },
  {
    id: '/moto/lucas-oil/02.png',
    text: 'Low-friction synthetic base oils improve fuel economy and reduce engine wear under load.'
  },
  {
    id: '/moto/lucas-oil/03.png',
    text: 'Advanced detergent system maintains engine cleanliness and reduces sludge formation.'
  }
];

export default function InsideProduct() {
  return (
    <section className="w-full !bg-[#081b37] py-16 md:py-24 overflow-hidden">
      <div className="custom-container ">
        <div className="flex flex-col 2xl:flex-row items-stretch justify-center relative lg:px-12 xl:px-24">
          
          {/* Left Column (Text) */}
          <div className="w-full 2xl:w-[45%] bg-[#08263d] border border-[#00d2ff] rounded-3xl rounded-r-none rounded-l-[2rem]   p-8 md:p-12 z-10 flex flex-col justify-center " data-aos="fade-right">
            <div className="w-full 2xl:w-[85%] pr-5">

            <h2 className="!text-white text-3xl md:text-4xl font-semibold mb-6 tracking-wide">
              Inside the Product
            </h2>
            
            <p className="text-white text-sm md:text-[16px] leading-[1.8] mb-8 ">
              This oil has been rigorously tested to key industry benchmarks, including the DVR5R wear test and EP6 E10 test, confirming its compatibility with Euro 5 and Euro 6 vehicles and its ability to meet or exceed required performance standards.
            </p>
            
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={feature.id} className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <img src={feature.id} alt={`Feature ${index + 1}`} className="w-[30px] h-auto object-contain" />
                  </div>
                  <p className="text-white text-sm md:text-[16px] leading-[1.5] ">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
            </div>
            
            <div>
              <Button href="#" variant="ternary">
                Explore Product
              </Button>
            </div>
          </div>
          
          {/* Right Column (Video) */}
          <div className="w-full 2xl:w-[60%]  rounded-[2rem] overflow-hidden relative 2xl:-ml-32 mt-8 2xl:mt-10 2xl:mb-10 z-20 shadow-2xl aspect-video" data-aos="fade-left">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}
