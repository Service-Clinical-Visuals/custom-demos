import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";

const fontHeading = League_Spartan({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const fontBody = League_Spartan({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Osteobionix | Next Generation Implants",
  description: "A patented technology that bridges the gap between rigid metal implants and the natural movement of the human body.",
};

export default function OsteobionixLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontHeading.variable} ${fontBody.variable} font-sans`}>
      <VideoProvider>
        {children}
      </VideoProvider>
    </div>
  );
}
