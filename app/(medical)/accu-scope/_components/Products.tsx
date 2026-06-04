import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  "EXC-4K",
  "EXC-500",
  "EXC-120",
  "EXC-LED",
];

export default function ProductsSection() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Featured Products
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-[#0068A7] rounded-xl p-5 text-white"
            >
              <Image
                src={`/images/product-${index + 1}.png`}
                alt={item}
                width={250}
                height={250}
                className="mx-auto"
              />

              <div className="flex justify-between items-center mt-5">
                <h3>{item}</h3>

                <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}