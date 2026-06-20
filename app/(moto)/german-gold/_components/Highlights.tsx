"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import Button from "./Button";

export default function Highlights() {
  const highlights = [
    { src: "/moto/german-gold/highlight1.png", alt: "SECURITY HOLOGRAM" },
    { src: "/moto/german-gold/highlight2.png", alt: "MADE IN GERMANY" },
    { src: "/moto/german-gold/highlight3.png", alt: "ISO CERTIFIED" },
    { src: "/moto/german-gold/highlight4.png", alt: "ADVANCED TECHNOLOGY" },
    { src: "/moto/german-gold/highlight5.png", alt: "FOR ALL BRANDS" }
  ];

  return (
    <section id="highlights" className="relative w-full py-20 lg:py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center max-w-[80%] mx-auto mb-16" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-teko leading-tight tracking-wider uppercase mb-6">
            HIGHLIGHTS
          </Typography>
          <Typography variant="body" className="font-exo text-[#6E777D]  sm:text-base leading-relaxed">
            High-class German workmanship is renowned worldwide, with German vehicles being both appreciated and well loved. To enable the protection of this quality workmanship we have developed GERMAN GOLD - a premium lubricant "Made in Germany". Profit from our passion for the ultimate in engineering skills.
          </Typography>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12 mb-16">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="w-40 h-40 sm:w-45 sm:h-45 md:w-50 md:h-50 xl:w-72 xl:h-72 transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={item.src} alt={item.alt} className="w-full h-full object-contain drop-shadow-md" />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Button text="About German Gold" variant="primary" showIcon={true} href="#about" />
        </div>
      </Container>
    </section>
  );
}
