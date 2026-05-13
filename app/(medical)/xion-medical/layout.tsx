import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";

const fontPrimary = Plus_Jakarta_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "XION Medical | Endoscopic Systems",
  description: "XION Medical develops and produces devices and systems for endoscopy and minimally invasive surgery.",
};

export default function XionMedicalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontPrimary.variable} font-sans`}>
      <VideoProvider website="xion-medical">
        {children}
      </VideoProvider>
    </div>
  );
}
