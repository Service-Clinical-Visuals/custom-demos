import Image from "next/image";
import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";

const portfolioItems = [
  {
    image: "/medical/ohst/portfolio1.png",
    label: "Implants",
  },
  {
    image: "/medical/ohst/portfolio2.png",
    label: "Instruments",
  },
];

export default function ProductCategorySection() {
  return (
    <section className="py-24 bg-white font-outfit">
      <div className="container mx-auto px-4 lg:px-6">

        {/* Header Row: Left aligned texts, Right aligned CTA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6">
          <div className="flex-1 max-w-[1000px]">
            <Typography
              variant="h1"
              as="h1"
              color="text-[#222222]"
              weight="bold"
              className="text-[28px] sm:text-[34px] md:text-[38px] leading-tight mb-3"
            >
              Enhance Your Portfolio
            </Typography>
            <Typography
              variant="h4"
              weight="normal"
              color="text-[#555555]"
              className="leading-[26px] text-[16px] sm:text-[16px]"
            >
              Discover our CE-certified supplementary solutions for hip and knee implants—designed to perfectly complement and elevate your product range with quality, precision, and reliable performance.
            </Typography>
          </div>
          <div className="flex-shrink-0">
            <Button
              variant="primary"
              size="md"
              href="#"
            >
              Explore Collection
            </Button>
          </div>
        </div>

        {/* Separator line */}
        <hr className="border-gray-200 mb-10" />

        {/* Portfolio Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="bg-[#F5F5F5] rounded-[24px] pt-6 px-6 pb-12 sm:pt-8 sm:px-8 sm:pb-16 xl:pb-20 flex flex-col items-center  relative w-full"
            >
              {/* Inner white wrapper containing image */}
              <div className="rounded-[20px]   flex items-center justify-center aspect-[16/10] w-full relative  overflow-hidden z-0">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-contain  transition-transform duration-700 z-10 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>

              {/* Overlapping bottom category button (no arrow) */}
              <Button
                variant="primary"
                size="md"
                showArrow={false}
                fullWidth
                className="!w-full max-w-[605px] !h-[54px] sm:!h-[72px] xl:!h-[90px] -mt-[27px] sm:-mt-[36px] xl:-mt-[45px] !text-[16px] sm:!text-[20px] xl:!text-[24px] font-bold shadow-md bg-[#099F94] hover:bg-[#07877e] transition-all duration-200 !rounded-[15px] z-10"
              >
                {item.label}
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
