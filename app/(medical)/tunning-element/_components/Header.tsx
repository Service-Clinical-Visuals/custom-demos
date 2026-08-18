"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Facebook, Twitter, PinIcon as Pinterest, Menu, X } from 'lucide-react';
import Button from './Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/tunning-element' },
    { name: 'About Us', path: '#' },
    { name: 'Relief Levels', path: '#' },
    { name: 'Customer Care AI', path: '#' },
    { name: 'Testimonials', path: '#' },
    { name: 'Our products', path: '/tunning-element/products' },
    { name: 'Opportunity', path: '#' },
    { name: 'Resources', path: '#' },
  ];

  return (
    <>
      {/* Spacer to prevent content from hiding behind the fixed header */}
      <div className="w-full h-[142px] lg:h-[136px]"></div>
      
      <header className="w-full flex flex-col z-[100] fixed top-0 left-0 right-0">
        {/* Top Header */}
        <div className="w-full bg-[#5a6773] text-white py-2">
        <div className="custom-container flex flex-wrap justify-center sm:justify-between items-center  ">
          <div className="flex items-center justify-center space-x-3 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <img src="/medical/tunning-element/phone.png" alt="phone" className='w-4 h-4' />
              <span className="manrope top-header-text font-semibold">(417) 973-0000</span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 border-l border-white/30 pl-3 sm:pl-4 lg:pl-6">
              <img src="/medical/tunning-element/mail.png" alt="mail" className='w-4 h-3' />
              <span className="manrope top-header-text font-semibold">info@tuningelement.com</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-6">
            <Link href="#" className="hover:text-[#d3b482] transition-colors">
              <img src="/medical/tunning-element/fb.png" alt="fb" className='w-4 h-4' />
            </Link>
            <Link href="#" className="hover:text-[#d3b482] transition-colors">
              <img src="/medical/tunning-element/x.png" alt="fb" className='w-4 h-4' />
            </Link>
            <Link href="#" className="hover:text-[#d3b482] transition-colors">
              <img src="/medical/tunning-element/q.png" alt="fb" className='w-4 h-4' />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full bg-downheader shadow-md relative">
        <div className="custom-container flex justify-between items-center  py-2 lg:py-0 min-h-[100px]">
          {/* Logo */}
          <Link href="/tunning-element" className="flex items-center z-20">
            <div className="relative w-40 lg:w-48 h-10 lg:h-20">
               <img 
                  src="/medical/tunning-element/logo.png" 
                  alt="Tuning Element" 
                  className="object-contain h-full w-full"
               />
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden text-[#9a5631] z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Links - Desktop */}
          <nav className="hidden xl:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item) => {
              const isExactActive = pathname === item.path;

              return (
                <Link 
                  key={item.name} 
                  href={item.path} 
                  className={`manrope header-link font-semibold transition-colors ${isExactActive ? 'text-[#9a5631]' : 'text-white hover:text-[#9a5631] drop-shadow-sm'}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Contact Us Button - Desktop */}
          <div className="hidden xl:block z-20">
            <Button href="/tunning-element/contact">Contact Us</Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col border-t border-gray-100 xl:hidden z-10">
            {navItems.map((item) => {
              const isExactActive = pathname === item.path;
              return (
                <Link 
                  key={item.name} 
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-6 py-4 border-b border-gray-50 font-medium ${isExactActive ? 'text-[#9a5631] bg-gray-50' : 'text-gray-700'}`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="px-6 py-6">
              <Button href="/tunning-element/contact" fullWidth onClick={() => setIsMenuOpen(false)}>Contact Us</Button>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}
