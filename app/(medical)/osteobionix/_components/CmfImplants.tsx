"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function CmfImplants() {
  return (
    <section id="product" className="w-full py-16 lg:py-24 bg-[#317d71]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* Text Content (Left) */}
          <div className="flex flex-col items-start" data-aos="fade-right">
            <h2 className="text-white font-heading font-bold text-3xl md:text-4xl mb-6">
              Cranio-Maxillofacial Implants
            </h2>
            
            <p className="text-white mb-6 leading-relaxed text-sm md:text-base">
              At osteobionix, we believe every clinical case is unique, because every patient is unique. That's why we work hand-in-hand with surgeons to develop personalized treatment options that enhance surgical outcomes and improve lives. Our mission is to advance the global standard of care for people affected by trauma, cancer, or degenerative diseases, offering safe, effective alternatives to conventional implants. We are proud to support a growing number of surgeons and patients around the world, with hundreds of osteobionix implants already in use worldwide.
            </p>
            
            <p className="text-white mb-8 leading-relaxed text-sm md:text-base">
              At osteobionix, we leverage advanced digital planning, patient-specific design and cutting-edge manufacturing technologies to deliver highly precise CMF solutions. Our custom implants and surgical guides ensure an optimal anatomical fit and enable surgeons to achieve unmatched precision in every case.
            </p>

            <Button variant="primary" href="#">
              Explore Products
            </Button>
          </div>

          {/* Video Placeholder Content (Right) */}
          <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] relative rounded-2xl overflow-hidden bg-white/10" data-aos="fade-left">
            {/* Dynamic Video Player acts as the 360 VIDEO placeholder */}
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}
