import Image from "next/image";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
const products = [
  {
    id: 1,
    title: "RC500",
    image: "/accu-scope/products/mc1.png",
    description:
      "The ACCU-SCOPE RC500 remote collaboration system enables seamless..."
  },
  {
    id: 2,
    title: "EXC-500",
    image: "/accu-scope/products/mc2.png",
    description:
      "ACCU-SCOPE’s flagship EXC-500 Microscope offers best-in-class performance and value..."
  },
  {
    id: 3,
    title: "EXC-400",
    image: "/accu-scope/products/mc3.png",
    description:
      "The EXC-400 from ACCU-SCOPE is designed for a broad range of microscopy...."
  },
  {
    id: 4,
    title: "EXC-360",
    image: "/accu-scope/products/mc4.png",
    description:
      "The NEW EXC-360 from ACCU-SCOPE delivers exceptional optical performance, versatility..."
  },
];

export default function HighPerformanceSection() {
  return (
    <section className="py-24 bg-[#EEEEEE]">
      <div className="max-w-[80%] mx-auto px-6">
        <div className="grid lg:grid-cols-[55%_45%] xl:grid-cols-[58%_42%] gap-8 lg:gap-12 xl:gap-16 items-start">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">

            {/* Preview Area */}
            <div
              data-aos="zoom-in"
              className="aspect-video relative flex-1 min-h-0 rounded-[28px] overflow-hidden"
            >
              <DynamicVideoPlayer type="360" className="absolute inset-0 object-cover" />
            </div>

            {/* Content */}
            <div className="mt-8 max-w-[900px]">

              <span
                className="
              uppercase
              tracking-[2px]
              text-[16px]
              line-height-[28px]
              font-bold
              text-[#3d3d3d]
            "
              >
                Upright Microscopes
              </span>

              <h2
                className="
              mt-4
              text-[40px]
              font-bold
              line-height-[60px]
              text-[#2d2d2d]
            "
              >

                High-Performance Microscopy Solutions
              </h2>

              <p
                className="
              mt-4
              text-[20px]
              line-height-[38px]
              text-[#6b6b6b]
            "
              >
                ACCU-SCOPE upright microscopes deliver top quality optics for bright, crisp images. Sometimes referred to as compound microscopes, our upright microscopes are favorites across a wide range of laboratories including clinical, veterinary, pharmaceutical, research, university, and education. Some of the disciplines utilizing our upright microscopes include pathology, hematology, microbiology, cytology and histology.
              </p>

              <button
                className="
              mt-4
              bg-[#005FA3]
              text-white
              rounded-full
              h-[48px]
              px-10
              flex items-center
              gap-4
              font-semibold
              hover:scale-105
              transition-all
            "
              >
                View Product <ArrowRight size={18} />
              </button>

            </div>
          </div>

          {/* RIGHT PRODUCT LIST */}
          <div data-aos="fade-left" className="space-y-4 ">

            {products.map((product) => (
              <div className="flex gap-5 items-center" key={product.id}>

                <img
                  src={product.image}
                  alt={product.title}
                  // className="w-[160px] sm:w-[200px] lg:w-[240px]  min-[2560px]:!w-[320px] flex-shrink-0 object-contain"
                  className="product-image"
                />

                <div className="flex-1">
                  <h4
                    className="
                    text-lg sm:text-xl xl:text-3xl
                    font-bold
                    text-[#2d2d2d]
                  "
                  >
                    {product.title}
                  </h4>

                  <p
                    className="
                    mt-1 sm:mt-2 xl:mt-3
                    text-[13px] sm:text-[14px] xl:text-[15px]
                    leading-normal sm:leading-relaxed
                    text-[#6b6b6b]
                    line-clamp-2 sm:line-clamp-3
                  "
                  >
                    {product.description}
                  </p>
                </div>

              </div>

            ))}

          </div>
        </div>
      </div>
    </section>
  );
}