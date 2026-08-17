import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import { User, Mail, AlignLeft, MessageSquare, MapPin, Phone, Clock, Building2, Store } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-[#FCF3EF] flex flex-col">
      <Header />
      
      {/* Breadcrumb */}
      <div className="custom-container px-4 xl:px-0 py-8 lg:py-12">
        <div className="w-full border border-[#e0cdbf] py-6 px-6 flex items-center bg-[#FCF3EF]">
          <Link href="/tunning-element" className="header-link text-secondary font-body font-semibold">Home &nbsp; </Link>
          <span className="header-link text-secondary mx-2 text-sm"> &gt;&gt; </span>
          <span className=" header-link text-secondary font-body font-semibold">&nbsp; Contact Us</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="custom-container px-4 xl:px-0 pb-20 xl:pb-32 flex-grow">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10">
          
          {/* Left: Contact Form */}
          <div className="xl:col-span-5 bg-secondary p-8 xl:p-12 shadow-lg flex flex-col justify-center">
            <div className="text-center mb-10">
              <h1 className="text-white font-heading font-semibold section-title mb-4">
                Get in Touch
              </h1>
              <p className="text-white font-body section-text max-w-xl mx-auto leading-relaxed">
                Reach out to Tuning Element for product inquiries, customer support, or partnership opportunities, and we'll be happy to assist you
              </p>
            </div>
            
            <form className="space-y-4 w-full">
              {/* Input 1 */}
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Enter your Full Name *" 
                  className="w-full bg-[#FCF3EF] text-gray-700 font-body px-5 py-4 outline-none focus:ring-2 focus:ring-white/50 rounded-sm pr-12"
                />
                <img src="/medical/tunning-element/person.png" alt="user" className="absolute right-4 top-1/2 -translate-y-1/2" />
              </div>
              
              {/* Input 2 */}
              <div className="relative w-full">
                <input 
                  type="email" 
                  placeholder="Enter your Email*" 
                  className="w-full bg-[#FCF3EF] text-gray-700 font-body px-5 py-4 outline-none focus:ring-2 focus:ring-white/50 rounded-sm pr-12"
                />
                <img src="/medical/tunning-element/Mail.png" alt="user" className="absolute right-4 top-1/2 -translate-y-1/2" />
              </div>
              
              {/* Input 3 */}
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Enter subject Line" 
                  className="w-full bg-[#FCF3EF] text-gray-700 font-body px-5 py-4 outline-none focus:ring-2 focus:ring-white/50 rounded-sm pr-12"
                />
                <img src="/medical/tunning-element/txt.png" alt="user" className="absolute right-4 top-1/2 -translate-y-1/2" />
              </div>
              
              {/* Textarea */}
              <div className="relative w-full">
                <textarea 
                  placeholder="Type your Message" 
                  rows={4}
                  className="w-full bg-[#FCF3EF] text-gray-700 font-body px-5 py-4 outline-none focus:ring-2 focus:ring-white/50 rounded-sm pr-12 resize-none"
                ></textarea>
                <img src="/medical/tunning-element/msg.png" alt="message icon" className="absolute right-4 top-4 w-5 h-5 object-contain" />
              </div>
              
              {/* Submit Button */}
              <div className="flex justify-center w-full mt-6">
                <button 
                  type="button" 
                  className="bg-white text-secondary font-semibold font-body px-8 py-3 rounded-sm flex items-center space-x-3 hover:bg-gray-100 transition-colors shadow-md"
                >
                  <span>Read More About Us</span>
                  <span>→</span>
                </button>
              </div>
            </form>
          </div>
          
          {/* Right: Locations */}
          <div className="xl:col-span-7 flex flex-col space-y-8">
            
            {/* Card 1: Head Office */}
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#FCF3EF] border border-[#e0cdbf] rounded-sm overflow-hidden shadow-sm h-full max-h-[400px]">
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-3 mb-8">
                                    <img src="/medical/tunning-element/hdofz.png" alt="map pin" className="w-6 h-6" />

                  <h3 className="font-heading font-semibold text-[#1c2331] text-xl">Head Office</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <img src="/medical/tunning-element/loc.png" alt="map pin" className="w-5 h-6" />
                    <span className="text-gray-600 font-body text-sm leading-relaxed">
                      1440 State Highway 248, Suite Q435, Branson, MO 65616
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src="/medical/tunning-element/phon.png" alt="map pin" className="w-5 h-5" />
                    <span className="text-gray-600 font-body text-sm">
                      (417) 973-0000
                    </span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <img src="/medical/tunning-element/clk.png" alt="map pin" className="w-5 h-5" />
                    <span className="text-gray-600 font-body text-sm leading-relaxed">
                      Monday-Friday 9am - 4pm, Closed Saturday & Sunday
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="relative w-full h-full min-h-[250px] sm:min-h-0">
                <Image 
                  src="/medical/tunning-element/contacts/Contact 1.webp" 
                  alt="Head Office" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Card 2: Grand Village Shops */}
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#FCF3EF] border border-[#e0cdbf] rounded-sm overflow-hidden shadow-sm h-full max-h-[400px]">
              <div className="relative w-full h-full min-h-[250px] sm:min-h-0 order-2 sm:order-1">
                <Image 
                  src="/medical/tunning-element/contacts/Contact 2.webp" 
                  alt="Grand Village Shops" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <div className="p-8 flex flex-col justify-center order-1 sm:order-2">
                <div className="flex items-center space-x-3 mb-8">
                  <img src="/medical/tunning-element/grandvilage.png" alt="map pin" className="w-6 h-6" />
                  <h3 className="font-heading font-semibold text-[#1c2331] text-xl">Grand Village Shops</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                   <img src="/medical/tunning-element/loc.png" alt="map pin" className="w-5 h-6" />
                    <span className="text-gray-600 font-body text-sm leading-relaxed">
                      2800 MO-76, Suite 14, Branson, MO 65616
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                   <img src="/medical/tunning-element/phon.png" alt="map pin" className="w-5 h-5" />
                    <span className="text-gray-600 font-body text-sm">
                      (417) 238-0076
                    </span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <img src="/medical/tunning-element/clk.png" alt="map pin" className="w-5 h-5" />
                    <span className="text-gray-600 font-body text-sm leading-relaxed">
                      March - December: Monday - Sunday, 10 am - 5 pm January 2, 3, 8-10, 15-17, 22-24, 29-30 February 5-7, 12-14, 19-21, 26-28
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
