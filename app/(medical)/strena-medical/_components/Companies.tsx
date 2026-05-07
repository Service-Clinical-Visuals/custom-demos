"use client";

import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";

const companies = [
  { 
    name: "Mediblu", 
    logo: "/strena/images/company-1.png", 
    description: "Mediblu offers integrated monitoring solutions for all medical needs from Cardiology and Critical Care to Gynecology. Our advanced technologies have delivered groundbreaking innovations with world-class service and support that enables clients to anticipate and treat patient needs across the continuum spectrum of care." 
  },
  { 
    name: "MediSono", 
    logo: "/strena/images/company-2.png", 
    description: "Medisono delivers high-quality, reliable imaging solutions complying with the highest industry standards in service and post-sales assistance. Medisono offers a variety of products ranging from cart-based to compact ultrasound and radiology systems, recognized for their competitive price." 
  },
  { 
    name: "D.Heart", 
    logo: "/strena/images/company-3.png", 
    description: "Innovative medical company specializing in digital health solutions and telemedicine services for primary and home care. We are focused on delivering state-of-the-art technology to facilitate the monitoring of patients' health, catering to both B2B and B2C markets." 
  },
  { 
    name: "Medimar", 
    logo: "/strena/images/company-4.png", 
    description: "Mediblu offers integrated monitoring solutions for all medical needs from Cardiology and Critical Care to Gynecology. Our advanced technologies have delivered groundbreaking innovations with world-class service and support that enables clients to anticipate and treat patient needs." 
  },
];

export default function Companies() {
  return (
    <section className="pb-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#00AEEF] text-2xl lg:text-3xl font-semibold mb-4">
            Our <span className="text-[#00427C]">Companies</span>
          </h2>
          <p className="max-w-4xl mx-auto text-[15px] lg:text-[16px] leading-relaxed">
            We partner with leading healthcare organizations to deliver cutting edge solution that improve patient outcomes and enhance clinical performances
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col items-start text-left h-full"
            >
              <div className="h-16 flex items-center justify-start mb-10">
                <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="max-h-full object-contain"
                />
              </div>
              <p className="text-[15px] lg:text-[16px] leading-relaxed mb-8 flex-grow text-justify">
                {company.description}
              </p>
              <Link
                href="#"
                className="text-[#00AEEF] font-semibold text-[15px] lg:text-[16px] flex items-center gap-2 group/link transition-all"
              >
                Learn More <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
