 // app/components/AirProducts.tsx

"use client";

import Image from "next/image";

const products = [
  {
    title: "Pneumatic Valves",
    image: "/ae/ae-product-1.png",
  },
  {
    title: "Pneumatic Cylinders",
    image: "/ae/ae-product-2.png",
  },
  {
    title: "Air Preparation",
    image: "/ae/ae-product-3.png",
  },
  {
    title: "Air Compressors",
    image: "/ae/ae-product-4.png",
  },
  {
    title: "Nitrogen Generators",
    image: "/ae/ae-product-5.png",
  },
  {
    title: "Air Receivers",
    image: "/ae/ae-product-6.png",
  },
];

export default function AirProducts() {
  return (
    <section className="w-full bg-[#f5f5f5] py-[90px]">
      <div className="mx-auto max-w-[1600px] px-6">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          data-aos="fade-up"
          className="text-center"
        >
          {/* LABEL */}
          <span
            className="
              text-[14px]
              font-bold
              uppercase
              tracking-[0.4px]
              text-[#ef3b2d]
            "
          >
            iSAR™ (Integrated System Architecture)
          </span>

          {/* HEADING */}
          <h2
            className="
              mt-4
              text-[48px]
              font-bold
              leading-[1.18]
              tracking-[-1px]
              text-[#343434]
            "
          >
            OEM Fluid Technology Division
          </h2>
        </div>

        {/* =====================================================
            PRODUCTS GRID
        ====================================================== */}

        <div
          className="
            mt-[60px]
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {products.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                group
                relative
                overflow-hidden
                bg-[#f1f1f1]
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >
              {/* =====================================
                  ANGLED BACKGROUND SHAPE
              ====================================== */}

              {/* <div
                className="
                  absolute
                  inset-y-0
                  left-[22%]
                  w-[42%]
                  skew-x-[-28deg]
                  bg-[#e4e5e7]
                "
              /> */}

              {/* =====================================
                  PRODUCT IMAGE
              ====================================== */}

              <div
                className="
                  relative
                  flex
                  h-[270px]
                  items-center
                  justify-center
                  overflow-hidden
                "
              >
                <div
                  className="
                    relative
                    z-10
                    h-full
                    w-[260px]
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* =====================================
                  LABEL BUTTON
              ====================================== */}

              <div className="absolute bottom-5 left-5 z-20">
                <button
                  className="
                    bg-[#ef3124]
                    px-6
                    py-3
                    text-[14px]
                    font-semibold
                    tracking-[0.2px]
                    text-white
                    shadow-[0_8px_18px_rgba(239,49,36,0.25)]
                    transition-all
                    duration-300
                    hover:bg-[#d9281c]
                  "
                >
                  {item.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM CONTENT
        ====================================================== */}

        <div
          className="
            mt-[34px]
            flex
            flex-col
            items-start
            justify-between
            gap-10
            lg:flex-row
            lg:items-center
          "
        >
          {/* TEXT */}
          <p
            data-aos="fade-right"
            className="
              max-w-[760px]
              text-[15px]
              leading-[2]
              text-[#6d6d6d]
            "
          >
            At AEG, we use only the best products from leading manufacturers
            in all compressed air and gas installations and bespoke OEM
            solutions. We prioritise quality and innovation to achieve the
            best results for our customers.
          </p>

          {/* CTA */}
          <div
            data-aos="fade-left"
            className="shrink-0"
          >
            <button
              className="
                group
                relative
                overflow-hidden
                bg-[#00A7E4]
                px-12
                py-4
                text-[14px]
                font-bold
                text-white
                shadow-[0_10px_20px_rgba(0,167,228,0.2)]
                transition-all
                duration-300
                hover:-translate-y-1
                cursor-pointer
              "
              style={{
                clipPath:
                  "polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)",
              }}
            >
              <span className="relative z-10">
                View Product
              </span>

              <span
                className="
                  absolute
                  inset-0
                  translate-y-full
                  bg-black/10
                  transition-transform
                  duration-300
                  group-hover:translate-y-0
                "
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}