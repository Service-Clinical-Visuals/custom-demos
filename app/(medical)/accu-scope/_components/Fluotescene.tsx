import Image from "next/image";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function FluorescenceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1560px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* <Image
            src="/images/fluorescence.jpg"
            alt=""
            width={700}
            height={500}
            className="rounded-2xl"
          /> */}
            <div
              data-aos="zoom-in"
              className="aspect-video relative flex-1 min-h-0 rounded-[28px] overflow-hidden"
            >
              <DynamicVideoPlayer type="short-1" className="absolute inset-0 object-cover" />
            </div>
 

          <div data-aos="fade-left">
            <span className="text-[#00B5A6] uppercase text-[16px] line-height-[28px] font-semibold">
              Advanced Technology
            </span>

            <h2 className="text-[38px] line-height-[60px] font-bold mt-0">
              Fluorescence Illuminators
            </h2>

            <p className="mt-1 text-gray-600 text-[16px] line-height-[26px]">
              In fluorescence microscopy, fluorescent substances are viewed or imaged with a microscope. These fluorescent 
              substances may be naturally occurring in the sample or may be introduced to assist in the identification of 
              specific features in the sample. Multiple fluorescent substances (fluorophores) with different fluorescent 
              properties can be visualized within the same sample using the capabilities of fluorescence illumination and 
              fluorescence filter combinations.
            </p>

            <p className="mt-4 text-gray-600 text-[16px] line-height-[26px]">
              ACCU-SCOPE offers a selection of fluorescence accessories and fluorescence illuminators for our microscopes and 
              microscopes from other manufacturers. We encourage you to Contact Us to speak with one of our experts to discuss 
              your application, and we will provide you with our recommendations for a suitable solution.
            </p>

            <button className="mt-4 bg-[#0068A7] h-[48px] text-white px-6 py-3 rounded-full inline-flex items-center gap-2">
              explore more
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}