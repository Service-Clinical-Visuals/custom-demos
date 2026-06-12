"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FiArrowRight,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { BsGrid } from "react-icons/bs";

export default function OptimedFooter() {

  return (
    <footer className="w-full bg-[#045766] overflow-hidden">
      
      <div className="max-w-[1600px] mx-auto px-6 pt-16 pb-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.4fr_0.4fr_0.7fr_0.6fr] gap-14 ">
          
          {/* Brand */}
          <div data-aos="fade-right">
            
            {/* Logo */}
            <div className="flex items-center gap-4">

              <img src="/optimed/optimed-logo.png" alt="logo" />
            </div>

            {/* Description */}
            <p className="mt-8 text-white/85 text-[16px] leading-[2] max-w-[575px]">
              As a global manufacturer of products in the medical technology
              sector, we at optimed make an important contribution to people's
              health.
            </p>

            {/* Connect */}
            <div className="mt-10">
              
              <h3 className="text-white text-lg font-bold">
                Connect with Us
              </h3>

              {/* Input */}
              <div className="mt-5 flex items-center overflow-hidden rounded-full bg-white max-w-[360px] shadow-md">
                
                <input
                  type="email"
                  placeholder="Enter Your E-mail"
                  className="flex-1 h-[58px] px-7 text-[15px] text-[#7f7f7f] outline-none bg-transparent"
                />

                <button className="w-[58px] h-[58px] rounded-full bg-[#f29b58] flex items-center justify-center shrink-0 hover:scale-105 transition">
                  <FiArrowRight className="text-white text-[18px]" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
          >
            
            <h3 className="text-white text-lg font-bold">
              Quick Links
            </h3>

            <ul className="mt-8 space-y-5">
              {[
                "Home",
                "About Us",
                "Our Products",
                "Partnership",
                "News",
              ].map((item, index) => (
                <li
                  key={index}
                  className="text-white/85 text-[16px] hover:text-[#f29b58] transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
          >
            
            <h3 className="text-white text-lg font-bold">
              Address
            </h3>

            <div className="mt-8 flex items-start gap-4">
              
              <FiMapPin className="text-white text-[22px] mt-1 shrink-0" />

              <p className="text-white/85 text-[16px] leading-[2]">
                Optimed Medizinische Instrumente GmbH
                <br />
                Ferdinand-Porsche-Straße 11
                <br />
                D-76275 Ettlingen
              </p>
            </div>
          </div>

          {/* Contact */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
          >
            
            <h3 className="text-white text-lg font-bold">
              Contact
            </h3>

            {/* Contact Info */}
            <div className="mt-8 space-y-5">
              
              <div className="flex items-center gap-4">
                <FiPhone className="text-white text-[20px]" />

                <span className="text-white/85 text-[16px]">
                  +49(0)72 43 / 76 33-0
                </span>
              </div>

              <div className="flex items-center gap-4">
                <BsGrid className="text-white text-[18px]" />

                <span className="text-white/85 text-[16px]">
                  +49(0)72 43 / 76 33-624
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FiMail className="text-white text-[20px]" />

                <span className="text-white/85 text-[16px]">
                  info@optimed.com
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10">
              
              <h4 className="text-white text-lg font-bold">
                Social Media
              </h4>

              <div className="flex items-center gap-5 mt-5">
                
                <button className="cursor-pointer text-white text-[22px] hover:text-[#f29b58] transition">
                  <FaLinkedin />
                </button>

                <button className="cursor-pointer text-white text-[22px] hover:text-[#f29b58] transition">
                  <FaInstagram />
                </button>

                <button className="cursor-pointer text-white text-[22px] hover:text-[#f29b58] transition">
                  <FaYoutube />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/30 mt-16"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-8">
          
          <p className="text-white/85 text-[15px] text-center md:text-left">
            Copyrights@2026 Optimed.All rights reserved
          </p>

          <div className="flex items-center gap-10">
            
            <button className="text-white/85 text-[15px] hover:text-[#f29b58] transition">
              Terms and Conditions
            </button>

            <button className="text-white/85 text-[15px] hover:text-[#f29b58] transition">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}