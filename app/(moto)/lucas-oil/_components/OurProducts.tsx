import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'Agriculture',
    image: '/moto/lucas-oil/lucasproduct1.jpg',
    items: [
      'Heavy Duty Oil Stabilizer',
      'Pure Synthetic Oil Stabilizer',
      'Heavy Duty 80W-90 Gear Oil',
    ],
  },
  {
    title: 'Classic Cars',
    image: '/moto/lucas-oil/lucasproduct2.jpg',
    items: [
      'Fuel Treatment',
      'Heavy Duty Oil Stabilizer',
      'Engine Oil Stop Leak',
    ],
  },
  {
    title: 'Everyday Car Care',
    image: '/moto/lucas-oil/lucasproduct3.jpg',
    items: [
      'Octane Booster',
      'Power Steering Stop Leak',
      'Slick Mist® Tire & Trim Shine',
    ],
  },
  {
    title: 'Commercial Vehicles',
    image: '/moto/lucas-oil/lusacproduct4.jpg',
    items: [
      'Transmission Fix',
      'Diesel Deep Clean®',
      'Pure Synthetic Oil Stabilizer',
    ],
  },
];

export default function OurProducts() {
  return (
    <section className="w-full bg-[#081b37] py-16 md:py-24 relative">
      <div className="custom-container relative ">
        
        {/* Decorative Brackets (Visible on large screens) */}
        <div className="hidden xl:block absolute left-[-60px] top-1/2 -translate-y-1/2 h-[110%] w-20 border-l-[20px] border-y-[20px] border-[#d1d5db] z-0"></div>

        <div className="hidden xl:block absolute right-[-60px] top-1/2 -translate-y-1/2 h-[110%] w-20 border-r-[20px] border-y-[20px] border-[#d1d5db] z-0"></div>

        {/* Main Content Box */}
        <div className="relative z-10 p-2 md:p-4">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4" data-aos="fade-up">
            <div className="flex items-center space-x-3 mb-4 sm:mb-0">
              <img 
                src="/moto/lucas-oil/setting.png" 
                alt="Setting icon" 
                className="w-5 h-5 md:w-6 md:h-6 object-contain"
              />
             <h2 className="!text-white text-3xl md:text-4xl font-semibold tracking-wide">
                Our Products
              </h2>
            </div>
            
            <Button href="#" variant="ternary" >
              Shop Now
            </Button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <div key={idx} className="relative h-[600px]  overflow-hidden group" data-aos="fade-up" data-aos-delay={idx * 100}>
                {/* Background Image */}
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill 
                  className="object-cover transition-transform duration-700 "
                />
                               
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-full">
                  <h3 className="!text-white text-[22px] md:text-[24px] font-bold mb-4 !font-(family-name:--font-orbitron)">
                    {product.title}
                  </h3>
                  
                  <div className="border border-white bg-[#00a8ff]/45 backdrop-blur-[1px] p-2 rounded-md mr-18">
                 
                    <ul className="space-y-2 mb-4">
                      {product.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start text-white text-sm">
                          <span className="mr-2 mt-2 w-[4px] h-[4px] rounded-full bg-white flex-shrink-0"></span>
                          <span className="leading-tight text-sm md:text-[16px] font-medium ">{item}</span>
                        </li>
                      ))}
                    </ul>
                   <div className="flex items-center gap-2">
                  <Link
                    href="#"
                    className="text-white text-sm md:text-[16px] font-semibold hover:text-[#00d2ff] transition-colors font-[family-name:var(--font-orbitron)]"
                  >
                    View More
                    
                  </Link>
                <ArrowRight className='w-5 h-5 object-contain text-white hover:translate-x-2'/>
                </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="w-full flex justify-center mt-12 mb-4">
            <div className="flex space-x-1">
              <div className="w-10 h-[3px] bg-[#00c0e8]"></div>
              <div className="w-10 h-[3px] bg-white"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
