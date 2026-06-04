"use client";

import Link from "next/link";

export default function Products() {
  const products = [
    {
      title: "Orthopaedic & Trauma Surgery",
      src: "/osteobionix/product1.png",
      description: "Orthopedic and trauma surgery encompass a wide range of complex procedures, where standard off-the-shelf implants may not always provide the best clinical outcomes.",
    },
    {
      title: "Cranio-Maxillofacial Implants",
      src: "/osteobionix/product2.png",
      description: "At osteobionix, we leverage advanced digital planning, patient-specific design and cutting-edge manufacturing technologies to deliver highly precise CMF solutions. Cranio-maxillofacial (CMF) surgery demands exceptional accuracy...",
    },
    {
      title: "Custom Thoracic Implants",
      src: "/osteobionix/product3.png",
      description: "Chest wall reconstruction is a complex surgical challenge and, despite the variety of existing solutions, none has proven to be universally optimal. Traditional implants often come with limitations that compromise their effectiveness.",
    },
    {
      title: "Custom Spine Surgery Implants",
      src: "/osteobionix/product4.png",
      description: "Standard off-the-shelf spinal implants effectively address most conditions that spine surgeons encounter in their daily practice. However, some cases present unique challenges that require a patient-specific approach.",
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-primary relative overflow-hidden">


      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-white font-heading font-semibold text-3xl md:text-4xl mb-4">
            Our Products
          </h2>
          <p className="text-white mb-4 leading-relaxed text-md md:text-base">
            Cutting and positioning guides to enhance precision and streamline complex resections and reconstructions.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl  flex flex-col sm:flex-row gap-5 sm:gap-6 shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Product Image */}
              <div className="w-full sm:w-[35%] h-[200px] sm:h-[230px] relative bg-[#f4f5f6] rounded-xl overflow-hidden shrink-0">
                <img
                  src={product.src}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="w-full sm:w-[65%] flex flex-col justify-center items-start text-left py-3 pr-3 sm:pr-5">
                <h3 className="text-black font-semibold font-heading text-lg xl:text-xl mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-2 leading-relaxed text-sm md:text-base">
                  {product.description}
                </p>
                <Link
                  href="#"
                  className="text-black underline font-[500] text-sm mt-2"
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
