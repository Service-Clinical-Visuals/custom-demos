"use client";

import Image from "next/image";
import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";

const portraits = [
  {
    src: "/medical/ohst/twopeople.jpg",
    alt: "OHST Management Team",
    name: "Sebastian Sturm & Stephan Dunke",
    role: "Management Team",
    colSpan: "col-span-1 sm:col-span-2 lg:col-span-2",
    aspect: "aspect-[780/258]",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw",
  },
  {
    src: "/medical/ohst/person1.jpg",
    alt: "Sebastian Sturm",
    name: "Sebastian Sturm",
    role: "Production Director",
    colSpan: "col-span-1",
    aspect: "aspect-[370/258]",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  },
  {
    src: "/medical/ohst/person2.jpg",
    alt: "Stephan Dunke",
    name: "Stephan Dunke",
    role: "Managing Director",
    colSpan: "col-span-1",
    aspect: "aspect-[370/258]",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  },
];

export default function AboutOHSTSection() {
  return (
    <section className="py-12 lg:py-16 xl:py-20 bg-white">
      <div className="container mx-auto">

        {/* ── Row 1: Factory Image + Text ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-center mb-10 lg:mb-12">

          {/* Factory Image */}
          <div
            data-aos="fade-right"
            data-aos-duration="700"
            className="relative w-full aspect-[780/446] overflow-hidden rounded-[30px] shadow-[0px_3px_8px_0px_#0000003D]"
          >
            <Image
              src="/medical/ohst/factory.jpg"
              alt="OHST Factory"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text + CTA */}
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="100"
            className="flex flex-col justify-center " 
          >
            <Typography
              variant="h2"
              weight="bold"
              className="text-[#222222] mb-5 leading-tight"
            >
              Precision in every detail made in Rathenow, Germany
            </Typography>

            <div className="space-y-4">
              <Typography variant="body" className="text-[#555555] leading-relaxed">
                Over 30 years have passed since OHST medical technology in
                Rathenow produced its first acetabular hip cup. Today the name
                of OHST is a synonym for the production of high-quality joint
                implants and surgical instruments.
              </Typography>
              <Typography variant="body" className="text-[#555555] leading-relaxed">
                Founded in Rathenow by toolmaker Willi Ohst in 1937, OHST AG
                remains family-owned and is growing and thriving to this day.
                Initially the company manufactured tools for the local optical
                industry, followed later by paper testing machines for the
                GDR's export market.
              </Typography>
              <Typography variant="body" className="text-[#555555] leading-relaxed">
                In the mid-eighties the first acetabular hip cups were developed
                in coordination with Berlin's Charité Hospital, with regular
                production starting in 1987.
              </Typography>
            </div>

            <div className="mt-8">
              <Button variant="primary" size="md">
                Discover More
              </Button>
            </div>
          </div>
        </div>

        {/* ── Row 2: Portrait Gallery ── */}
        {/*
          4-col grid on lg+:
            twopeople  → col-span-2, aspect-[780/258]
            person1/2  → col-span-1, aspect-[370/258]
          All same height because both aspect ratios resolve to the same px height
          when the grid columns are equal width.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 lg:gap-9 items-stretch">
          {portraits.map((p, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={i * 100}
              className={`
                ${p.colSpan}
                ${p.aspect}
                relative overflow-hidden
                rounded-[30px]
                shadow-[0px_3px_8px_0px_#0000003D]
                group
              `}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes={p.sizes}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#099F94]/90 via-[#099F94]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Name + Role */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <Typography
                  variant="body-sm"
                  weight="bold"
                  className="text-white leading-tight"
                >
                  {p.name}
                </Typography>
                <Typography
                  variant="caption"
                  className="text-white/85 mt-0.5 block"
                >
                  {p.role}
                </Typography>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}