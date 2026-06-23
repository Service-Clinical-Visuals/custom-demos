import React from "react";
import type { Metadata } from "next";
import { Outfit, Oxanium } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
});

export const metadata: Metadata = {
  title: "German Adler",
  description: "Reliable lubricant solutions",
};

export default function GermanAdlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${outfit.variable} ${oxanium.variable} german-adler-layout-root bg-white`}>
      <VideoProvider>
        {children}
      </VideoProvider>
    </div>
  );
}
