import React from 'react';
import Link from 'next/link';
import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer';
import { Play } from 'lucide-react'; // Fallback icon just in case
import Button from './Button';

export default function Testimonials() {
  const testimonials = [
    {
      title: "Advanced Smart Technology",
      videoUrl: "https://player.vimeo.com/video/1060574827"
    },
    {
      title: "Huge Skeptic",
      videoUrl: "https://player.vimeo.com/video/257150874"
    }
  ];

  return (
    <section className="w-full bg-testimonials-gradient py-10 lg:py-15">
      <div className="custom-container px-4 xl:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="xl:col-span-4" data-aos="fade-right">
            <h2 className="section-title text-[#121f38] font-heading font-semibold mb-6 leading-tight">
              What People Are <span className="text-secondary">Saying About</span> Tuning Element
            </h2>
            <p className="section-text text-[#546476] manrope mb-8 leading-relaxed">
              Hear from our customers how Tuning Element products were able to support their wellness to new level and give them more comfort. What will your results be?
            </p>
            <Button href="#">Customer Testimonials</Button>
          </div>
          
          {/* Right Side: Videos Grid */}
          <div className="xl:col-span-8" data-aos="fade-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testim, index) => (
                <div key={index} className="flex flex-col bg-[#FAF4EF] shadow-xl overflow-hidden ">
                  {/* Video Area */}
                  <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                    <iframe
                      src={testim.videoUrl}
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      style={{ border: 'none' }}
                    ></iframe>
                  </div>
                  
                  {/* Title Bar */}
                  <div className="p-4 text-center bg-[#FAF4EF]">
                    <h3 className="feature-title ibm-plex-sans font-semibold text-[#121f38]">
                      {testim.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
