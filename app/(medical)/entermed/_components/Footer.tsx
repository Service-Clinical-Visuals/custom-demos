"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, MapPin, Phone, Mail } from "lucide-react";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-[#F5333F0D] pt-10 pb-5 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-14">

          {/* Column 1: Logo & Subscribe */}
          <div className="flex flex-col lg:col-span-5" data-aos="fade-up" data-aos-delay="100">
            <Link href="/entermed" className="flex items-center gap-2.5 mb-6">
              <img src="/entermed/entermed-logo.png" alt="Entermed" className="h-13 object-contain" />
            </Link>
            <p className="text-gray-500 text-[16px] leading-[1.7] mb-8 pr-4 lg:pr-12">
              Entermed, established in 1976, specializes in designing treatment units and equipment for the ear, nose and throat (ENT) discipline.
            </p>

            <h4 className="!text-primary font-bold text-[20px] mb-4">Stay Updated</h4>
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter your E-Mail id"
                className="bg-white border border-primary/50 focus:border-primary rounded-[6px] px-4 py-2.5 text-[14px] outline-none w-full max-w-[280px] shadow-sm"
              />
              {/* <Button variant="solid" type="submit">Subscribe</Button> */}
              <button className="!bg-primary cursor-pointer text-white py-2 px-4 rounded-4xl font-bold text-[14px]">Subscribe</button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <h4 className="!text-primary font-bold text-[20px] mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3.5">
              <Link href="#about" className="text-gray-600 hover:text-primary text-[16px] transition-colors">About Us</Link>
              <Link href="#products" className="text-gray-600 hover:text-primary text-[16px] transition-colors">Products</Link>
              <Link href="#news" className="text-gray-600 hover:text-primary text-[16px] transition-colors">News</Link>
              <Link href="#" className="text-gray-800 hover:text-primary mt-2 transition-colors">
               <img src="/entermed/in.png" alt="LinkedIn" className="w-6 h-6" />                           
              </Link>
            </div>
          </div>

          {/* Column 3: Our Technology */}
          <div className="flex flex-col lg:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <h4 className="!text-primary font-bold text-[20px] mb-6">Our Technology</h4>
            <div className="flex flex-col gap-3.5">
              <Link href="#" className="text-gray-600 hover:text-primary text-[16px] transition-colors">ENT treatment units</Link>
              <Link href="#" className="text-gray-600 hover:text-primary text-[16px] transition-colors">Chairs and stools</Link>
              <Link href="#" className="text-gray-600 hover:text-primary text-[16px] transition-colors">Headlights</Link>
              <Link href="#" className="text-gray-600 hover:text-primary text-[16px] transition-colors">Irrigators</Link>
              <Link href="#" className="text-primary hover:text-primary-hover text-[16px] transition-colors underline underline-offset-4 mt-1 font-semibold">See More...</Link>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col lg:col-span-3" data-aos="fade-up" data-aos-delay="400">
            <h4 className="!text-primary font-bold text-[20px] mb-6">Contact</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">

                <img src="/entermed/arrow.png"></img>
                <span className="text-gray-600 text-[16px] leading-[1.6]">
                  Steenovenweg 4 3417 XR<br />Montfoort , The<br />Netherlands
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/entermed/phone.png"></img>
                <span className="text-gray-600 text-[16px]">+31 (0) 30 72 00 880</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/entermed/mail.png"></img>
                <span className="text-gray-600 text-[16px]">info@entermed.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-6" data-aos="fade-in" data-aos-delay="500">
          <span className="text-gray-800 text-[16px]">
            Copyrights&copy;2026 Entermed.All Rights Reserved
          </span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link href="#" className="text-gray-800 hover:text-primary text-[16px] transition-colors">Privacy Settings</Link>
            <Link href="#" className="text-gray-800 hover:text-primary text-[16px] transition-colors">Privacy Statement</Link>
            <Link href="#" className="text-gray-800 hover:text-primary text-[16px] transition-colors">Terms and Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
