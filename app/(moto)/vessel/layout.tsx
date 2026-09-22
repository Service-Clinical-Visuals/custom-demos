import type { Metadata } from "next";
import { DM_Sans, Exo_2 } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["300", "400", "500", "600", "700"],
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hydrafacial",
  description: "Discover the ultimate solution for achieving glowing, hydrated and healthy skin with Hydrafacial. Find a verified provider near you and experience the best skin of your life.",
};

export default function AmproLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${dmSans.variable} ${exo2.variable} min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider >
        {children}
      </VideoProvider>
    </div>
  );
}
