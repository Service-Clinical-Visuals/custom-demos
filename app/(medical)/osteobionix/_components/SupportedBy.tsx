"use client";

export default function SupportedBy() {
  const partners = [
    { name: "Financiado por la Unión Europea", subtitle: "NextGenerationEU", icon: "🇪🇺" },
    { name: "Plan de Recuperación,", subtitle: "Transformación y Resiliencia", icon: "R" },
    { name: "CDTI", subtitle: "INNOVACIÓN", icon: "✔️" },
    { name: "Gobierno de Canarias", subtitle: "", icon: "👑" },
    { name: "Cofinanciado por la Unión Europea", subtitle: "", icon: "🇪🇺" },
    { name: "Fondos Europeos", subtitle: "", icon: "🇪🇺" },
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
              <div className="flex items-center gap-3 w-full">
                {/* Fake Logo Icon */}
                <div className="text-2xl text-[#003399] bg-blue-50/50 p-2 rounded shrink-0">
                  {partner.icon}
                </div>
                {/* Text Content */}
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-[#003399] font-bold text-[10px] md:text-xs leading-tight truncate">
                    {partner.name}
                  </span>
                  {partner.subtitle && (
                    <span className="text-gray-400 text-[8px] md:text-[10px] leading-tight truncate mt-0.5">
                      {partner.subtitle}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
