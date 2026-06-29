import Container from "./Container";

const partners = [
  { name: "HealthTrust", logo: "/medical/myco-medical/partners/1.png" },
  { name: "Vizient", logo: "/medical/myco-medical/partners/2.png" },
  { name: "Premier", logo: "/medical/myco-medical/partners/3.png" },
  { name: "McKesson", logo: "/medical/myco-medical/partners/4.png" },
  { name: "Concordance Healthcare Solutions", logo: "/medical/myco-medical/partners/5.png" },
  { name: "Owens & Minor", logo: "/medical/myco-medical/partners/6.png" },
  { name: "IMCO", logo: "/medical/myco-medical/partners/7.png" },
  { name: "Cardinal Health", logo: "/medical/myco-medical/partners/8.png" },
];

export default function Partners() {
  return (
    <section className="bg-white py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="heading mb-3" data-aos="fade-up">Our Partners</h2>
          <p className="content max-w-[1000px] mx-auto" data-aos="fade-up" data-aos-delay="100">
            We serve a prestigious client base of major health systems, group
            purchasing organizations integrated hospital networks, care centers,
            distributors and more
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="rounded-xl flex items-center justify-center"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className=" w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
