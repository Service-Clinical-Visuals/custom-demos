import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24 text-white relative bg-cover bg-bottom"
      style={{ backgroundImage: "url('/sunset-healthcare/home/bg.jpg')" }}
    >
      {/* Color overlay over the background image */}
      <div className="absolute inset-0 bg-[#54626d] opacity-97 z-0"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <h3 className="font-bold mb-3 text-[16px] uppercase tracking-widest text-white/80">Trusted by Our Customers</h3>
            <h2 className="text-[25px] md:text-[30px] font-medium mb-6 leading-[1.2]">
              Real experiences from partners who trust us every day
            </h2>

            <p className="text-[18px] leading-[1.7] text-justify text-white/90 mb-8">
              We believe the true measure of our success is the satisfaction of the people we work with. From seamless service and dependable delivery to cost-effective solutions and personalized support, our customers share how we make a difference in their daily operations.
            </p>

            <div className="mb-8 pl-4 border-l-2 border-white/20">
              <p className="text-[18px] italic leading-[1.7] text-justify text-white/90 mb-4">
                "I love that our order comes very promptly and your sales people are very easy to talk to and email. It is very helpful for a small company like ours. We get a quality product at a good price."
              </p>
              <div className="text-[16px]">
                <strong className="block font-semibold">Mary L.</strong>
                <span className="text-white/70">Respiratory Care (CRT)</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-hover transition-colors">
                <ArrowLeft size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-hover transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="w-full h-[350px] md:h-[450px] bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden flex items-center justify-center shadow-xl">
            <img src={`/sunset-healthcare/home/testi.jpg`} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
