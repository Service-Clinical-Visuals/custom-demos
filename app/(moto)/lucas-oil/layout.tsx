import type { Metadata } from "next";
import { DM_Sans, Orbitron } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucas Oil",
  description: "Lucas Oil Products",
};

export default function LucasOilLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`lucas-oil-wrapper ${dmSans.variable} ${orbitron.variable} min-h-screen bg-white font-sans antialiased overflow-y-hidden relative w-full`}>
      <VideoProvider>
      {children}
      </VideoProvider>
    </div>
  );
}
