"use client";

import Button from "./Button";

const solutions = [
  {
    title: "Laryngo-stroboscopy and phoniatrics",
    path: "/xion/images/service-1.png",
    description: "The modular concept of XION's system components enables a multitude of useful combinations and thus optimal adaptation to concrete user requirements."
  },
  {
    title: "System solutions for surgery",
    path: "/xion/images/service-2.png",
    description: "Besides the obvious financial advantage that it offers, a multi-functional, future-proof platform facilitates predictable investments for expanding the system and using latest technologies."
  },
  {
    title: "Swallowing Diagnostics",
    path: "/xion/images/service-3.png",
    description: "The modular concept of XION's system components enables a multitude of useful combinations and thus optimal adaptation to concrete user requirements."
  }
];

export default function SystemSolutions() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end mb-20 gap-6">
          <div>
            <span className="text-[#00AFAF] font-bold text-[16px] mb-3 block">Our Service</span>
            <h2 className="text-[30px] lg:text-[34px] font-extrabold leading-tight">Our System Solutions</h2>
          </div>
          <Button href="#" className="justify-self-start">View All</Button>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((item, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="relative group h-full">
              {/* Teal Layer Behind */}
              <div className="absolute inset-0 bg-[#00AFAF] rounded-[40px] translate-y-3 z-0 shadow-lg shadow-[#00AFAF]/20" />
              
              {/* Main White Card */}
              <div className="relative z-10 bg-white rounded-[40px] px-10 py-16 border border-gray-50 grid items-center justify-items-center text-center transition-all duration-500 group-hover:-translate-y-2 h-full content-center">
                {/* Icon: Solid Teal Circle */}
                <div className="w-20 h-20 bg-[#00AFAF] rounded-full mb-10 flex items-center justify-center shadow-lg shadow-[#00AFAF]/20 p-3" >
                  <img src={item.path} alt={item.title} />
                </div>

                
                <h3 className="text-[24px] font-black text-gray-900 mb-8 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-[#484848] text-[14px] lg:text-[16px] leading-[1.8] font-medium ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
