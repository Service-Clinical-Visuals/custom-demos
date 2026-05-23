import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";
import SmoothScroll from "./_components/SmoothScroll";

const fontPrimary = DM_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Otopront | ENT Equipment",
  description: "Partner of ENT Medicine for more than 70 years. Otopront provides high quality medical equipment.",
};

export default function OtoprontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontPrimary.variable} font-sans`}>
      <AosInit />
      <SmoothScroll />
      <VideoProvider website="otopront">
        {children}
      </VideoProvider>
    </div>
  );
}
