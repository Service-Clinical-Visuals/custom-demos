import React from "react";
import Button from "./Button";

export default function About() {
  return (
    <section className="w-full py-20 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-12 items-center">
          
          {/* Left Side: Images */}
          <div className="relative w-full flex justify-center xl:justify-start order-2 xl:order-1" data-aos="fade-right">
            <div className="relative flex items-stretch w-full aspect-[780/491]">
              
              {/* Product Card (Left) */}
             <div className="w-1/2 z-0 relative">
                <img 
                  src="/moto/german-adler/Subtract (1).png" 
                  alt="German Adler Product" 
                  className="w-full h-full object-cover  drop-shadow-xl" 
                />
              </div>
              
              {/* City Image (Right) */}
              <div className="w-1/2 z-0 relative">
                <img 
                  src="/moto/german-adler/Subtract.png" 
                  alt="Frankfurt Skyline" 
                  className="w-full h-full object-cover rounded-r-[32px] sm:rounded-r-[48px]" 
                />
              </div>

              {/* Ship Wheel Connector */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-[1px] z-20 w-[15%] aspect-square rounded-full flex items-center justify-center bg-transparent">
                <img 
                  src="/moto/german-adler/mynaui_ship-wheel.png" 
                  alt="Wheel Icon" 
                  className="w-[80%] h-[80%] object-contain animate-[spin_10s_linear_infinite]" 
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col gap-6 order-1 xl:order-2" data-aos="fade-left" data-aos-delay="100">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black tracking-tight">About Us</h2>
            
            <div className="space-y-5 text-[#333333] text-md md:text-[16px] leading-[1.8]">
              <p>
                GERMAN ADLER is an internationally operating company in the lubricant industry, established in 2013, with its headquarters located in Frankfurt/Main, in central Germany.
              </p>
              <p>
                Our core business is the global selling of motor oils, gear oils, hydraulic and steering fluids, industrial and agricultural oils, additives as well as brake fluids, antifreeze and coolant. Since each item of our wide product range is manufactured in Germany, it is created in a certified production process and therefore meets the highest quality standards.
              </p>
              <p>
                Our company places great value on good cooperation and is characterised by flexibility and reliability. On these grounds we develop new market strategies together with our business partners and provide them with advisory support. One of our guiding principles is "GERMAN ADLER means being partner, not just customer".
              </p>
            </div>

            {/* Button */}
            <div className="mt-4">
              <Button text="Drive With Us" href="#" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
