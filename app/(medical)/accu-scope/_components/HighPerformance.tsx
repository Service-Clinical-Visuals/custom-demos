import Image from "next/image";
import { ArrowRight } from "lucide-react";
const products = [
  {
    id: 1,
    title: "RC500",
    image: "/products/rc500.png",
    description:
      "The ACCU-SCOPE RC500 remote collaboration system enables seamless communication."
  },
  {
    id: 2,
    title: "EXC-500",
    image: "/products/exc500.png",
    description:
      "Flagship microscope offering best-in-class performance and value."
  },
  {
    id: 3,
    title: "EXC-400",
    image: "/products/exc400.png",
    description:
      "Designed for a broad range of microscopy applications."
  },
  {
    id: 4,
    title: "EXC-360",
    image: "/products/exc360.png",
    description:
      "Exceptional optical performance and versatility."
  },
];

export default function HighPerformanceSection() {
  return (
   <section className="py-24 bg-[#f7f7f7]">
  <div className="max-w-[1400px] mx-auto px-6">

    <div className="grid lg:grid-cols-[1fr_380px] gap-12">

      {/* LEFT CONTENT */}
      <div>

        {/* Preview Area */}
        <div
          className="
            overflow-hidden
            rounded-[24px]
            shadow-lg
            bg-black
            aspect-[16/9]
          "
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/microscope.mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="mt-10 max-w-[900px]">

          <span
            className="
              uppercase
              tracking-[2px]
              text-sm
              font-semibold
              text-[#3d3d3d]
            "
          >
            Upright Microscopes
          </span>

          <h2
            className="
              mt-4
              text-[56px]
              font-bold
              leading-tight
              text-[#2d2d2d]
            "
          >
            High-Performance Microscopy Solutions
          </h2>

          <p
            className="
              mt-6
              text-[18px]
              leading-[34px]
              text-[#6b6b6b]
            "
          >
            ACCU-SCOPE upright microscopes deliver top quality optics
            for bright, crisp images. Designed for laboratories,
            pathology, microbiology, education and research.
          </p>

          <button
            className="
              mt-8
              bg-[#005FA3]
              text-white
              rounded-full
              h-[58px]
              px-10
              flex items-center
              gap-4
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            View Product →
          </button>

        </div>
      </div>

      {/* RIGHT PRODUCT LIST */}
      <div className="space-y-4">

        {products.map((product) => (
          <button
            key={product.id}
            className="
              w-full
              text-left
              bg-white
              rounded-[24px]
              p-4
              shadow-md
              hover:shadow-xl
              transition-all
              group
            "
          >
            <div className="flex gap-5">

              <div
                className="
                  w-[120px]
                  h-[120px]
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
          </button>
        ))}

      </div>

    </div>

  </div>
</section>
  );
}