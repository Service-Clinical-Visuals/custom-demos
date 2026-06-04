"use client";

export default function SupportedBy() {
  const partners = [

    {
      name: "Plan de Recuperación,",
      subtitle: "Transformación y Resiliencia",
      path: "/osteobionix/logo-2.jpg"
    },
    {
      name: "CDTI",
      subtitle: "INNOVACIÓN",
      path: "/osteobionix/logo-3.jpg"
    },
    {
      name: "Gobierno de Canarias",
      subtitle: "",
      path: "/osteobionix/logo-4.jpg"
    },
    {
      name: "Plan de Recuperación,",
      subtitle: "Transformación y Resiliencia",
      path: "/osteobionix/logo-2.jpg"
    },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-[#fafafa]">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="text-primary font-heading font-semibold text-3xl md:text-4xl mb-4">
            Supported By
          </h2>
          <p className="text-black mb-4 leading-relaxed text-md md:text-base">
            Built on the support of experienced partners and cutting-edge innovation to drive sustainable growth and success.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" data-aos="fade-up" data-aos-delay="100">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white shadow-[0_2px_15px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center justify-center p-6 lg:p-8 w-full h-[140px] transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-full h-full">
                <img src={partner.path} alt={partner.name} className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
