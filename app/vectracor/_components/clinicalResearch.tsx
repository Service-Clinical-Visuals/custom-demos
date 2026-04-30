import { ArrowRight } from "lucide-react";

// components/ClinicalResearch.tsx
export default function ClinicalResearch() {
  const logos = [
    "/vectracor/John-Hopkins.png",
    "/vectracor/University-of-basal.png",
    "/vectracor/Henery-Ford.png",
    "/vectracor/Milton-Keynes.png",
    "/vectracor/ESC.png",
    "/vectracor/SMG.png",
  ];

  return (
    <section className="relative w-full py-20 bg-[#3f5f8f] overflow-hidden">

      {/* Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/hex-pattern.png')] bg-repeat"></div>

      <div className=" container relative mx-auto px-6">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">

          {/* Left */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-semibold text-white">
              Clinical Research
            </h2>

            <p className="text-white/80 mt-4 max-w-[900px] leading-relaxed">
              VectraCor has received the support of Key Opinion Leaders (KOL) in the cardiology and acute care fields, and more specifically of the CEB® and derived ECG technology. The Company sought out physicians and researchers to conduct clinical studies and use the VectraplexECG System in their facilities. Some of the participating institutions and the studies that were conducted are outlined below.
            </p>
          </div>

          {/* Right CTA */}
          <div data-aos="fade-left">
          <button className="bg-white text-[#333333]]-700 px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:bg-gray-100 transition border-2 border-[#B5D2FF]">
            Learn More <span className="text-lg"><ArrowRight /></span>
            </button>
          </div>
        </div>

        {/* Logos */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {logos.map((logo, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-4 flex items-center justify-center"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <img
                src={logo}
                alt="logo"
                className="max-h-[200px] max-w-[350px] object-contain"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}