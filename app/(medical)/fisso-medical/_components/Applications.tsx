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
        className="w-full max-w-[1400px] 2xl:max-w-[1760px] mx-auto bg-[#F0F0F2] rounded-2xl sm:rounded-3xl 2xl:rounded-[28px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] px-6 sm:px-10 md:px-14 pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-12 md:pb-14"
        data-aos="fade-up"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 sm:mb-10">
          <div className="max-w-[700px] text-left">
            <Typography
              variant="h2"
              color="dark"
              weight="semibold"
              className="mb-2 leading-[150%] tracking-[0.005em]"
            >
              Applications of Articulated Arms
            </Typography>
            <Typography
              variant="body"
              color="muted"
              className="leading-[150%] font-normal text-[14px] sm:text-[15px] lg:text-[16px] 2xl:text-[18px]"
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

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {boxes.map((box, i) => (
            <div
              key={i}
              className="bg-[#3D1421] rounded-[28px] p-5 sm:p-6"
              data-aos={i === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={i * 100}
            >
              {/* Images row — both images same height, side by side */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5">
                {/* App image */}
                <div className="w-full aspect-[4/3]  rounded-2xl overflow-hidden shrink-0">
                  <img
                    src={box.appImage}
                    alt={box.appAlt}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Profile image */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                  <img
                    src={box.profileImage}
                    alt={box.profileName}
                    className="w-full h-full object-contain "
                  />
                  <a
                    href={`tel:${box.profilePhone.replace(/\s/g, "")}`}
                    className="absolute top-2.5  right-[10%] w-8 h-8 xl:h-10 xl:w-10 rounded-full bg-[#4E1E2D] hover:bg-[#4E1E2D] flex items-center justify-center text-white z-10 transition-colors shadow-md"
                  >
                    <Phone size={13} className="fill-white w-4 h-4 xl:w-4 xl:h-4 " />
                  </a>
                </div>
              </div>
              {/* Divider */}
              <div className="absolute left-1/2 top-[5%] bottom-[5%] bottom-2 w-[1px] bg-white/25 -translate-x-1/2" />

              {/* Text row — app info left, profile info right */}
              <div className="relative grid grid-cols-2 gap-3 sm:gap-4">




                {/* App text */}
                <div className="flex flex-col gap-4 pr-3">
                  <div>
                    <Typography
                      variant="h4"
                      color="white"
                      className="leading-snug text-[13px] sm:text-[15px] xl:text-[17px] 2xl:text-[20px]"
                    >
                      {box.appTitle}
                    </Typography>
                    <Typography
                      variant="body"
                      color="none"
                      className="text-white/80 leading-[150%] mt-1.5 text-[11px] sm:text-[12px] xl:text-[13px] 2xl:text-[16px]"
                    >
                      {box.appDesc}
                    </Typography>
                  </div>

                  <Button
                    href={box.appHref}
                    variant="primary"
                    size="sm"
                    className="bg-[#9C0B38] w-[60%] hover:bg-[#85082e]"
                  >
                    Discover More
                  </Button>
                </div>

                {/* Profile text */}
                <div className="flex flex-col gap-1 pl-3">
                  <Typography
                    variant="h4"
                    color="white"
                    className="leading-snug text-[13px] sm:text-[15px] xl:text-[17px] 2xl:text-[20px]"
                  >
                    {box.profileName}
                  </Typography>
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white/80 text-[11px] sm:text-[12px] xl:text-[13px] 2xl:text-[16px]"
                  >
                    {box.profileRole}
                  </Typography>

                  <div className="flex flex-col gap-0.5 mt-1">
                    {box.profileLink && (
                      <Typography
                        as="a"
                        variant="small"
                        color="white"
                        href={box.appHref}
                        className="underline text-[12px]"
                      >
                        {box.profileLink}
                      </Typography>
                    )}

                    <Typography
                      as="a"
                      variant="small"
                      color="white"
                      href={`mailto:${box.profileEmail}`}
                      className="underline text-[12px] break-all"
                    >
                      {box.profileEmail}
                    </Typography>

                    <Typography
                      as="a"
                      variant="small"
                      color="none"
                      href={`tel:${box.profilePhone.replace(/\s/g, "")}`}
                      className="text-white/80 text-[12px]"
                    >
                      {box.profilePhone}
                    </Typography>
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