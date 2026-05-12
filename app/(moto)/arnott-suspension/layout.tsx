import type { Metadata } from "next";
import { Big_Shoulders, DM_Sans } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import AosProvider from "./_components/AosProvider";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-big-shoulders",
  axes: ["opsz"],
  display: "swap",
  fallback: ["sans-serif"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Arnott - Air Suspension Products",
  description: "Arnott is the global leader in aftermarket air suspension products.",
};

export default function ArnottLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${bigShoulders.variable} ${dmSans.variable} arnott-theme antialiased`}>
      <AosProvider>
        <VideoProvider>
          {children}
        </VideoProvider>
      </AosProvider>
    </div>
  );
}
