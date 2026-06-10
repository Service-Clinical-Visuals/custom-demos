"use client";

import React from "react";
import { Phone } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";

const boxes = [
  {
    appImage: "/medical/fisso-medical/application1.png",
    appAlt: "Medical OEM Application",
    appTitle: "Medical OEM Applications",
    appDesc: "Standard and customized OEM solutions for the medical sector",
    appHref: "#medical-oem",
    profileImage: "/medical/fisso-medical/application2.png",
    profileName: "Alain Dreier",
    profileRole: "Medical Products (sterilizable)",
    profileLink: "VP Medical Products",
    profileEmail: "alain.dreier@baitella.com",
    profilePhone: "+41 44 305 80 19",
  },
  {
    appImage: "/medical/fisso-medical/application3.png",
    appAlt: "Industrial Application",
    appTitle: "Industrial Applications",
    appDesc: "Standard and customized OEM solutions for the industrial sector",
    appHref: "#industrial-apps",
    profileImage: "/medical/fisso-medical/application4.png",
    profileName: "Pedro Torres",
    profileRole: "Industrial Products ( VP Industrial Products )",
    profileLink: null,
    profileEmail: "pedro.torres@baitella.com",
    profilePhone: "+41 44 305 80 25",
  },
];

export default function Applications() {
  return (
    <section
      id="applications"
      className="w-full flex justify-center px-3 sm:px-4 lg:px-6 2xl:px-8 py-4 sm:py-5 lg:py-6 2xl:py-8 bg-white"
    >
      <div
        className="w-full max-w-[1400px] 2xl:max-w-[1760px] bg-[#F0F0F2] rounded-2xl sm:rounded-3xl 2xl:rounded-[28px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] px-6 sm:px-10 md:px-14 pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-12 md:pb-14"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 sm:mb-10">
          <div className="max-w-[1020px] text-left">
            <Typography
              variant="h2"
              color="dark"
              weight="semibold"
              className="mb-2 leading-tight"
            >
              Applications of Articulated Arms
            </Typography>
            <Typography
              variant="body"
              color="muted"
              className="leading-relaxed"
            >
              FISSO's articulated arms offer versatile solutions for various
              industrial needs. They excel in precision positioning and secure
              holding. These arms enhance efficiency and accuracy in many
              applications.
            </Typography>
          </div>
          <div className="shrink-0">
            <Button href="#all-apps" variant="primary" size="md">
              Explore Applications
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {boxes.map((box, i) => (
            <div
              key={i}
              className="bg-[#3D1421] rounded-[28px] p-6 sm:p-8 shadow-lg flex flex-col justify-between"
              data-aos={i === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={i * 100}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-0 h-full">
                <div className="flex flex-col justify-between pb-6 sm:pb-0 pr-0 sm:pr-6 border-b sm:border-b-0 sm:border-r border-white/15">
                  <div>
                    <div className="overflow-hidden rounded-2xl aspect-[4/3] w-full relative">
                      <img
                        src={box.appImage}
                        alt={box.appAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="mt-5 text-left">
                      <Typography
                        variant="h3"
                        color="white"
                        weight="bold"
                        className="leading-tight"
                      >
                        {box.appTitle}
                      </Typography>
                      <Typography
                        variant="body"
                        color="none"
                        className="text-white/80 leading-relaxed mt-2.5 font-normal"
                      >
                        {box.appDesc}
                      </Typography>
                    </div>
                  </div>

                  <div className="mt-6 text-left">
                    <Button
                      href={box.appHref}
                      variant="primary"
                      size="sm"
                      className="bg-[#9C0B38] hover:bg-[#85082e]"
                    >
                      Discover More
                    </Button>
                  </div>
                </div>

                <div className="pt-6 sm:pt-0 pl-0 sm:pl-6 text-left flex flex-col justify-between">
                  <div className="relative h-full flex flex-col">
                    <a
                      href={`tel:${box.profilePhone.replace(/\s/g, "")}`}
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#3D1421]/80 hover:bg-[#3D1421] flex items-center justify-center text-white z-10 transition-colors border border-white/10 shadow-sm"
                    >
                      <Phone size={14} className="fill-white" />
                    </a>

                    <div className="overflow-hidden rounded-2xl aspect-[4/3] w-full">
                      <img
                        src={box.profileImage}
                        alt={box.profileName}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="mt-5 flex-1 flex flex-col justify-between">
                      <div>
                        <Typography
                          variant="body"
                          color="white"
                          weight="bold"
                          className="leading-snug"
                        >
                          {box.profileName}
                        </Typography>
                        <Typography
                          variant="small"
                          color="none"
                          className="text-white/85 mt-1 block leading-normal"
                        >
                          {box.profileRole}
                        </Typography>
                      </div>

                      <div className="mt-2 flex flex-col gap-1">
                        {box.profileLink && (
                          <Typography
                            as="a"
                            variant="small"
                            color="white"
                            weight="medium"
                            href={box.appHref}
                            className="transition-colors underline block"
                          >
                            {box.profileLink}
                          </Typography>
                        )}

                        <Typography
                          as="a"
                          variant="small"
                          color="white"
                          weight="medium"
                          href={`mailto:${box.profileEmail}`}
                          className="transition-colors underline block break-all"
                        >
                          {box.profileEmail}
                        </Typography>

                        <Typography
                          as="a"
                          variant="small"
                          color="none"
                          weight="medium"
                          href={`tel:${box.profilePhone.replace(/\s/g, "")}`}
                          className="text-white/80 hover:text-white transition-colors block mt-0.5"
                        >
                          {box.profilePhone}
                        </Typography>
                      </div>
                    </div>
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
