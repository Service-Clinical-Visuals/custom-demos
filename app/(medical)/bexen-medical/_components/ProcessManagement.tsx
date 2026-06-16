import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from "lucide-react";

function Counter({ target, duration = 3000, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Quad Ease-Out curve for an initial fast burst followed by a smooth decelerating landing
      const easeOutProgress = progress * (2 - progress);

      setCount(Math.floor(easeOutProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function ProcessManagement() {
  const cards = [
    { title: "Supply 24-48 Hours", desc: "We have 7,000 m2 with automated processes for the planning and maintenance of high stock levels, giving quick and flexible responses." },
    { title: "Order Processing", desc: "Personalised monitoring of your order with the direct assistance of our sales team and the possibility of sending samples prior to the order." },
    { title: "Products", desc: "Range of products with more than 500 references, present in 98% of national hospitals." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="custom-container px-4">
        <div className="text-center mb-16 max-w-7xl mx-auto">
          <h2 data-aos="fade-up" className="text-[32px] md:text-[36px] font-bold text-[#14387F] mb-4 uppercase tracking-wide">
            COMPLETE MANAGEMENT OF THE PROCESS
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-[15px] text-gray-500 leading-relaxed">
            Our comprehensive knowledge of the value chain enables us to exercise more efficient and complete management. We adapt the product to your needs and we help you to meet the demanding market regulations in force.
          </p>
        </div>

        <div className="flex items-center gap-4 mb-20 relative">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 px-4 lg:px-0">
            {cards.map((card, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={100 * (idx + 1)} className="bg-white rounded-tl-[60px] rounded-br-[60px] p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 flex flex-col h-full">
                <h3 className="text-[24px] font-semibold text-[#14387F] mb-4 whitespace-pre-line leading-tight">{card.title}</h3>
                <p className="text-[16px] text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16 grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-12">
          <div className="flex gap-4 w-full lg:w-auto">
            {[
              { stat: <Counter target={7} suffix="K" />, label: "M2 Storage" },
              { stat: <span className="flex items-center justify-center"><Counter target={24} />-<Counter target={48} /></span>, label: "Hours delivery" },
              { stat: <span className="flex items-center justify-center">+<Counter target={24} suffix="K" /></span>, label: "Order lines\nserved per year" }
            ].map((item, idx) => (
              <div key={idx} data-aos="zoom-in" data-aos-delay={100 * idx} className="bg-white rounded-[20px] p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-50 flex-1 min-w-[140px] flex flex-col items-center justify-center">
                <div className="text-[30px] font-bold text-[#14387F] mb-2 leading-none flex items-center justify-center min-h-[38px] font-heading">{item.stat}</div>
                <div className="text-[16px] text-gray-500 whitespace-pre-line tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
          <div data-aos="fade-left">
            <h3 className="text-[28px] font-bold text-[#0ea5e9] mb-4 uppercase">YOUR SATISFACTION, OUR PRIORITY</h3>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              A professional team that is always ready and willing to create solutions adapted to the needs of health professionals. We guarantee the day-to-day operations of medical and hospital centres.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
