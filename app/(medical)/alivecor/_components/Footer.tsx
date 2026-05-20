"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Linkedin, Navigation, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#174e8c2b] pt-16 pb-6">
      <div className="container mx-auto px-4 lg:px-12">
        
        {/* Top 5-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[5fr_2fr_2fr_2fr_4fr] gap-8 lg:gap-6 mb-12">
          
          {/* Column 1: AliveCor Logo & Description */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <Link href="/alivecor" className="flex items-center mb-6">
              <img src="/alivecor/images/alivecor-footer.png" alt="Footer Logo" className="w-40" />
            </Link>
            <p className="font-sans text-[12px] leading-relaxed font-light mb-6 pr-4">
              We are advancing our mission with end-to-end cardiological care and services for consumers, patients, providers, and payers that use state-of-the-art tools to improve diagnosis and treatment and help reduce disparities in care.
            </p>
            <div className="flex items-center gap-4 text-black">
              <a href="#" className="hover:text-[#004B87] transition-colors"><Instagram size={18} /></a>
              <a href="#" className="hover:text-[#004B87] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-[#004B87] transition-colors"><Twitter size={18} /></a>
              <a href="#" className="hover:text-[#004B87] transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start lg:pl-6">
            <h4 className="text-[20px] font-semibold text-[#004B87] mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-6 font-sans text-[16px] font-medium text-[#666666]">
              <li><Link href="#" className="hover:text-[#004B87]">Home</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Products</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Newsroom</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Support */}
          <div className="flex flex-col items-start">
            <h4 className="text-[20px] font-semibold text-[#004B87] mb-6">
              Support
            </h4>
            <ul className="flex flex-col gap-6 font-sans text-[16px] font-medium text-[#666666]">
              <li><Link href="#" className="hover:text-[#004B87]">FAQs</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">User Manual</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Compatibility</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Shipping</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Kardia Products */}
          <div className="flex flex-col items-start">
            <Link href="#" className="flex items-center mb-6">
              <img src="/alivecor/images/kardia-footer.png" alt="Kardia Logo" className="w-40" />
            </Link>
            <ul className="flex flex-col gap-6 font-sans text-[16px] font-medium text-[#666666]">
              <li><Link href="#" className="hover:text-[#004B87]">KardiaMobile Card</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">KardiaMobile 6L</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">KardiaMobile</Link></li>
              <li><Link href="#" className="text-[#004B87] hover:underline">See All</Link></li>
            </ul>
          </div>
          
          {/* Column 5: Connect With Us */}
          <div className="flex flex-col items-start">
            <h4 className="text-[20px] font-semibold text-[#004B87] mb-6">
              Connect With Us
            </h4>
            
            {/* Newsletter Input */}
            <div className="flex w-full mb-6 relative shadow-sm">
              <input 
                type="email" 
                placeholder="Enter your E-mail id" 
                className="w-full bg-white text-[13px] font-sans text-[#333] px-4 py-3 rounded-l-md outline-none border border-transparent focus:border-[#004B87]/30 transition-colors"
              />
              <button className="bg-[#004B87] text-white px-4 rounded-r-md flex items-center justify-center hover:bg-[#003561] transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
            
            {/* Address */}
            <div className="mb-4 w-full">
              <h5 className="text-[18px] font-semibold text-[#004B87] mb-2">Address</h5>
              <div className="flex items-start gap-2 text-[#484848] font-sans text-[12px] leading-relaxed">
                <Navigation size={14} className="mt-1 flex-shrink-0" />
                <p className="text-[16px]!">444 Castro St, 6th Floor, Mountain View,<br/>CA 94041, US</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="w-full">
              <h5 className="text-[18px] font-semibold text-[#004B87] mb-2">Phone</h5>
              <div className="flex items-center gap-2 text-[#484848] font-sans text-[12px]">
                <Phone size={14} className="flex-shrink-0" />
                <p className="text-[16px]!">(855) 338-8800</p>
              </div>
            </div>
            
          </div>
          
        </div>
        
        {/* Bottom Row: Copyright & Legal */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[14px]!">
            Copyrights@2026 Alivecor.All rights reserved
          </p>
          <div className="flex items-center gap-6 font-sans text-[14px]">
            <Link href="#" className="hover:text-[#004B87]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#004B87]">Terms</Link>
            <Link href="#" className="hover:text-[#004B87]">Security</Link>
            <Link href="#" className="hover:text-[#004B87]">Accessibility</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
