"use client";
import React, { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HelpSection() {
  const [reason, setReason] = useState("");

  return (
    <section className="w-full relative bg-[url('/moove/home/bg.jpg')] bg-cover bg-no-repeat bg-center text-white py-16">.
      <div className="absolute inset-0 z-0 bg-[var(--moove-dark-blue)]/80" />
      <div className="container relative z-1 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="flex flex-col border-r-0 lg:border-r border-white/20 lg:pr-16 text-center lg:text-left items-center lg:items-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We're here to help you
            </h2>
            <h3 className="text-lg md:text-[22px]! font-medium mb-6 text-gray-200">
              Please select from the related topics below to contact us
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Selecting the most relevant reason for your query will help us to understand
              and present you with the most accurate response.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6 lg:pl-16 w-full max-w-xl mx-auto lg:mx-0">
            {/* Custom Styled Select Dropdown */}
            <div className="relative w-full">
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full bg-white text-gray-800 font-medium px-4 py-4 rounded-none appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12 text-sm"
              >
                <option value="" disabled hidden>
                  Select a reason
                </option>
                <option value="sales">Product Sales Inquiry</option>
                <option value="technical">Technical Support</option>
                <option value="distribution">Distribution Opportunities</option>
                <option value="general">General Questions</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="flex items-center bg-white text-[var(--moove-text-dark)] hover:bg-gray-100 transition-colors">
                <span className="px-8 py-3 text-[16px] font-bold">Get in touch</span>
                <div className="bg-[#001C46] text-white px-4 py-3 border border-white">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
