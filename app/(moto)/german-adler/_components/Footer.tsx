import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#535353] text-white">
      {/* Top Yellow Bar - Newsletter */}
      <div className="bg-[#fcc415] w-full py-3 md:py-4 relative overflow-hidden">
        <div className="custom-container flex flex-col lg:flex-row items-center justify-between z-10 gap-6 lg:gap-0">
          
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black tracking-normal " data-aos="fade-right">
            Drive Into the Latest Updates
          </h2>
          <div className="flex items-center gap-[4px] w-full lg:w-auto justify-center lg:justify-end pr-0 md:pr-4 lg:pr-10" data-aos="fade-left">
            <div className="bg-white py-[12px] md:py-[15px] -skew-x-[35deg] w-[100px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[450px] flex items-center justify-center px-4">
              <input 
                type="email" 
                placeholder="Enter Your E-mail id" 
                className="w-full bg-transparent outline-none skew-x-[35deg] text-center text-gray-500 placeholder-gray-400 placeholder:font-[oxanium] font-medium text-md md:text-xl"
              />
            </div>
            <button className="bg-white py-[12px] md:py-[15px] -skew-x-[35deg] hover:bg-gray-50 transition-colors w-[70px] sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[180px] flex items-center justify-center ">
              <span className="block skew-x-[35deg] text-[#fcc415] font-semibold text-sm md:text-xl capitalize tracking-wide !font-oxanium "  >Subscribe</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="custom-container py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-[5fr_1.5fr_1.5fr_2.5fr] gap-6 md:gap-y-10 md:gap-x-16 xl:gap-8">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col pr-0 xl:pr-8 col-span-2 md:col-span-1 xl:col-span-1" data-aos="fade-up">
            <img 
              src="/moto/german-adler/footer logo.png" 
              alt="German Adler Logo" 
              className="h-[75px] md:h-[95px] w-auto object-contain object-left mb-6" 
            />
            <p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] mb-10 max-w-[420px]">
              We handle your requests very swiftly and flexibly throughout every process, from new products, through order and production to logistic
            </p>
            <h4 className="text-[#fcc415] font-semibold text-md md:text-[20px] leading-[1.8] mb-2 tracking-wide">Socials</h4>
            <div className="flex gap-4 items-center">
              <img src="/moto/german-adler/footer6.png" className='w-8 h-8'></img>
              <img src="/moto/german-adler/footer5.png" className='w-8 h-8'></img>
            </div>
          </div>
 
           {/* Column 2: Quick Links */}
          <div className="col-span-1" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-[#fcc415] font-semibold text-md md:text-[20px] leading-[1.8] mb-8 tracking-wide">Quick links</h4>
            <ul className="space-y-4 text-[13.5px] text-white/80 font-normal">
              <li>
                <p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">Home</p></li>
              <li><p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">About Us</p></li>
              <li><p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">Products</p></li>
              <li><p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">Catalogs</p></li>
              <li><p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">News</p></li>
            </ul>
          </div>
 
           {/* Column 3: Products */}
          <div className="col-span-1" data-aos="fade-up" data-aos-delay="200">
             <h4 className="text-[#fcc415] font-semibold text-md md:text-[20px] leading-[1.8] mb-8 tracking-wide">Products</h4>
            <ul className="space-y-4 text-[13.5px] text-white/80 font-normal">
              <li><p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">Car Motor Oil</p></li>
              <li><p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">Truck Motor Oil</p></li>
              <li><p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">Gear Oils</p></li>
              <li><p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">Break Fluids</p></li>
              <li className="pt-2"><p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">See More...</p></li>
            </ul>
          </div>
 
           {/* Column 4: Contact */}
          <div className="col-span-2 md:col-span-1 xl:col-span-1" data-aos="fade-up" data-aos-delay="300">
             <h4 className="text-[#fcc415] font-semibold text-md md:text-[20px] leading-[1.8] mb-8 tracking-wide">Contact</h4>
            <div className="border border-white p-6 flex flex-col gap-6 text-[13px] text-white/90 font-normal">
              
              <div className="flex gap-4">
                <img src="/moto/german-adler/footer1.png" className='w-6 h-6'></img>
                <p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">GERMAN ADLER GmbH Kennedyallee 93<br/>60596 Frankfurt am Main Germany</p>
              </div>

              <div className="flex items-center gap-4">
                <img src="/moto/german-adler/footer2.png" className='w-5 h-5'></img>
                <p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">+49 69 697 692 10</p>
              </div>

              <div className="flex items-center gap-4">
                <img src="/moto/german-adler/footer3.png" className='w-5 h-5' ></img>
                <p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">+49 69 697 692 15</p>
              </div>

              <div className="flex items-center gap-4">
                <img src="/moto/german-adler/footer4.png"  className='w-5 h-5'></img>
                <p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">info@German-Adler.com</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="custom-container">
        <div className="border-t border-white/20 py-4 flex flex-col xl:flex-row justify-between items-center text-[12.5px] text-white/70 font-normal gap-4 xl:gap-0">
            <p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] text-center xl:text-left">
            Copyrights@2026 GERMAN ADLER .All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10  tracking-wide text-[11.5px] md:text-[12.5px]">
            <p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">IMPRINT / Impressum</p>
            <p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">DATA PROTECTION / Datenschutz</p>
            <p className="text-[#ffffff] text-md md:text-[16px] leading-[1.8] ">TERMS OF USE / AGBs</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
