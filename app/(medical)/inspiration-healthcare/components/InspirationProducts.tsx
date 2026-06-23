"use client";

import "aos/dist/aos.css";

export default function InspirationProducts() {

  return (
    <section className="bg-[#f3f5f6] py-16 md:py-20 px-4 lg:px-6 ih-root">
      <div className="custom-container">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-base tracking-wide text-gray-500 mb-3 font-medium">
            Our Products
          </p>
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#26505E] mb-4">
            Respiratory Care
          </h2>
          <p className="text-base text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Our respiratory solutions are simple, flexible, and precise—enabling clinicians to deliver tailored therapy with confidence. Advanced features like automated oxygen control ensure safe, consistent, and effective support for infants.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Image */}
              <div className="p-4">
                <div className="rounded-xl overflow-hidden bg-gray-200 aspect-[4/3] flex items-center justify-center">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Content */}
              <div className="px-5 pb-6">
                <h3 className="text-base xl:text-[22px] font-semibold text-[#26505E] mb-3 leading-snug">
                  {card.title}
                </h3>

                <div className="h-px bg-gray-400 mb-4" />

                <p className="text-base text-gray-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const cards = [
  {
    title: "Respiratory care, starting from the first breaths of life",
    img: "/inspiration-healthcare/assets/inspiration-product1.jpg",
    desc: "We have developed and manufactured respiratory equipment since 1977. Nurturing close relationships with leading universities, hospitals and industry specialists to understand the challenges facing clinicians when caring for the most critical babies.",
  },
  {
    title: "Simple, flexible and precise",
    img: "/inspiration-healthcare/assets/inspiration-product2.png",
    desc: "The Inspiration Air/Oxygen blender is a precision proportioning device for mixing medical grade air and oxygen, to any concentration from 21% to 100% oxygen and delivering it to a variety of respiratory care devices.",
  },
  {
    title: "Customise your ventilator",
    img: "/inspiration-healthcare/assets/inspiration-product3.png",
    desc: "Our SLE6000 multimode ventilator exclusively focuses on infants. The SLE6000 also supports our award winning OxyGenie module, a responsive Automatic O2 controller for the SLE6000.",
  },
];
