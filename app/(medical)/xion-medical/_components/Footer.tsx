"use client";

import { Phone, Mail, Linkedin, Send } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#00AFAF] text-white overflow-hidden">
      <div data-aos="fade-up" className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="grid gap-8 content-start">
             <div className="grid">
                <div className="flex items-center">
                  <img src="/xion/images/white-logo.png" alt="XION Medical" />
                </div>
              </div>
              
              <p className="text-[16px] leading-relaxed">
                XION is one of few companies offering complete endoscopy systems for the application fields of arthroscopy, ENT, laparoscopy and gynaecology.
              </p>
              
              <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                <div className="bg-white rounded-lg px-4 h-12 grid items-center">
                  <input 
                    type="email" 
                    placeholder="Enter email address" 
                    className="bg-transparent text-gray-800 placeholder:text-gray-400 text-sm outline-none w-full"
                  />
                </div>
                <button className="bg-white text-[#00AFAF] h-12 w-12 rounded-lg grid items-center justify-center hover:bg-opacity-90 transition-all">
                  <Send size={20} className="rotate-[-10deg]" />
                </button>
              </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-20">
            <h4 className="text-[22px] font-bold mb-8 tracking-tight">Quick Links</h4>
            <ul className="grid gap-4 text-[16px] font-medium">
              <li><Link href="#" className="hover:translate-x-1 transition-transform inline-block">Home</Link></li>
              <li><Link href="#" className="hover:translate-x-1 transition-transform inline-block">Products</Link></li>
              <li><Link href="#" className="hover:translate-x-1 transition-transform inline-block">System Solutions</Link></li>
              <li><Link href="#" className="hover:translate-x-1 transition-transform inline-block">Service</Link></li>
              <li><Link href="#" className="hover:translate-x-1 transition-transform inline-block">Company</Link></li>
              <li><Link href="#" className="hover:translate-x-1 transition-transform inline-block">Events</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-[22px] font-bold mb-8 tracking-tight">Company</h4>
            <ul className="grid gap-4 text-[16px] font-medium">
              <li><Link href="#" className="hover:translate-x-1 transition-transform inline-block">Impressum</Link></li>
              <li><Link href="#" className="hover:translate-x-1 transition-transform inline-block">Privacy statement</Link></li>
              <li><Link href="#" className="hover:translate-x-1 transition-transform inline-block">General Terms and Conditions</Link></li>
              <li><Link href="#" className="hover:translate-x-1 transition-transform inline-block">Cookie settings</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="grid gap-8 content-start">
            <div>
              <h4 className="text-[22px] font-bold mb-8 tracking-tight">Contact Info</h4>
              <div className="grid gap-6">
                <div className="grid grid-cols-[auto_1fr] items-center gap-3 text-[16px] font-medium">
                  <div className="w-8 h-8 grid items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <span>+49 (0) 30 – 47 49 87– 0</span>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-3 text-[14px] font-bold opacity-90">
                  <div className="w-8 h-8 grid items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <span>info@xion-medical.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[18px] font-black mb-6 tracking-tight">Social</h4>
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-lg grid items-center justify-center hover:bg-white/20 transition-all">
                <Linkedin size={22} className="fill-white text-transparent" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-white py-4 text-center">
        <p className="text-[14px] font-bold text-gray-400 uppercase tracking-widest">
          © XION – ALL RIGHTS RESERVED, 2026
        </p>
      </div>
    </footer>
  );
}
