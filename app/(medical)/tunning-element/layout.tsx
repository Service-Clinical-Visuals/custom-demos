import type { Metadata } from "next";
import { IBM_Plex_Sans, Manrope } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Tuning Element",
  description: "Change your relationship with water, change your life",
};

export default function TuningElementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`tuning-element-root min-h-screen bg-black antialiased overflow-x-hidden relative w-full ${ibmPlexSans.variable} ${manrope.variable}`}>
      <VideoProvider>
        {children}
      </VideoProvider>
    </div>
  );
}
