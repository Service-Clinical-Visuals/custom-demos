import type { Metadata } from "next";
import { Aleo, Inter } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";

const fontHeading = Aleo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
