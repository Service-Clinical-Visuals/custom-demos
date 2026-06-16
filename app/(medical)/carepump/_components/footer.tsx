"use client";

import {
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="carepump-footer" className="bg-[#005575] text-white pt-8 twok">
      <div className="container mx-auto py-5">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10">

          {/* Logo + Newsletter */}
          <div data-aos="fade-up" data-aos-delay="0" data-aos-anchor="#carepump-footer" data-aos-offset="0">
            <img
              src="/carepump/images/carepumpicon.png"
              alt="CarePump"
              className="w-[280px] h-auto max-w-full mb-8"
            />

            <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold mb-4">
              Newsletter
            </h3>

            <p className="text-white/80 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-7 mb-6">
              Receive the latest information about lymphatic drainage
              and CarePump products. Zero spam.
            </p>

            <div className="flex max-w-[300px]">
              <input
                type="email"
                placeholder="Email Address...."
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-700 outline-none bg-white"
              />

              <button className="bg-[#12B7E5] px-5 rounded-r-lg hover:bg-[#0ea5cf] transition">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Products */}
          <div data-aos="fade-up" data-aos-delay="100" data-aos-anchor="#carepump-footer" data-aos-offset="0">
            <h4 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold mb-4">Products</h4>

            <ul className="space-y-3 text-white/80 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
              <li><a href="#" className="hover:text-white transition">Advanced series</a></li>
              <li><a href="#" className="hover:text-white transition">Economic Series</a></li>
              <li><a href="#" className="hover:text-white transition">Sport Series</a></li>
              <li><a href="#" className="hover:text-white transition">Accessories</a></li>
            </ul>
          </div>

          {/* CarePump */}
          <div data-aos="fade-up" data-aos-delay="200" data-aos-anchor="#carepump-footer" data-aos-offset="0">
            <h4 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold mb-4">CarePump</h4>

            <ul className="space-y-3 text-white/80 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
              <li><a href="#" className="hover:text-white transition">About us</a></li>
              <li><a href="#" className="hover:text-white transition">Lymphatic drainage</a></li>
              <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Information */}
          <div data-aos="fade-up" data-aos-delay="300" data-aos-anchor="#carepump-footer" data-aos-offset="0">
            <h4 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold mb-4">Information</h4>

            <ul className="space-y-3 text-white/80 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Service</a></li>
              <li><a href="#" className="hover:text-white transition">Downloads</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="400" data-aos-anchor="#carepump-footer" data-aos-offset="0">
            <h4 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold mb-4">Contact</h4>

            <div className="space-y-3 text-white/80 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
              <p>contact@carepump.com</p>
              <p>(+48) 722 000 035</p>
            </div>

            <div className="flex gap-3 mt-5">
              {[
                Instagram,
                Youtube,
                Facebook,
                Linkedin,
              ].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#43BAEA] flex items-center justify-center hover:bg-white hover:text-[#005575] transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-10" />

        {/* Bottom Section */}
        <div data-aos="fade-up" data-aos-delay="500" data-aos-anchor="#carepump-footer" data-aos-offset="0" className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/80 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">

          {/* Grouped Left Side */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <p>
              2026 © CarePump - Unique Lymphatic Drainage Devices
            </p>

            <a
              href="#"
              className="transition-all duration-200 hover:text-white hover:underline underline-offset-4"
            >
              Privacy policy
            </a>
          </div>

          {/* Right Side */}
          <p>
            Created by: gilewski-studio.pl
          </p>
        </div>

      </div>
    </footer>
  );
}