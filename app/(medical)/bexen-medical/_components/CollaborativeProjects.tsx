import React from 'react';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function CollaborativeProjects() {
  return (
    <section className="medas-root py-20 text-white relative overflow-hidden bg-[url('/medical/bexen-medical/bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-[#14387F]/80 z-0"></div>
      <div className="custom-container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-[32px] md:text-[36px] font-semibold mb-4">Collaborative Projects</h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-[14px] text-blue-100 max-w-4xl mx-auto">
            The following projects are part of the Integrated Plan for the Promotion of the Social Economy for the generation of an inclusive and sustainable economic fabric within the framework of the Strategic Projects for Economic Recovery and Transformation (PERTE).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "/medical/bexen-medical/home/collaborative-1.png",
            "/medical/bexen-medical/home/collaborative-2.png",
            "/medical/bexen-medical/home/collaborative-3.png"
          ].map((img, idx) => (
            <div key={idx} data-aos="zoom-in" data-aos-delay={100 * idx} className="bg-white p-5 rounded-[16px] aspect-[2/1] overflow-hidden relative shadow-lg flex items-center justify-center p-4">
              <img
                src={img}
                alt="Partner Logo"
                className="w-[90%]  h-[90%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
