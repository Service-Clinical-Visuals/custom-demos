import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";
import SmoothScroll from "./_components/SmoothScroll";

const fontHeading = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fontBody = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VascularFlow | Spiral Laminar Flow Technology",
  description: "Vascular Flow Technologies provides Spiral Laminar Flow Technology, medical device development, and manufacturing.",
};

export default function VascularFlowLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontHeading.variable} ${fontBody.variable} font-sans`}>
      <AosInit />
      <SmoothScroll />
      <VideoProvider website="vascular-flow">
        {children}
      </VideoProvider>
    </div>
  );
}
