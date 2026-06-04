import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProductCategorySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#00B5A6] font-semibold">
              Product Category
            </span>

            <h2 className="text-4xl font-bold mt-3">
              3079 Series
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              A comprehensive range of laboratory and
              educational microscopy systems.
            </p>

            <button className="mt-8 bg-[#0068A7] text-white px-6 py-3 rounded-full inline-flex items-center gap-2">
              View Collection
              <ArrowRight size={18} />
            </button>
          </div>

          <Image
            src="/images/category-product.png"
            alt=""
            width={700}
            height={500}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}