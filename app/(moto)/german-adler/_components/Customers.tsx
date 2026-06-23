import React from 'react';
import Button from './Button';

export default function Customers() {
  const customerGroups = [
    'Automotive Manufacturer',
    'Construction Company',
    'Automotive Parts Trade'
  ];

  return (
    <section className="w-full py-20 lg:py-24 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          
          {/* Card 1: Text Block */}
          <div 
            className="border-[4px] border-[#fcc415] bg-white p-6 xl:p-8 flex flex-col h-full rounded-br-[60px] md:col-span-2 xl:col-span-1" 
            data-aos="fade-up"
          >
           
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black tracking-tight mb-6 leading-[1.2] !font-oxanium">
              <span className="uppercase !font-oxanium">GERM<span className="text-[#fcc415]">A</span>N ADLER</span> <br className="hidden 2xl:block" />

  <span>Customers</span>
             </h2>
            
            <div className="text-[#333333] text-md md:text-[16px] leading-[1.8] space-y-4 mb-10 flex-grow">
              
              <p>
                Our customers are at the heart of everything we do. We place a high value on a good personal relationship and cooperation with all our partners. Flexibility, reliability, fairness and trust are the foundation of our business. We develop new market strategies together with you and provide you with advisory support.
              </p>
              <p>
                Our strategy puts our customers at the center of all business activity. We deliver our products to more than 30 countries worldwide and serve the following customer groups:
              </p>
              
              <ul className="space-y-3 mt-6">
                {customerGroups.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <img 
                      src="/moto/german-adler/customer_setting.png" 
                      alt="bullet icon" 
                      className="w-[25px] h-[25px] object-contain" 
                    />
                    <span className="font-normal text-[#535353] !font-oxanium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto">
              <Button text="View Details" href="#" />
            </div>
          </div>

          {/* Card 2: Grey Bottles */}
          <div 
            className="h-full w-full  rounded-tr-[60px] overflow-hidden" 
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            <img 
              src="/moto/german-adler/customer3.png" 
              alt="Grey Oil Bottles" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Card 3: Yellow Barrels */}
          <div 
            className="h-full w-full min-h-[350px] xl:min-h-full rounded-tl-[60px] overflow-hidden" 
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <img 
              src="/moto/german-adler/customer4.png" 
              alt="Yellow Oil Barrels" 
              className="w-full h-full object-cover" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
