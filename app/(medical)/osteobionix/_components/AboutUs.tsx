"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start" data-aos="fade-right">
            <h2 className="text-[#237B64] font-heading font-bold text-3xl md:text-4xl mb-4">
              We Osteobionix
            </h2>
            <h3 className="font-heading italic text-xl md:text-2xl text-gray-800 mb-6 font-medium">
              "A Legacy of Personalized Medical Innovation"
            </h3>
            
            <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
              We are a medical device company dedicated to transforming care for people facing severe bone and joint conditions. We design and manufacture clinically validated, high-quality, cost-effective patient-specific implants and instruments for orthopedic, trauma, spine, thoracic, and craniomaxillofacial surgery. Our expertise lies in tackling complex, individualized clinical challenges, especially where standard implants fall short.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
              Osteobionix was founded in 2018 as a spin-off of the Canary Islands Institute of Technology (ITC), one of Spain's leading public research institutions. However, our journey began long before that. Since 2006, ITC's Biomedical Engineering Department has led pioneering research on bone and cartilage regeneration. In 2011, it designed and implanted one of the first custom porous titanium implants. That same team now powers Osteobionix, building on over a decade of successful collaborations with surgeons across Europe and the rest of the world to deliver innovative, customized medical solutions.
            </p>

            <Link
              href="#"
              className="group flex items-center gap-3 bg-[#237B64] text-white px-6 py-3 rounded hover:bg-[#1f5c53] transition-all font-medium"
            >
              Our Legacy
              <span className="bg-white text-[#237B64] p-1 rounded-sm group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Image Content */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden border-[12px] border-[#237B64]" data-aos="fade-left">
            <img
              src="/osteobionix/meeting.png"
              alt="Osteobionix Team Meeting"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
