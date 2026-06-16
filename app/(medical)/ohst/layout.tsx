import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontOutfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "OHST Medizintechnik AG | Precision Orthopedic Solutions",
  description: "OHST Medizintechnik AG is a leading manufacturer of orthopedic joint components and custom implants based in Rathenow, Germany. Precision in every detail.",
};

export default function OhstLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="ohst-root" className={`${fontOutfit.variable}`}>
      <AosInit />
      <VideoProvider>
        {children}
      </VideoProvider>
    </div>
  );
}
