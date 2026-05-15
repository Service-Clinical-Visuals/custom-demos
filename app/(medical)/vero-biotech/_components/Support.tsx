import { ArrowRight } from "lucide-react";

export default function Support() {
  return (
    <section className="py-16 lg:py-28 bg-[#fafafa]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-8 lg:mb-16">
          <div data-aos="fade-right" >
            <h2 className="font-semibold text-[#111] mb-6 leading-tight">
              Comprehensive Support Every Step of the Way
            </h2>
            <p className="text-muted leading-relaxed">
              Customers have access to the industry's largest clinical support team, consisting of registered respiratory therapists with an average of more than 10 years of bedside experience.
            </p>
          </div>
          <div data-aos="fade-left">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex overflow-hidden group hover:shadow-md transition-shadow min-h-[160px] lg:min-h-[180px]">
              <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center">
                <h4 className="text-[#122b34] font-semibold text-lg lg:text-xl mb-2 lg:mb-3">Medical Information</h4>
                <p className="text-muted text-[14px] lg:text-[16px] leading-relaxed">Experts provide concise, accurate, and clinically relevant information to support your medical inquiries, helping healthcare professionals make informed decisions with confidence, efficiency, and clarity.</p>
              </div>
              <div className="w-24 lg:w-36 bg-[#417586] flex items-center justify-center shrink-0">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 lg:mb-24">
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex overflow-hidden group hover:shadow-md transition-shadow min-h-[160px] lg:min-h-[180px]" data-aos="fade-up">
            <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center">
              <h4 className="text-[#122b34] font-semibold text-lg lg:text-xl mb-2 lg:mb-3">Inventory Management</h4>
              <p className="text-muted text-[14px] lg:text-[16px] leading-relaxed">Our dedicated support team provides personalized monitoring and efficient management of equipment and inventory, ensuring seamless operations, optimized availability, and uninterrupted patient care support.</p>
            </div>
            <div className="w-24 lg:w-36 bg-[#386b7b] flex items-center justify-center shrink-0">
              <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex overflow-hidden group hover:shadow-md transition-shadow min-h-[160px] lg:min-h-[180px]" data-aos="fade-up" data-aos-delay="100">
            <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center">
              <h4 className="text-[#122b34] font-semibold text-lg lg:text-xl mb-2 lg:mb-3">Technical Support</h4>
              <p className="text-muted text-[14px] lg:text-[16px] leading-relaxed">Specialized assistance from GENOSYL Delivery System technical experts, providing reliable guidance, operational support, troubleshooting, and training to ensure safe, efficient, and uninterrupted therapy delivery.</p>
            </div>
            <div className="w-24 lg:w-36 bg-[#386b7b] flex items-center justify-center shrink-0">
              <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-200 mb-16 lg:mb-20"></div>

        <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="font-semibold text-[#122b34] mb-4">We'll Be There, Because We've Been There</h2>
          <p className="text-muted text-[10px] lg:text-xs font-medium uppercase tracking-widest mb-6">Every Day. Every Hour. Every Minute.</p>
          <p className="text-muted leading-relaxed">
            The VERO Biotech Partnership365™ Care Team is made up of highly trained, credentialed Respiratory Therapists who understand bedside challenges and serve as trusted partners to our customers—24 hours a day, 7 days a week, 365 days a year—delivering customized service, expert support, and peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}
