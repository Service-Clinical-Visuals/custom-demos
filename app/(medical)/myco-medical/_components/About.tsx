import Container from "./Container";

export default function About() {
  return (
    <section className="py-32 bg-white">
      <Container>
        {/* Title */}
        <h2 className="heading mb-10 text-center" data-aos="fade-up">
          About Us
        </h2>

        {/* Top row: text card | image + button | text card */}
        <div className="grid grid-cols-1 xl:grid-cols-[27.5fr_45fr_27.5fr] gap-6 items-center mb-14">
          {/* Left card */}
          <div className="rounded-xl border border-[#21212180] p-8 flex items-center justify-center h-full min-h-[260px]" data-aos="fade-right">
            <p className="content text-center text-[#0064A4]! font-semibold text-[24px]!">
              We are your trusted medical supplier and committed partner to help
              navigate today&apos;s healthcare world. For more than 30 years, we have
              helped US hospitals, health systems, and clinics overcome their
              supply chain challenges and bridge the gap between quality and cost
              savings through the delivery of high-quality affordable medical
              devices and disposables.
            </p>
          </div>

          {/* Center: image + button */}
          <div className="flex flex-col items-center gap-5 mb-10" data-aos="fade-up" data-aos-delay="150">
            <img
              src="/medical/myco-medical/aboutus.png"
              alt="Myco Medical team at conference"
              className="w-full rounded-lg object-cover"
            />
            <a
              href="#"
              className="mt-4 font-bold bg-primary hover:bg-[#004a75] transition-colors content-white px-12 py-3 rounded-lg"
              data-aos="fade-up" data-aos-delay="250"
            >
              Learn More
            </a>
          </div>

          {/* Right card */}
          <div className="rounded-xl border border-[#21212180] p-8 flex items-center justify-center h-full min-h-[260px]" data-aos="fade-left" data-aos-delay="150">
            <p className="content text-center text-[#0064A4]! font-semibold! text-[24px]!">
              We bring a unique partnership-based approach to meeting our
              customers&apos; needs, offering dynamic solutions to help mitigate the
              risks associated with traditional supply chain practices and to
              maximize their cost efficiencies to help ensure quality affordable
              care for patients.
            </p>
          </div>
        </div>

        {/* Bottom row: Our Mission | Our Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Our Mission */}
          <div className="rounded-xl border border-gray-200 px-8 py-7" data-aos="fade-up">
            <h3 className="text-center subheading mb-4">
              Our Mission
            </h3>
            <hr className="border-gray-200 mb-5" />
            <p className="content">
              MYCO is committed to reducing healthcare costs while ensuring access
              to high quality, affordable care for the communities we serve. In
              times of crisis, our team consistently supports customers and
              communities with compassion and reliability. We earn trust through
              exceptional service, clinical collaboration, and a dedication to
              safe, innovative solutions across all care settings. We believe
              every employee contributes unique value that strengthens our
              organization, and we take pride in our quality, excellence, and
              positive impact on healthcare.
            </p>
          </div>

          {/* Our Approach */}
          <div className="rounded-xl border border-gray-200 px-8 py-7" data-aos="fade-up" data-aos-delay="150">
            <h3 className="text-center subheading mb-4">
              Our Approach
            </h3>
            <hr className="border-gray-200 mb-5" />
            <p className="content">
              We believe that suppliers play a crucial role in helping healthcare
              providers navigate the complexities of the global supply chain. As a
              global sourcing supplier, our goal is to help our customers build a
              robust and cost-effective supply chain that ensures a consistent
              stream of critical medical supplies to their practices thereby
              offsetting the potential risks of single sourcing.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
