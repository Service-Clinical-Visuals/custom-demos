import { CheckCircle2, ArrowUpRight } from "lucide-react";

export default function VesperMask() {
  const points = [
    "Soft and skin-friendly headgear fabric helps patients comfortably adapt to treatment",
    "Quiet honeycomb vent reduces airflow erosion intensity for peaceful sleep",
    "Easy pop cushions attach or detach from mask in an easy pop; no need to painstakingly align pieces",
    "Quick release connector rapidly and easily separates or connects mask and the tube",
  ];

  return (
    <section
      className="w-full py-16 md:py-24 text-white relative bg-cover bg-bottom"
      style={{ backgroundImage: "url('/sunset-healthcare/home/bg.jpg')" }}
    >
      {/* Color overlay over the background image */}
      <div className="absolute inset-0 bg-[#54626d] opacity-97 z-0"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="">
            <h2 className="text-[25px] md:text-[30px] font-medium mb-6 leading-[1.2]">CM207 Vesper Nasal CPAP Mask</h2>
            <div className="space-y-4 text-[18px] text-justify leading-[1.7] text-white/90 mb-8">
              <p>
                Sunset's Vesper Nasal Mask presents the latest in CPAP mask design to provide patients with fresh options for maximum comfort. Vesper masks introduce a pared back fit, with up-to-date design details like the ergonomic stabilizing arms that curve up to the temples for patients who prefer to forego a forehead piece. Vesper masks provide more visibility, a feeling of openness and a lighter fit.
              </p>
              <p>
                The flexible interface moves with side or stomach sleepers. The open structure eliminates forehead marks. Vesper masks also feature a 360-degree swivel elbow to prevent awkward tube tangles. Vesper masks bring balance and calm to the nighttime, softening the edges of sleep.
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {points.map((point, idx) => (
                <li key={idx} className="flex gap-3 text-[18px] text-white">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors">
              Explore Product <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="w-full lg:h-[500px] relative rounded-2xl overflow-hidden border border-gray-200 aspect-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="https://cdn.clinicalvisuals.com/medical/activbase/short_clips/activebase_02.webm" />
          </div>
        </div>
      </div>
    </section>
  );
}
