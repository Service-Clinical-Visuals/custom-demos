import { ClipboardCheck, Package, HelpCircle } from "lucide-react";
import Image from "next/image";

export default function Support() {
  return (
    <section className="py-16 lg:py-28 bg-white">
      <div className="container">
        {/* Main Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20" data-aos="fade-up">
          <h2 className="font-bold text-[#122b34] mb-4 text-3xl lg:text-4xl">
            We'll Be There, Because We've Been There
          </h2>
          <p className="text-muted text-[10px] lg:text-xs font-medium uppercase tracking-widest">
            Every Day. Every Hour. Every Minute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Side: Image with Badge */}
          <div className="lg:col-span-6 relative group" data-aos="fade-right">
            <div className="relative overflow-hidden">
              <img
                src="/medical/vero-biotech/home/comprehensive.png"
                alt="Support Team"
                className="object-cover transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Side: Text & Medical Information Card */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-8" data-aos="fade-left">
            <div className="space-y-6">
              {/* <p className="text-muted text-[17px] lg:text-[17px] leading-relaxed">
                The VERO Biotech Partnership365™ Care Team is made up of highly trained, credentialed Respiratory Therapists who understand bedside challenges and serve as trusted partners to our customers—24 hours a day, 7 days a week, 365 days a year—delivering customized service, expert support, and peace of mind.
              </p> */}

              <div className="space-y-3">
                <h3 className="text-[#122b34] font-bold text-2xl lg:text-[26px] leading-tight">
                  Comprehensive Support Every Step of the Way
                </h3>
                <p className="text-muted text-[17px] lg:text-[17px] leading-relaxed">
                  Customers have access to the industry's largest clinical support team, consisting of registered respiratory therapists with an average of more than 10 years of bedside experience. Our expert team is committed to guiding customers through every stage of adoption to support long-term success.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 flex overflow-hidden group hover:shadow-xl transition-all duration-300 min-h-[160px] lg:min-h-[180px]">
              <div className="p-6 lg:p-7 flex-1 flex flex-col justify-center">
                <h4 className="text-[#122b34] font-bold text-xl lg:text-2xl mb-3">Medical Information</h4>
                <p className="text-muted text-[14px] lg:text-[17px] leading-relaxed">
                  Experts provide concise, accurate, and clinically relevant information to support your medical inquiries, helping healthcare professionals make informed decisions with confidence, efficiency, and clarity.
                </p>
              </div>
              <div className="w-24 lg:w-32 bg-[#417586] flex items-center justify-center shrink-0">
                <ClipboardCheck className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Inventory Management Card */}
          <div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 flex overflow-hidden group hover:shadow-xl transition-all duration-300 min-h-[160px] lg:min-h-[180px]"
            data-aos="fade-up"
          >
            <div className="p-6 lg:p-7 flex-1 flex flex-col justify-center">
              <h4 className="text-[#122b34] font-bold text-xl lg:text-2xl mb-3">Inventory Management</h4>
              <p className="text-muted text-[14px] lg:text-[17px] leading-relaxed">
                Our dedicated support team provides personalized monitoring and efficient management of equipment and inventory, ensuring seamless operations, optimized availability, and uninterrupted patient care support.
              </p>
            </div>
            <div className="w-24 lg:w-32 bg-[#417586] flex items-center justify-center shrink-0">
              <Package className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
            </div>
          </div>

          {/* Technical Support Card */}
          <div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 flex overflow-hidden group hover:shadow-xl transition-all duration-300 min-h-[160px] lg:min-h-[180px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="p-6 lg:p-7 flex-1 flex flex-col justify-center">
              <h4 className="text-[#122b34] font-bold text-xl lg:text-2xl mb-3">Technical Support</h4>
              <p className="text-muted text-[14px] lg:text-[17px] leading-relaxed">
                Specialized assistance from GENOSYL Delivery System technical experts, providing reliable guidance, operational support, troubleshooting, and training to ensure safe, efficient, and uninterrupted therapy delivery.
              </p>
            </div>
            <div className="w-24 lg:w-32 bg-[#417586] flex items-center justify-center shrink-0">
              <HelpCircle className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

