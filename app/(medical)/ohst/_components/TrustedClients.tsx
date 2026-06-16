import Image from "next/image";
import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";

const supporters = [
  { image: "/medical/ohst/supports/horizont.png", alt: "Horizont e.V." },
  { image: "/medical/ohst/supports/havelland.png", alt: "Musik- und Kunstschule Havelland" },
  { image: "/medical/ohst/supports/plan_intl.png", alt: "Plan International" },
  { image: "/medical/ohst/supports/fsv.png", alt: "FSV Optik Rathenow" },
];

export default function TrustedClientsSection() {
  return (
    <section className="py-24 bg-[#EAF9F8] font-outfit">
      <div className="container mx-auto px-4 lg:px-6">

        {/* Centered Header */}
        <div className="text-center max-w-[1240px] mx-auto mb-8" data-aos="fade-up">
          <Typography
            variant="h1"
            color="text-[#222222]"
            weight="bold"
            className="text-[28px] sm:text-[34px] md:text-[38px] leading-tight mb-4"
          >
            OHST Supports
          </Typography>
          <Typography
            variant="h4"
            weight="normal"
            color="text-[#555555]"
            className="leading-[26px] text-[14px] sm:text-[15px]"
          >
            OHST proudly supports organizations and initiatives dedicated to community development, education, culture, and creating positive social impact through meaningful partnerships, social responsibility, and long-term community engagement.
          </Typography>
        </div>

        {/* Separator line */}
        <hr className="border-gray-300/70 mb-10" />

        {/* Supporter Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 mb-12">
          {supporters.map((supporter, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 80}
              className="bg-white rounded-[16px] border border-gray-100 p-8 flex items-center justify-center aspect-[16/9] shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="relative w-full h-full max-h-[200px]">
                <Image
                  src={supporter.image}
                  alt={supporter.alt}
                  fill
                  className="object-contain transition-all duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 60vw, 60vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center" data-aos="fade-up">
          <Button
            variant="primary"
            size="md"
            href="#"
          >
            Get Support
          </Button>
        </div>

      </div>
    </section>
  );
}
