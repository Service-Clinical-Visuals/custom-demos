import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col lg:col-span-4">
            <div className="mb-8">
              {/* Logo text - mimicking the visual style */}
              <img src="/otopront/images/footer-logo.png" alt="otopront-logo" className="w-64 lg:w-80" />
            </div>
            <p className="text-[#484848] leading-relaxed pr-4">
              We take responsibility. Since 2021, we have been securing 100% of our energy needs with green electricity from production-certified European hydropower plants.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col lg:col-span-2">
            <h4 className="text-[#111111] font-bold mb-6 text-[18px] lg:text-[22px]">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Our Products", "News", "Service Request"].map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-[#484848] hover:text-[#BD0A27] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col lg:col-span-3">
            <h4 className="text-[#111111] font-bold mb-6 text-[18px] lg:text-[22px]">Services</h4>
            <ul className="space-y-4">
              {["Customer Service", "Practice planning", "IT service & integration", "Training center"].map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-[#484848] hover:text-[#BD0A27] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Customer Service */}
          <div className="flex flex-col lg:col-span-3">
            <h4 className="text-[#111111] font-bold mb-6 text-[18px] lg:text-[22px]">Customer Service Germany</h4>
            <p className="text-[#484848] leading-relaxed mb-6">
              Eduard Martens,<br />
              Rolf Petri,<br />
              Thomas Wagner
            </p>
            
            <div className="space-y-4">
              <a href="tel:+4906120921710" className="flex items-center group">
                <Phone size={18} className="text-[#BD0A27] mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-[#484848] group-hover:text-[#BD0A27] transition-colors">+49 (0) 6120 9217-10</span>
              </a>
              <a href="https://wa.me/4906120921710" className="flex items-center group">
                <MessageCircle size={18} className="text-[#BD0A27] mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-[#484848] group-hover:text-[#BD0A27] transition-colors">+49 (0) 6120 9217-10</span>
              </a>
              <a href="mailto:kundendienst@otopront.de" className="flex items-center group">
                <Mail size={18} className="text-[#BD0A27] mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-[#484848] group-hover:text-[#BD0A27] transition-colors">kundendienst(at)otopront.de</span>
              </a>
            </div>
          </div>
          
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left: Legal & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-2 text-[#484848]">
              <Link href="#" className="hover:text-[#BD0A27] transition-colors">Terms & Conditions</Link>
              <span className="text-gray-300">|</span>
              <Link href="#" className="hover:text-[#BD0A27] transition-colors">Imprint</Link>
              <span className="text-gray-300">|</span>
              <Link href="#" className="hover:text-[#BD0A27] transition-colors">Privacy Policy</Link>
            </div>
            <p className="text-[#777777]">
              copyrights@2026 otopront.All rights reserved
            </p>
          </div>

          {/* Right: Logos/Certifications */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 opacity-80 hover:opacity-100 transition-opacity">
            
            {/* TUV Logo Placeholder */}
            <div className="flex items-center h-14">
               <img src="otopront/images/c-1.png" alt="" className="h-full w-auto" />
            </div>

            {/* DGKH Logo Placeholder */}
            <div className="flex items-center h-14">
              <img src="otopront/images/c-2.png" alt="" className="h-full w-auto" />
            </div>

            {/* HNO-Technik Logo Placeholder */}
            <div className="flex items-center h-14">
              <img src="otopront/images/c-3.png" alt="" className="h-full w-auto" />
            </div>
            
          </div>
          
        </div>
      </div>
    </footer>
  );
}
