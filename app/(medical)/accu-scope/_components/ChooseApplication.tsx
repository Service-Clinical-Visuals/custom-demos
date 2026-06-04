"use client";

const applications = [
  {
    title: "Clinical",
    image: "/applications/clinical.jpg",
  },
  {
    title: "Education",
    image: "/applications/education.jpg",
  },
  {
    title: "Research",
    image: "/applications/research.jpg",
  },
  {
    title: "Veterinary",
    image: "/applications/veterinary.jpg",
  },
  {
    title: "Industrial",
    image: "/applications/industrial.jpg",
  },
  {
    title: "OEM",
    image: "/applications/oem.jpg",
  },
];

export default function ChooseApplicationSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-24 lg:py-32
        bg-gradient-to-b
        from-[#005F97]
        via-[#007FA3]
        to-[#00B3A4]
      "
    >
      <div className="max-w-[1500px] mx-auto px-6">

        {/* Header */}
        <div
          className="text-center max-w-4xl mx-auto"
          data-aos="fade-up"
        >
          <h2
            className="
              text-white
              text-[48px]
              lg:text-[64px]
              font-bold
              leading-tight
            "
          >
            Choose Your Application
          </h2>

          <p
            className="
              mt-6
              text-white/90
              text-lg
              leading-8
            "
          >
            Explore microscopy solutions tailored for clinical,
            educational, research, veterinary, industrial,
            and OEM needs designed to deliver precision and
            performance across every field.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-20
            grid
            grid-cols-2
            md:grid-cols-3
            xl:grid-cols-6
            gap-6
          "
        >
          {applications.map((item, index) => (
            <div
              key={item.title}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="
                group
                cursor-pointer
                text-center
              "
            >
              {/* Image Card */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  h-[320px]
                  shadow-xl
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/10
                    group-hover:bg-black/30
                    transition-all
                  "
                />
              </div>

              {/* Label */}
              <h3
                className="
                  mt-5
                  text-white
                  text-[28px]
                  font-bold
                "
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}