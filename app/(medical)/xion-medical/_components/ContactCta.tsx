"use client";

import Button from "./Button";

export default function ContactCta() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-[url('/xion/images/bg.png')]" />
      </div>

      <div data-aos="zoom-in" className="container mx-auto px-4 relative z-20 text-center">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-white mb-12 max-w-7xl mx-auto leading-tight">
          Do you have questions about the system, <br className="hidden md:block" />
          the configuration or the components?
        </h2>
        
        <div className="flex justify-center">
          <Button href="#contact">Send Request</Button>
        </div>
      </div>
    </section>
  );
}
