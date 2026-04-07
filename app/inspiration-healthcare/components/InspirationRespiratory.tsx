"use client"

import { useState } from "react"

import { ArrowRight } from "lucide-react"

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-1.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-2.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-3.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-4.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-5.webm",
];




export default function InspirationRespiratory() {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };

  return (
    <section className="bg-[#7f8c8d] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT VIDEO */}
        <div data-aos="fade-right" className="w-full">
          <div className="rounded-xl overflow-hidden shadow-lg bg-gray-300 h-[320px] md:h-[360px]">
            
            {/* VIDEO (Replace later) */}
            
            <video
              key={currentVideoIndex}
                src={bannerVideos[currentVideoIndex]}
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
            />
 

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left" className="text-white">

          {/* LABEL */}
          <p className="text-xs text-gray-200 mb-3 tracking-wide">
            Our Expertise in Respiratory Care
          </p>

          {/* BLOCK 1 */}
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
            Respiratory care, starting from the first breaths of life
          </h2>

          <p className="text-sm text-gray-200 leading-relaxed mb-6 max-w-xl">
            We have developed and manufactured respiratory equipment since 1977.
            Nurturing close relationships with leading universities, hospitals and
            industry specialists to understand the challenges facing clinicians when
            caring for the most critical babies.
          </p>

          {/* BLOCK 2 */}
          <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-4">
            Respiratory care, starting from the first breaths of life
          </h3>

          <p className="text-sm text-gray-200 leading-relaxed mb-6 max-w-xl">
            In order to offer maximum flexibility, our blenders can be specified for
            either mounting on a pole or rail, with a variety of flow meters.
            <br /><br />
            This means that our blender works well when paired with one of our
            products like the LifeStart™, which has an accessory pole and standard
            medirails for attachment purposes.
          </p>

          {/* CTA */}
          <button className="flex items-center gap-2 bg-white text-gray-800 px-5 py-2 rounded-full text-sm hover:scale-105 transition">
            Explore Our Expertise
            <ArrowRight size={16} />
          </button>

        </div>
      </div>
    </section>
  )
}