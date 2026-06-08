"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-[1560px] 2xl:max-w-[80%] mx-auto px-6">
        
        {/* Top Content Row */}
        <div className="grid lg:grid-cols-[48%_48%] gap-[4%] items-center mb-16">
          
          {/* Left Side: Factory Image */}
          <div
            data-aos="fade-right"
            className="overflow-hidden rounded-[24px] shadow-lg aspect-[4/3] relative"
          >
            <Image
              src="/medical/ohst/factory.jpg"
              alt="OHST Factory"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-w-lg) 100vw, 50vw"
            />
          </div>

          {/* Right Side: Text & CTA */}
          <div data-aos="fade-left" className="flex flex-col justify-center">
            <h2
              className="
                text-[32px]
                sm:text-[40px]
                leading-[1.2]
                font-bold
                text-[#222222]
                mb-6
              "
            >
              Precision in every detail made in Rathenow, Germany
            </h2>

            <div className="space-y-4 text-[16px] leading-[26px] text-[#555555] font-sans">
              <p>
                Driven by a passion for medical technology for more than a quarter
                of a century, we have embarked on a mission to create orthopedic devices
                that make orthopedic surgery more effective and reliable.
              </p>
              <p>
                Our state of the art factory in Rathenow is equipped with the latest
                technology for the manufacture of orthopedic joint components and custom implants.
              </p>
              <p>
                In cooperation with leading orthopedic surgeons and research institutes,
                we develop innovative systems that ensure excellent clinical outcomes.
              </p>
            </div>

            {/* CTA Button */}
            <button
              className="
                mt-8
                h-[48px]
                w-fit
                px-8
                rounded-full
                bg-[#099F94]
                text-white
                font-semibold
                flex items-center
                gap-2
                hover:bg-[#07877e]
                hover:scale-105
                transition-all duration-300
                shadow-md
              "
            >
              Read More
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Gallery Row (2:1:1 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Two People Image (spans 2 columns) */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="md:col-span-2 overflow-hidden rounded-[20px] aspect-[16/10] relative shadow-md"
          >
            <Image
              src="/medical/ohst/twopeople.jpg"
              alt="OHST Management Team"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-w-lg) 100vw, 50vw"
            />
          </div>

          {/* Portrait 1 */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="md:col-span-1 overflow-hidden rounded-[20px] aspect-[4/5] md:aspect-auto relative shadow-md min-h-[200px]"
          >
            <Image
              src="/medical/ohst/person1.jpg"
              alt="OHST Team Member"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-w-lg) 100vw, 25vw"
            />
          </div>

          {/* Portrait 2 */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="md:col-span-1 overflow-hidden rounded-[20px] aspect-[4/5] md:aspect-auto relative shadow-md min-h-[200px]"
          >
            <Image
              src="/medical/ohst/person2.jpg"
              alt="OHST Team Member"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-w-lg) 100vw, 25vw"
            />
          </div>

        </div>

      </div>
    </section>
  );
}