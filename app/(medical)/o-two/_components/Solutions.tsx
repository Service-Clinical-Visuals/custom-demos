"use client";

export default function Solutions() {
  const cards = [
    {
      title: "eAdvantage",
      description: "Meet the revolutionary analgesia device that is set to redefine patient care standards with reliable performance and fast, effective pain relief for healthcare environments.",
      imageSrc: "/o-two/home/section-2-1.png",
      imageAlt: "eAdvantage Product",
    },
    {
      title: "e700 Ventilator",
      description: "Discover the game-changing power of the e700 Transport Ventilator – unlocking unmatched performance and precision in patient care.",
      imageSrc: "/o-two/home/section-2-2.png",
      imageAlt: "e700 Ventilator Product",
    },
    {
      title: "Single Use CPAP",
      description: "Award-winning, compact, low-flow ventilation designed for respiratory distressed patients with reliable care across emergency and critical care settings.",
      imageSrc: "/o-two/home/section-2-3.png",
      imageAlt: "Single Use CPAP Product",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden bg-[url('/o-two/home/bg.jpg')] bg-cover bg-center" id="products">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#97deff] opacity-80 backdrop-blur-[2px]" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-6 font-display"
            data-aos="fade-up"
          >
            Innovative Respiratory Care Solutions
          </h2>
          <p
            className="text-[14px] md:text-[17px] text-gray-600 leading-relaxed max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Delivering advanced ventilation, analgesia, and respiratory support technologies designed to enhance patient care,
            improve clinical efficiency, and support healthcare professionals in critical and emergency care environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="bg-[#dbebff]/70 backdrop-blur-sm rounded-[2.5rem] p-6 border border-white/50 flex flex-col justify-between hover-lift shadow-premium hover:shadow-premium-hover transition-all duration-500 group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div>
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-6 bg-[#def5ff]">
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-xl lg:text-[25px]! font-bold text-[#0091d5] mb-3">
                  {card.title}
                </h3>

                <div className="w-full h-[1px] bg-white/60 mb-4" />
              </div>

              <p className="text-[17px] text-gray-600 leading-relaxed mt-2 font-sans">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
