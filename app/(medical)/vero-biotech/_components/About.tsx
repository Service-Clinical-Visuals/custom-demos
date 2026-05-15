import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 lg:py-28 bg-white">
      <div className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">

          {/* Center Divider Lines (Desktop Only) */}
          <div className="hidden lg:block absolute top-0 left-[50%] w-[3px] h-[35%] bg-[#122b34] rounded" />
          <div className="hidden lg:block absolute bottom-0 left-[50%] w-[3px] h-[35%] bg-[#122b34] rounded" />

          {/* Left Side: Image / Device box */}
          <div className="relative pl-6 sm:pl-10 pt-6 sm:pt-10" data-aos="fade-right">
            {/* Dark teal shape */}
            <div className="absolute left-0 right-4 sm:right-6 top-0 bottom-0 bg-[#0E2630] rounded-3xl -z-10 w-[85%] h-[85%] rounded-tl-none" />
            {/* Image shifted right */}
            <div className="relative z-10 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img src="/vero-biotech/home/about.png" alt="GENOSYL Delivery System" className="object-cover w-full h-full" />
            </div>
          </div>

          {/* Right Side: Text */}
          <div data-aos="fade-left" className="lg:pl-8">
            <h3 className="text-[14px] lg:text-[17px] font-semibold text-[#333] uppercase tracking-wider mb-4">Who We Are</h3>
            <h2 className="font-semibold text-[#111] mb-6 leading-tight">
              Pushing the Boundaries of Innovation to Improve Patient Outcomes
            </h2>
            <div className="space-y-5 mb-8">
              <p className="text-muted leading-relaxed">
                VERO Biotech is an emerging biotechnology company focused on the design, development, and commercialization of next generation inhaled nitric oxide (iNO) delivery systems to address unmet medical needs of patients with cardiopulmonary conditions.
              </p>
              <p className="text-muted leading-relaxed">
                We stand among the youngest mature companies—innovative, fast-growing, and backed by a high-value portfolio. As a stable and trusted partner, VERO Biotech is deeply committed to patients and practitioners in the acute care setting.
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {['Advancing patient care through innovative healthcare solutions', 'Driving innovation through science, development, and commercialization', 'Developing advanced technologies for nitric oxide delivery'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted">
                  <svg className="w-5 h-5 text-[#122b34] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-[15px] lg:text-[17px]">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="#" className="inline-flex items-center gap-2 bg-[#122b34] text-white px-6 py-3 rounded-sm text-[15px] lg:text-[17px] font-medium hover:bg-primary/90 transition-colors rounded-tl-2xl rounded-br-2xl">
              Discover Our Story <ArrowRight className="w-3 h-3 -rotate-45" />
            </Link>
          </div>
        </div>

        {/* Bottom Section: Training and Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 lg:mt-32 items-center">
          <div data-aos="fade-up">
            <h2 className="font-semibold text-[#111] mb-6 leading-tight">Training and Education to Ensure Success</h2>
            <p className="text-muted leading-relaxed">
              We offer high quality training and support—live and on demand—through a customized, hands-on VERO Education and Onboarding Process designed for your organization, plus full access to VERO's online Knowledge Center.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-3xl p-6 lg:p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow border-r-4 border-r-[#122b34] flex flex-col justify-center min-h-[140px] lg:min-h-[160px]">
              <h4 className="text-[#122b34] font-semibold text-lg mb-2">Live Training</h4>
              <p className="text-muted text-[14px] lg:text-[17px] leading-relaxed">In-depth, instructor-led sessions designed for hands-on learning</p>
            </div>
            <div className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-3xl p-6 lg:p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow border-r-4 border-r-[#122b34] flex flex-col justify-center min-h-[140px] lg:min-h-[160px]">
              <h4 className="text-[#122b34] font-semibold text-lg mb-2">On Demand Training</h4>
              <p className="text-muted text-[14px] lg:text-[17px] leading-relaxed">Convenient online access to training courses and materials at any time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
