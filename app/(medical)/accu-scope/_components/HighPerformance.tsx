import Image from "next/image";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
const products = [
  {
    id: 1,
    title: "RC500",
    image: "/accu-scope/products/mc1.png",
    description:
      "The ACCU-SCOPE RC500 remote collaboration system enables seamless communication."
  },
  {
    id: 2,
    title: "EXC-500",
    image: "/accu-scope/products/mc2.png",
    description:
      "Flagship microscope offering best-in-class performance and value."
  },
  {
    id: 3,
    title: "EXC-400",
    image: "/accu-scope/products/mc3.png",
    description:
      "Designed for a broad range of microscopy applications."
  },
  {
    id: 4,
    title: "EXC-360",
    image: "/accu-scope/products/mc4.png",
    description:
      "Exceptional optical performance and versatility."
  },
];

export default function HighPerformanceSection() {
  return (
   <section className="py-24 bg-[#f9f9f9]">

    <div className="max-w-[1560px] 2xl:max-w-[80%] mx-auto px-6 grid lg:grid-cols-[55%_45%] gap-8">

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
              text-[38px]
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
              text-[16px]
              line-height-[28px]
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
      <div data-aos="fade-left" className="space-y-8 ">

        {products.map((product) => (
            <div className="flex gap-5 items-center" key={product.id}>

              <div
                className="
                  w-[180px]
                  h-[180px]
                  rounded-xl
                  overflow-hidden
                  bg-[#fafafa]
                  flex-shrink-0
                "
              >
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1">
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#2d2d2d]
                  "
                >
                  {product.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-[15px]
                    leading-7
                    text-[#6b6b6b]
                    line-clamp-3
                  "
                >
                  {product.description}
                </p>
              </div>

            </div>

        ))}

      </div>

    </div>

</section>
  );
}