"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";

export default function FluorescenceSection() {
  return (
    <section className="py-24 bg-white font-outfit">
      <div className="container mx-auto px-4 lg:px-6">

        {/* Top Row: Left Title/Subtitle + Right CTA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6">
          <div className="flex-1">
            <Typography
              variant="h2"
              as="h2"
              color="text-[#222222]"
              weight="bold"
              className="uppercase tracking-tight text-[28px] sm:text-[34px] md:text-[38px] leading-tight"
            >
              Bipolar Head and Unipolar Head
            </Typography>
            <Typography
              variant="body-sm"
              color="text-[#666666]"
              className="mt-3 text-[15px] sm:text-[16px]"
            >
              For preservation of the natural acetabulum
            </Typography>
          </div>
          <div className="flex-shrink-0">
            <Button
              variant="primary"
              size="md"
              href="#"
            >
              Request Information
            </Button>
          </div>
        </div>

        {/* Divider line */}
        <hr className="border-gray-200 mb-10" />

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[38%_58%] gap-[4%]  items-center">

          {/* LEFT: Product descriptions inside rounded cards */}
          <div data-aos="fade-right" className="space-y-6">

            {/* Bipolar Head Card */}
            <div className="border border-gray-100 rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
              <Typography
                variant="h3"
                as="h3"
                color="text-[#222222]"
                weight="bold"
                className="text-[20px] sm:text-[22px] mb-3"
              >
                Bipolar Head
              </Typography>
              <Typography
                variant="body-sm"
                color="text-[#666666]"
                className="leading-[24px] mb-4 line-clamp-3 text-[14px] sm:text-[15px]"
              >
                The principle of the Bipolar Head with different centers of rotation for the head and outer shell established itself as the standard of care for femoral neck fractures many years ago. The focus lies on providing a high degree of rotational freedom and...
              </Typography>
              <div>
                <Button variant="link" href="#" showArrow={true} className="inline-flex items-center gap-1 text-[#099F94] font-bold text-[14px]">
                  Read More
                </Button>
              </div>
            </div>

            {/* Unipolar Head Card */}
            <div className="border border-gray-100 rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
              <Typography
                variant="h3"
                as="h3"
                color="text-[#222222]"
                weight="bold"
                className="text-[20px] sm:text-[22px] mb-3"
              >
                Unipolar Head
              </Typography>
              <Typography
                variant="body-sm"
                color="text-[#666666]"
                className="leading-[24px] mb-4 line-clamp-3 text-[14px] sm:text-[15px] "
              >
                The Unipolar Head made of implant steel with an ISO 5832-9 quality level is particular suitable for the provision of femoral head fractures in very elderly patients. The simple handling of the unipolar neck keeps the stress level for patients low and shortens...
              </Typography>
              <div>
                <Button variant="link" href="#" showArrow={true} className="inline-flex items-center gap-1 text-[#099F94] font-bold text-[14px]">
                  Read More
                </Button>
              </div>
            </div>

          </div>

          {/* RIGHT: Video container in rounded box */}
          <div
            data-aos="fade-left"
            className="rounded-[24px] shadow-sm aspect-video w-full"
          >
            <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-checkered flex items-center justify-center">
              <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
