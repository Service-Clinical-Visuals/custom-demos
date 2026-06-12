"use client";

import { Target, Eye, Settings } from "lucide-react";

const values = [
  {
    icon: <Target className="text-white" size={32} />,
    title: "Our Mission",
    description:
      "Our mission is to deliver affordable, efficient medical technology solutions while adopting to evolving needs and driving innovation to improve healthcare outcomes.",
  },
  {
    icon: <Eye className="text-white" size={32} />,
    title: "Our Vision",
    description:
      "We are constantly challenged to develop valuable strategies by addressing evolving customer needs, identifying new market opportunities...",
  },
  {
    icon: <Settings className="text-white" size={32} />,
    title: "Our Approach",
    description:
      "We deliver innovative medical solutions backed by reliable service and global standards, ensuring quality, efficiency, and improved healthcare outcomes.",
  },
];

export default function Values() {
  return (
    <section className="pb-16 lg:pb-20 bg-white">
      <div className="custom-container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="p-8 rounded-[30px] border border-gray-100 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 flex gap-6 items-start"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 shrink-0 bg-[#00427C] rounded-full flex items-center justify-center shadow-lg">
                {value.icon}
              </div>
              
              {/* Content Column */}
              <div className="flex flex-col">
                <h4 className="text-[#00AEEF] text-xl font-semibold mb-3">
                  {value.title}
                </h4>
                <p className="text-[15px] lg:text-[16px] leading-relaxed font-normal line-clamp-4">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
