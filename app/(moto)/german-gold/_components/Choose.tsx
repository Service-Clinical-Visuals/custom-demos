"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import Button from "./Button";

export default function Choose() {
  const cards = [
    {
      icon: "/moto/german-gold/section4.png",
      title: "Premium Quality",
      desc: "Formulated with high-quality base oils and advanced additives to deliver superior protection, enhanced performance, and long-lasting reliability under demanding operating conditions."
    },
    {
      icon: "/moto/german-gold/section41.png",
      title: "Advanced Technology",
      desc: "Driven by continuous research and innovation, German Gold develops advanced lubricant solutions that meet the evolving demands of modern engines and mach.."
    },
    {
      icon: "/moto/german-gold/section42.png",
      title: "Reliable Performance",
      desc: "Tested under demanding conditions, German Gold lubricants deliver consistent protection, enhanced durability, and reliable performance to help maximize engine and equipment life."
    },
    {
      icon: "/moto/german-gold/section43.png",
      title: "Sustainable Approach",
      desc: "German Gold develops environmentally responsible lubricant solutions that help improve efficiency, reduce emissions, and support a cleaner, more sustainable future."
    }
  ];

  return (
    <section id="choose" className="relative w-full py-10 lg:py-10 bg-white overflow-hidden">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[70%] mx-auto mb-16" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-teko leading-tight tracking-wider uppercase mb-4">
            WHY CHOOSE GERMAN GOLD
          </Typography>
          <div className="w-[35%] h-px bg-primary mb-6"></div>
          <Typography variant="body" className="font-exo text-[#6E777D] text-center">
            German Gold combines premium-quality base oils, advanced lubricant technology, and rigorous quality standards to deliver reliable performance across a wide range of automotive and industrial applications. Our commitment to innovation, durability, and sustainability ensures superior protection, enhanced efficiency, and long-lasting equipment life, making German Gold a trusted choice for customers worldwide.
          </Typography>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="relative pt-[68px] flex flex-col h-full group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* The diamond */}
              <div className="absolute top-[68px] left-1/2 shadow-lg -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#c68906] rotate-45 flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-105">
                <img src={card.icon} className="-rotate-45 w-12 h-12 lg:w-16 lg:h-16  object-contain filter brightness-0 invert" alt={card.title} />
              </div>

              {/* The white card with shadow */}
              <div style={{ filter: 'drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.09))' }} className="flex-1 shadow-md flex flex-col h-full">
                <div
                  className="bg-white flex-1 px-6 xl:px-8 pb-10 pt-[90px] flex flex-col items-start text-left transition-all duration-300"
                  style={{ clipPath: 'polygon(0 0, calc(50% - 80px) 0, 50% 80px, calc(50% + 80px) 0, 100% 0, 100% 100%, 0 100%)' }}
                >
                  <Typography variant="h4" color="primary" className="font-teko text-2xl uppercase tracking-wide mb-3">{card.title}</Typography>
                  <Typography variant="body" className="font-exo text-sm text-[#6E777D] mb-8 flex-1 leading-relaxed">
                    {card.desc}
                  </Typography>
                  <a href="#" className="font-teko text-lg uppercase text-[#181715] border-b-2 border-gray-800 pb-0.5 hover:text-primary hover:border-primary transition-colors">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-16 flex justify-center">
          <Button text="About German Gold" variant="primary" showIcon={true} href="#about" />
        </div>
      </Container>
    </section>
  );
}
