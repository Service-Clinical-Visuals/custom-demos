"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Linkedin, Navigation, Phone, ArrowRight, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#E3E3E3] pt-16 pb-6">
      <div className="container 2xl:max-w-[80%] mx-auto px-4 lg:px-12">
        
        {/* Top 5-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[5fr_2fr_2fr_2.5fr_2fr] gap-8 lg:gap-6 mb-12">
          
          {/* Column 1: AliveCor Logo & Description */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <Link href="/accu-scope" className="flex items-center mb-6">
              <img src="/accu-scope/accuscope-logo.png" alt="Footer Logo" className="w-[470px]" />
            </Link>
            <p className="font-sans text-[12px] leading-relaxed font-light mb-6 pr-4">
              We are a leading manufacturer of microscopes and related accessories for life science, clinical, research, education and industrial applications.            
            </p>
            <div>
              <h5 className="text-[18px] font-semibold text-black mb-2">Social Media Links</h5>
            </div>
            <div className="flex items-center gap-4 text-[#00609C]">
              <a href="#" className="hover:text-[#004B87] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-[#004B87] transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="hover:text-[#004B87] transition-colors"><Youtube size={18} /></a>
              <a href="#" className="hover:text-[#004B87] transition-colors"><Instagram size={18} /></a>

            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start lg:pl-6">
            <h4 className="text-[20px] font-semibold text-[#004B87] mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-6 font-sans text-[16px] font-medium text-[#666666]">
              <li><Link href="#" className="hover:text-[#004B87]">Home</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Application</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Products</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Support</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Resources</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">News & Events</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">About Us</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Support */}
          <div className="flex flex-col items-start">
            <h4 className="text-[20px] font-semibold text-[#004B87] mb-6">
              Information
            </h4>
            <ul className="flex flex-col gap-6 font-sans text-[16px] font-medium text-[#666666]">
              <li><Link href="#" className="hover:text-[#004B87]">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Customer Support</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Sales Support</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Technical Support</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Privacu Policy</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Kardia Products */}
          <div className="flex flex-col items-start">
            <h4 className="text-[20px] font-semibold text-[#004B87] mb-6">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-6 font-sans text-[16px] font-medium text-[#666666]">
              <li><Link href="#" className="hover:text-[#004B87]">ACCU-SCOPE Inc.</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">73 Mall Drive</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Commack, NY 11725</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Phone: 631-864-1000</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Email: info@accu-scope.com</Link></li>
            </ul>
          </div>
          
          {/* Column 5: Connect With Us */}
          <div className="flex flex-col items-start">
            <h4 className="text-[20px] font-semibold text-[#004B87] mb-6">
              Support
            </h4>
            
            <ul className="flex flex-col gap-6 font-sans text-[16px] font-medium text-[#666666]">
              <li><Link href="#" className="hover:text-[#004B87]">Instruction Manuals</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Frequently Asked QUestions</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Warranty</Link></li>
              <li><Link href="#" className="hover:text-[#004B87]">Video Tutorials</Link></li>
            </ul>
            
          </div>
          
        </div>
        
        <hr></hr>
        {/* Bottom Row: Copyright & Legal */}
        <div className="grid grid-cols-1 text-center mt-5">
            Copyrights@2026 Alivecor.All rights reserved
        </div>
        
      </div>
    </footer>
  );
}
