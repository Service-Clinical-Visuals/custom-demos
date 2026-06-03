"use client";

export default function WhyOsteobionix() {
  return (
    <section id="why-osteobionix" className="w-full pb-16 lg:pb-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* Image Content (Left) */}
          <div className="relative w-full " data-aos="fade-right">
            <img
              src="/osteobionix/abt-2.png"
              alt="Surgeons in operation"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content (Right) */}
          <div className="flex flex-col items-start" data-aos="fade-left">
            <h2 className="text-[#237B64] font-heading font-bold text-3xl md:text-4xl mb-4">
              Why Osteobionix?
            </h2>
            <h3 className="font-heading font-bold text-lg md:text-xl text-gray-900 mb-6">
              "One patient. One condition. One implant."
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base font-medium">
              At osteobionix, we believe every clinical case is unique, because every patient is unique. That's why we work hand-in-hand with surgeons to develop personalized treatment options that enhance surgical outcomes and improve lives. Our mission is to advance the global standard of care for people affected by trauma, cancer, or degenerative diseases, offering safe, effective alternatives to conventional implants. We are proud to support a growing number of surgeons and patients around the world, with hundreds of osteobionix implants already in use worldwide.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium">
              At osteobionix, we believe that personalized medicine should mean exactly that: solutions tailored to your unique anatomy and clinical condition. We specialize in designing and manufacturing patient-specific implants for complex bone and joint reconstruction, using cutting-edge technologies as virtual surgical planning, advanced computer-aided design and metal and polymer 3D printing.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
