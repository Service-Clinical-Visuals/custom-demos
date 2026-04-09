"use client";

import Image from "next/image";
import { Check, CornerUpRight, Sparkles } from "lucide-react";

export default function Vision() {
  return (
    <section className="bg-[#6F6589] text-white py-20 px-6">
      <div className="container mx-auto grid xl:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div data-aos="fade-up">
          {/* Small Label */}
          <p className="text-base text-[#FFFFFF] mb-3">
            A New Vision for Women’s Healthcare
          </p>

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-[44px] font-semibold leading-snug mb-5">
            Revolutionizing the Gynecological Exam Experience
          </h1>

          {/* Description */}
          <p className="text-[#FFFFFF] text-base md:text-base leading-relaxed mb-6">
            Ceek Women’s Health is on a mission to transform the gynecological exam with innovative, patient-centered solutions that redefine comfort and care. Our products are thoughtfully designed to reduce discomfort, improve accessibility, and streamline clinical workflows, ensuring a more efficient and positive experience for both patients and healthcare providers. By combining modern technology with human-centered design, we create advanced solutions that enhance comfort, safety, and ease of use.
          </p>

          {/* POINTS */}
          <div className="space-y-3 mb-6">
            {[
              "Patient-first design for enhanced comfort",
              "Improved ease and accessibility for clinicians",
              "Modern solutions replacing outdated tools",
              "Better overall exam experience for patients and providers",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className=" p-2 rounded-full flex items-center justify-center">
                  <Image
                    src="/ceek/flower.png" // your image path
                    alt="flower"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
                <p className="text-base">{item}</p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="flex items-center cursor-pointer gap-2 bg-white text-[#6F6685] px-5 py-2 rounded-full text-base font-bold hover:opacity-90 transition">
            Experience the Innovation
            <CornerUpRight size={20} />
          </button>
        </div>

        {/* RIGHT IMAGE / VIDEO */}
        <div data-aos="fade-up" className="w-full">
          <div className="rounded-xl overflow-hidden bg-white/10">
            <div className="rounded-xl overflow-hidden bg-gray-200">
              {/* OR VIDEO */}

              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover">
                <source src="/ceek/video1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
