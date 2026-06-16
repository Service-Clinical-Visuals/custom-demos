import type { Metadata } from "next";
import { Bebas_Neue, Exo_2 } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-exo-2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omni Specialty Packaging, LLC",
  description: "Omni Specialty Packaging, LLC",
};

export default function OmniLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`omni-wrapper ${exo2.variable} ${bebasNeue.variable} min-h-screen bg-white font-sans antialiased overflow-x-hidden relative w-full`}>
       <VideoProvider>
      {children}
      </VideoProvider>
    </div>
  );
}
