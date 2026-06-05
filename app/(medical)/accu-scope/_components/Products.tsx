import Image from "next/image";
import { ArrowRight } from "lucide-react";


const products = [
  {
    title: "EXCELIS™ 4K",
    image: "/accu-scope/products/fp1.png",
  },
  {
    title: "EXC-500",
    image: "/accu-scope/products/fp2.png",
  },
  {
    title: "EXC-120",
    image: "/accu-scope/products/fp3.png",
  },
  {
    title: "EXCELIS™ HD",
    image: "/accu-scope/products/fp4.png",
  }
];
export default function ProductsSection() {
  return (
    <section className="py-24 bg-[#f9f9f9]">
      <div className="max-w-[1560px] mx-auto px-6">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-[38px] text-[#161616] font-bold">
            Featured Products
          </h2>
        </div>

        <p className="text-[18px] leading-[34px] text-[#161616] text-center mt-4 max-w-[700px] mx-auto" data-aos="fade-up" data-aos-delay="100">
          Explore microscopy solutions tailored for clinical, educational, research, veterinary, industrial, and OEM needs designed to deliver precision and performance across every field.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {products.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="bg-[#047eca] rounded-[15px] p-6 text-white flex flex-col justify-between h-full max-h-[446px] group"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={250}
                height={250}
                className="mx-auto flex-1 object-contain min-h-[266px] transition-all duration-700 group-hover:scale-110"
              />

              <button className="bg-white/60 rounded-[10px] h-[86px] text-[24px] px-6 py-3 text-[#161616] font-bold flex items-center justify-center gap-2 mt-6 hover:bg-[#6BA5D0] transition-all w-full">
                {item.title}
                <span className="rounded-full bg-[#00609C] p-1 text-white"><ArrowRight size={24} /></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}