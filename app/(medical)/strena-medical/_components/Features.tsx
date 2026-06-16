import { ShieldCheck, BriefcaseMedical, Cpu, Award } from "lucide-react";

const features = [
  {
    icon: "/strena/images/feature-1.png",
    title: "High Quality",
    subtitle: "Medical Devices",
  },
  {
    icon: "/strena/images/feature-2.png",
    title: "Trusted by",
    subtitle: "Professionals",
  },
  {
    icon: "/strena/images/feature-3.png",
    title: "Innovative",
    subtitle: "Technology",
  },
  {
    icon: "/strena/images/feature-4.png",
    title: "Global Standards",
    subtitle: "Complaince",
  },
];

export default function Features() {
  return (
    <section className="py-10 bg-[#F0F8FF] border-b border-gray-100 strena-medical-root">
      <div className="custom-container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <img src={feature.icon} alt={feature.title} className="w-12 h-12 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[20px] font-normal">
                  {feature.title}
                </span>
                <span className="text-[20px] font-normal">
                  {feature.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
