"use client";

import Link from "next/link";

export default function Products() {
  const products = [
    {
      title: "Orthopaedic & Trauma Surgery",
      description: "Orthopedic and trauma surgery encompass a wide range of complex procedures, where standard off-the-shelf implants may not always provide the best clinical outcomes.",
    },
    {
      title: "Cranio-Maxillofacial Implants",
      description: "At osteobionix, we leverage advanced digital planning, patient-specific design and cutting-edge manufacturing technologies to deliver highly precise CMF solutions. Cranio-maxillofacial (CMF) surgery demands exceptional accuracy...",
    },
    {
      title: "Custom Thoracic Implants",
      description: "Chest wall reconstruction is a complex surgical challenge and, despite the variety of existing solutions, none has proven to be universally optimal. Traditional implants often come with limitations that compromise their effectiveness.",
    },
    {
      title: "Custom Spine Surgery Implants",
      description: "Standard off-the-shelf spinal implants effectively address most conditions that spine surgeons encounter in their daily practice. However, some cases present unique challenges that require a patient-specific approach.",
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#103A31] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 24px)' }}></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-white font-heading font-bold text-3xl md:text-4xl mb-6">
            Our Products
          </h2>
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            We design and manufacture innovative, proven and cost-effective patient-specific solutions for complex bone and cartilage reconstruction and regeneration in orthopedic, trauma, spine, CMF and thoracic surgery. Using advanced 3D printing and bioengineered materials, our implants preserve anatomy, support tissue regeneration and improve surgical outcomes.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Product Image Placeholder */}
              <div className="w-full sm:w-2/5 aspect-square relative bg-white border border-gray-100 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
                <img
                  src="/osteobionix/product.png"
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover p-2"
                />
              </div>

              {/* Product Info */}
              <div className="w-full sm:w-3/5 flex flex-col justify-center items-start text-left">
                <h3 className="text-[#103A31] font-bold font-heading text-lg xl:text-xl mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                <Link
                  href="#"
                  className="bg-[#237B64] text-white px-5 py-2.5 rounded-full hover:bg-[#1f5c53] transition-colors font-bold text-sm shadow-sm mt-auto"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
