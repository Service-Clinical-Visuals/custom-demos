"use client";

import { Calendar } from "lucide-react";
import Button from "./Button";

const events = [
  {
    title: "CEORL-HNS 2026 | 8th Congress of European ORL-HNS, Gothenburg",
    path: "/xion/images/news-1.png",
    date: "25 – 29 April 2026",
  },
  {
    title: "CEORL-HNS Congress in Gothenburg",
    path: "/xion/images/news-2.png",
    date: "25 – 29 April 2026",
  },
  {
    title: "97th Annual Meeting of the DGHNO-KHC, Ulm",
    path: "/xion/images/news-3.png",
    date: "13 – 16 May 2026",
  }
];

export default function NewsEvents() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end mb-20 gap-6">
          <div>
            <span className="text-[#00AFAF] font-bold text-[16px] mb-3 block">Recent News</span>
            <h2 className="text-[30px] lg:text-[34px] font-extrabold leading-tight tracking-tight">Trade fairs and conventions</h2>
          </div>
          <Button href="#" className="justify-self-start">View All</Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {events.map((event, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="relative group h-full">
              {/* Teal Layer Behind */}
              <div className="absolute inset-0 bg-[#00AFAF] rounded-[32px] translate-y-3 z-0 shadow-lg shadow-[#00AFAF]/20" />
              
              {/* Main White Card */}
              <div className="relative z-10 bg-white rounded-[32px] overflow-hidden border border-gray-50 grid transition-all duration-500 group-hover:-translate-y-2 h-full">
                {/* Event Image Area */}
                <div className="p-4 pb-0">
                  <div className="aspect-[1.4/1] bg-gray-50 rounded-[24px] overflow-hidden relative border border-gray-100">
                     <img 
                       src={event.path} 
                       alt={event.title} 
                       className="w-full h-full object-cover" 
                     />
                  </div>
                </div>
                
                {/* Event Content Area */}
                <div className="p-8 pt-6 grid justify-items-center text-center gap-6">
                  <h3 className="text-[17px] font-bold text-gray-900 leading-relaxed group-hover:text-[#00AFAF] transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="grid grid-cols-[auto_1fr] items-center justify-center gap-2.5 text-gray-400 text-[14px] font-medium">
                    <Calendar size={18} className="text-[#00AFAF]" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
