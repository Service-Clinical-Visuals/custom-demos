"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const products = [
  {
    id: 1,
    name: "SINTRON J 0W-16",
    description:
      "Veedol Sintron J 0W-16 is a fuel economy SAE 0W-16 motor oil developed according to the most recent technology. Based on specially selected synthetic base oils and a well-balanced additive system.",
    image: "/moto/veedol-moto/product1.png",
    href: "#products",
  }
];

export default function ProductShowcase() {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const product = products[activeIdx];

  const prev = () =>
    setActiveIdx((c) => (c - 1 + products.length) % products.length);
  const next = () => setActiveIdx((c) => (c + 1) % products.length);

  return (
    <section className="w-full bg-white" id="products">
      {/* ── Row 1: Product Spotlight + Product Image ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[440px]">
        {/* Left: Dark product card */}
        <div
          className="relative bg-dark text-white flex flex-col justify-center px-10 md:px-16 py-16 md:py-20 overflow-hidden"
          data-aos="fade-right"
        >
          <div className="custom-container relative z-10 space-y-5">
            <Typography
              variant="h2"
              color="white"
              weight="bold"
              className="font-bigshoulder uppercase tracking-wide leading-tight"
            >
              {product.name}
            </Typography>
            <div className="w-[45%] h-[3px] bg-white" />
            <Typography
              variant="h5"
              className=" leading-relaxed font-dm max-w-3xl text-sm"
              color="white"
            >
              {product.description}
            </Typography>

            <div className="flex items-center gap-4 pt-3">
              <div className="inline-flex">
                <Button text="View Product" variant="primary" className="font-bigshoulder" href={product.href} />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Product image with red diagonal background slab */}
        <div
          className="relative bg-[#f5f5f5] flex items-center justify-center aspect-video h-full overflow-hidden w-full"
          data-aos="fade-left"
        >
          {/* Product video */}
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>

      {/* ── Row 2: OEM-approved product range banner ── */}
      <div
        className="w-full bg-[#f5f5f5] border-t border-gray-100 py-12 md:py-16"
        data-aos="fade-up"
      >
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-5">
            {/* Product bottles image */}
            <div className="relative flex-shrink-0 w-[50%] md:w-[50%]">

              <div className="relative z-10">
                <img
                  src="/moto/veedol-moto/image2.png"
                  alt="Veedol Product Range"
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Descriptive text */}
            <div className="flex-1 space-y-5">
              <Typography
                variant="h3"
                color="dark"
                weight="semibold"
                className=" leading-snug max-w-5xl"
              >
                Veedol UK offers a comprehensive range of high-quality lubricants designed to meet the diverse needs of various vehicles and machinery.
              </Typography>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
