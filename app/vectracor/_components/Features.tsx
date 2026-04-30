// components/VectraSection.tsx
export default function VectraSection() {
  return (
    <section className="relative w-full py-20  bg-[url('/vectracor/background_pattern.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center">

      {/* 🔷 Pattern Layer */}
      <div className="absolute inset-0 bg-[#26487E]/90" ></div>

      <div className=" container mx-auto px-6 grid md:grid-cols-6 gap-12">

        {/* LEFT */}
        <div data-aos="fade-right " className="col-span-4">
          <h2 className="text-white text-3xl font-semibold mb-4">
            VectraplexECG
          </h2>

          <p className="text-white/80 ">
           VectraplexECG (VECG) provides the Cardiac Electrical Biomarker, CEB®,
a technology to detect ECG changes suggestive of acute ischemic injury, including AMI. Providing a powerful diagnostic test right in your ECG machine. VectraplexECG can derive a 12 to 15-lead ECG report with just 5 electrodes. 
          </p>

          {/* Media Box */}
          <div className="mt-8 bg-gray-200 rounded-xl shadow-md h-[500px] flex items-center justify-center text-gray-600 font-medium">
            360 DEG
          </div>
        </div>

        {/* RIGHT */}
        <div data-aos="fade-left" className="col-span-2 flex flex-col justify-between">

          {/* Feature Card */}
          <div className="bg-[#285092]/80 rounded-xl p-10 shadow-lg space-y-8 border  border-white/30 ">

            {[
              {
                title: "Smart",
                desc: "Comes with our innovative CEB® technology",
                icon: "/vectracor/idea.png"
              },
              {
                title: "Efficient",
                desc: "Use just 5-electrodes to derive a 12 to 22-lead ECG",
                icon: "/vectracor/efficiency.png"
              },
              {
                title: "Accurate",
                desc: "Review our clinical validation",
                icon: "/vectracor/accuracy.png"
              },
              {
                title: "Reliable",
                desc: "3-year warranty included",
                icon: "/vectracor/dependable.png"
              },
              {
                title: "Regulatory Approval",
                desc: "FDA Cleared and CE Marked",
                icon: "/vectracor/quality.png"
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 items-center">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0">
                  {item.icon && <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />}
                </div>
                <div>
                  <h4 className="text-white text-lg font-bold">
                    {item.title}
                  </h4>
                  <p className="text-white/70 text-sm mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8">
            <p className="text-white mb-4">
              Meet the VectraplexECG, Our Smartest ECG Ever.
            </p>

            <button className="bg-white text-[#333333]]-700 px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:bg-gray-100 transition border-2 border-[#B5D2FF]">
              View Specifications →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}