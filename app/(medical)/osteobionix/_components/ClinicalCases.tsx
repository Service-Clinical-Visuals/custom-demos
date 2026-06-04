"use client";

export default function ClinicalCases() {
  const cases = [
    {
      title: "Hip Reconstruction in a Patient with Bone Tumor",
      patient: "45-year-old male with osteosarcoma in the pelvis.",
      problem: "Extensive bone destruction in the acetabular region due to an aggressive tumor.",
      solutions: [
        "Custom pelvic implant made of porous titanium.",
        "Integration with a hip prosthesis to restore mobility."
      ]
    },
    {
      title: "Severe Scoliosis Correction with a Custom Spinal Implant",
      patient: "16-Year-Old Adolescent With Severe Idiopathic Scoliosis.",
      problem: "Extensive bone destruction in the acetabular region due to an aggressive tumor.",
      solutions: [
        "Personalized spinal fixation system to correct the curvature.",
        "Use of modular 3D-printed implants to provide stability and support."
      ]
    },
    {
      title: "Severe Scoliosis Correction with a Custom Spinal Implant",
      patient: "30-Year-Old Male With Multiple Skull And Jaw Fractures",
      problem: "Severe bone loss compromising facial symmetry and chewing function.",
      solutions: [
        "Custom craniofacial implants 3D-printed in titanium.",
        "Cutting and positioning guides to ensure precise reconstruction."
      ]
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#f9f9f9]" data-aos="fade-up">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-200 flex flex-col" data-aos="fade-up" data-aos-delay={idx * 150}>
              <h3 className="text-[#317d71] font-semibold text-center font-heading text-[18px] mb-4 min-h-[48px] flex items-center justify-center max-w-[85%] mx-auto">
                {c.title}
              </h3>
              <hr className="border-t border-[#317d71]/40 w-full mb-6" />

              <div className="flex flex-col gap-4 text-sm text-gray-600 flex-1">
                <p>
                  <span className="font-medium text-gray-900">Patient:</span> {c.patient}
                </p>
                <p>
                  <span className="font-medium text-gray-900">Problem:</span> {c.problem}
                </p>
                <div>
                  <p>
                    <span className="font-medium text-gray-900">Solutions:</span>
                    <ul className="list-disc pl-5 flex flex-col gap-1">
                      {c.solutions.map((sol, i) => (
                        <li key={i}>{sol}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
