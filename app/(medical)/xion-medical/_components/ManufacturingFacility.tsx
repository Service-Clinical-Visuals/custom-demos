"use client";

import Button from "./Button";

const cards = [
  {
    title: "The safe system with optimum handling",
    description: "All modules of a XION system are harmonized to each other. Devices, optics and instruments form a unit that adapts to your way of working and supports your workflow. Technology from XION helps you to cope with the increasingly complex daily hospital routine.",
    imageText: "Medical Device Setup"
  },
  {
    title: "DIVAS – The information hub for your patient data",
    description: "DIVAS software ensures valid, comfortable and fast diagnostic findings, their documentation and patient-related data storage. Diagnostic and treatment data are recorded, analysed and archived.",
    imageText: "Software Interface"
  }
];

export default function ManufacturingFacility() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Content */}
        <div data-aos="fade-up" className="grid justify-items-center text-center max-w-4xl mx-auto mb-10">
          <span className="text-[#00AFAF] font-bold text-[16px] mb-3 block">Our Manufacturers facility</span>
          <h2 className="text-[30px] lg:text-[34px] font-extrabold leading-tight mb-3">ENDOSCOPY SYSTEMS since 1991</h2>
          <p className="text-[#666666] text-[15px] leading-[1.8] font-medium px-8">
            All XION products are manufactured at our production facility in Berlin. With several of our own representatives abroad and an international dealer network, XION is now present in more than 50 countries.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {cards.map((card, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="relative group h-full">
              {/* Teal Layer Behind */}
              <div className="absolute inset-0 bg-[#00AFAF] rounded-[40px] translate-y-4 z-0 shadow-lg shadow-[#00AFAF]/20" />
              
              {/* Main White Card */}
              <div className="relative z-10 bg-white rounded-[40px] overflow-hidden border border-gray-50 grid transition-all duration-500 group-hover:-translate-y-2 h-full">
                 {/* Image Area */}
                 <div className="p-8 pb-0">
                    <div className="aspect-[16/9] bg-gray-50 rounded-[30px] overflow-hidden relative border border-gray-100">
                       <img 
                         src={index === 0 ? "/xion/images/endoscopy-1.png" : "/xion/images/endoscopy-2.png"} 
                         alt={card.title} 
                         className="w-full h-full object-cover" 
                       />
                       {/* Side Accents */}
                       <div className="absolute top-0 left-0 bottom-0 w-4 bg-[#00AFAF]/10" />
                       <div className="absolute top-0 right-0 bottom-0 w-4 bg-[#00AFAF]/10" />
                    </div>
                 </div>
                 
                 {/* Content Area */}
                 <div className="p-10 pt-8 grid gap-4">
                    <h3 className="text-[#00AFAF] text-[22px] font-bold leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[#666666] text-[16px] leading-[1.8] font-medium">
                      {card.description}
                    </p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
