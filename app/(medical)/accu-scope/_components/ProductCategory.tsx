import Image from "next/image";
import { ArrowRight, Check, CheckCircle } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function ProductCategorySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1560px] 2xl:max-w-[80%] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-[38px] font-bold mt-1 text-[#333333]">
              ACCU-SCOPE 3079-LED
            </h2>

            <p className="text-[16px] mt-1 text-[#666666] leading-7">
              Engineered for professionals and educational institutions alike, the ACCU-SCOPE 3079-LED offers superior imaging and flexibility, making it an indispensable tool for a variety of applications. 
            </p>

            <div className="mt-2">
              <p className="text-[#333333] font-semibold text-[16px] tracking-wide block mb-2">
                KEY FEATURES
              </p>

              <div className="space-y-2">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 pt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full">
                      <CheckCircle size={24} className="text-blue absolute" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[#333333] font-semibold text-[16px]">
                      Evidence-Based Methods
                    </p>
                    <p className="text-[#666666] text-[14px] leading-6 mt-1">
                      The microscope features high-quality glass lenses and anti-reflective coatings that provide sharp, high- resolution, and parfocal images.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 pt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full">
                      <CheckCircle size={24} className="text-blue absolute" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[#333333] font-semibold text-[16px]">
                      Digital Imaging Compatibility
                    </p>
                    <p className="text-[#666666] text-[14px] leading-6 mt-1">
                      Compatible with C-mount adapters and Excels 4K, HD, and USB cameras, the 3079 series enables easy photo documentation and live video streaming.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        <div
          data-aos="zoom-in"
          className="mt-10 aspect-video relative flex-1 min-h-0 rounded-[28px] overflow-hidden"
        >
          <DynamicVideoPlayer type="short-2" className="absolute inset-0 object-cover" />
        </div>
        </div>
      </div>
    </section>
  );
}