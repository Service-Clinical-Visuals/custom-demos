import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";
import { ReactNode } from "react";
import "./globals.css";
import CarePumpNavbar from "./_components/CarePumpNavbar";
import LenisProvider from "./_components/LenisProvider";
import AOSProvider from "./_components/AOSProvider";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CarePump",
  description:
    "CarePump offers innovative lymphatic drainage and rehabilitation systems for faster post-exercise recovery and better patient outcomes.",
};

export default function CarePumpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased`}>
        {/* <VideoProvider website="carepump">{children}</VideoProvider> */}
        <div id="care-root">
          <VideoProvider>
              <CarePumpNavbar />
              <LenisProvider>
                <AOSProvider>{children}</AOSProvider>
              </LenisProvider>
          </VideoProvider>
        </div>
      </body>
    </html>
  );
}
