"use client";

const cards = [
  {
    title: "Emergency Room",
    desc: "With the clinical ease and capabilities of typical high flow plus clinical proof in a wide range of acutely ill patients, Vapotherm high velocity therapy is a trusted tool in emergency rooms.",
    img: "/vapotherm/assets/vapotherm-emergency.jpg",
  },
  {
    title: "Adult Critical Care",
    desc: "With high velocity therapy, you can offer patients in respiratory distress an attractive alternative to NiPPV for spontaneously breathing patients.",
    img: "/vapotherm/assets/vapotherm-adult.jpg",
  },
  {
    title: "Pediatric Care",
    desc: "With the clinical ease and capabilities of typical high flow plus clinical proof in a wide range of acutely ill patients, Vapotherm high velocity therapy is a trusted tool in emergency rooms.",
    img: "/vapotherm/assets/vapotherm-pediatric.jpg",
  },
];

export default function VapoSolutions() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="custom-container text-center">

        {/* HEADER */}
        <h2 className="text-2xl lg:text-3xl  2xl:text-3xlfont-semibold text-[#0C66AF] mb-4">
          A Frontline Solution from Neonates to Adults
        </h2>

        <p className="text-gray-600 text-md lg:text-lg 2xl:text-lg max-w-4xl mx-auto mb-8 md:mb-12">
          Together, we still have a lot of work to do. We see patients every day
          who would benefit from our life-changing technology and strive to make
          it available to everyone.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden flex flex-col"
            >
              {/* IMAGE — fixed height so all cards match */}
              <div className="h-48 sm:h-52 md:h-72 flex-shrink-0">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-left flex flex-col flex-1">
                <h3 className="text-gray-800 text-md lg:text-xl 2xl:text-xl font-medium mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-md lg:text-lg 2xl:text-lg leading-relaxed">
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
