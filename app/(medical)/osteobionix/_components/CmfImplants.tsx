"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function CmfImplants() {
  return (
    <section id="product" className="w-full py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-[#103A31] rounded-[2rem] p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            
            {/* Video Placeholder Content */}
            <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] relative rounded-2xl overflow-hidden bg-white" data-aos="fade-right">
              {/* Dynamic Video Player acts as the 360 VIDEO placeholder */}
              <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-start" data-aos="fade-left">
              <h2 className="text-white font-heading font-bold text-3xl md:text-4xl mb-6">
                Cranio-Maxillofacial Implants
              </h2>
              
              <p className="text-gray-200 mb-6 leading-relaxed text-sm md:text-base">
                At osteobionix, we leverage advanced digital planning, patient-specific design and cutting-edge manufacturing technologies to deliver highly precise CMF solutions. Our custom implants and surgical guides ensure an optimal anatomical fit and enable surgeons to achieve unmatched precision in every case.
              </p>
              
              <p className="text-gray-200 mb-8 leading-relaxed text-sm md:text-base">
                Cranio-maxillofacial (CMF) surgery demands exceptional accuracy to restore both function and aesthetics. The complex anatomy of the skull and face requires precise reconstruction to maintain symmetry, articulation and overall facial harmony. In addition to restoring vital physiological functions, achieving an anatomically correct contour is crucial for optimal aesthetic and psychological outcomes.
              </p>

              <Link
                href="#"
                className="group flex items-center gap-3 bg-white text-[#103A31] px-6 py-3 rounded hover:bg-gray-100 transition-all font-bold text-sm"
              >
                View Product
                <span className="bg-[#103A31] text-white p-1 rounded-sm group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
