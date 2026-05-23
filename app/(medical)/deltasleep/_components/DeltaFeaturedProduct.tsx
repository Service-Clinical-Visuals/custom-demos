"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import "aos/dist/aos.css";
import DeltaScrollRevealText from "./DeltaScrollRevealText";

export default function DeltaFeaturedProduct() {

  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] py-20 lg:py-24">
      {/* Ambient Background Shape */}
      <div className="absolute bottom-[-140px] left-[-120px] w-[500px] h-[500px] rounded-full border-[60px] border-[#d8e5e5]/40 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[620px_1fr] gap-8 lg:gap-10 items-stretch">
          {/* LEFT CONTENT */}
          <div
            className="relative z-10"
            data-aos="fade-right"
          >
            {/* Label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-[8px] h-[8px] rounded-full bg-[#00695f]" />

              <p className="text-[16px] font-medium text-[#8d8d8d]">
                Full Face Mask F1
              </p>
            </div>

            {/* Heading */}
            <DeltaScrollRevealText text="Our Featured Product" className="text-[#111111] text-4xl leading-[1.04] font-semibold">
            </DeltaScrollRevealText>

            {/* Description */}
            <div className="mt-4 space-y-4">
              <p className="text-[#666666] text-[15px] lg:text-[16px] leading-[1.95] text-justify">
                Full Face Mask F1 is thoughtfully engineered to deliver a softer, quieter, and more comfortable sleep therapy experience. Its lightweight elastic silicone cushion gently adapts to facial contours, helping reduce pressure marks while maintaining a secure and comfortable seal throughout the night. Designed without a forehead brace, the F1 creates an open field of vision, allowing users to comfortably read, relax, or watch television before sleep without feeling restricted.
              </p>

              <p className="text-[#666666] text-[15px] lg:text-[16px] leading-[1.95] text-justify">
                Built for convenience and peaceful performance, the F1 features advanced quiet air dispersion technology that minimizes airflow disturbance and creates a calmer sleeping environment for both users and their partners. The innovative 360° rotatable elbow enhances flexibility by allowing natural movement during sleep while simplifying tube management and quick removal. Combining ergonomic comfort with practical functionality, the DeltaSleep Full Face Mask F1 is crafted to support restful, uninterrupted therapy night after night.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#9db5b2] mt-5" />

            {/* CTA */}
            <div className="mt-4">
              <button className="h-[52px] px-7 rounded-[4px] bg-[#00695f] text-white text-[15px] font-medium   transition-all duration-300 hover:bg-[#00554d] hover:scale-[1.02]">
                Explore Product
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div
            className="relative rounded-[20px] overflow-hidden h-full"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer type="short-2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}