"use client";

import Link from "next/link";
import { Linkedin, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#C5EEFF] pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.5fr_1.5fr_1.5fr_2.5fr_1.5fr_2.5fr] gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="">
            <div className="flex items-center gap-2 mb-6">
                 <img src="/strena/images/strena-logo.png" alt="strena-logo" className="h-12" />
            </div>
            <p className="text-[15px] lg:text-[16px] leading-relaxed mb-8">
              Strena Medical, with 35+ years of experience, delivers medical devices 
              across Diagnostic Imaging, Gynecology, and Critical Care worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="">
            <h4 className="text-[#00427C] font-semibold mb-6 text-[18px] lg:text-[20px]">Quick Links</h4>
            <ul className="space-y-4 text-[15px] lg:text-[16px] ">
              <li><Link href="#" className="hover:text-[#00427C]">Home</Link></li>
              <li><Link href="#" className="hover:text-[#00427C]">Our Companies</Link></li>
              <li><Link href="#" className="hover:text-[#00427C]">Product Gallery</Link></li>
              <li><Link href="#" className="hover:text-[#00427C]">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#00427C]">Features</Link></li>
            </ul>
          </div>

          {/* Our Brand */}
          <div className="">
            <h4 className="text-[#00427C] font-semibold mb-6 text-[18px] lg:text-[20px]">Our Brand</h4>
            <ul className="space-y-4 text-[15px] lg:text-[16px] ">
              <li><Link href="#" className="hover:text-[#00427C]">Medisono</Link></li>
              <li><Link href="#" className="hover:text-[#00427C]">mediblu</Link></li>
              <li><Link href="#" className="hover:text-[#00427C]">D.Heart</Link></li>
              <li><Link href="#" className="hover:text-[#00427C]">Medimar</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div className="">
            <h4 className="text-[#00427C] font-semibold mb-6 text-[18px] lg:text-[20px]">Address</h4>
            <div className="space-y-6 text-[15px] lg:text-[16px]">
              <div className="flex gap-2">
                <MapPin className="text-[#00427C] shrink-0" size={18} />
                <p><span className="font-semibold">Europe Office:</span> Via Antonio Cantore 8H/38 16149 Genoa Italy</p>
              </div>
              <div className="flex gap-2">
                <MapPin className="text-[#00427C] shrink-0" size={18} />
                <p><span className="font-semibold">United States Office:</span> 3016 NW 82nd Ave Doral, Florida, USA 33122</p>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="">
            <h4 className="text-[#00427C] font-semibold mb-6 text-[18px] lg:text-[20px]">Contact Us</h4>
            <div className="space-y-6 text-[15px] lg:text-[16px]">
              <div className="flex gap-2 items-center">
                <Phone className="text-[#00427C] shrink-0" size={18} />
                <p>+1 305 4063931</p>
              </div>
              <div className="flex gap-2 items-center ml-7">
                <p>+39 010 3017000</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="">
            <h4 className="text-[#00427C] font-semibold mb-6 text-[18px] lg:text-[20px]">Newsletter</h4>
            <p className="text-[15px] lg:text-[16px] mb-6">Stay Update with our Latest Innovations and News</p>
            <div className="relative mb-8">
              <input 
                type="email" 
                placeholder="Enter Your E-Mail"
                className="w-full bg-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#00427C]"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#00427C] rounded-md flex items-center justify-center text-white hover:bg-[#00305a] transition-all">
                <Send size={14} />
              </button>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#00427C] hover:bg-[#00427C] hover:text-white transition-all shadow-sm">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#00427C] hover:bg-[#00427C] hover:text-white transition-all shadow-sm">
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#00427C]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[15px] lg:text-[16px]">@2026StrenaMedical. All Rights Reserved</p>
          <div className="flex gap-6 text-[15px] lg:text-[16px] font-semibold">
            <Link href="#" className="hover:text-[#00427C]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#00427C]">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
