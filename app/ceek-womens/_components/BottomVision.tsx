"use client";

import Image from "next/image";
import { CornerUpRight, Sparkles } from "lucide-react";

export default function BottomVision() {
  return (
    <section className="bg-[#6F6589] text-[#FFFFFF] py-20 px-6">
      <div className="container mx-auto grid xl:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative max-w-5xl mx-auto">
          <div
            data-aos="fade-up"
            className="absolute inset-0 -bottom-6 -left-6 w-[75%]"
            style={{
              clipPath: "polygon(100% 64%, 0% 25%, 0% 100%, 100% 100%)",
              background: "linear-gradient(to bottom, #948DA7, #ABA0C5)",
            }}
          />

          {/* VIDEO */}
          <div
            data-aos="fade-up"
            className="relative z-10 rounded-xl overflow-hidden">
            <video
              src="/ceek/video1.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* subtle background block */}
          <div className="absolute -bottom-5 left-5 w-full h-full bg-white/20 -z-10 rounded-xl"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-base text-[#FFFFFF] mb-2">
            A New Vision for Women’s Healthcare
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-[44px] text-[#FFFFFF] font-semibold mb-4">
            Revolutionizing the Gynecological Exam Experience
          </h2>

          <p className="text-[#FFFFFF] text-base leading-relaxed mb-6">
            Ceek Women’s Health is on a mission to transform the gynecological
            exam with innovative, patient-centered solutions that redefine
            comfort and care. Our products are thoughtfully designed to reduce
            discomfort, improve accessibility, and streamline clinical
            workflows, ensuring a more efficient and positive experience for
            both patients and healthcare providers. By combining modern
            technology with human-centered design, we create advanced solutions
            that enhance comfort, safety, and ease of use.
          </p>

          {/* Points */}
          <div className="space-y-3 mb-6">
            {[
              "Patient-first design for enhanced comfort",
              "Improved ease and accessibility for clinicians",
              // "Modern solutions replacing outdated tools",
              // "Better overall exam experience",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
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

          {/* Button */}
          <button className="flex cursor-pointer items-center gap-2 bg-[#FFFFFF] text-[#6F6685] px-6 py-2 rounded-full text-base font-bold  hover:scale-105 hover:opacity-90 transition">
            Know More About Us
            <CornerUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
