"use client";

import Image from "next/image";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-4 border-t border-gray-100">
      <div className="react-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16" data-aos="fade-up">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="w-[180px] mb-8">
              <Image
                src="/react-health/logo.jpg"
                alt="React Health"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-react-text-gray text-[16px] leading-relaxed max-w-xs">
              React Health delivers innovative and accessible sleep and respiratory care solutions designed to help people breathe easier, sleep better, and live healthier.
            </p>
          </div>

          {/* Support & Updates */}
          <div>
            <h4 className="font-bold text-react-text-dark mb-8">Support & Updates</h4>
            <ul className="space-y-4 text-[16px] text-react-text-gray">
              <li><a href="#" className="hover:text-react-purple transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-react-purple transition-colors">Lumin/Lumin Wand Registration</a></li>
              <li><a href="#" className="hover:text-react-purple transition-colors">Subscribe to Newsletter</a></li>
              <li><a href="#" className="hover:text-react-purple transition-colors">React Health Connect</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-react-text-dark mb-8">Legal & Policies</h4>
            <ul className="space-y-4 text-[16px] text-react-text-gray">
              <li><a href="#" className="hover:text-react-purple transition-colors">Sitemap</a></li>
              <li><a href="#" className="hover:text-react-purple transition-colors">Ethics & Compliance</a></li>
              <li><a href="#" className="hover:text-react-purple transition-colors">Internet E-Commerce Policy</a></li>
              <li><a href="#" className="hover:text-react-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-react-purple transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-react-purple transition-colors">See All..</a></li>
            </ul>
          </div>


          {/* Social Media Links */}
          <div>
            <h4 className="font-bold text-react-text-dark mb-8">Social Media Links</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-react-purple text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-react-purple text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-react-purple text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Facebook size={20} />
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden mt-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.6686780117257!2d-83.13470339999999!3d40.082802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c34751033e516d%3A0x8a72d46890353e55!2sReact%20Health!5e0!3m2!1sen!2sin!4v1778664897173!5m2!1sen!2sin" className="w-full" height="180" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-4 flex flex-col md:flex-row justify-center items-center">
          <p className="text-react-text-gray text-xs text-center">
            Copyright © 2026 React Health. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
