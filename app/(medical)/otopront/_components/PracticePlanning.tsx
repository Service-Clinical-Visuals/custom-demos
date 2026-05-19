import React from "react";
import Button from "./Button";

export default function PracticePlanning() {
  const cards = [
    {
      title: "Spatial planning, adapted to your way of working",
      description: "A well thought-out design of the treatment room is crucial for an efficient and smooth workflow. In addition to the suitably configured equipment and arrangement of the treatment unit, the consideration of individual advantages and working habits is decisive."
    },
    {
      title: "Detailed individual consulting",
      description: "Otopront will therefore advise you, also without obligation, when visiting you on the spot. After that, an accurate 3D spatial planning or floor plan can be carried out, taking into account your workflows. In addition to possible positioning of the workplace, questions concerning the water supply and drainage, the voltage supply, LAN connections and the mounting of monitors can be clarified and displayed."
    },
    {
      title: "Customisations for the treatment room",
      description: "Thanks to decades of experience and always customised workshop-making, Otopront is able to offer a wide range of individual solutions. Special wishes can be taken into account in the design of the treatment room and can be implemented later."
    }
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-[url('/otopront/images/planing-bg.png')] bg-cover bg-center bg-no-repeat">
      {/* Background Image Placeholder with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/75 z-10"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6" data-aos="fade-up">
          <div>
            <h2 className="text-[28px] md:text-[36px] font-semibold text-white mb-4 leading-tight">
              Practice planning
            </h2>
            <p className="text-white!">
              Sophisticated design of the treatment room for efficient workflow
            </p>
          </div>
          
          <Button href="#" variant="red" arrowType="circle">
            Discover More
          </Button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border border-white/5 rounded-[24px] p-8 hover:bg-white/15 transition-colors"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <h3 className="text-[24px] font-semibold text-white mb-6 leading-snug">
                {card.title}
              </h3>
              <p className="text-white! leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
