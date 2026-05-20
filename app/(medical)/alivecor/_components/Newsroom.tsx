"use client";

import React from "react";
import Button from "./Button";

export default function Newsroom() {
  return (
    <section className="bg-[#F4F6F9] py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-300 pb-4 mb-8">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#004B87]">
            Newsroom
          </h2>
          <a href="#" className="font-sans text-[16px] text-[#004B87] hover:underline mb-2">
            Browse the latest from AliveCor
          </a>
        </div>
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Featured News */}
          <div className="lg:col-span-8 flex flex-col items-start border-b border-gray-300 pb-12 lg:border-b-0 lg:pb-0 lg:border-r lg:border-gray-300 lg:pr-12 xl:pr-16" data-aos="fade-right">
            <h3 className="font-serif text-[24px] md:text-[28px] font-semibold text-[#004B87] leading-snug mb-2">
              Diathrive Health and KardiaComplete Announce Strategic Partnership to Address Cardiometabolic Risk
            </h3>
            <p className="font-sans text-[15px]! text-gray-500 mb-6">
              – Mountain View CA, May 11, 2026
            </p>
            
            <p className="font-sans text-[13px] md:text-[14px] leading-[1.8] mb-6 font-light text-[#484848]">
              MOUNTAIN VIEW, CA–May 6, 2026. Diathrive Health, the leader in chronic disease management, and AliveCor, the global leader in AI-powered cardiology, today announced a strategic partnership to deliver a more comprehensive approach to cardiometabolic care for employers. The collaboration brings together Diathrive Health's diabetes management platform and KardiaComplete's virtual cardiovascular care solutions to address the close link between Type 2 diabetes and cardiovascular disease.
            </p>
            
            <p className="font-sans text-[13px] md:text-[14px] leading-[1.8] mb-8 font-light text-[#484848]">
              Diathrive Health provides unlimited diabetes testing supplies, personalized guidance from clinically trained health advisors, and real-time data insights to support long-term behavior change. KardiaComplete offers FDA-cleared, medical-grade EKG devices, along with virtual heart health programs designed to detect and manage conditions such as atrial fibrillation and hypertension.
            </p>
            
            <Button variant="outline" size="sm">
              Read Article
            </Button>
          </div>
          
          {/* Right Column: Recent News List */}
          <div className="lg:col-span-4 flex flex-col" data-aos="fade-left">
            <h4 className="font-serif text-[20px] lg:text-[22px] font-bold text-[#333333] mb-4">
              Recent News
            </h4>
            
            <div className="flex flex-col">
              
              {/* Item 1 (Active state with blue background) */}
              <div className="border-t border-gray-300 py-4 cursor-pointer bg-[#004B87] px-4 -mx-4 rounded-md shadow-sm transition-colors my-1">
                <p className="text-white! mb-1">
                  May 11, 2026
                </p>
                <h5 className="font-serif text-[16px] font-semibold text-white! leading-snug">
                  Diathrive Health and KardiaComplete Announce Strategic Partnership to Address Cardiometabolic Risk
                </h5>
              </div>
              
              {/* Item 2 */}
              <div className="border-t border-gray-300 py-4 cursor-pointer hover:bg-black/5 px-2 -mx-2 rounded transition-colors">
                <p className="text-gray-500 mb-1">
                  April 15, 2026
                </p>
                <h5 className="font-serif text-[15px] font-bold text-[#004B87] leading-snug">
                  AliveCor Launches AI-Powered Kardia 12L in Europe: The World's First Handheld 12-Lead ECG with a Unique Single-Cable Design
                </h5>
              </div>
              
              {/* Item 3 */}
              <div className="border-t border-gray-300 py-4 cursor-pointer hover:bg-black/5 px-2 -mx-2 rounded transition-colors">
                <p className="text-gray-500 mb-1">
                  April 2, 2026
                </p>
                <h5 className="font-serif text-[15px] font-bold text-[#004B87] leading-snug">
                  WELL Health Partners with AliveCor to Bring AI-Powered Cardiac Monitoring and Cardiologist Oversight to Canadians
                </h5>
              </div>
              
              {/* Item 4 */}
              <div className="border-t border-gray-300 py-4 cursor-pointer hover:bg-black/5 px-2 -mx-2 rounded transition-colors border-b">
                <p className="font-sans text-[12px] text-gray-500 mb-1">
                  February 24, 2026
                </p>
                <h5 className="font-serif text-[15px] font-bold text-[#004B87] leading-snug">
                  Ametris and AliveCor Announce Strategic Partnership to Expand Cardiac Safety Monitoring Capabilities in Clinical Research
                </h5>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
