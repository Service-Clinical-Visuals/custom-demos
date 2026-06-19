"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";

const partnersData = [
  { name: "Mercedes-Benz", logo: "/moto/veedol-moto/product1.png" },
  { name: "Volkswagen", logo: "/moto/veedol-moto/producy5.png" },
  { name: "BMW", logo: "/moto/veedol-moto/product6.png" },
  { name: "MAN", logo: "/moto/veedol-moto/product2.png" },
  { name: "Volvo", logo: "/moto/veedol-moto/product4.png" },
  { name: "Renault", logo: "/moto/veedol-moto/product7.png" },
];

export default function Partners() {
  return (
    <section className="w-full py-15 bg[#f0f0f0]" id="products">
      <Container className="space-y-12">

        {/* Centered Heading */}
        <div className="text-center space-y-3  mx-auto" data-aos="fade-up">
          <Typography
            variant="h2"
            color="primary"
            weight="bold"
            className="font-bigshoulder tracking-wide"
          >
            Our Partners
          </Typography>
          <div className="mb-2 m-auto h-1 w-[15%] bg-gray-800 rounded-full" />

          <Typography
            variant="h5"
            weight="normal"
            className="text-gray-600 font-dm font-normal leading-normal  "
          >
            Veedol engine oils are approved by key OEMs for Europe.
          </Typography>
        </div>

        {/* Partners Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {partnersData.map((partner, index) => {
            // Give Mercedes-Benz (index 0) a persistent red border as shown in the mockup screenshot if desired,
            // or let it transition dynamically for all. Let's make index 0 start with border-primary and others hoverable!
            const isMercedes = index === 0;
            return (
              <div
                key={partner.name}
                className={`bg-[#f9f9f9]/20 hover:bg-white border border-gray-200 rounded p-4 sm:p-6 lg:p-8 flex items-center justify-center transition-all duration-300 group aspect-[1.8/1] shadow-xs cursor-pointer 
                  }`}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className="max-h-full max-w-[85%] object-contain hover:scale-110 transition-all duration-300"
                />
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
