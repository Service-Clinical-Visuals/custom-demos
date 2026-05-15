import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer';
import Link from 'next/link';
import React from 'react'

const navLinks = ["Home", "Products", "About Us", "Contact Us"];


export default function PulmoHero() {
  return (
    <div>
              {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

      <section className="relative min-h-screen overflow-hidden">
        {/* ================================================= */}
        {/* BACKGROUND VIDEO / IMAGE */}
        {/* ================================================= */}

        <div className="absolute inset-0">
          {/* FUTURE VIDEO */}
          <DynamicVideoPlayer type="banner" className="w-full h-full object-cover" />
        </div>

        {/* ================================================= */}
        {/* HERO CONTENT */}
        {/* ================================================= */}

        <div className="relative z-10 flex min-h-[calc(100vh-100px)] items-end">
          <div className="mx-auto w-full max-w-[1600px] px-8 pb-28 lg:px-16">
            <div className="max-w-[700px]">
              {/* HEADING */}
              <div data-aos="fade-up">
                <h2 className="text-4xl font-semibold leading-[1.3] text-white">
                  ISO13485 certified medical device manufacturer located in Indianapolis, IN since 1985.
                </h2>
              </div>

              {/* BUTTON */}
              <div data-aos="fade-up" data-aos-delay="200" className="mt-12">
                <button className="cursor-pointer flex h-[58px] items-center justify-center rounded-[8px] border border-white px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black">
                  Explore Our Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </div>
  )
}
