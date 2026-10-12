import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

export default function ProductSection() {
  return (
    <section className="pt-8 pb-14 md:pt-10 md:pb-20 min-[2500px]:pt-16 min-[2500px]:pb-32">
      <div className="custom-container">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-small flex flex-wrap items-center gap-x-2 gap-y-1 min-[2500px]:gap-x-3 text-[#CACACA]">
          <Link href="/syprin" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 min-[2500px]:w-6 min-[2500px]:h-6" />
          <Link href="/syprin/products" className="hover:text-white transition-colors">Product</Link>
          <ChevronRight className="w-3.5 h-3.5 min-[2500px]:w-6 min-[2500px]:h-6" />
          <span className="text-[#F6F6F6]">Diesel Injector and System Cleaner</span>
        </nav>

        {/* Gallery + Info */}
        <div className="mt-8 md:mt-10 min-[2500px]:mt-16 grid grid-cols-1 desk:grid-cols-[minmax(0,0.92fr)_minmax(0,1.48fr)] gap-8 md:gap-10 desk:gap-6 xl:gap-8 min-[2500px]:gap-16 items-start">
          <ProductGallery />
          <ProductInfo />
        </div>
      </div>
    </section>
  );
}
