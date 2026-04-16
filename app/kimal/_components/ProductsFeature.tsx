import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

export default function ProductsFeature() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
          <div className="w-full aspect-[video] bg-gray-100/80 rounded-3xl overflow-hidden relative shadow-lg">
            <video src="https://cdn.clinicalvisuals.com/medical/advanced_instrumentations/landing_page/adavnced_esu_400_01.webm" autoPlay loop muted className="w-full h-full object-cover"></video>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl lg:text-3xl leading-[1.2] font-bold text-slate-800 mb-3 tracking-tight">Altius Central Venous Catheters</h2>
            <h3 className="text-lg lg:text-xl font-bold text-[#4782d3] mb-6">"Maximise your options, Minimise your risks"</h3>

            <p className="text-base lg:text-lg font-medium leading-relaxed mb-4">
              With Altius® central venous catheters you can protect your patient from catheter associated risks. Our CVCs feature our unique Multi-Tube™ technology and are available from 1-5 and 7 lumen configurations.
            </p>
            <p className="text-base lg:text-lg font-medium leading-relaxed mb-4">
              proprietary Multi-Tube™ technology which creates a unique catheter design with perfectly round lumens.
            </p>
            <p className="text-base lg:text-lg font-medium leading-relaxed mb-8">
              Uniform round lumens provide smooth, laminar flow, allowing for higher flow rates to be achieved than with traditional extruded catheters.
            </p>

            <div className="flex items-center">
              <Button text="Explore Product Details" />
            </div>
          </div>
        </div>

        {/* Feature Strip */}
        <div className="flex flex-col md:flex-row overflow-hidden rounded-3xl shadow-[0_4px_30px_rgb(0,0,0,0.05)] border border-gray-100 items-stretch">
          <div className="flex-1 bg-[#f4f5f7] p-8 lg:p-12">
            <h4 className="font-bold text-slate-800 text-xl mb-3">Multi-Tube Technology</h4>
            <p className="text-base lg:text-lg font-medium text-slate-500 leading-relaxed">Perfectly round lumens to deliver higher flows. Uniform round lumens provide smooth, laminar flow, allowing for higher flow rates to be achieved than with traditional extruded catheters.</p>
          </div>
          <div className="flex-1 bg-[#4782d3] p-8 lg:p-12 text-white shadow-xl z-10 scale-[1.01]">
            <h4 className="font-bold text-xl mb-3 tracking-tight text-white!">Barium Content</h4>
            <p className="text-base lg:text-lg font-medium leading-relaxed">Designed to enhance visibility during X-ray tip confirmation, ensuring accurate positioning and improved procedural safety.</p>
          </div>
          <div className="flex-1 bg-[#f4f5f7] p-8 lg:p-12">
            <h4 className="font-bold text-slate-800 text-xl mb-3">Insertion Kit</h4>
            <p className="text-base lg:text-lg font-medium text-slate-500 leading-relaxed">The insertion kit is designed to minimise risks, enhancing safety, precision, and ease of use while ensuring reliable performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
