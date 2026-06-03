"use client";

export default function SupportedBy() {
  const partners = [
    { 
      name: "Financiado por la Unión Europea", 
      subtitle: "NextGenerationEU", 
      path: "/osteobionix/logo-1.jpg" 
    },
    { 
      name: "Plan de Recuperación,", 
      subtitle: "Transformación y Resiliencia",
      path: "/osteobionix/logo-2.jpg" 
    },
    { 
      name: "CDTI", 
      subtitle: "INNOVACIÓN",
      path: "/osteobionix/logo-3.jpg" },
    { 
      name: "Gobierno de Canarias", 
      subtitle: "",
      path: "/osteobionix/logo-4.jpg" },
    { 
      name: "Cofinanciado por la Unión Europea", 
      subtitle: "",
      path: "/osteobionix/logo-5.jpg" },
    { 
      name: "Fondos Europeos", 
      subtitle: "",
      path: "/osteobionix/logo-6.jpg" },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-[#fafafa]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="text-[#237B64] font-heading font-bold text-3xl md:text-4xl mb-4">
            Supported By
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Built on the support of experienced partners and cutting-edge innovation to drive sustainable growth and success.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6" data-aos="fade-up" data-aos-delay="100">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-[0_2px_15px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center justify-center p-4 w-40 md:w-56 h-20 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 w-full h-20">
                  <img src={partner.path} alt={partner.name} className="w-full h-full object-contain" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
