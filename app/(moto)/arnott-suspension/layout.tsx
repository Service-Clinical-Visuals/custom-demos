import type { Metadata } from "next";
import { Big_Shoulders, DM_Sans } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-big-shoulders",
  adjustFontFallback: false,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <VideoProvider>
        {children}
      </VideoProvider>
    </div>
  );
}
