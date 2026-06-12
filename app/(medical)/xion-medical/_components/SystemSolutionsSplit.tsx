"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function SystemSolutionsSplit() {
  return (
    <section className="bg-[#00AFAF] py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Large Rounded Image Area */}
          <div 
            className="aspect-video rounded-lg overflow-hidden relative "
          >
             <DynamicVideoPlayer type="short-1" />
          </div>

          {/* Right Side: Text Content */}
          <div className="text-white">
            <span className="text-white font-bold text-[16px] mb-3 block">Innovative Endoscopy</span>
            <h2 className="text-[30px] lg:text-[34px] font-extrabold leading-tight mb-3">Advanced Diagnostic & Imaging Solutions</h2>
            
            <div className="space-y-6 text-white text-[14px] lg:text-[16px] leading-[1.8] font-medium mb-10">
              <p>
                Together with the DIVAS software, the MATRIX DS data station forms the basis for digitally acquiring, managing and evaluating patient and examination data and for connecting to hospital information systems or medical office software via standard interfaces such as DICOM / HL7 or GDT.
              </p>
              <p>
                The XN HD video nasopharyngoscope allows artefact-free high-resolution stroboscopy of the vocal folds. The LED lighting and microphone integrated in the handle reduces cables and interfaces, thus significantly improving handling.
              </p>
            </div>
            
            <Button href="#">View Product</Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
