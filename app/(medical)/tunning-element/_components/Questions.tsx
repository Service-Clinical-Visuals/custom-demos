import React from 'react';
import Link from 'next/link';
import Button from './Button';

export default function Questions() {
  return (
    <section className="w-full bg-[#546476] py-8 lg:py-12 text-center">
      <div className="custom-container px-4 xl:px-0">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <h2 className="section-title text-white ibm-plex-sans font-semibold mb-6">
            Still have questions?
          </h2>
          <p className="section-text text-white manrope mb-8 leading-relaxed">
            Sometimes the best way to explain something is to do so visually. We created a simple, easy to understand, animated video for our customers. Please feel free to view the video and let us know of any questions that you might still have.
          </p>
          <div className="flex justify-center">
            <Button href="#" variant="white">Read More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
