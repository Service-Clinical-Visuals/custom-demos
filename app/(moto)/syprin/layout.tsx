import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const fontHeading = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const fontBody = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Original Syprin | Petrol Performance Protection",
  description: "More Protection. More Performance. High-quality fuel additives, cleaners, and precision lubrication made in Germany.",
  icons: {
    icon: "/moto/syprin/logo.png",
  },
};

export default function SyprinLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontHeading.variable} ${fontBody.variable} min-h-screen bg-[#0D0D0D] text-[#CACACA] antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider website="syprin">
        <div className="syprin-root overflow-x-hidden relative w-full min-h-screen">
          {children}
        </div>
      </VideoProvider>
    </div>
  );
}
