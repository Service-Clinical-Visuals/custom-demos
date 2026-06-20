"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import Button from "./Button";

export default function About() {
  return (
    <section id="about" className=" relative w-full py-20 lg:py-20 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Collage */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
            {/* Bottom Right: ATV */}
            <img
              src="/moto/emka/section1.png"
              alt="ATV in desert"
              className="absolute w-full h-full object-cover z-40"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col space-y-6 md:space-y-8 z-20 relative">
            <Typography variant="h2" className="font-bebas text-dark leading-tight tracking-wider uppercase">
              MORE THAN JUST LUBRICANTS. EMKA.
            </Typography>

            <div className="space-y-2">
              <Typography variant="body" color="body" className="font-exo">
                As a medium-sized company, we may not be the largest. Our strength lies in our ability to act flexibly in the market, respond quickly, and tailor our approach to the individual needs of our customers. With this setup, we aim to achieve a lot in the future.
              </Typography>
              <Typography variant="body" color="body" className="font-exo">
                Our flexible structure allows us to adapt quickly to changing market demands, develop customized solutions, and provide personalized service that larger organizations often cannot match. We take pride in understanding the specific requirements of each customer and delivering solutions that support their growth and success.
              </Typography>
              <Typography variant="body" color="body" className="font-exo">
                Driven by a commitment to quality, reliability, and continuous improvement, we are constantly investing in our capabilities, technologies, and people. This enables us to meet today's challenges while preparing for the opportunities of tomorrow.
              </Typography>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2 mt-1">
              {[
                "Our medium-sized structure enables quick decision-making and rapid responses to changing market demands.",
                "By combining innovation, flexibility, and customer commitment, we are building a stronger future for our business and our customers.",
                "We are committed to continuous improvement and responsible growth that benefits our customers and partners.",
                "We work closely with customers, suppliers, and stakeholders to create long-term value and mutual success."
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <img src="/moto/emka/steering.png" alt="bullet point icon" className="w-5 h-5 xl:w-7 xl:h-7 object-contain" />
                  </div>
                  <Typography variant="body" color="body" className="font-exo">
                    {text}
                  </Typography>
                </li>
              ))}
            </ul>

            <div className="pt-1">
              <Button text="ABOUT EMKA" variant="primary" showIcon={true} href="#about" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
