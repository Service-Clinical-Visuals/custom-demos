import Image from "next/image";

const clients = [
  {
    image: "/accu-scope/trusted/Northwell.png",
  },
  {
    image: "/accu-scope/trusted/Zoetis.png",
  },
  {
    image: "/accu-scope/trusted/Texas.png",
  },
  {
    image: "/accu-scope/trusted/Scripps.png",
  },
  {
    image: "/accu-scope/trusted/PennState.png",
  },
  {
    image: "/accu-scope/trusted/Lilly.png",
  },
  {
    image: "/accu-scope/trusted/Pfizer.png",
  },
  {
    image: "/accu-scope/trusted/Yale.png",
  }
];

export default function TrustedClientsSection() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-[1560px] 2xl:max-w-[80%] mx-auto px-6">
        <div className="text-center max-w-6xl mx-auto" data-aos="fade-up">

          <h2 className="text-[38px] text-[#333333] font-bold">
            Trusted by these fine institutions
          </h2>
          <p className="mt-6 leading-8 text-[16px] text-[#333333] max-w-[1000px] mx-auto">
            {/* <p
            className="
              mt-4
              text-[#333333]!
              text-[16px]
              line-height-[26px]
            "
          > */}
            Our microscopy solutions are relied upon by universities, research laboratories, healthcare facilities, and industry professionals worldwide—delivering consistent performance, accuracy, and reliability where it matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-14">
          {clients.map((logo, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="group"
            >
              <Image
                src={logo.image}
                alt=""
                width={360}
                height={160}
                className="transition-all duration-700 group-hover:scale-110"
              />
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}