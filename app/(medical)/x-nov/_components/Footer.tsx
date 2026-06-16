"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-8 relative overflow-hidden x-nov-root">
      {/* Subtle top background wave/curve (Optional, adds to premium feel) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-100 to-transparent opacity-50" />
      
      <div className="custom-container mx-auto px-6 lg:px-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Logo & Description (Wide) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/x-nov" className="mb-6 block">
              {/* Note: The logo path is public/medical/x-nov/x-nov_logo.png as checked previously */}
              <img src="/medical/x-nov/x-nov_logo.png" alt="X.NOV Logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-[#6D6B6B] leading-relaxed mb-8 pr-4 lg:pr-10">
              X.NOV is a European very fast growing company specialized in orthopedic industry (Hip & Knee). We are focused on creativity, innovation and are committed to provide the best services to our customers.
            </p>
            <div>
              <h5 className="text-[#212121] font-semibold text-[18px] lg:text-[20px] mb-4">Social Media Links</h5>
              <div className="flex items-center gap-4 text-[#0077B5]">
                <a href="#" aria-label="LinkedIn" className="hover:text-[#005582] transition-colors">
                  <Linkedin size={22} fill="currentColor" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="text-[18px] lg:text-[20px] font-semibold text-[#212121] mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4 font-light text-[17px] text-[#6D6B6B]">
              <li><Link href="#" className="hover:text-[#EC4899] hover:font-semibold transition-all duration-300">Home</Link></li>
              <li><Link href="#" className="hover:text-[#EC4899] hover:font-semibold transition-all duration-300">Company</Link></li>
              <li><Link href="#" className="hover:text-[#EC4899] hover:font-semibold transition-all duration-300">Events</Link></li>
              <li><Link href="#" className="hover:text-[#EC4899] hover:font-semibold transition-all duration-300">patients</Link></li>
              <li><Link href="#" className="hover:text-[#EC4899] hover:font-semibold transition-all duration-300">Quality</Link></li>
              <li><Link href="#" className="hover:text-[#EC4899] hover:font-semibold transition-all duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 3: About */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="text-[18px] lg:text-[20px] font-semibold text-[#212121] mb-6">
              About
            </h4>
            <ul className="flex flex-col gap-4 font-light text-[17px] text-[#6D6B6B]">
              <li><Link href="#" className="hover:text-[#EC4899] hover:font-semibold transition-all duration-300">Legal information</Link></li>
              <li><Link href="#" className="hover:text-[#EC4899] hover:font-semibold transition-all duration-300">Privacy</Link></li>
              <li><Link href="#" className="hover:text-[#EC4899] hover:font-semibold transition-all duration-300">Sitemap</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter (Wide) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:pl-6">
            <h4 className="text-[18px] lg:text-[20px] font-semibold text-[#EC4899] mb-6">
              Ready to shape the future with us?
            </h4>
            
            {/* Newsletter Input */}
            <div className="flex w-full mb-6 relative">
              <input 
                type="email" 
                placeholder="Please Enter Your Email" 
                className="w-full bg-[#f4f6f9] text-[14px] font-light text-[#333] px-6 py-4 rounded-full outline-none border border-transparent focus:border-[#EC4899]/30 transition-colors placeholder:text-gray-400"
              />
              <button className="absolute right-2 top-2 bottom-2 aspect-square bg-[#4a4a4a] text-white rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors shadow-sm">
                <ArrowRight size={18} />
              </button>
            </div>
            
            <p className="text-[#6D6B6B] font-light text-[14px] leading-relaxed">
              Stay connected with X.NOV for the latest updates, innovations, and orthopaedic solutions.
            </p>
          </div>
          
        </div>
        
        {/* Bottom Row: Copyright */}
        <div className="border-t border-gray-300 pt-8 flex justify-center items-center">
          <p className="font-light text-[13px] text-[#6D6B6B]">
            Copyright 2026, All Rights Reserved
          </p>
        </div>
        
      </div>
    </footer>
  );
}
