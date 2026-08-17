import React from 'react';
import Link from 'next/link';
import Button from './Button';
import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer';

export default function Banner() {
  return (
    <section className="w-full bg-black h-screen flex items-end relative overflow-hidden pb-20 lg:pb-50">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 ">
         <DynamicVideoPlayer type="banner" />
      </div>

      <div className="custom-container px-4 z-10 relative w-full">
        <div className="max-w-xl" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="banner-title text-white ibm-plex-sans font-semibold leading-tight mb-6">
            Change your relationship with water, change your life
          </h1>
          <p className="banner-text text-white manrope mb-8 leading-relaxed">
            Frequency-based wellness products designed to support balance, 
            hydration, comfort, and everyday well-being.
          </p>
          <Button href="#">Explore Our Products</Button>
        </div>
      </div>

    </section>
  );
}
