import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Facebook, Twitter, PinIcon as Pinterest, Instagram, 
  Layers, ShieldCheck, Link as LinkIcon, Users, ChevronRight, Mail 
} from 'lucide-react';
import Button from './Button';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* Top Main Footer Area */}
      <div className="w-full bg-section-gradient py-16 lg:py-20">
        <div className="custom-container px-4 xl:px-0">
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 xl:gap-0 xl:divide-x xl:divide-[#ffffff]">
            
            {/* Column 1: Brand & Social */}
            <div className=" flex flex-col items-start">
              <Link href="/tunning-element" className="mb-6">
                <div className="relative w-40 xl:w-50">
                   <img 
                      src="/medical/tunning-element/logo.png" 
                      alt="Tuning Element" 
                      className="w-full h-auto object-contain object-left"
                   />
                </div>
              </Link>
              <p className="section-text text-[#546476] manrope mb-6 leading-relaxed pr-5 ">
                Tuning Element is committed to authenticity, innovation, and quality in every product we create. Explore our collections designed to support your wellness, lifestyle, and everyday needs.
              </p>
              <div className="flex items-center space-x-3">
                <Link href="#" className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center text-secondary ">
                 <img src="/medical/tunning-element/f1.png" alt="facebook" className='w-5 h-5' />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center text-secondary ">
                 <img src="/medical/tunning-element/f2.png" alt="facebook" className='w-5 h-5' />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center text-secondary ">
                 <img src="/medical/tunning-element/f3.png" alt="facebook" className='w-5 h-5' />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center text-secondary ">
                 <img src="/medical/tunning-element/f4.png" alt="insta" className='w-5 h-5' />
                </Link>
              </div>
            </div>
            
            {/* Column 2: Products */}
            <div className="xl:px-8">
              <div className="flex items-center space-x-3 mb-8">
             
                  <img src="/medical/tunning-element/i1.png" alt="facebook" className='w-12 h-12' />
                <h3 className="feature-title font-heading font-semibold text-[#121f38] relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-[3px] after:bg-[#c0865d]">Products</h3>
              </div>
              <ul className="space-y-4">
                {['Catalog', 'AquaTune Water Bottles', 'Sleep Necklace', 'Patches', 'Animals'].map((item, index) => (
                  <li key={index}>
                                        <Link href="#" className="section-text text-[#546476] manrope mb-6 flex items-center ">

                      <ChevronRight className="w-4 h-4 mr-2 text-secondary shrink-0" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 3: Tuning Element */}
            <div className="xl:px-8">
              <div className="flex items-center space-x-3 mb-8">
                <img src="/medical/tunning-element/i2.png" alt="facebook" className='w-12 h-12' />
                 <h3 className="feature-title font-heading font-semibold text-[#121f38] relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-[3px] after:bg-[#c0865d]">Tuning Element</h3>
              </div>
              <ul className="space-y-4">
                {['Authenticity', 'Product Manual & Waranty', 'Return Policy', 'Sizing Guide'].map((item, index) => (
                  <li key={index}>
                                        <Link href="#" className="section-text text-[#546476] manrope mb-6 flex items-center ">

                      <ChevronRight className="w-4 h-4 mr-2 text-secondary shrink-0" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 4: Other Links */}
            <div className="xl:px-8">
              <div className="flex items-center space-x-3 mb-8">
                <img src="/medical/tunning-element/i3.png" alt="facebook" className='w-12 h-12' />
                 <h3 className="feature-title font-heading font-semibold text-[#121f38] relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-[3px] after:bg-[#c0865d]">Other Links</h3>
              </div>
              <ul className="space-y-4">
                {['Mission Impact', 'FAQs', 'Locations', 'Testimonies', 'Products'].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="section-text text-[#546476] manrope mb-6 flex items-center ">
                      <ChevronRight className="w-4 h-4 mr-2 text-secondary shrink-0" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 5: Stay Connected */}
            <div className="xl:pl-8">
              <div className="flex items-center space-x-3 mb-8">
               <img src="/medical/tunning-element/i4.png" alt="facebook" className='w-12 h-12' />
                <h3 className="feature-title font-heading font-semibold text-[#121f38] relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-[3px] after:bg-[#c0865d]">Stay Connected</h3>
              </div>
              <p className="section-text text-[#546476] manrope mb-6 leading-relaxed">
                Subscribe to get the latest updates, new products releases, and exclusive offers.
              </p>
              <div className="relative mb-4">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-white/50 border border-white focus:border-secondary outline-none px-4 py-3 pr-10 text-gray-700 rounded-sm transition-colors"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
              </div>
              <Button>Get the Latest News</Button>
            </div>
            
          </div>
          
        </div>
      </div>
      
      {/* Bottom Copyright Strip */}
      <div className="w-full bg-[#546476] py-4">
        <div className="custom-container px-4 xl:px-0 text-center">
          <p className="section-text text-[#ffffff] manrope  ">
            Copyright © 2024 Tuning Element, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
