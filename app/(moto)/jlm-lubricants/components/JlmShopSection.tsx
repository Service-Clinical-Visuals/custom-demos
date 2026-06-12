"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import JlmShopCard from "./JlmShopCard";

export default function JlmShopSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [tabStartIndex, setTabStartIndex] = useState(0);

  const TAB_PAGE_SIZE = 5;

  const PAGE_SIZE = 3;

  function handleTabChange(index: number) {
    setActiveTab(index);
    setCardIndex(0);
  }

    const tabs = [
    {
      title: "Oils",
      images : [
        {
          title: "Transmission",
          img: "/jlm/jlm-oils-1.png"
        },
        {
          title: "Pistons",
          img: "/jlm/jlm-oils-2.png"
        },
        {
          title: "Oil Systems", 
          img: "/jlm/jlm-oils-3.png" 
        },
        {
          title: "Hydraulic Valve Lifter",
          img: "/jlm/jlm-oils-4.png" 
        }
      ] 
    },
    {
      title: "Diesel",
      images : [
        {
          title: "AdBlue Systemd",
          img: "/jlm/jlm-diesel-1.png"
        },
        {
          title: "SCR Catalyst",
          img: "/jlm/jlm-diesel-2.png"
        },
        {
          title: "Injector-Diesel",
          img: "/jlm/jlm-diesel-3.png" 
        },
        {
          title: "DPF",
          img: "/jlm/jlm-diesel-4.png"  
        },
        {
          title: "EGR Valve-Diesel ",
          img: "/jlm/jlm-diesel-5.png"  
        }
      ]
    },
    {
      title: "Petrol",
      images : [
        {
          title: "EGR Valve-Petrol",
          img: "/jlm/jlm-petrol-1.png"
        },
        {
          title: "Injector-Petrol",
          img: "/jlm/jlm-petrol-2.png"
        },
        {
          title: "GPF ",
          img: "/jlm/jlm-petrol-3.png" 
        },
        {
          title: "Fuel system-Petrol",
          img: "/jlm/jlm-petrol-4.png"  
        },
        {
          title: "Combustion chamber-Petrol",
          img: "/jlm/jlm-petrol-5.png"
        } 
      ]
    },
    {
      title: "Autogas",
      images: [
        {
          title: "EGR Valve-Petrol",
          img: "/jlm/jlm-autogas.png"
        }
      ]
    },
    {
      title: "Service",
      images: [
        {
          title: "Locks and hinges",
          img: "/jlm/jlm-service-1.png"
        },
        {
          title: "Bicycle chain",
          img: "/jlm/jlm-service-2.png"
        },
        {
          title: "Rusted bolts nuts,screws",
          img: "/jlm/jlm-service-3.png"
        },
        {
          title: "Brakes",
          img: "/jlm/jlm-service-4.png"
        },
        {
          title: "UnderBody",
          img: "/jlm/jlm-service-5.png"
        } 
      ]
    },
    {
      title: "Coolant",
      images: [
        {
          title: "Radiator",
          img: "/jlm/jlm-coolant-1.png"
        },
        {
          title: "Head Gasket",
          img: "/jlm/jlm-coolant-2.png"
        },
        {
          title: "Cooling and heating system",
          img: "/jlm/jlm-coolant-3.png"
        }
      ]
    },
    {
      title: "Car Care",
      images : [
        {
          title: "Air conditioning system",
          img: "/jlm/jlm-car-1.png"
        },
        {
          title: "Evaporator",
          img: "/jlm/jlm-car-2.png"
        },
        {
          title: "Vehicle interior",
          img: "/jlm/jlm-car-3.png"
        }
      ]
    }
  ];

  const images = tabs[activeTab].images;
  const canPrev = cardIndex > 0;
  const canNext = cardIndex + PAGE_SIZE < images.length;


 

  return (
    <section className="relative overflow-hidden bg-black py-20">
      {/* Background Image */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          opacity-50
        "
        style={{
          backgroundImage:
            "url('/jlm/jlm-shop-bg.png')",
        }}
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/70" /> */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-6">
        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="
            text-center
            text-[40px]
            font-bold
            text-white
          "
        >
          Our Shop
        </h2>

        {/* Tabs */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setTabStartIndex((i) => Math.max(0, i - 1))}
            disabled={tabStartIndex === 0}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black disabled:opacity-40 cursor-pointer disabled:cursor-default"
          >
            <ArrowLeft size={20} />
          </button>

          {/* 5 tabs visible: each tab is 112px wide, gap is 12px → viewport = 5*112 + 4*12 = 608px */}
          <div className="w-[608px] overflow-hidden">
            <div
              className="flex gap-3 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${tabStartIndex * (112 + 12)}px)` }}
            >
              {tabs.map((tab, index) => (
                <button
                  key={tab.title}
                  onClick={() => handleTabChange(index)}
                  className={`
                    cursor-pointer shrink-0
                    h-10 w-28
                    rounded-md
                    text-base
                    font-medium
                    ${
                      index === activeTab
                        ? "bg-[#F4B400] text-white"
                        : "bg-white text-black"
                    }
                  `}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setTabStartIndex((i) => Math.min(tabs.length - TAB_PAGE_SIZE, i + 1))}
            disabled={tabStartIndex + TAB_PAGE_SIZE >= tabs.length}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black disabled:opacity-40 cursor-pointer disabled:cursor-default"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Divider */}
        <div className="mt-5 h-px bg-white/20" />

        {/* Cards */}
        <div className="relative mt-12 px-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${cardIndex * (100 / PAGE_SIZE)}%)` }}
            >
              {images.map((item) => (
                <div
                  key={item.title}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <JlmShopCard title={item.title} image={item.img} />
                </div>
              ))}
            </div>
          </div>

          {canPrev && (
            <button
              onClick={() => setCardIndex((i) => i - 1)}
              className="
                absolute
                left-0
                top-1/2
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                cursor-pointer
              "
            >
              <ArrowLeft size={20} />
            </button>
          )}

          {canNext && (
            <button
              onClick={() => setCardIndex((i) => i + 1)}
              className="
                absolute
                right-0
                top-1/2
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                cursor-pointer
              "
            >
              <ArrowRight size={20} />
            </button>
          )}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <button
            data-aos="zoom-in"
            className="
              flex
              items-center
              gap-3
              rounded-full
              bg-[#F4B400]
              px-6
              py-3
              text-white
              cursor-pointer
              font-medium
            "
          >
            View All Products

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-white
              "
            >
              <ArrowUpRight
                size={20}
                className="text-black"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}