"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { User, Stethoscope, Microscope, Hospital } from "lucide-react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

function AnimatedCounter({ 
  value, 
  duration = 2000, 
  decimals = 0, 
  suffix = "" 
}: AnimatedCounterProps) {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef<HTMLSpanElement>(null);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(progress * value);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  let displayValue = "";
  if (decimals > 0) {
    displayValue = count.toFixed(decimals);
  } else {
    displayValue = Math.floor(count).toLocaleString();
  }

  return <span ref={elementRef}>{displayValue}{suffix}</span>;
}

export default function OurCustomers() {
  return (
    <section className="relative bg-[url('/alivecor/images/customers-bg.png')] bg-cover bg-center py-16 md:py-24 overflow-hidden">
      
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Customers List */}
          <div className="flex flex-col justify-between items-start w-full h-full" data-aos="fade-right">
            <div className="flex flex-col justify-between h-full w-full gap-6">
              <h2 className="text-[28px] md:text-[32px] font-semibold text-white! mb-2">
                Our Customers
              </h2>
              
              <div className="flex flex-col justify-between gap-4 w-full flex-grow">
                {/* Box 1 */}
                <div className="border border-white/40 rounded-xl p-5 flex items-start gap-5 hover:bg-white/10 transition-colors bg-white/5 backdrop-blur-sm flex-grow">
                  <div className="flex-shrink-0 mt-1">
                    <User size={28} className="text-white!" strokeWidth={1.5} />
                  </div>
                  <p className="font-sans text-[13px] md:text-[14px] leading-[1.6] font-light text-white!">
                    For patients and consumers, we offer remote and connected cardiac care services for the 99% of the time they aren't in front of their physician.
                  </p>
                </div>

                {/* Box 2 */}
                <div className="border border-white/40 rounded-xl p-5 flex items-start gap-5 hover:bg-white/10 transition-colors bg-white/5 backdrop-blur-sm flex-grow">
                  <div className="flex-shrink-0 mt-1">
                    <Stethoscope size={28} className="text-white!" strokeWidth={1.5} />
                  </div>
                  <p className="font-sans text-[13px] md:text-[14px] leading-[1.6] font-light text-white!">
                    For healthcare professionals, we provide deep, real-time analysis of heart rhythm data that seamlessly connects our technology to existing workflows.
                  </p>
                </div>

                {/* Box 3 */}
                <div className="border border-white/40 rounded-xl p-5 flex items-start gap-5 hover:bg-white/10 transition-colors bg-white/5 backdrop-blur-sm flex-grow">
                  <div className="flex-shrink-0 mt-1">
                    <Microscope size={28} className="text-white!" strokeWidth={1.5} />
                  </div>
                  <p className="font-sans text-[13px] md:text-[14px] leading-[1.6] font-light text-white!">
                    For our biopharma partners, we are advancing disease and safety monitoring solutions to mitigate the risk of potentially dangerous medication side effects.
                  </p>
                </div>

                {/* Box 4 */}
                <div className="border border-white/40 rounded-xl p-5 flex items-start gap-5 hover:bg-white/10 transition-colors bg-white/5 backdrop-blur-sm flex-grow">
                  <div className="flex-shrink-0 mt-1">
                    <Hospital size={28} className="text-white!" strokeWidth={1.5} />
                  </div>
                  <p className="font-sans text-[13px] md:text-[14px] leading-[1.6] font-light text-white!">
                    For health systems, we offer an enterprise platform that allows practices to remotely track their patients' heart rhythm data
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Video & Stats */}
          <div className="flex flex-col justify-between gap-6 w-full h-full" data-aos="fade-left">
            
            {/* Video Player */}
            <div className="w-full relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-white/10">
              <DynamicVideoPlayer 
                type="short-2" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Stats Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto">
              
              {/* Stat 1 */}
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:-translate-y-1 transition-transform">
                <h4 className="font-serif text-[24px] md:text-[28px] font-bold text-[#004B87] mb-1">
                  <AnimatedCounter value={27000} suffix=" +" />
                </h4>
                <p className="font-sans text-[12px] md:text-[13px] text-[#666666] font-medium">
                  Patients
                </p>
              </div>
              
              {/* Stat 2 */}
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:-translate-y-1 transition-transform">
                <h4 className="font-serif text-[24px] md:text-[28px] font-bold text-[#004B87] mb-1">
                  <AnimatedCounter value={200} suffix="+" />
                </h4>
                <p className="font-sans text-[12px] md:text-[13px] text-[#666666] font-medium">
                  Clinical<br/>publications
                </p>
              </div>
              
              {/* Stat 3 */}
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:-translate-y-1 transition-transform">
                <h4 className="font-serif text-[24px] md:text-[28px] font-bold text-[#004B87] mb-1">
                  <AnimatedCounter value={3} suffix="M+" />
                </h4>
                <p className="font-sans text-[12px] md:text-[13px] text-[#666666] font-medium">
                  Lifetime users in 40+<br/>countries
                </p>
              </div>
              
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
