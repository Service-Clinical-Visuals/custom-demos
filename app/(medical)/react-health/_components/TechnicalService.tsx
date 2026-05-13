"use client";

import Image from "next/image";
import ReactHealthButton from "./ReactHealthButton";

export default function TechnicalService() {
  const locations = [
    {
      city: "Bothell, WA",
      description: "React Health service depot supporting technical evaluation and repair services.",
    },
    {
      city: "Columbus, OH",
      description: "React Health service depot supporting technical evaluation and repair services.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="react-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Placeholder */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3] flex items-center justify-center" data-aos="fade-right">
            <img src="/react-health/service.jpg" alt="Service" className="w-full h-full object-cover" />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8" data-aos="fade-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-react-text-dark mb-4">
                Technical Service
              </h2>
              <p className="text-react-text-gray max-w-xl">
                The React Health Technical Services team operates two service centers in the United States to evaluate and repair React Health devices. Our service operations support customers across the country with experienced technical evaluation, repair, and return processing from our dedicated service depots.
              </p>
            </div>

            <div className="space-y-4">
              {locations.map((loc, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white border-l-4 border-l-react-purple rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start"
                >
                  <div>
                    <h3 className="font-bold text-lg text-react-text-dark">{loc.city}</h3>
                    <p className="text-[16px] text-react-text-gray">{loc.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <ReactHealthButton text="Explore Solutions" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
